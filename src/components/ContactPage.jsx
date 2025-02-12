import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_p7jmdut"; // Replace with your EmailJS Service ID
    const templateID = "template_hlx5z56"; // Replace with your EmailJS Template ID
    const publicKey = "x5CGrXMJNUxH7NoYr"; // Your EmailJS Public Key

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => setStatus("Failed to send message. Try again later."));
  };

  return (
    <section className="mt-20 px-6">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <div className="mt-6 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-gray-300">Full Name</label>
          <input type="text" name="from_name" className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" required />

          <label className="text-gray-300 mt-4">Email</label>
          <input type="email" name="from_email" className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" required />

          <label className="text-gray-300 mt-4">Message</label>
          <textarea name="message" className="mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" placeholder="Type your message here" required></textarea>

          <button type="submit" className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">Send Message</button>
        </form>

        {status && <p className="mt-4 text-center text-green-400">{status}</p>}
      </div>
    </section>
  );
}
