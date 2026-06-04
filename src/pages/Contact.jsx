import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const toEmail = import.meta.env.VITE_EMAILJS_TO_EMAIL || "dattatraygrowbigtechnologies@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setStatus({ type: "", message: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "EmailJS configuration is missing. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: toEmail,
          company: formData.company,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully. We’ll be in touch soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send your message. Please try again later or check your EmailJS settings.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-green-400 focus:bg-white";
  const fieldErrorClasses = "mt-2 text-sm text-red-600";

  return (
    <section id="contact" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">

        {/* Left intro */}
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-white sm:p-10">
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

          {status.message && (
            <div
              className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  className={inputClasses}
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange("name")}
                />
                {errors.name && <p className={fieldErrorClasses}>{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  className={inputClasses}
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange("email")}
                />
                {errors.email && <p className={fieldErrorClasses}>{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Company / Organization</label>
              <input
                className={inputClasses}
                type="text"
                placeholder="Company / Organization"
                value={formData.company}
                onChange={handleChange("company")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Tell us about your project <span className="text-red-500">*</span>
              </label>
              <textarea
                className={inputClasses}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange("message")}
              />
              {errors.message && <p className={fieldErrorClasses}>{errors.message}</p>}
            </div>

            <button
              className="inline-flex items-center gap-3 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
