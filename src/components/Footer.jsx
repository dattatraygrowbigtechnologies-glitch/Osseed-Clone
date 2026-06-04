import { Link } from "react-router-dom";
import logo from "../assets/images/profile.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="OSSeed Logo"
              className="mx-auto mb-4 h-14 md:mx-0"
            />
            <p className="text-slate-400">
              OSSeed delivers innovative digital solutions, web development
              services, and open-source contributions to help businesses grow
              through technology.
            </p>
          </div>

          {/* Quick Links */}
      {/* Quick Links */}
<div className="text-center md:text-left">
  <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
  <ul className="space-y-2 text-slate-400">
    <li>
      <Link to="/" className="transition hover:text-white">
        Home
      </Link>
    </li>
    <li>
      <Link to="/services" className="transition hover:text-white">
        Services
      </Link>
    </li>
    <li>
      <Link to="/our-process" className="transition hover:text-white">
        Contributions
      </Link>
    </li>
    <li>
      <Link to="/contact" className="transition hover:text-white">
        Contact
      </Link>
    </li>
  </ul>
</div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="mailto:info@osseed.com"
                  className="hover:text-white"
                >
                  info@osseed.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.osseed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  www.osseed.com
                </a>
              </li>
              <li className="text-sm leading-relaxed text-slate-300">
                1st Floor, Narayan Arcade, Sabniswada, Sawantwadi,
                Sindhudurg, Maharashtra, India
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}