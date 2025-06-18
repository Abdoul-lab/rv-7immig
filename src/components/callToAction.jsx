import React from 'react';

const CallToAction = () => {
  return (
    <div className="call-do-action pt-220 pb-185">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 wow slideInUp animated"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            <div className="dreamit-section-title pb-45 text-center">

              {/* Bouton Vidéo */}
              <div className="call-video">
                <div className="video-icon">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://www.youtube.com/watch?v=BsTpnBtqBOU&ab_channel=WsCubeTech"
                  >
                    <i className="far fa-play-circle"></i>
                  </a>
                </div>
              </div>

              {/* Titres */}
              <div className="dreamit-section-main-title">
                <h1 className="text-white">Unparalleled Consultancy from</h1>
                <h2 className="text-white">Best Experienced Lawyers</h2>
              </div>

              {/* Texte */}
              <div className="dreamit-contet-text">
                <p>
                  Septimmigration gives their consultancy by a registered and
                  experienced lawyer. For your immigration.
                </p>
              </div>

              {/* Bouton */}
              <div className="call-to-action-btn">
                <a href="#">Meet With A Lawyer</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
