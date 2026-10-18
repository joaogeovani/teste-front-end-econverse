import "./Header.scss";
import logoEconverse from "../../assets/icons/Logo-econverse.svg";
import shieldCheckIcon from "../../assets/icons/ShieldCheck.svg";
import truckIcon from "../../assets/icons/Truck.svg";
import creditCardIcon from "../../assets/icons/CreditCard.svg";
import searchIcon from "../../assets/icons/MagnifyingGlass.svg";
import heartIcon from "../../assets/icons/Heart.svg";
import userCircleIcon from "../../assets/icons/UserCircle.svg";
import shoppingCartIcon from "../../assets/icons/ShoppingCart.svg";
import ordersIcon from "../../assets/icons/Orders.svg";
import crownIcon from "../../assets/icons/CrownSimple.svg";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__benefits">
        <span>
          <img src={shieldCheckIcon} alt="" />
          Compra <strong>100% segura</strong>
        </span>

        <span>
          <img src={truckIcon} alt="" />
          <strong>Frete grátis</strong> acima de R$ 200
        </span>

        <span>
          <img src={creditCardIcon} alt="" />
          <strong>Parcele</strong> suas compras
        </span>
      </div>

      <div className="site-header__top">
        <a href="/" className="site-header__logo">
          <img src={logoEconverse} alt="Econverse - Página inicial" />
        </a>

        <form
          className="site-header__search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="visually-hidden" htmlFor="product-search">
            Buscar produtos
          </label>

          <input
            id="product-search"
            type="search"
            placeholder="O que você está buscando?"
          />

          <button type="submit" aria-label="Buscar produtos">
            <img src={searchIcon} alt="" />
          </button>
        </form>

        <div className="site-header__actions">
          <button type="button" aria-label="Pedidos">
            <img src={ordersIcon} alt="" />
          </button>

          <button type="button" aria-label="Favoritos">
            <img src={heartIcon} alt="" />
          </button>

          <button type="button" aria-label="Minha conta">
            <img src={userCircleIcon} alt="" />
          </button>

          <button type="button" aria-label="Carrinho">
            <img src={shoppingCartIcon} alt="" />
          </button>
        </div>
      </div>

      <nav className="site-header__nav" aria-label="Navegação principal">
        <a href="#categorias">Todas categorias</a>
        <a href="#supermercado">Supermercado</a>
        <a href="#livros">Livros</a>
        <a href="#moda">Moda</a>
        <a href="#lancamentos">Lançamentos</a>
        <a href="#ofertas" className="site-header__nav-highlight">
          Ofertas do dia
        </a>
        <a href="#assinatura" className="site-header__subscription">
          <img src={crownIcon} alt="" />
          Assinatura
        </a>
      </nav>
    </header>
  );
}

export default Header;
