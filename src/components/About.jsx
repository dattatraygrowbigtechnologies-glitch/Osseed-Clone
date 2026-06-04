export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left side: heading and intro */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
              About OSSeed
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Modern solutions for ambitious organizations
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              OSSeed delivers enterprise-grade open source solutions powered by Drupal,
              CiviCRM, React, and modern web technologies. We help organizations build
              scalable digital platforms that improve user experience and drive business growth.
            </p>
          </div>

          {/* Right side: modern feature cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-slate-900">Scalable Platforms</h3>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                Build flexible digital products that grow with your business and team.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-slate-900">Open Source Expertise</h3>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                Leverage Drupal, CiviCRM, and modern frontend tools with confidence.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-2">
              <h3 className="text-xl font-semibold text-slate-900">Why teams choose us</h3>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                We combine strategy, design, and engineering to deliver experiences that
                are reliable, efficient, and future-ready.
              </p>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}