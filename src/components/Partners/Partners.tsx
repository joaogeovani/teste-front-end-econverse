import partnerImage from '../../assets/images/ImagePartners.png';
import './Partners.scss';

interface PartnersProps {
  id?: string;
}

function Partners({ id }: PartnersProps) {
  return (
    <section
      className="partners"
      id={id}
      aria-label="Conheça nossos parceiros"
    >
      <div className="partners__container">
        {[1, 2].map((banner) => (
          <article className="partners__banner" key={banner}>
            <img
              src={partnerImage}
              alt=""
              className="partners__image"
            />

            <div className="partners__content">
              <h2 className="partners__title">
                Parceiros
              </h2>

              <p className="partners__description">
                Lorem ipsum dolor sit
                <br />
                amet, consectetur
              </p>

              <a
                href="#produtos"
                className="partners__button"
              >
                Confira
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Partners;