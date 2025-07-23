
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Assistant from "./components/Assistant"

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Canada from "./pages/Canada";
import Business from "./pages/Business";
import EducationVisa from "./pages/EducationVisa";
import ResidentReturnVisas from "./pages/ResidentReturnVisas";
import SkilledImmigration from "./pages/SkilledImmigration";
import SpouseFamilyVisas from "./pages/SpouseFamilyVisas";
import TouristVisitorVisas from "./pages/TouristVisitorVisas";
import Blog from "./pages/Blog";
import Formations from "./pages/Formations";


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/business" element={<Business />} />
        <Route path="/education-visa" element={<EducationVisa />} />
        <Route path="/resident-return-visas" element={<ResidentReturnVisas />} />
        <Route path="/skilled-immigration" element={<SkilledImmigration />} />
        <Route path="/spouse-family-visas" element={<SpouseFamilyVisas />} />
        <Route path="/tourist-visitor-visas" element={<TouristVisitorVisas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/formations" element={<Formations />} />

        {/* Fallback route pour tout chemin non défini */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      {/* L'assistante est ici : visible partout */}
      <Assistant />
    </>
  );
};

export default App;
