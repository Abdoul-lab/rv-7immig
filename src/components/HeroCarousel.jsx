import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: false,
  dots: true,
  animateOut: 'fadeOut'
};

export default function HeroCarousel() {
  return (
    <OwlCarousel className="owl-theme" {...options}>
      {/* Slide 1 - Vidéo */}
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="dreamit-slider-content">
            <video width="100%" height="auto" controls autoPlay>
              <source src="src/assets/video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>

      {/* Slide 2 - Texte */}
      <div className="slider-area style-two d-flex align-items-center">
        <div className="container">
          <div className="dreamit-slider-content">
            <h4>Welcome to Septimmigration</h4>
            <h1>Immigration & Visa</h1>
            <h3>Consultant Agent</h3>
            <p>
              Pellentesque at posuere tellus phasellus scelerisque porem.
            </p>
            <div className="rs-video">
              <div className="animate-border">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://www.youtube.com/watch?v=BsTpnBtqBOU&ab_channel=WsCubeTech"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
              <span>See Our Introduction</span>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}
