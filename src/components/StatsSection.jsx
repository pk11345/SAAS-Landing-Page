import React from "react";

import { FaUsers, FaStar, FaShoppingCart } from "react-icons/fa";
import Counter from "./Counter";



const StatsSection = () => {
  return (
    <div className="py-20  text-center">
      <h1 className="text-4xl font-bold text-white mb-10">Our Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <Counter title="Clients Reached" endValue={500} icon={FaUsers} />
        <Counter title="5-Star Ratings" endValue={120} icon={FaStar} />
        <Counter title="Successful Orders" endValue={1000} icon={FaShoppingCart} />
      </div>
    </div>
  );
};

export default StatsSection;
