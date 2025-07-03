import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CounterSection from "./CounterSection";

export default function WhyChooseUs() {

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
        <CounterSection></CounterSection>
      </div>
    </div>
  );
}
