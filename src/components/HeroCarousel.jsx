import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel() {
  const sliderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => {
      sliderRef.current?.slickPause();
    };

    const handlePauseOrEnd = () => {
      sliderRef.current?.slickPlay();
    };

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePauseOrEnd);
      video.addEventListener("ended", handlePauseOrEnd);

      // Forcera la lecture automatique si possible (sans son)
      video.play().catch((e) => {
        console.warn("Autoplay bloqué :", e);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePauseOrEnd);
        video.removeEventListener("ended", handlePauseOrEnd);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {/* Slide 1 - Vidéo */}
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="dreamit-slider-content">
            <video
              ref={videoRef}
              width="100%"
              height="auto"
              muted // Nécessaire pour autoplay
              autoPlay
              playsInline
              controls
            >
              <source src="/images/videos/video.mp4" type="video/mp4" />
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
                  className="video-vemo-icon"
                  href="https://www.youtube.com/watch?v=BsTpnBtqBOU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
              <span>See Our Introduction</span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
