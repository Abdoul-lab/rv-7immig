import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const services = [
  {
    icon: "flaticon-ui",
    title: "Visas conjoint/familial",
    content:
      "Nullam tincidunt augue eget dui volu tpat, vitae ultrices lectus posuere. Duis urna lacus, efficitur non.",
  },
  {
    icon: "flaticon-time",
    title: "Visas étudiants",
    content:
      "Il y a longtemps que vous avez vu, votre famille (enfants, conjoints, vos amis et connaissances ? La découverte de nouveaux paysages et d’opportunités d’affaires ?",
  },
  {
    icon: "flaticon-clock-1",
    title: "Visa Visiteur",
    content:
      "Il y a longtemps que vous avez vu, votre famille (enfants, conjoints, vos amis et connaissances ? La découverte de nouveaux paysages et d’opportunités d’affaires ?",
  },
  {
    icon: "flaticon-clock-1",
    title: "Visa Temporaire",
    content:
      "Nullam tincidunt augue eget dui volu tpat, vitae ultrices lectus posuere. Duis urna lacus, efficitur non.",
  },
];

export default function VisaServiceSection() {
  return (
    <div className="service-area pt-100 pb-75">
      <div className="container-fluid">
        <div className="flag-shape">
          <div className="flag-shape-inner">
            <img src="/images/canada-flag.gif" alt="Drapeau du Canada" />
          </div>
        </div>
        <div className="row">
          {/* Colonne gauche : Titre et description */}
          <div className="col-lg-5 ptl-rsp">
            <div className="dreamit-section-title pb-30">
              <div className="dreamit-section-sub-title">
                <h5>CHOISISSEZ VOTRE VISA</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1 className="text-white">100% Sécurisé</h1>
                <h2 className="text-white">Visa pour vous</h2>
              </div>
              <div className="dreamit-section-bar"></div>
              <div className="dreamit-section-bold-text pt-30">
                <p className="text-white">
                  Dolor sit amet consectetur elit sed do eiusmod tempor
                  incididunt labore dolore magna aliqua enim minim veniam.
                </p>
              </div>
              <div className="section-button pt-35">
                <a href="#">
                  Nos services <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite : Swiper Carousel */}
          <div className="col-lg-7">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
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
                        <p>{service.content}</p>
                      </div>
                      <div className="service-button">
                        <a href="#">
                          En savoir plus <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
