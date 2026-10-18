
import './ProductCard.scss';

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

function ProductCard({ product, onSelect }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__image-button"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
          loading="lazy"
        />
      </button>

      <div className="product-card__content">
        <h3 className="product-card__name">
          {product.descriptionShort}
        </h3>

        <div className="product-card__pricing">
          <span className="product-card__price">
            {formattedPrice}
          </span>
        </div>

        <button
          type="button"
          className="product-card__buy"
          onClick={() => onSelect(product)}
        >
          Comprar
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
