import React from 'react';

const FlipCardsSection = () => {
  return (
    <div className="flipx-section style-two pt-90 pb-290">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 wow fadeInUp animated"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="dreamit-section-title pb-30 text-center">
              <div className="dreamit-section-sub-title">
                <h5>CHOOSE YOUR COARSE</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1 className="text-black">Get The Immigration Training</h1>
                <h2 className="text-black">Which You Deserve</h2>
              </div>
              <div className="dreamit-section-bar center mt-3"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Card 1 */}
          <div
            className="col-lg-3 col-md-6 wow slideInLeft animated"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div className="feature-single-box">
                    <div className="flipx-box-content">
                      <div className="box-icon">
                        <i className="flaticon-intelligent"></i>
                      </div>
                      <div className="box-title">
                        <h3>IELTS Coaching</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="des">
                    <h3>Education Visa</h3>
                    <p>
                      Nullam tincidunt augue eget dui volu tpat, vitae ultri ces
                      lectus posuere. Duis.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="col-lg-3 col-md-6 wow slideInUp animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front two">
                  <div className="feature-single-box">
                    <div className="flipx-box-content">
                      <div className="box-icon">
                        <i className="flaticon-graphic-design"></i>
                      </div>
                      <div className="box-title">
                        <h3>PTE Coaching</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box-back two">
                  <div className="des">
                    <h3>PTE Coaching</h3>
                    <p>
                      Nullam tincidunt augue eget dui volu tpat, vitae ultri ces
                      lectus posuere. Duis.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="col-lg-3 col-md-6 wow slideInRight animated"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front three">
                  <div className="feature-single-box">
                    <div className="flipx-box-content">
                      <div className="box-icon">
                        <i className="flaticon-content-writing"></i>
                      </div>
                      <div className="box-title">
                        <h3>TOEFL</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="des">
                    <h3>TOEFL</h3>
                    <p>
                      Nullam tincidunt augue eget dui volu tpat, vitae ultri ces
                      lectus posuere. Duis.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="col-lg-3 col-md-6 wow slideInUp animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front four">
                  <div className="feature-single-box">
                    <div className="flipx-box-content">
                      <div className="box-icon">
                        <i className="flaticon-lifebuoy"></i>
                      </div>
                      <div className="box-title">
                        <h3>Graduate Re Exam</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="des">
                    <h3>Graduate Re Exam</h3>
                    <p>
                      Nullam tincidunt augue eget dui volu tpat, vitae ultri ces
                      lectus posuere. Duis.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-10">
          <div className="col-lg-12">
            <div className="flipx-button text-center">
              <p>There are many variations of passages of Lorem Ipsum available</p>
              <a href="#">See All Coaching</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCardsSection;
