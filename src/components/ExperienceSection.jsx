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
                  <h2 className="text-white">Services les plus demandés</h2>
                </div>
                <div className="dreamit-section-bar center mt-3"></div>
              </div>
            </div>

            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="dreamit-single-progress">
                <div className="progress-title mb-30">
                  <h6 className="text-white">Demande de résidence Permanente</h6>
                </div>
                <div className="progress mb-30">
                  <div
                    className="progress-bar progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95% " }}
                  >
                    95%
                  </div>
                </div>
              </div>

              <div className="dreamit-single-progress">
                <div className="progress-title mb-30">
                  <h6 className="text-white">Demande de visa et de Permis de travail</h6>
                </div>
                <div className="progress mb-30">
                  <div
                    className="progress-bar progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow="93"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "93%" }}
                  >
                    93%
                  </div>
                </div>
              </div>

              <div className="dreamit-single-progress">
                <div className="progress-title mb-30">
                  <h6 className="text-white">Demande de Visa et Permis d'Étude </h6>
                </div>
                <div className="progress mb-30">
                  <div
                    className="progress-bar progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
              <div className="dreamit-single-progress">
                <div className="progress-title mb-30">
                  <h6 className="text-white">Parrainage conjoint(e), parents, enfants, etc... </h6>
                </div>
                <div className="progress mb-30">
                  <div
                    className="progress-bar progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "65%" }}
                  >
                    65%
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