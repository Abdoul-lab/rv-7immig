import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const goTopButton = document.querySelector(".go-top");
      if (window.scrollY > 300) {
        goTopButton.classList.add("active");
      } else {
        goTopButton.classList.remove("active");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    document.querySelector(".go-top").addEventListener("click", scrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelector(".go-top").removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            {/* Logo et réseaux sociaux */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-content mb-30">
                <div className="footer-logo">
                  <img src="/rv-7immig/images/logost1.png" alt="Logo" />
                </div>
                <div className="dreamit-footer-social-address">
                  <ul>
                    <li>
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Liens Importants */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-content mb-30">
                <div className="footer-title">
                  <h2>Liens Importants</h2>
                </div>
                <div className="footer-menu">
                  <ul>
                    <li><Link to="#">Services Clients</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="#">Prendre rendez-vous</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-content mb-30">
                <div className="footer-title">
                  <h2>Adresse</h2>
                </div>
                <div className="footer-adderss">
                  <p>
                    <b>Adresse:</b>
                    <span> 20 Rue Wellington Sud, Sherbrooke, Québec, Canada, J1H 5C7</span>
                  </p>
                  <p>
                    <b>Téléphone:</b>
                    <span> +1 819-919-4544 / 225 070-787-7956 </span>
                  </p>
                  <p>
                    <b>Email:</b>
                    <span> info@septimmigration.com </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Abonnement */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-content mb-30">
                <div className="footer-title">
                  <h2>S'abonner</h2>
                  <p>Restez informé de tout ce qui concerne l'immigration au Canada.</p>
                </div>
                <form>
                  <div className="subscribe-area">
                    <input
                      className="subscribe-mail-box"
                      type="email"
                      placeholder="Saisir votre email..."
                      required
                    />
                    <button className="subscribe-button" type="submit">
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Footer bas */}
          <div className="row bd-top-footer pt-15">
            <div className="col-lg-6 col-md-6">
              <div className="copy-right-text">
                <p>Copyright © Septimmigration. Tous droits réservés.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-text-menu">
                <ul>
                  <li><Link to="/about">À propos de Nous</Link></li>
                  <li><Link to="#">Politique de confidentialité</Link></li>
                  <li><Link to="/canada">Services</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton de retour en haut */}
      <div className="scroll-area">
        <div className="top-wrap">
          <div className="go-top-btn-wraper">
            <div className="go-top go-top-button">
              <i className="fas fa-arrow-up"></i>
              <i className="fas fa-arrow-up"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
