"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const props = [
  {
    stat: "2-4",
    label: "Weeks to Launch",
    description: "No six-month timelines. We move fast so you start seeing results sooner, not later.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    gradient: "from-seafoam-400 to-brand-blue",
    iconColor: "#0ea5e9",
  },
  {
    stat: "100%",
    label: "Mobile Friendly",
    description: "Over 60% of your customers are on their phone. Every site we build looks great on any device.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    gradient: "from-brand-blue to-brand-indigo",
    iconColor: "#2563eb",
  },
  {
    stat: "Local",
    label: "Charleston Based",
    description: "We're not overseas. We're right here in Charleston. Same timezone, real conversations, no runaround.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    gradient: "from-seafoam-400 to-brand-blue",
    iconColor: "#0ea5e9",
  },
  {
    stat: "You",
    label: "Own Everything",
    description: "Your site, your code, your domain. No proprietary lock-in or platforms you can't leave. You own it all.",
    icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
    gradient: "from-brand-indigo to-brand-violet",
    iconColor: "#4f46e5",
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
              You don&apos;t need an agency with 50 people and a 6-figure proposal.
              You need a team that gets it done right, gets it done fast, and doesn&apos;t disappear.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Props grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {props.map((prop, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1} variant="fadeUp">
              <div className="group relative flex gap-6 bg-white rounded-2xl p-8 border border-sand-100 hover:border-brand-blue/15 transition-all duration-500 hover:shadow-lg hover:shadow-brand-blue/5 overflow-hidden">
                {/* Coastal gradient accent — top edge */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center shadow-sm`}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
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
