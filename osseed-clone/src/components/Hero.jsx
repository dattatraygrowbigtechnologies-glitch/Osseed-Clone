import profile from "../assets/images/profile.png";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] bg-[#eef5f8] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left content: heading, text, and actions */}
        <div className="z-10 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Building Modern
            <br />
            Digital Solutions
            <br />
            For Businesses
          </h1>

          <h2 className="mt-6 bg-linear-to-r from-green-300 via-green-500 to-green-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            Drupal & Open Source
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
            We help organizations build scalable websites, enterprise
            applications, Drupal platforms, CiviCRM solutions, and custom
            digital experiences.
          </p>

          {/* Action buttons */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-purple-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-purple-700 sm:px-8 sm:text-base"
            >
              Get In Touch
              <FaArrowRight />
            </Link>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-600 sm:px-8 sm:text-base"
            >
              Company Profile
              <FaDownload />
            </a>
          </div>
        </div>

        {/* Right content: visual hero card and floating stats */}
        <div className="relative flex min-h-105 items-center justify-center sm:min-h-130 lg:min-h-175">
          <div className="absolute h-65 w-65 rounded-full bg-green-300 opacity-80 sm:h-85 sm:w-85 md:h-105 md:w-105 lg:-mt-25 lg:h-150 lg:w-150" />

          <img
            src={profile}
            alt="OSSeed Team"
            className="relative z-10 w-55 object-contain sm:w-70 lg:w-85 xl:w-100"
          />

          <div className="float-card absolute right-0 top-6 z-20 hidden rounded-3xl bg-white px-5 py-4 shadow-xl md:block md:px-6 md:py-5">
            <h3 className="text-lg font-bold text-slate-800">15+ Years</h3>
            <p className="text-sm text-gray-500">Industry Experience</p>
          </div>

          <div className="float-card absolute bottom-6 left-0 z-20 hidden rounded-3xl bg-green-500 px-5 py-4 text-white shadow-xl md:block md:px-6 md:py-5">
            <h3 className="text-lg font-bold">50+ Projects</h3>
            <p className="text-sm opacity-90">Delivered Successfully</p>
          </div>

          <div className="float-card absolute top-1/2 right-0 z-20 hidden rounded-3xl bg-white px-5 py-4 shadow-xl lg:block lg:-right-20">
            <h3 className="font-bold text-slate-800">Open Source</h3>
            <p className="text-sm text-gray-500">Drupal • CiviCRM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
