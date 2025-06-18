import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

const slides = [
  {
    image: 'src/assets/images/slick5.jpg',
    titleSmall: 'World Best Agency',
    titleMain: 'Visa & Immigration',
    titleSub: 'Consultant Agent',
    buttonText: 'Participez à la formation',
    buttonLink: '#formations',
  },
  {
    image: 'src/assets/images/slick6.jpg',
    titleSmall: 'World Best Agency',
    titleMain: 'Visa & Immigration',
    titleSub: 'Consultant Agent',
    buttons: [
      { text: 'Contact us', link: '#' },
      { text: 'About Us', link: '#', active: true },
    ],
  },
];

const HeroSlider = () => {
  return (
    <div className="slick-slider">
      <div className="container-fluid">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000 }}
          className="slider-img"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div style={{ position: 'relative' }}>
                <img src={slide.image} alt="" style={{ width: '100%' }} />
                <div className="slider-content style-two">
                  <motion.h4
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                  >
                    {slide.titleSmall}
                  </motion.h4>
                  <motion.h1
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                  >
                    {slide.titleMain}
                  </motion.h1>
                  <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                  >
                    {slide.titleSub}
                  </motion.h2>
                  <motion.div
                    className="slick-button pt-45"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  >
                    {slide.buttonText ? (
                      <a href={slide.buttonLink}>
                        {slide.buttonText} <i className="fa fa-angle-right"></i>
                      </a>
                    ) : (
                      slide.buttons?.map((btn, i) => (
                        <a
                          key={i}
                          href={btn.link}
                          className={btn.active ? 'active' : ''}
                        >
                          {btn.text} <i className="fa fa-angle-right"></i>
                        </a>
                      ))
                    )}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
