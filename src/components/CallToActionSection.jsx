import React from 'react';

const CallToActionSection = () => {
  return (
    <div className="call-section style-two pb-80">
      <div className="container">
        <div
          className="row upper3 wow fadeInUp animated"
          data-wow-delay="00"
          data-wow-duration="1500ms"
          style={{ visibility: 'visible', animationDuration: '1500ms' }}
        >
          <div className="col-lg-5 col-md-5 pl-0">
            <div className="call-thumb">
              <img src="src/assets/images/new3.jpg" alt="Call to Action" />
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="call-do-action-content">
              <div className="call-title">
                <h4>Get Free Online Visa Assessment Today!</h4>
                <h2>
                  Top Rated By Customers & Immigration Firms With 100% Success Rate.
                </h2>
              </div>
              <div className="call-btn">
                <a href="#">
                  Apply Visa Now <i className="fa fa-angle-right"></i>
                </a>
              </div>
              <div className="shape-image bounce-animate5">
                <img src="src/assets/images/call4.png" alt="Shape Decoration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
