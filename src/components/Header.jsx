
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
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
                      <i className="fas fa-map-marker-alt"></i> 455 Rue King Ouest, 6ème étage (REGUS),
                      Sherbrooke, Qc, Canada 
                    </a><br></br>
                    <a href="#"><i className="fas fa-map-marker-alt"></i> Angré Djorogté 1, Cocody, Abj, Côte d'ivoire</a>
                  </li>
                  <li>
                    <a href="tel:+18199194544">
                      <i className="fas fa-phone"></i> +1 819-919-4544 / +225 070-787-7956
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
      <div className={`header-area transparent ${isSticky ? 'sticky-nav' : ''}`} id="sticky-header">
        <div className="container">
          <div className="m-logo">
            <Link to="/">
              <span className="logo-txt"></span>
            </Link>
          </div>
          <div className="menu-toggle" onClick={toggleMobileMenu}>
            <span className={`open_bar ${isMobileMenuOpen ? 'd-none' : ''}`}>
              <i className="fas fa-bars"></i>
            </span>
            <span className={`close_bar ${!isMobileMenuOpen ? 'd-none' : ''}`}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className={`menu-wrapper ${isMobileMenuOpen ? 'active-nav' : ''}`}>
            <div className="row align-items-center d-flex">
              <div className="col-lg-3">
                <div className="header-logo">
                  <Link className="main-logo" to="/">
                    <img src="/rv-7immig/images/logost1.png" alt="Logo" />
                  </Link>
                  <Link className="stiky-logo" to="/">
                    <img src="/rv-7immig/images/logost1.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="header-menu">
                  <ul>
                    <li>
                      <Link to="/" onClick={closeMobileMenu}>
                        Accueil
                        <span className="mobile-menu-icon">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/canada" onClick={closeMobileMenu}>
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
                          <li><Link to="/business" onClick={closeMobileMenu}>Business</Link></li>
                          <li><Link to="/education-visa" onClick={closeMobileMenu}>Education Visa</Link></li>
                          <li><Link to="/resident-return-visas" onClick={closeMobileMenu}>Resident Return Visas</Link></li>
                          <li><Link to="/skilled-immigration" onClick={closeMobileMenu}>Skilled Immigration</Link></li>
                          <li><Link to="/spouse-family-visas" onClick={closeMobileMenu}>Spouse Family Visas</Link></li>
                          <li><Link to="/tourist-visitor-visas" onClick={closeMobileMenu}>Tourist & Visitor Visas</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/about" onClick={closeMobileMenu}>
                        À propos
                        <span className="mobile-menu-icon">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={closeMobileMenu}>
                        Blog
                        <span className="mobile-menu-icon">
                          <i className="fas fa-angle-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
                    <li><Link to="/formations" onClick={closeMobileMenu}>Formations</Link></li>
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
