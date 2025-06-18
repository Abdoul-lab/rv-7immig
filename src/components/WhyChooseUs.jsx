import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function WhyChooseUs() {
  const counters = [
    { icon: "flaticon-ui", number: 480, label: "Visiteurs" },
    { icon: "flaticon-global", number: 560, label: "Travailleurs" },
    { icon: "flaticon-time", number: 15000, label: "Étudiants" },
    { icon: "flaticon-compass", number: 200, label: "Regroupement familial" },
  ];

  return (
    <div className="counter-area pt-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title pb-30 text-center">
              <div className="dreamit-section-sub-title">
                <h5>POURQUOI NOUS CHOISIR</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h2 className="black">Pourquoi Septimmigration ?</h2>
              </div>
              <div className="dreamit-section-bar center mt-3"></div>
            </div>
          </div>
        </div>

        <div className="row">
          {counters.map((item, index) => {
            const { ref, inView } = useInView({ triggerOnce: true });
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="single-counter-text" ref={ref}>
                  <div className="counter-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="counter-content ">
                    <h1 className="counter" >
                      {inView && <CountUp end={item.number} duration={2} />}
                    </h1>
                    <h3>+</h3>
                  </div>
                  <div className="counter-title-style-2">
                    <h4>{item.label}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
