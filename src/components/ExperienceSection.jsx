const ExperienceSection = () => (
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
);
export default ExperienceSection;