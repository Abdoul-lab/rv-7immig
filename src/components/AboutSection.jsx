
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // ne déclenche qu'une fois
    threshold: 0.3,     // déclenche à 30% de visibilité
  });

  const commitments = [
    "Nous nous engageons à fournir des informations de qualité",
    "Nous nous engageons à effectuer un accompagnement de qualité",
    "Nous nous engageons à fournir des services informatiques de qualité",
  ];

  return (
    <div className="about-area pt-70 pb-130">
      <div className="container">
        <div className="row">
          {/* Colonne gauche - image et compteur */}
          <div className="col-lg-6">
            <div className="dreamit-thumb">
              <img src="/rv-7immig/images/about-pic.png" alt="À propos" />
            </div>
            <div className="dreamit-single-counter" ref={ref}>
              <div className="counter-text">
                <h1 className="counter dis">
                  {inView ? <CountUp end={370} duration={3} /> : "0"}
                </h1>
                <h3>+</h3>
              </div>
              <div className="counter-title">
                <h4>completed visa</h4>
              </div>
            </div>
          </div>

          {/* Colonne droite - texte */}
          <div className="col-lg-6 pl-5 pt-50">
            <div className="dreamit-section-title pb-30">
              <div className="dreamit-section-sub-title">
                <h5>LE MEILLEUR CONSEILLER EN IMMIGRATION</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1>Services d'immigration</h1>
                <h2>Consultants expérimentés</h2>
              </div>
              <div className="dreamit-section-bar"></div>
              <div className="dreamit-section-bold-text pt-30">
                <p>
                  Nous avons conseillé des étudiants pour des opportunités
                  éducatives dans des universités du CANADA.
                </p>
              </div>
              <div className="dreamit-section-text">
                <p>
                  Il y a peut-être un ingénieur expérimenté pour votre service
                  d'immigration. Nous offrons le meilleur service d'immigration
                  pour vous.
                </p>
              </div>
            </div>

            {/* Engagements */}
            <div className="dreamit-about-content">
              {commitments.map((text, index) => (
                <div className="dreamit-about-content-inner pb-2 d-flex" key={index}>
                  <div className="dreamit-about-icon pr-4">
                    <i className="far fa-check-circle"></i>
                  </div>
                  <div className="about-content-text">
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton */}
            <div className="about-button pt-4">
              <a href="#">
                Découvrir plus <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
