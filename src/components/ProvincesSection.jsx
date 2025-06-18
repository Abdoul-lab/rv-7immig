import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const provinces = [
  {
    name: "Ottawa",
    image: "src/assets/images/bangladesh.jpg",
    flag: "src/assets/images/canada-flag.gif",
    description:
      "Lorem ipsum dolor sit amet, consec anglse sicing elite sombar, sed do incididunt ut labore",
  },
  {
    name: "Sheerbrooke",
    image: "src/assets/images/australia.jpg",
    flag: "src/assets/images/canada-flag.gif",
    description:
      "Lorem ipsum dolor sit amet, consec anglse sicing elite sombar, sed do incididunt ut labore",
  },
  {
    name: "Alberta",
    image: "src/assets/images/brazil.jpg",
    flag: "src/assets/images/canada-flag.gif",
    description:
      "Lorem ipsum dolor sit amet, consec anglse sicing elite sombar, sed do incididunt ut labore",
  },
  {
    name: "Québec",
    image: "src/assets/images/brazil.jpg",
    flag: "src/assets/images/canada-flag.gif",
    description:
      "Lorem ipsum dolor sit amet, consec anglse sicing elite sombar, sed do incididunt ut labore",
  },
  {
    name: "Ontario",
    image: "src/assets/images/brazil.jpg",
    flag: "src/assets/images/canada-flag.gif",
    description:
      "Lorem ipsum dolor sit amet, consec anglse sicing elite sombar, sed do incididunt ut labore",
  },
];

export default function ProvincesSection() {
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
            modules={[Pagination]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
                    <div className="country-content-text">
                      <p>{province.description}</p>
                    </div>
                    <div className="country-button">
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
  );
}
