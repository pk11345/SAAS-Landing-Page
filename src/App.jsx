import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

import ContactPage from "./components/ContactPage";
import StatsSection from "./components/StatsSection";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-900 dark:to-black text-white min-h-screen">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<><HeroSection /><FeaturesSection /><PricingSection /><StatsSection/><TestimonialsSection /><FAQSection /></>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
