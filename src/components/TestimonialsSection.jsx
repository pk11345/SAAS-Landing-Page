import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments?_limit=3")
      .then(response => setTestimonials(response.data))
      .catch(error => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">What Our Users Say</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.id} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 italic">"{testimonial.body}"</p>
            <h3 className="mt-4 font-semibold">{testimonial.email}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
