import React from "react";

const About = () => {
  return (
    <>
    <div className="breatcome-area d-flex align-items-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breatcome-content text-center">
          <div className="breatcome-content-title">
            <h1>A propos de Nous</h1>
          </div>
          <div className="breatcome-content-text">
            <ul>
              <li>
                <a href="index.html">Accueil </a>
                <i className="fas fa-chevron-right"></i> <span>A propos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
    <div className="about-area pt-70 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="dreamit-thumb">
              <img src="src/assets/fav-icon/about-pic.png" alt="" />
            </div>
            <div className="dreamit-single-counter">
              <div className="counter-text">
                <h1 className="counter">370</h1>
                <h3>+</h3>
              </div>
              <div className="counter-title">
                <h4>visas obtenus</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl-60">
            <div className="dreamit-section-title pb-30">
              <div className="dreamit-section-sub-title">
                <h5>Le Meilleur Consultant en immigration</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1>Service de l'immigration</h1>
                <h2>Consultant expérimenté</h2>
              </div>
              <div className="dreamit-section-bar"></div>
              <div className="dreamit-section-bold-text2 pt-40">
                <p>
                  Nous avons conseillé des étudiants pour des opportunités éducatives au Canada.
                </p>
              </div>
              <div className="dreamit-section-text">
                <p>
                  Il y a peut-être un ingénieur expérimenté pour votre service d'immigration. Nous offrons le meilleur service d'immigration pour vous.
                </p>
              </div>
            </div>
            <div className="dreamit-about-content">
              <div className="dreamit-about-content-inner pb-2 d-flex">
                <div className="dreamit-about-icon pr-4">
                  <i className="far fa-check-circle"></i>
                </div>
                <div className="about-content-text">
                  <p>
                    Nous nous engageons à fournir des informations de qualité
                  </p>
                </div>
              </div>
              <div className="dreamit-about-content-inner pb-2 d-flex">
                <div className="dreamit-about-icon pr-4">
                  <i className="far fa-check-circle"></i>
                </div>
                <div className="about-content-text">
                  <p>
                    Nous nous engageons à fournir un accompagnement de qualité
                  </p>
                </div>
              </div>
              <div className="dreamit-about-content-inner d-flex">
                <div className="dreamit-about-icon pr-4">
                  <i className="far fa-check-circle"></i>
                </div>
                <div className="about-content-text">
                  <p>Nous nous engageons à fournir des services de qualité</p>
                </div>
              </div>
            </div>
            <div className="about-button pt-4">
              <a href="#">
                en savoir plus <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section Call-to-Action */}
    <div className="call-do-action-area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-do-action-content text-center">
                <div className="call-do-action-title">
                  <div className="bd-video style-three">
                    <div className="video-icon">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="far fa-play-circle"></i>
                      </a>
                    </div>
                  </div>
                  <h3>Nous vous assistons Visa & Immigration</h3>
                  <h2>Service</h2>
                </div>
                <div className="call-do-action-content-inner pt-3">
                  <p>
                    Adapté à votre situation, vous permettant d'avoir facilement
                    des services d'accompagnement de qualité.
                  </p>
                </div>
                <div className="call-do-action-button">
                  <a href="tel:+18199194544">
                    Tel & Whatsapp : +1 819-919-4544 / +225 070-787-7956
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Expérience */}
      <div className="experence-area style-three pt-70 pb-70">
        <div className="container">
          <div className="row experienced-box">
            <div className="col-lg-12">
              <div className="dreamit-section-title pb-30 text-center">
                <div className="dreamit-section-sub-title">
                  <h5>NOTRE EXPÉRIENCE</h5>
                </div>
                <div className="dreamit-section-main-title">
                  <h1 className="text-white">10 ans d'expérience</h1>
                  <h2 className="text-white">Visa Immigration</h2>
                </div>
                <div className="dreamit-section-bar center mt-3"></div>
              </div>
            </div>

            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="dreamit-single-progress">
                <div className="progress-title mb-30">
                  <h6 className="text-white">Immigration Consultancy</h6>
                </div>
                <div className="progress mb-30">
                  <div
                    className="progress-bar progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  >
                    95%
                  </div>
                </div>
              </div>

              <div className="dreamit-single-progress">
                <div className="progress-title mb-30">
                  <h6 className="text-white">Conseil en Immigration</h6>
                </div>
                <div className="progress mb-30">
                  <div
                    className="progress-bar progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>

              <div className="dreamit-single-progress">
                <div className="progress-title mb-30">
                  <h6 className="text-white">Visa</h6>
                </div>
                <div className="progress mb-30">
                  <div
                    className="progress-bar progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-member-area style-three pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5>Equipe professionnelle</h5>
              <h2 className="text-black">Rencontrez notre équipe</h2>
              <div className="dreamit-section-bar center mt-3"></div>
            </div>
          </div>
          <div className="row">
            {[
              { name: "Mme Dodde", role: "Gestionnaire Principal", img: "src/assets/fav-icon/team3.jpg" },
              { name: "Alexandre Dodde", role: "Manager général", img: "src/assets/fav-icon/team2.jpg" },
              { name: "Mme Tchétché", role: "Comptable", img: "src/assets/fav-icon/team1.jpg" },
              { name: "Mutiu Abayomi", role: "Responsable informatique", img: "src/assets/fav-icon/team2.jpg" },
            ].map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="dreamit-single-team">
                  <div className="team-member-thumb">
                    <img src={member.img} alt={member.name} />
                    <div className="dreamit-team-social-icon">
                      <div className="dreamit-team-social-icon-inner">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="dreamit-team-content">
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="counter-area style-three">
        <div className="container">
          <div className="row cmt-box">
            {[
              { count: 480, label: "Etudes" },
              { count: 560, label: "Visites" },
              { count: 15000, label: "Travail" },
              { count: 200, label: "Regroupement familial" },
            ].map((counter, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="counter-content">
                  <h1 className="counter">{counter.count}</h1>
                  <h3>+</h3>
                </div>
                <h4>{counter.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-area style-fore pt-40 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5>TEMOIGNAGES</h5>
              <h3>Nos heureux clients</h3>
              <h2 className="text-black">Concernant nos services</h2>
              <div className="dreamit-section-bar center mt-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="testimonials_list owl-carousel">
              {[
                { name: "Shene Watsan", visa: "France Working Visa", img: "src/assets/fav-icon/client3.jpg" },
                { name: "Ellen Erye", visa: "Singapur PR Visa", img: "src/assets/fav-icon/client2.jpg" },
                { name: "John Dome", visa: "USA Student Visa", img: "src/assets/fav-icon/client1.jpg" },
              ].map((client, index) => (
                <div key={index} className="dreamit-testimonials-box">
                  <img src={client.img} alt={client.name} />
                  <div className="testimonials-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                  <h2>{client.name} <span>{client.visa}</span></h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

<div className="brand-area pb-80">
  <div className="container">
    <div className="row">
      <div className="brand_list owl-carousel">
        <div className="col-lg-12">
          <div className="dreamit-brand">
            <div className="single-brand-thumb">
              <img src="src/assets/fav-icon/brand1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="dreamit-brand">
            <div className="single-brand-thumb">
              <img src="src/assets/fav-icon/brand2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="dreamit-brand">
            <div className="single-brand-thumb">
              <img src="src/assets/fav-icon/brand3.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="dreamit-brand">
            <div className="single-brand-thumb">
              <img src="src/assets/fav-icon/brand4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="dreamit-brand">
            <div className="single-brand-thumb">
              <img src="src/assets/fav-icon/brand5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default About;
