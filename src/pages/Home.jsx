import HeroCarousel from "../components/HeroCarousel";
import FeatureSection from "../components/FeatureSection";
import AboutSection from "../components/AboutSection";
import VisaServiceSection from "../components/VisaServiceSection";
import ProvincesSection from "../components/ProvincesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VisaAssessmentSection from "../components/VisaAssessmentSection";
import WhyChooseUs from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import BrandCarousel from "../components/Brandcarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeatureSection />
      <AboutSection />
      <VisaServiceSection />
      <ProvincesSection />
      <TestimonialsSection />
      <VisaAssessmentSection />
      <WhyChooseUs />
      <BlogSection />
      <BrandCarousel />
    </>
  );
}