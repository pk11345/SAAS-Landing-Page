import { motion } from "framer-motion";

const features = [
  { title: "AI Automation", description: "Automate tasks with AI-driven workflows." },
  { title: "Advanced Analytics", description: "Track performance with real-time analytics." },
  { title: "Cloud-Based", description: "Access from anywhere, anytime." },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">Key Features</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
