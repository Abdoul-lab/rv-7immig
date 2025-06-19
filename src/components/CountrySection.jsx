import React from 'react';

const countries = [
  { name: 'Bangladesh', image: '/rv-7immig/images/img1.jpg', animation: 'fadeInLeft' },
  { name: 'Australia', image: '/rv-7immig/images/img2.jpg', animation: 'fadeInUp' },
  { name: 'Canada', image: '/rv-7immig/images/img3.jpg', animation: 'fadeInRight' },
  { name: 'Brazil', image: '/rv-7immig/images/img4.jpg', animation: 'fadeInLeft' },
  { name: 'England', image: '/rv-7immig/images/img5.jpg', animation: 'fadeInUp' },
  { name: 'USA', image: '/rv-7immig/images/img6.jpg', animation: 'fadeInRight' },
];

const CountrySection = () => {
  return (
    <div className="country-section pt-70 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title pb-30 text-center">
              <div className="dreamit-section-sub-title">
                <h5>CHOOSE COUNTRY</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1>Immigration & Visa Services</h1>
                <h2 className="text-black">Following Countries</h2>
              </div>
              <div className="dreamit-section-bar center mt-3"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 wow ${country.animation} animated`}
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="single-country-box">
                <div className="single-country-thumb">
                  <img src={country.image} alt={country.name} />
                  <div className="country-content">
                    <div className="country-title">
                      <h2>{country.name}</h2>
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

export default CountrySection;
