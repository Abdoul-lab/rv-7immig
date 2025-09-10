import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import "swiper/css/pagination";

const provinces = [
  {
    name: "Ottawa",
    image: "/images/Big Ben.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Ville à la fois politique, culturelle et familiale, Ottawa est le cœur institutionnel du Canada et une destination attrayante pour les nouveaux arrivants. Située en Ontario, mais à la frontière du Québec, la capitale canadienne incarne parfaitement le bilinguisme, la diversité culturelle et la stabilité économique.",
  },
  {
    name: "Québec",
    image: "/images/Québec.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Le Québec est l’une des destinations les plus prisées par les candidats à l’immigration. Seule province majoritairement francophone du Canada, elle attire chaque année des milliers de professionnels qualifiés, d’étudiants et de familles qui souhaitent profiter de ses opportunités économiques et de son mode de vie unique.",
  },
  {
    name: "Alberta",
    image: "/images/Alberta.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "L’Alberta est une province canadienne où les opportunités professionnelles s’allient à une qualité de vie familiale remarquable. Avec ses grandes villes dynamiques comme Calgary et Edmonton, son économie portée par l’énergie et l’agriculture, ainsi qu’un coût de la vie plus accessible que dans d’autres métropoles canadiennes, elle attire de nombreux nouveaux arrivants.",
  },
  {
    name: "Yukon",
    image: "/images/Yukon1.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Le Yukon, territoire du nord-ouest du Canada, évoque immédiatement les grands espaces sauvages, les aurores boréales et l’esprit d’aventure. Mais au-delà de son image de contrée mythique, le Yukon est aussi une terre d’opportunités économiques et un endroit où l’immigration francophone est particulièrement encouragée.",
  },
  {
    name: "Terre-Neuve-et-Labrador",
    image: "/images/Terreneuve.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Située à l’extrême Est du pays, Terre-Neuve-et-Labrador est une province qui allie richesse naturelle, dynamisme économique et culture unique. Reconnue pour l’accueil chaleureux de sa population, elle attire de plus en plus de nouveaux arrivants en quête de qualité de vie et d’opportunités professionnelles.",
  },
  {
    name: "Ontario",
    image: "/images/Ontario1.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "L’Ontario est la province la plus peuplée du Canada et l’une des principales portes d’entrée pour les nouveaux arrivants. Entre ses grandes métropoles dynamiques, ses opportunités professionnelles dans divers secteurs et sa richesse culturelle, elle attire chaque année des milliers d’immigrants souhaitant bâtir une nouvelle vie au Canada.",
  },
  {
    name: "Colombie-Britannique",
    image: "/images/Colombie Britanique.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "La Colombie-Britannique (C.-B.) est l’une des provinces les plus attrayantes du Canada. Avec son climat tempéré, sa nature majestueuse et ses secteurs économiques en plein essor, elle attire chaque année de nombreux immigrants en quête de nouvelles opportunités et d’un mode de vie équilibré.",
  },
  {
    name: "Île-du-Prince-Édouard",
    image: "/images/ile du prince.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Bien qu’elle soit la plus petite province du Canada, l’Île-du-Prince-Édouard (Î.-P.-É.) offre un environnement exceptionnel pour ceux qui souhaitent s’y installer. Entre agriculture prospère, pêche traditionnelle, tourisme florissant et une communauté accueillante, cette île a tout pour séduire les nouveaux arrivants en quête d’un mode de vie paisible et solidaire.",
  },
  {
    name: "Nouvelle-Écosse",
    image: "/images/Nouvelle Ecosse.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Nichée sur la côte Est du Canada, la Nouvelle-Écosse séduit par ses paysages maritimes, ses traditions culturelles riches et ses perspectives économiques uniques. Entre la vie côtière, les opportunités dans le secteur des pêches et du tourisme, ainsi que la vitalité d’Halifax, la province attire de nombreux nouveaux arrivants à la recherche d’un cadre de vie équilibré entre authenticité et modernité.",
  },
  {
    name: "Territoires du Nord-Ouest",
    image: "/images/TerritoireNO.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Les Territoires du Nord-Ouest (TNO), situés au cœur du Nord canadien, offrent une expérience de vie unique, entre modernité et nature sauvage infinie. Ce vaste territoire attire ceux qui souhaitent conjuguer carrière professionnelle et aventure humaine, dans une région où la demande de main-d’œuvre qualifiée est forte.",
  },
  {
    name: "Nunavut",
    image: "/images/Nunavut.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Le Nunavut, créé en 1999, est le plus jeune et le plus vaste territoire du Canada. Situé au cœur de l’Arctique canadien, il séduit par ses paysages grandioses, sa culture inuite vivante et les opportunités uniques qu’il offre dans les secteurs essentiels. Bien qu’isolé et confronté à un climat rigoureux, ce territoire attire les plus audacieux désireux de s’installer dans une région hors du commun.",
  },
  {
    name: "Manitoba",
    image: "/images/Manitoba1.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Situé au cœur du Canada, le Manitoba est une province réputée pour son hospitalité, son coût de la vie abordable et ses programmes d’immigration efficaces. Sa capitale, Winnipeg, est un carrefour économique et culturel, tandis que ses vastes paysages offrent un cadre de vie paisible et équilibré. Pour les nouveaux arrivants, le Manitoba combine accessibilité financière et opportunités professionnelles.",
  },
  {
    name: "Saskatchewan",
    image: "/images/Saskatchewan.jpeg",
    flag: "/images/canada-flag.gif",
    description:
      "Située dans les Prairies canadiennes, la Saskatchewan est une province en pleine croissance, connue pour ses immenses terres agricoles, ses ressources naturelles et ses politiques d’immigration attractives. Avec sa qualité de vie abordable et son dynamisme économique, elle attire de plus en plus de nouveaux arrivants à la recherche d’opportunités durables.",
  },
];

export default function ProvincesSection() {
  const [expanded, setExpanded] = useState({});
  const swiperRef = useRef(null);

  const toggleDescription = (index) => {
    setExpanded((prev) => {
      const newState = { ...prev, [index]: !prev[index] };

      // Vérifier si au moins une description est ouverte
      const isAnyExpanded = Object.values(newState).some((v) => v === true);

      if (swiperRef.current) {
        if (isAnyExpanded) {
          swiperRef.current.autoplay.stop(); // ⏸ stop autoplay
        } else {
          swiperRef.current.autoplay.start(); // ▶️ restart autoplay
        }
      }

      return newState;
    });
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#007bff",
    fontWeight: "bold",
    cursor: "pointer",
    padding: 0,
    marginTop: "10px",
  };

  return (
    <div className="country-area pt-70 pb-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title pb-20 text-center">
              <div className="dreamit-section-sub-title">
                <h5>CHOISISSEZ UNE PROVINCE</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1 className="text-black">Immigration - Choisissez</h1>
                <h2 className="text-black">Votre Province!</h2>
              </div>
              <div className="dreamit-section-bar center mt-3"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {provinces.map((province, index) => (
              <SwiperSlide key={index}>
                <div className="dreamit-country-box">
                  <div className="dreamit-country-thumb">
                    <img src={province.image} alt={province.name} />
                  </div>
                  <div className="country-flag-img">
                    <img src={province.flag} alt="Canada Flag" />
                  </div>
                  <div className="country-content">
                    <div className="country-title pt-3">
                      <h2>{province.name}</h2>
                    </div>

                    {/* Texte limité à 3 lignes + overlay */}
                    <div
                      className="country-content-text"
                      style={{
                        position: "relative",
                        maxHeight: expanded[index] ? "500px" : "4.5em",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          display: "-webkit-box",
                          WebkitLineClamp: expanded[index] ? "unset" : 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {province.description}
                      </p>

                      {!expanded[index] && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "2em",
                            background:
                              "linear-gradient(to bottom, transparent, white)",
                          }}
                        ></div>
                      )}
                    </div>

                    {/* Bouton Lire plus */}
                    <div className="country-button">
                      <button
                        onClick={() => toggleDescription(index)}
                        style={buttonStyle}
                      >
                        {expanded[index] ? "Masquer" : "Lire plus"}{" "}
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}