import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/">
          <img src={logo} alt="OSSeed Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex items-center">
          <Link to="/" className="text-slate-700 hover:text-green-600">Home</Link>
          <Link to="/services" className="text-slate-700 hover:text-green-600">Services</Link>
          <Link to="/our-process" className="text-slate-700 hover:text-green-600">Our Process</Link>
          <Link to="/contact" className="text-slate-700 hover:text-green-600">Contact</Link>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-slate-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl flex flex-col gap-4 px-6 py-4">
            <Link
              to="/"
              className="text-slate-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-slate-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/our-process"
              className="text-slate-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}