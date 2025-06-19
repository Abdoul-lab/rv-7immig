import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    id: 1,
    name: "Shene Watsan",
    visa: "Singapore PR Visa",
    img: "/rv-7immig/images/client8.jpg",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
  },
  {
    id: 2,
    name: "Ellen Erye",
    visa: "France Working Visa",
    img: "/rv-7immig/images/client9.jpg",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
  },
  {
    id: 3,
    name: "John Dome",
    visa: "USA Student Visa",
    img: "/rv-7immig/images/client8.jpg",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonial-section pt-20 pb-20">
      <div className="container">
        <div className="text-center mb-10">
          <h5>CLIENTS REVIEWS</h5>
          <h1>What Customers</h1>
          <h2>Saying About Septimmigration</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="single-testimonial-box">
                <div className="testimonial-content">
                  <div className="testimonial-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-content-inner d-flex align-items-center">
                  <div className="testi-thumb">
                    <img src={testimonial.img} alt={testimonial.name} />
                  </div>
                  <div className="testi-title">
                    <h2>{testimonial.name}</h2>
                    <span>{testimonial.visa}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
