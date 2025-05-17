import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-100 to-pink-200 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border-4 border-pink-200">
        <h1 className="text-5xl font-bold text-center text-pink-600 mb-6 tracking-wide">
          🌸 Preksha Rai Bio Data 🌸
        </h1>

        <div className="text-center text-2xl mb-6">🌼🌺🌸🌺🌼</div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-8"
        >
          <motion.img
            src="/di.jpg"
            alt="Preksha Rai"
            className="rounded-full border-4 border-pink-400 shadow-xl w-50 h-74 object-cover hover:shadow-pink-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          />

          <motion.div
            className="text-lg text-gray-800 space-y-2 mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p><strong>🌸 Name:</strong> Preksha Rai</p>
            <p><strong>🌼 Date of Birth:</strong> 18th October 1998</p>
            <p><strong>🌺 Height:</strong> 5'5"</p>
            <p><strong>🌷 Religion:</strong> Hindu</p>
            <p><strong>📚 Education:</strong> B.Tech in Computer Science</p>
            <p><strong>💼 Profession:</strong> Software Developer at CARS24</p>
            <p><strong>📍 Location:</strong> Gurgaon, Haryana</p>
            <p><strong>🎨 Hobbies:</strong> Drawing</p>
            <p><strong>👨‍👩‍👧 Family:</strong> Father - Govt Officer, Mother - Homemaker, 1 Younger Brother</p>
          </motion.div>
        </motion.div>

        <div className="text-center text-2xl my-6">🌺🌼🌸🌼🌺</div>

        <motion.div
          className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg text-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl text-white font-semibold italic">
            "Looking for a caring, respectful, and well-educated life partner from a reputed family."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
