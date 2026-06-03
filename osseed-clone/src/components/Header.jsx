import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/">
          <img src={logo} alt="OSSeed Logo" className="h-14 w-auto" />
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link to="/" className="text-slate-700 hover:text-green-600">Home</Link>
          <Link to="/services" className="text-slate-700 hover:text-green-600">Services</Link>
          <Link to="/our-process" className="text-slate-700 hover:text-green-600">Our Process</Link>
          <Link to="/contact" className="text-slate-700 hover:text-green-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}