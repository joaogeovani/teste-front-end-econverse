
import './Header.scss';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__top">
        <a className="site-header__logo" href="/" aria-label="Econverse - Página inicial">
          <span className="site-header__logo-icon">e</span>
          <span className="site-header__logo-text">converse</span>
        </a>

        <form className="site-header__search" role="search" onSubmit={(event) => event.preventDefault()}>
          <label className="visually-hidden" htmlFor="product-search">
            Buscar produtos
          </label>
          <input
            id="product-search"
            type="search"
            placeholder="O que você está buscando?"
          />
          <button type="submit" aria-label="Buscar">
            <span aria-hidden="true">⌕</span>
          </button>
        </form>

        <div className="site-header__actions" aria-label="Ações da loja">
          <button type="button" aria-label="Pedidos">♧</button>
          <button type="button" aria-label="Favoritos">♡</button>
          <button type="button" aria-label="Minha conta">♙</button>
          <button type="button" aria-label="Carrinho">🛒</button>
        </div>
      </div>

      <nav className="site-header__nav" aria-label="Navegação principal">
        <a href="#categorias">Todas categorias</a>
        <a href="#supermercado">Supermercado</a>
        <a href="#livros">Livros</a>
        <a href="#moda">Moda</a>
        <a href="#lancamentos">Lançamentos</a>
        <a href="#ofertas">Ofertas do dia</a>
        <a href="#assinatura">Assinatura</a>
      </nav>
    </header>
  );
}

export default Header;
