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
                  <img src="/images/logo7immig.png" alt="Logo" />
                </div>
                <div className="dreamit-footer-social-address">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/Septimmigration/" ><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/septime-alexandre-dodd%C3%A9-m-sc-cric-b68555101/"><i className="fab fa-linkedin"></i></a>
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
                    <li><Link to="/canada">Services Clients</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/contact">Prendre rendez-vous</Link></li>
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
                  <div>
                    <ul>
                      <li>455 Rue King Ouest, 6ème étage (REGUS), Sherbrooke, Qc, Canada</li>
                      <li>Angré Djorogobité 1, Cocody, Abj, Côte d'Ivoire</li>
                    <br></br>
                    <b>Téléphone:</b><br></br>
                     +1 819-919-4544 <br></br> +225 070-892-7114 <br></br>
                    <b>Email:</b><br></br>
                     info@septimmigration.com 
                  </ul>
                  </div>
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
                  <li><Link to="/formation">Services</Link></li>
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
