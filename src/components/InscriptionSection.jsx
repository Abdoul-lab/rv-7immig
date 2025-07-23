
const InscriptionSection = () => {
  return (
    <div className="about-area style-four pb-65 pt-100">
      <div className="container">
        <div className="row align-items-center">
          {/* Image column */}
          <div
            className="col-lg-6 wow slideInLeft animated"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="dreamit-thumb">
              <img src="/images/new5.png" alt="about" />
            </div>
          </div>

          {/* Content column */}
          <div
            className="col-lg-6 col-md-9 wow fadeInRight animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="dreamit-section-title pb-15">
              <div className="dreamit-section-main-title">
                <h2 id="formations">Inscrivez-vous ici</h2>
              </div>
              <div className="dreamit-section-bar"></div>

              {/* PayPal Button Placeholder */}
              <div className="dreamit-section-bold-text pt-35">
                <div id="paypal-payment-button"></div>
              </div>
            </div>

            {/* Box 1 */}
            <div className="about-single-box d-flex">
              <div className="about-icon">
                <i className="flaticon-content"></i>
              </div>
              <div className="about-content">
                <div className="about-title">
                  <h2>Accurate Guidance</h2>
                </div>
                <div className="about-content-text">
                  <p>
                    Skilled professionals are always ready to provide reliable
                    services to our clients!
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="about-single-box d-flex">
              <div className="about-icon">
                <i className="flaticon-content-writing"></i>
              </div>
              <div className="about-content">
                <div className="about-title">
                  <h2>Our Presence</h2>
                </div>
                <div className="about-content-text">
                  <p>
                    Skilled professionals are always ready to provide reliable
                    services to our clients!
                  </p>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <div className="about-btn">
              <a href="#">
                read more <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionSection;
