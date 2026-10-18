import logo from "../../assets/icons/Logo-econverse.svg";
import instagram from "../../assets/icons/Instagram.svg";
import facebook from "../../assets/icons/Facebook.svg";
import linkedin from "../../assets/icons/Linkedin.svg";

import "./Footer.scss";

const footerGroups = [
  {
    title: "Institucional",
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    links: [
      "Termos e Condições",
      "Política de Privacidade",
      "Troca e Devolução",
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__brand">
            <img src={logo} alt="Econverse" className="footer__logo" />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="footer__social" aria-label="Redes sociais">
              <span aria-label="Instagram">
                <img src={instagram} alt="Instagram" />
              </span>

              <span aria-label="Facebook">
                <img src={facebook} alt="Facebook" />
              </span>

              <span aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" />
              </span>
            </div>
          </div>

          <div className="footer__divider" aria-hidden="true" />

          <nav className="footer__navigation" aria-label="Navegação do rodapé">
            {footerGroups.map((group) => (
              <div className="footer__column" key={group.title}>
                <h3>{group.title}</h3>

                <ul>
                  {group.links.map((link) => (
                    <li key={link}>
                      <span>{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}

export default Footer;
