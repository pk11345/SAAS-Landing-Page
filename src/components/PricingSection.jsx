const pricingPlans = [
    { name: "Basic", price: "$19/month", features: ["AI Insights", "Basic Reports", "Email Support"] },
    { name: "Pro", price: "$49/month", features: ["Advanced AI", "Custom Reports", "24/7 Support"] },
    { name: "Enterprise", price: "$99/month", features: ["Dedicated AI Models", "Unlimited Reports", "Priority Support"] },
  ];
  
  export default function PricingSection() {
    return (
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-gray-400 mt-2">{plan.price}</p>
              <ul className="mt-4 text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  