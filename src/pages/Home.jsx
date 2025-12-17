import HeroCarousel from "../components/HeroCarousel";
// import FeatureSection from "../components/FeatureSection";
import AboutSection from "../components/AboutSection";
import VisaServiceSection from "../components/VisaServiceSection";
import ProvincesSection from "../components/ProvincesSection";
// import TestimonialsSection from "../components/TestimonialsSection";
// import VisaAssessmentSection from "../components/VisaAssessmentSection";
import ExperienceSection from "../components/ExperienceSection";
// import WhyChooseUs from "../components/WhyChooseUs";
import BlogSection2 from "../components/BlogSection2";
// import BrandCarousel from "../components/Brandcarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <BlogSection2 />
      {/* <FeatureSection /> */}
      <AboutSection />
      <VisaServiceSection />
      <ProvincesSection />
      {/* <TestimonialsSection /> */}
      <ExperienceSection />
      {/* <VisaAssessmentSection /> */}
      {/* <WhyChooseUs /> */}
      {/* <BrandCarousel /> */}
    </>
  );
}