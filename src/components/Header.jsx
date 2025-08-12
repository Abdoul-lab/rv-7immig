import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisaSubmenuOpen, setIsVisaSubmenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Sticky & Resize
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMobileMenuOpen(false);
        setIsVisaSubmenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fermer le menu en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsVisaSubmenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsVisaSubmenuOpen(false);
  };

  const toggleVisaSubmenu = () => {
    setIsVisaSubmenuOpen(!isVisaSubmenuOpen);
  };

  return (
    <>
      {/* Header Top */}
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
                      <i className="fas fa-map-marker-alt"></i> 455 Rue King Ouest, 6ème étage (REGUS), Sherbrooke, Qc, Canada
                    </a><br />
                    <a href="#">
                      <i className="fas fa-map-marker-alt"></i> Angré Djorogobité 1, Cocody, Abj, Côte d'Ivoire
                    </a>
                  </li>
                  <li>
                    <a href="tel:+18199194544">
                      <i className="fas fa-phone"></i> +1 819-919-4544 / +225 070-892-7114
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

      {/* Header Main */}
      <div className={`header-area transparent ${isSticky ? "sticky-nav" : ""}`} id="sticky-header">
        <div className="container">
          <div className="m-logo">
            <Link to="/">
              <span className="logo-txt"></span>
            </Link>
          </div>

          {/* Burger & Close */}
          <div className="menu-toggle">
            <span
              className="open_bar"
              style={{ display: isMobileMenuOpen ? "none" : "inline" }}
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </span>
            <span
              className="close_bar"
              style={{ display: isMobileMenuOpen ? "inline" : "none" }}
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-times"></i>
            </span>
          </div>

          {/* Navigation Menu */}
          <div ref={menuRef} className={`menu-wrapper ${isMobileMenuOpen ? "active-nav" : ""}`}>
            <div className="row align-items-center d-flex">
              <div className="col-lg-3">
                <div className="header-logo">
                  <Link className="main-logo" to="/" onClick={closeMobileMenu}>
                    <img src="/images/logost1.png" alt="Logo" />
                  </Link>
                  <Link className="stiky-logo" to="/" onClick={closeMobileMenu}>
                    <img src="/images/logost1.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="header-menu">
                  <ul>
                    <li><Link to="/" onClick={closeMobileMenu}>Accueil</Link></li>
                    <li><Link to="/education-visa" onClick={closeMobileMenu}>CANADA</Link></li>
                    <li><Link to="/scgCalculator" onClick={closeMobileMenu}>Entrée express </Link></li>
                    {/* <li>
                      <button
                        className="nav-button"
                        onClick={toggleVisaSubmenu}
                      >
                        Visas <i className="fas fa-angle-down"></i>
                      </button>
                      <div className={`sub-menu ${isVisaSubmenuOpen ? "open" : ""}`}>
                        <ul>
                          <li><Link to="/business" onClick={closeMobileMenu}>Business</Link></li>
                          <li><Link to="/education-visa" onClick={closeMobileMenu}>Education Visa</Link></li>
                          <li><Link to="/resident-return-visas" onClick={closeMobileMenu}>Resident Return Visas</Link></li>
                          <li><Link to="/skilled-immigration" onClick={closeMobileMenu}>Skilled Immigration</Link></li>
                          <li><Link to="/spouse-family-visas" onClick={closeMobileMenu}>Spouse Family Visas</Link></li>
                          <li><Link to="/tourist-visitor-visas" onClick={closeMobileMenu}>Tourist & Visitor Visas</Link></li>
                        </ul>
                      </div>
                    </li> */}
                    <li><Link to="/about" onClick={closeMobileMenu}>À propos</Link></li>
                    <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                    <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
                    <li><Link to="/formations" onClick={closeMobileMenu}>Formation</Link></li>
                    
                  </ul>

                  {/* Social for mobile */}
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
