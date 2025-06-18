import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Shene Watsan",
    visa: "Singapur PR Visa",
    image: "src/assets/images/client3.jpg",
    text: `Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.`,
  },
  {
    name: "Ellen Erye",
    visa: "France Working Visa",
    image: "src/assets/images/client2.jpg",
    text: `Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.`,
  },
  {
    name: "John Dome",
    visa: "USA Student Visa",
    image: "src/assets/images/client1.jpg",
    text: `Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.`,
  },
  {
    name: "Shene Watsan",
    visa: "France Working Visa",
    image: "src/assets/images/client1.jpg",
    text: `Sorem ipsum dolor sit amet there any consectetur adipisicing eliter sed do the eiusmod tempor asem incididunt ut labore dolore magna aliqua. Ut enim adern minim.`,
  },
];

export default function TestimonialsSection() {
  return (
    <div className="testimonials-area pt-55 pb-190">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title pb-50 text-center">
              <div className="dreamit-section-sub-title">
                <h5>TEMOIGNAGES</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h2 className="text-white">Ce que disent nos Clients</h2>
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="dreamit-testimonials-box">
                  <div className="dreamit-testmonoals-thumb">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonials-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="dreamit-testimonials-content">
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="testimonials-title">
                    <h2>
                      {testimonial.name} <span>{testimonial.visa}</span>
                    </h2>
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
