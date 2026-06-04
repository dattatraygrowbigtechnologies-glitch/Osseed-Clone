import {
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Open Source Experts",
      text: "Specialized in Drupal, CiviCRM and modern web technologies.",
    },
    {
      icon: <FaUsers />,
      title: "Trusted Team",
      text: "Experienced developers delivering reliable solutions.",
    },
    {
      icon: <FaRocket />,
      title: "Scalable Platforms",
      text: "Built for growth, performance and future expansion.",
    },
    {
      icon: <FaHeadset />,
      title: "Long Term Support",
      text: "Dedicated support and maintenance for every project.",
    },
  ];

  return (
    <section className="py-20 bg-[#eef5f8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-green-500 text-4xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}