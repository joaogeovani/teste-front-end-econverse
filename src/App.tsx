import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Partners from "./components/Partners/Partners";
import Brands from "./components/Brands/Brands";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />

        {/* Primeira vitrine */}
        <Products id="produtos" variant="categories" />

        {/* Primeiro banner de parceiros */}
        <Partners />

        {/* Segunda vitrine */}
        <Products variant="simple" />

        {/* Segundo banner de parceiros */}
        <Partners />

        {/* Navegue por marcas */}
        <Brands />

        {/* Terceira vitrine */}
        <Products variant="simple" />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
