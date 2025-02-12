import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <header className="text-center py-20 px-6">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Grow Your Business with <span className="text-yellow-300">Our AI</span>
      </motion.h1>
      <motion.p 
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        AI-powered solutions for modern businesses.
      </motion.p>
      <motion.button 
        onClick={() => navigate("/contact")}
        className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button>
    </header>
  );
}
