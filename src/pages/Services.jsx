import {
  FaCode,
  FaCogs,
  FaHandshake,
  FaPlug,
} from "react-icons/fa";

const serviceCards = [
  {
    icon: <FaCode />,
    title: "Drupal Development & Maintenance",
    description:
      "Build modern Drupal websites, maintain existing platforms, and deliver custom modules, themes, and migration services for long-term growth.",
    bullets: [
      "Web design and development",
      "Drupal application maintenance and support",
      "Custom module development",
      "Theme development",
      "Content migration services",
    ],
  },
  {
    icon: <FaCogs />,
    title: "CiviCRM Integration & Customization",
    description:
      "Implement and tailor CiviCRM for nonprofits and civic organizations with secure integrations and advanced CRM workflows.",
    bullets: [
      "CiviCRM installation and configuration",
      "CRM system migration",
      "Custom extension development",
      "3rd party tool integration",
    ],
  },
  {
    icon: <FaHandshake />,
    title: "Business & Knowledge Process Outsourcing",
    description:
      "Support your operations with reliable back-office administration, customer support, and knowledge-driven business services.",
    bullets: [
      "Back-office administration",
      "Customer support solutions",
      "High-value knowledge-based services",
    ],
  },
  {
    icon: <FaPlug />,
    title: "Third-Party API Integration",
    description:
      "Connect external systems and platforms securely with REST APIs, payment gateways, and communication tools such as SMS and WhatsApp.",
    bullets: [
      "Secure REST API setup",
      "Payment gateway integration",
      "SMS and WhatsApp connectivity",
      "External service automation",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">Our Services</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            End-to-end digital solutions for modern organizations
          </h1>
          <p className="mt-5 text-base text-slate-600 sm:text-lg">
            From Drupal development and CRM customization to integration and support, we help businesses operate smarter and scale with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {serviceCards.map((service, index) => (
            <article
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-green-100 p-4 text-2xl text-green-700">{service.icon}</div>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">{service.title}</h2>
              </div>

              <p className="mt-5 text-slate-600">{service.description}</p>

              <ul className="mt-5 space-y-3 text-slate-700">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
