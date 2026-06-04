import { Link } from "react-router-dom";
import logo from "../assets/images/profile.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand / intro */}
          <div className="text-center md:text-left">
            <img src={logo} alt="OSSeed" className="mx-auto mb-4 h-14 md:mx-0" />
            <p className="text-slate-400">
              Delivering innovative open source digital solutions for organizations worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/" className="transition hover:text-white">Home</Link></li>
              <li><Link to="/#services" className="transition hover:text-white">Services</Link></li>
              <li><Link to="/#about" className="transition hover:text-white">Contributions</Link></li>
              <li><Link to="/contact" className="transition hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>info@osseed.com</li>
              <li>www.osseed.com</li>
              <li className="text-sm leading-relaxed text-slate-300">
                1st Floor, Narayan Arcade, Sabniswada, Sawantwadi,
                Sindhudurg, Maharashtra
              </li>
            </ul>
          </div>
        </div>

        
       
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-500">
        © 2025 OSSeed. All Rights Reserved.
      </div>
    </footer>
  );
}