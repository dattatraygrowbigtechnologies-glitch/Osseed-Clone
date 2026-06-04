const processSteps = [
  {
    title: "Story Board",
    badge: "Phase 1",
    text:
      "We start with a discovery call with clients and stakeholders to understand project needs, expected functionality, and whether Drupal is the best fit. We also evaluate if additional third-party integrations are required. The outcome is a clear set of in-depth requirements captured in Pivotal Tracker as user stories in the Icebox.",
  },
  {
    title: "Estimation Party",
    badge: "Phase 2",
    text:
      "Once the stories are ready, the development team holds a grooming session to break each story into technical solutions and effort estimates. Every story is sized on a 1–8 Fibonacci scale, where 1 point equals 2 hours of development effort. This produces the total effort and a projected delivery timeline.",
  },
  {
    title: "Freeze UI / UX",
    badge: "Phase 3",
    text:
      "At this stage, the client’s designs are finalized and adjusted where needed to align with the approved user stories and functionality. The goal is to lock the visual and interaction direction before development begins.",
  },
  {
    title: "Sprint Planning (Dev Kickoff)",
    badge: "Phase 4",
    text:
      "After stories are reviewed and approved by the Product Owner, we pull them from Icebox to Backlog based on priority and dependencies. We schedule two-week sprints, hold sprint reviews, and track blockers, progress, and delivery with the client throughout development.",
  },
  {
    title: "Prelaunch Week",
    badge: "Phase 5",
    text:
      "The platform is opened for beta testing and live simulation with a small group of testers. Any reported issues are resolved on priority so the product is launch-ready by the end of the week.",
  },
  {
    title: "After Launch",
    badge: "Phase 6",
    text:
      "Once the platform goes live, we continue with iterative sprints for improvements, bug fixes, and new features. Small changes stay in the same project, while larger platform additions are handled as separate projects and merged into the main release when ready.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-linear-to-b from-slate-50 via-white to-slate-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">Our Process</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            A structured, agile journey from idea to launch
          </h1>
          <p className="mt-5 text-base text-slate-600 sm:text-lg">
            Every phase is designed to bring clarity, speed, and collaboration to your project while keeping quality high at every step.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:justify-center lg:text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-700 shadow-sm">
                    0{index + 1}
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    {step.badge}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-slate-900">{step.title}</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
