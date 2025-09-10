import React from "react";

export default function VisaAssessmentSection() {
  return (
    <div className="online-visa-area">
      <div className="container">
        <div className="row online-visa-bx align-items-center">
          <div className="col-lg-5 pl-0">
            <div className="dreamit-online-visa-thumb">
              <img src="/images/ass.jpg" alt="Visa Assessment" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="dreamit-online-visa-box pl-40">
              <div className="dreamit-online-visa-title">
                <h2>Evaluation de votre profil</h2>
              </div>
              <div className="dreamit-online-visa-content">
                <p>
                  Obtenez une analyse personnalisée de votre profil d’immigration, en quelques clics et sans frais.
Découvrez vos chances de réussite et les programmes qui vous correspondent.
                </p>
              </div>
              <div className="online-visa-button">
                <a
                  href="/scgCalculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Obtenez une évaluation gratuite{" "}
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
