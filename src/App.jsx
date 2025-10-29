import { Routes, Route, useParams } from "react-router-dom"; // ✅ avec useParams
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Assistant from "./components/Assistant";
import ScgCalculator from "./pages/ScgCalculator";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Business from "./pages/Business";
import EducationVisa from "./pages/EducationVisa";
import ResidentReturnVisas from "./pages/ResidentReturnVisas";
import SkilledImmigration from "./pages/SkilledImmigration";
import SpouseFamilyVisas from "./pages/SpouseFamilyVisas";
import TouristVisitorVisas from "./pages/TouristVisitorVisas";
import Blog from "./pages/Blog";
import Formations from "./pages/Formations";

import BlogArticle from "./pages/BlogArticle";
import articles from "./data/articlesData";

const ArticlePage = () => {
  const { slug } = useParams(); // ⚡ marche maintenant
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <h2>Article introuvable</h2>;

  return <BlogArticle {...article} />;
};

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scgCalculator" element={<ScgCalculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Route dynamique */}
        <Route path="/blog/:slug" element={<ArticlePage />} />

        <Route path="/business" element={<Business />} />
        <Route path="/education-visa" element={<EducationVisa />} />
        <Route path="/resident-return-visas" element={<ResidentReturnVisas />} />
        <Route path="/skilled-immigration" element={<SkilledImmigration />} />
        <Route path="/spouse-family-visas" element={<SpouseFamilyVisas />} />
        <Route path="/tourist-visitor-visas" element={<TouristVisitorVisas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/formations" element={<Formations />} />

        {/* fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      <Assistant />
    </>
  );
};

export default App;
