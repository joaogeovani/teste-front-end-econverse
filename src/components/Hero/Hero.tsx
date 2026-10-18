import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <h1 id="hero-title" className="hero__title">
          Venha conhecer nossas
          <br />
          promoções
        </h1>

        <p className="hero__description">
          <strong>50% Off</strong>
          <span> nos produtos</span>
        </p>

        <a className="hero__button" href="#produtos">
          Ver produto
        </a>
      </div>
    </section>
  );
}

export default Hero;
