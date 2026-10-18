import "./Categories.scss";

import technologyIcon from "../../assets/icons/ComputerPhone.svg";
import supermarketIcon from "../../assets/icons/Store.svg";
import drinksIcon from "../../assets/icons/Whiskey.svg";
import toolsIcon from "../../assets/icons/Tools.svg";
import healthIcon from "../../assets/icons/HeartHand.svg";
import sportsIcon from "../../assets/icons/Running.svg";
import fashionIcon from "../../assets/icons/Clothes.svg";

const categories = [
  { name: "Tecnologia", icon: technologyIcon },
  { name: "Supermercado", icon: supermarketIcon },
  { name: "Bebidas", icon: drinksIcon },
  { name: "Ferramentas", icon: toolsIcon },
  { name: "Saúde", icon: healthIcon },
  { name: "Esportes e Fitness", icon: sportsIcon },
  { name: "Moda", icon: fashionIcon },
];

function Categories() {
  return (
    <section
      className="categories"
      id="categorias"
      aria-label="Compre por categoria"
    >
      <div className="categories__container">
        {categories.map((category, index) => (
          <a
            key={category.name}
            href="#produtos"
            className={`categories__item ${index === 0 ? "categories__item--active" : ""}`}
          >
            <div className="categories__card">
              <img src={category.icon} alt="" />
            </div>

            <span className="categories__name">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;
