// import AboutSection from "../components/AboutSection";
import Breadcrumb from "../components/BreadCrumb";
import CallToAction from "../components/callToAction";
// import ExperienceSection from "../components/ExperienceSection";
import VisaAssessmentSection from "../components/VisaAssessmentSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUs from "../components/WhyChooseUs";

const About = () => (
<>
  <Breadcrumb
    title="A propos de nous"
    links={[
      { label: "Accueil", href: "/" },
      { label: "À propos" }
    ]}
  />
  <TeamSection />
  <CallToAction />
  <VisaAssessmentSection />
  <WhyChooseUs />
  
  {/* <TestimonialsSection /> */}
</>
); 

export default About;