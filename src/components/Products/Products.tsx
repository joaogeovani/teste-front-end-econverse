import { useEffect, useState } from "react";
import ProductCard, { type Product } from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";

import leftArrow from "../../assets/icons/LeftArrow.svg";
import rightArrow from "../../assets/icons/RightArrow.svg";

import "./Products.scss";

const PRODUCTS_URL = "/api/produtos.json";

interface ProductsResponse {
  success: boolean;
  products: Product[];
}

interface ProductsProps {
  id?: string;
  variant?: "categories" | "simple";
}

const tabs = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];

function Products({ id, variant = "categories" }: ProductsProps) {
  // Lista de produtos recebidos do JSON
  const [products, setProducts] = useState<Product[]>([]);

  // Índice atual do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Aba selecionada na primeira vitrine
  const [activeTab, setActiveTab] = useState("Celular");

  // Estados de carregamento e erro
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Produto selecionado para o modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Identifica se a tela está no modo mobile
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 768px)").matches,
  );

  // Observa mudanças no tamanho da tela
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleScreenChange(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  // Carrega os produtos do JSON
  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const response = await fetch(PRODUCTS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar os produtos.");
        }

        const data: ProductsResponse = await response.json();

        if (!data.success || !Array.isArray(data.products)) {
          throw new Error("Resposta inválida da API.");
        }

        setProducts(data.products);
      } catch (err) {
        if (controller.signal.aborted) return;

        setError(err instanceof Error ? err.message : "Erro inesperado.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => controller.abort();
  }, []);

  // Quantidade de produtos exibidos por vez
  const productsPerPage = isMobile ? 1 : 4;

  // Último índice permitido no carrossel
  const maxIndex = Math.max(0, products.length - productsPerPage);

  // Corrige o índice quando a tela muda de tamanho
  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  // Seleciona os produtos que serão exibidos
  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + productsPerPage,
  );

  // Avança um produto
  function handleNext() {
    setCurrentIndex((index) => Math.min(index + 1, maxIndex));
  }

  // Volta um produto
  function handlePrevious() {
    setCurrentIndex((index) => Math.max(0, index - 1));
  }

  // Abre o modal com o produto selecionado
  function handleProductSelect(product: Product) {
    setSelectedProduct(product);
  }

  // Fecha o modal
  function handleCloseModal() {
    setSelectedProduct(null);
  }

  return (
    <section className={`products products--${variant}`} id={id}>
      <div className="products__heading">
        <h2>Produtos relacionados</h2>
      </div>

      {/* Primeira vitrine: abas de categorias */}
      {variant === "categories" ? (
        <div className="products__tabs" aria-label="Categorias de produtos">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`products__tab ${
                activeTab === tab ? "products__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      ) : (
        /* Segunda e terceira vitrines */
        <div className="products__simple-filter">
          <span>Ver todos</span>
        </div>
      )}

      {/* Mensagens de carregamento e erro */}
      {loading && <p>Carregando produtos...</p>}

      {error && <p role="alert">{error}</p>}

      {/* Carrossel de produtos */}
      {!loading && !error && (
        <div className="products__carousel">
          <button
            type="button"
            className="products__arrow"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Produtos anteriores"
          >
            <img src={leftArrow} alt="" />
          </button>

          <div className="products__list">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.productName}
                product={product}
                onSelect={handleProductSelect}
              />
            ))}
          </div>

          <button
            type="button"
            className="products__arrow"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Próximos produtos"
          >
            <img src={rightArrow} alt="" />
          </button>
        </div>
      )}

      {/* Modal de detalhes do produto */}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </section>
  );
}

export default Products;
