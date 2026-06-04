import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">

        {/* Left intro */}
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Let’s build something meaningful together</h2>
          <p className="mt-5 text-slate-300 sm:text-lg">
            Share your goals, timeline, and challenges. We’ll help turn your ideas into reliable,
            scalable digital experiences.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4">
              <FaPhone className="mt-1 text-green-300" />
              <span>+91 9995557890</span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4">
              <FaEnvelope className="mt-1 text-green-300" />
              <span>info@osseed.com</span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4">
              <FaMapMarkerAlt className="mt-1 text-green-300" />
              <span>1st Floor, Narayan Arcade, Sabniswada, Sawantwadi, Sindhudurg, Maharashtra</span>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
          <h3 className="text-2xl font-semibold text-slate-900">Send us a message</h3>
          <p className="mt-2 text-slate-600">We typically reply within one business day.</p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-400 focus:bg-white" type="text" placeholder="Your Name" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-400 focus:bg-white" type="email" placeholder="Email Address" />
            </div>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-400 focus:bg-white" type="text" placeholder="Company / Organization" />
            <textarea className="min-h-35 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-400 focus:bg-white" placeholder="Tell us about your project..." />

            <button className="inline-flex items-center gap-3 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600" type="button">
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
