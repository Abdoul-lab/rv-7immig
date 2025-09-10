import React from 'react';

const CallToAction = () => {
  return (
    <div className="call-do-action pt-220 pb-18">
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
                    href=""
                  >
                    <i className="far fa-play-circle"></i>
                  </a>
                </div>
              </div>

              {/* Titres */}
              <div className="dreamit-section-main-title">
                <h1 className="text-white">✨ Un accompagnement d’excellence</h1>
                <h2 className="text-white">avec nos experts spécialisés</h2>
              </div>

              {/* Texte */}
              <div className="dreamit-contet-text">
                <p>
                  Chez Septimmigration, nos services sont assurés par des consultant inscrits et expérimentés, afin de vous guider en toute sécurité dans vos démarches d’immigration au Canada.
                </p>
              </div>

              {/* Bouton */}
              <div className="call-to-action-btn">
                <a href="#">RDV avec un consultant</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
