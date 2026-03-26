"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const props = [
  {
    stat: "10x",
    label: "ROI on AI Projects",
    description: "Our clients see measurable returns within the first quarter of deployment.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    stat: "< 48hr",
    label: "Response Time",
    description: "Critical issues get addressed fast. Non-critical requests within a business day.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    stat: "100%",
    label: "U.S. Based Team",
    description: "Every engineer on your project is local. Same timezone, same standards, no middlemen.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    stat: "0",
    label: "Vendor Lock-in",
    description: "You own your code, your data, and your infrastructure. Full transparency, always.",
    icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-sand-50 py-24 lg:py-32 overflow-hidden coastal-waves">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <AnimateOnScroll>
            <span className="font-body text-sm font-semibold text-brand-blue tracking-widest uppercase mb-4 block">
              Why 1322 Customs
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ocean-900 leading-tight mb-6">
              The difference is in{" "}
              <span className="font-serif italic text-brand-indigo">the details</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-body text-lg text-ocean-700/60 leading-relaxed">
              We&apos;re not a body shop or an outsourcing mill. We&apos;re a small, focused team
              that treats every project like our reputation depends on it — because it does.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Props grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {props.map((prop, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1} variant="fadeUp">
              <div className="group relative flex gap-6 bg-white rounded-2xl p-8 border border-sand-100 hover:border-brand-blue/15 transition-all duration-500 hover:shadow-lg hover:shadow-brand-blue/5">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 flex items-center justify-center group-hover:from-brand-blue/15 group-hover:to-brand-violet/15 transition-colors duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={prop.icon} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="font-display font-extrabold text-3xl text-gradient-brand mb-1">
                    {prop.stat}
                  </div>
                  <div className="font-display font-semibold text-ocean-900 mb-2">
                    {prop.label}
                  </div>
                  <p className="font-body text-sm text-ocean-700/50 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
