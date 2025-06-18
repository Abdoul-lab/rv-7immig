import React from "react";

const visaServices = [
  {
    title: "Education Visa",
    icon: "flaticon-business-and-finance",
    text: "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services",
    backClass: ""
  },
  {
    title: "Business Immigration",
    icon: "flaticon-graphic-design",
    text: "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services",
    backClass: "two"
  },
  {
    title: "Skilled Immigration",
    icon: "flaticon-content-writing",
    text: "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services",
    backClass: "three"
  },
  {
    title: "Spouse/Family Visas",
    icon: "flaticon-lifebuoy",
    text: "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services",
    backClass: "four"
  },
  {
    title: "Tourist & Visitor Visas",
    icon: "flaticon-data-2",
    text: "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services",
    backClass: "five"
  },
  {
    title: "Resident Return Visas",
    icon: "flaticon-ui",
    text: "Nullam tincidunt augue eget dui volu tpat, vitae ultri ces lectus posuere. Duis urna awesome creative services",
    backClass: "six upper"
  }
];

const FlipxSection = () => {
  return (
    <div className="flipx-section pt-90 pb-180">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title pb-30 text-center">
              <div className="dreamit-section-sub-title">
                <h5>WHAT WE DO</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1 className="text-white">We Provide Experts Create Great</h1>
                <h2 className="text-white">Value For Visa Categories</h2>
              </div>
              <div className="dreamit-section-bar center mt-3"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {visaServices.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp animated"
              data-wow-delay="00"
              data-wow-duration="1500ms"
              key={index}
            >
              <div className={`flip-box ${service.backClass.includes('two') ? 'two' : ''}`}>
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="feature-single-box">
                      <div className="box-icon">
                        <i className={service.icon}></i>
                      </div>
                      <div className="flipx-box-content">
                        <div className="box-title">
                          <h3>{service.title}</h3>
                        </div>
                      </div>
                      <div className="flipx-content-text">
                        <p>{service.text}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`flip-box-back ${service.backClass}`}>
                    <div className="des">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipxSection;
