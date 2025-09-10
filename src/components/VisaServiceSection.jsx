import React, { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // 👈 Importer Autoplay

const services = [
  {
    icon: "flaticon-ui",
    title: "Demande d’EIMT (Étude d’Impact sur le Marché du Travail)",
    content:
      "L’Étude d’Impact sur le Marché du Travail (EIMT) est une autorisation essentielle pour les employeurs canadiens qui souhaitent recruter un travailleur étranger temporaire. Ce document prouve qu’aucun citoyen canadien ou résident permanent n’est disponible pour occuper le poste.👉 Septimmigration vous accompagne dans la constitution du dossier et la gestion des démarches avec Service Canada, afin d’augmenter vos chances d’obtenir une EIMT positive.",
  },
  {
    icon: "flaticon-time",
    title: "Demande de visa et permis d’études",
    content:
      "Le Canada attire chaque année des milliers d’étudiants internationaux grâce à la qualité de ses établissements et à ses opportunités d’emploi pendant et après les études. Un permis d’études est requis pour toute formation de plus de six mois.👉 Septimmigration vous aide à choisir l’établissement, préparer votre dossier et obtenir votre permis afin de bâtir un avenir académique et professionnel solide.",
  },
  {
    icon: "flaticon-clock-1",
    title: "Recrutement à l’international",
    content:
      "Face aux pénuries de main-d’œuvre, de plus en plus d’employeurs québécois et canadiens se tournent vers le recrutement international. Cela leur permet de trouver des talents qualifiés dans divers secteurs comme la santé, l’ingénierie, la construction ou encore l’agroalimentaire.👉 Septimmigration facilite le processus en mettant en relation employeurs et candidats, et en assurant un suivi complet jusqu’à l’arrivée du travailleur au Canada.",
  },
  {
    icon: "flaticon-clock-1",
    title: "Demande de visa et permis de travail",
    content:
      " Le permis de travail permet à un étranger d’exercer légalement une activité professionnelle au Canada. Selon la situation, il peut être lié à une EIMT ou exempté (mobilité francophone, accords internationaux, etc.).👉 Avec Septimmigration, vous bénéficiez d’une expertise qui maximise vos chances d’approbation et vous guide à chaque étape de la procédure. ",
  },
  {
    icon: "flaticon-clock-1",
    title: " Demande de visa visiteur",
    content:
      " Le visa visiteur permet d’entrer au Canada pour une période temporaire, que ce soit pour le tourisme, les affaires ou pour rendre visite à des proches.👉 Nos experts vous accompagnent pour constituer un dossier convaincant et maximiser vos chances d’obtenir votre visa visiteur. ",
  },
  {
    icon: "flaticon-clock-1",
    title: "Renouvellement de permis de travail",
    content:
      " Les travailleurs étrangers qui souhaitent prolonger leur expérience au Canada doivent demander le renouvellement de leur permis avant son expiration.👉 Septimmigration veille au respect des délais et à la complétude de votre dossier afin d’éviter toute interruption de statut. ",
  },
  {
    icon: "flaticon-clock-1",
    title: " Renouvellement de permis d’études",
    content:
      "Les étudiants étrangers doivent maintenir un statut valide durant toute leur scolarité. Le renouvellement de permis d’études permet de poursuivre ses études sans interruption.👉 Septimmigration s’assure que votre dossier soit solide et que vous respectiez toutes les exigences de l’immigration canadienne. ",
  },
  {
    icon: "flaticon-clock-1",
    title: "Changement de statut",
    content:
      " Un étudiant qui souhaite travailler, ou un visiteur qui souhaite étudier, doit changer son statut auprès d’IRCC.👉 Nous vous guidons dans la transition afin que votre nouveau projet au Canada se fasse en toute légalité et sans rupture de statut. ",
  },
  {
    icon: "flaticon-clock-1",
    title: "Prorogation de statut",
    content:
      " Lorsque vous approchez de la fin de validité de votre permis ou visa, vous pouvez demander une prorogation afin de rester au Canada plus longtemps.👉 Septimmigration s’assure que votre demande soit déposée à temps et dans les règles afin de préserver votre statut légal. ",
  },
  {
    icon: "flaticon-clock-1",
    title: "Parrainage de conjoint(e) et/ou enfant(s)",
    content:
      " Le parrainage familial permet à un citoyen ou résident permanent du Canada de faire venir son conjoint(e) ou ses enfants à charge.👉 Septimmigration vous accompagne dans la préparation de votre dossier pour favoriser la réunification familiale dans les meilleurs délais. ",
  },
  {
    icon: "flaticon-clock-1",
    title: "Demande de résidence permanente",
    content:
      " De nombreux programmes (Entrée Express, PSTQ, parrainage, etc.) permettent de devenir résident permanent au Canada. Ce statut offre une stabilité à long terme et de nombreux droits.👉 Nous vous aidons à choisir le programme le plus adapté et à présenter un dossier complet pour maximiser vos chances de réussite. ",
  },
  {
    icon: "flaticon-clock-1",
    title: "Demande de citoyenneté canadienne",
    content:
      " La citoyenneté canadienne est l’étape ultime de votre parcours d’immigration. Elle vous permet d’obtenir un passeport canadien, de voter et de participer pleinement à la vie citoyenne.👉 Septimmigration vous guide dans ce processus afin que vous puissiez franchir cette dernière étape en toute confiance. ",
  },
];

// 🔹 Composant pour gérer floutage + contrôle autoplay
function BlurText({ text, maxLength = 120, swiperRef }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    if (!expanded) {
      // Stopper le défilement
      swiperRef.current?.autoplay?.stop();
    } else {
      // Relancer le défilement (optionnel)
      swiperRef.current?.autoplay?.start();
    }
    setExpanded(!expanded);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div className="blur-text-container">
      <p className={expanded ? "expanded" : "blurred"}>
        {expanded ? text : text.slice(0, maxLength) + "..."}
      </p>
      <button onClick={toggleExpand} className="read-more-btn">
        {expanded ? "Lire moins" : "Lire plus"}
      </button>
    </div>
  );
}

export default function VisaServiceSection() {
  const swiperRef = useRef(null);

  return (
    <div className="service-area pt-100 pb-75">
      <div className="container-fluid">
        <div className="flag-shape">
          <div className="flag-shape-inner">
            <img src="/images/canada-flag.gif" alt="Drapeau du Canada" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 ptl-rsp">
            <div className="dreamit-section-title pb-30">
              <div className="dreamit-section-sub-title">
                <h5>NOS SERVICES</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1 className="text-white">🔒100% Sécurisé</h1>
                <h2 className="text-white">Rapide & Fiable</h2>
              </div>
              <div className="dreamit-section-bar"></div>
              <div className="dreamit-section-bold-text pt-30">
                <p className="text-white">
                  Choisissez votre visa, nous faisons le reste.
                  Votre parcours vers le Canada, accompagné par des experts en immigration.
                </p>
              </div>
              {/* <div className="section-button pt-35">
                <a href="#">
                  Nos services <i className="fas fa-chevron-right"></i>
                </a>
              </div> */}
            </div>
          </div>

          {/* Colonne droite : Swiper Carousel */}
          <div className="col-lg-7">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              modules={[Pagination, Autoplay]}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)} // 🔹 récupérer l’instance
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="col-lg-12">
                    <div className="dreamit-service-box">
                      <div className="dreamit-service-icon">
                        <i className={service.icon}></i>
                      </div>
                      <div className="service-title pt-3">
                        <h2>{service.title}</h2>
                      </div>
                      <div className="service-content">
                        <BlurText text={service.content} swiperRef={swiperRef} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* CSS rapide */}
      <style jsx>{`
        .blur-text-container {
          position: relative;
        }
        .blurred {
          display: inline-block;
          filter: blur(3px);
          transition: filter 0.3s ease-in-out;
        }
        .expanded {
          filter: none;
        }
        .read-more-btn {
          display: block;
          margin-top: 8px;
          background: transparent;
          border: none;
          color: #007bff;
          cursor: pointer;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}