import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";


const Counter = ({ title, endValue, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; // Duration in ms
    const intervalTime = duration / endValue;

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isVisible, endValue]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg"
    >
      <Icon className="text-blue-500 text-4xl" />
      <h2 className="text-3xl text-black font-bold my-2">{count}+</h2>
      <p className="text-gray-500 text-lg">{title}</p>
    </motion.div>
  );
};

export default Counter;
