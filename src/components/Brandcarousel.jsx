import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const brandImages = [
  'src/assets/images/brand1.png',
  'src/assets/images/brand2.png',
  'src/assets/images/brand3.png',
  'src/assets/images/brand4.png',
  'src/assets/images/brand5.png',
];

const BrandCarousel = () => {
  return (
    <div className="brand-area pb-80">
      <div className="container">
        <div className="row">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={false}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="brand_list"
          >
            {brandImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="dreamit-brand">
                  <div className="single-brand-thumb">
                    <img src={image} alt={`Brand ${index + 1}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
