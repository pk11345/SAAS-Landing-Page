import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">SaaS Company</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
    </nav>
  );
}
