import { useState } from "react";

const faqs = [
  { question: "How does AI automation work?", answer: "Our AI automates repetitive tasks using advanced algorithms." },
  { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel anytime without any hidden fees." },
  { question: "Do you offer customer support?", answer: "Yes, we provide 24/7 customer support for all plans." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-6 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-4 mb-4 rounded-lg shadow-lg">
            <button
              className="w-full text-left font-semibold text-blue-400"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question} {openIndex === index ? "▲" : "▼"}
            </button>
            {openIndex === index && <p className="text-gray-400 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
