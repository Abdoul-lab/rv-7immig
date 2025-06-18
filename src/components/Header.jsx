import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <>
      
      {/* Header Top Menu */}
      <div className="header-top-menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="header-top-address">
                <ul>
                  <li>
                    <a href="mailto:info@septimmigration.com">
                      <i className="far fa-envelope"></i> info@septimmigration.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-map-marker-alt"></i> 20 Rue Wellington Sud,
                      Sherbrooke, Québec, Canada, J1H 5C7
                    </a>
                  </li>
                  <li>
                    <a href="tel:+18199194544">
                      <i className="fas fa-phone"></i> +1 819-919-4544
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-top-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Header Main Menu */}
      <div className="header-area transparent" id="sticky-header">
        <div className="container">
          <div className="m-logo">
            <Link to="/">
              <span className="logo-txt"></span>
            </Link>
          </div>
          <div className="menu-toggle">
            <span className="open_bar">
              <i className="fas fa-bars"></i>
            </span>
            <span className="close_bar">
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="menu-wrapper">
            <div className="row align-items-center d-flex">
              <div className="col-lg-3">
                <div className="header-logo">
                  <Link className="main-logo" to="/">
                    <img src="src/assets/images/logost1.png" alt="Logo" />
                  </Link>
                  <Link className="stiky-logo" to="/">
                    <img src="src/assets/images/logost1.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="header-menu">
                  <ul>
                    <li>
                      <Link to="/">
                        Accueil
                        <span className="mobile-menu-icon">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/canada">
                        CANADA
                        <span className="mobile-menu-icon">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Visas <span><i className="fas fa-angle-down"></i></span>
                        <span className="mobile-menu-icon">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                      <div className="sub-menu">
                        <ul>
                          <li><Link to="/business">Business</Link></li>
                          <li><Link to="/education-visa">Education Visa</Link></li>
                          <li><Link to="/resident-return-visas">Resident Return Visas</Link></li>
                          <li><Link to="/skilled-immigration">Skilled Immigration</Link></li>
                          <li><Link to="/spouse-family-visas">Spouse Family Visas</Link></li>
                          <li><Link to="/tourist-visitor-visas">Tourist & Visitor Visas</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/about">
                        À propos
                        <span className="mobile-menu-icon">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Blog
                        <span className="mobile-menu-icon">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/formations">Formations</Link></li>
                  </ul>
                  <div className="header-button">
                    <a
                      href="https://secure.officio.ca/qnr?id=4401&hash=9f47269263b777258a373dce155edb02"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Évaluation gratuite en ligne
                    </a>
                  </div>
                  <div className="mobile-menu-social-icon d-lg-none mt-40">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fas fa-map-marker-alt"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
