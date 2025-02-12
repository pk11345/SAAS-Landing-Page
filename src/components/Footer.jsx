import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="mt-20 text-center p-6 bg-gray-800 text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <p>© {new Date().getFullYear()} Your SaaS Company. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-yellow-400">Facebook</a>
        <a href="#" className="hover:text-yellow-400">Twitter</a>
        <a href="#" className="hover:text-yellow-400">LinkedIn</a>
      </div>
    </motion.footer>
  );
}
