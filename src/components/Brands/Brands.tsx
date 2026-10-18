
import econverseLogo from '../../assets/icons/Logo-econverse.svg';
import './Brands.scss';

const brands = [1, 2, 3, 4, 5];

function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>

      <div className="brands__list">
        {brands.map((brand) => (
          <div className="brands__item" key={brand}>
            <img
              src={econverseLogo}
              alt="Econverse"
              className="brands__logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
