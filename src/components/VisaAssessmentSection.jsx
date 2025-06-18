import React from "react";

export default function VisaAssessmentSection() {
  return (
    <div className="online-visa-area">
      <div className="container">
        <div className="row online-visa-bx align-items-center">
          <div className="col-lg-5 pl-0">
            <div className="dreamit-online-visa-thumb">
              <img src="src/assets/images/ass.jpg" alt="Visa Assessment" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="dreamit-online-visa-box pl-40">
              <div className="dreamit-online-visa-title">
                <h2>Free Online Visa Assessment</h2>
              </div>
              <div className="dreamit-online-visa-content">
                <p>
                  Dolor sit amet consectetur elit sed do eiusmod tempor
                  incididunt labore dolore magna aliqua enim minim veniam.
                </p>
              </div>
              <div className="online-visa-button">
                <a
                  href="https://secure.officio.ca/qnr?id=4401&hash=9f47269263b777258a373dce155edb02"
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
