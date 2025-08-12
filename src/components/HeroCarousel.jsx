import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MiniFaq from "./MiniFaq";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        fontSize: "2rem",
        color: "#10B981",
        background: "white",
        padding: "8px",
        borderRadius: "50%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
      }}
    >
      <FaArrowRight />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        fontSize: "2rem",
        color: "#10B981",
        background: "white",
        padding: "8px",
        borderRadius: "50%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
      }}
    >
      <FaArrowLeft />
    </div>
  );
}

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
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
              muted
              autoPlay
              playsInline
              controls
              style={{ borderRadius: "10px" }}
            >
              <source src="/images/videos/video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>

      {/* Slide 2 - Texte + Mini FAQ */}
      <div className="slider-area style-two d-flex align-items-center">
        <div className="container">
          <div className="dreamit-slider-content">
            <h4>Bienvenue chez Septimmigration</h4>
            <h1>Services Conseils en immigration</h1>
            <h3>Consultant CRIC</h3>
            <p>
              M Septime Alexandre DODDE, Consultant Réglementé en Immigration Canadienne
            </p>
            <div className="rs-video">
              <div className="animate-border"></div>
              <span>Découvrez nos services</span>
            </div>
            <MiniFaq />
          </div>
        </div>
      </div>
    </Slider>
  );
}
