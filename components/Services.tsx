"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Website Modernization",
    description:
      "Your site is outdated and it's costing you jobs. We rebuild it with modern tech, fast load times, and a design that actually converts visitors into customers.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h26" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="9" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="10.5" cy="9" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="9" r="1" fill="currentColor" opacity="0.5" />
        <path d="M8 17h6M8 20h10M8 23h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <rect x="20" y="16" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    gradient: "from-brand-blue to-seafoam-400",
  },
  {
    title: "Marine & Maritime Web",
    description:
      "Marinas, boat dealers, charter companies, marine services — we know the industry and build sites that speak to boaters. Clean, fast, and built for the water.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 24c4-3 8 1 12-2s8 1 12-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 28c4-3 8 1 12-2s8 1 12-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M16 6v14M10 20l6-14 6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    gradient: "from-brand-indigo to-brand-blue",
  },
  {
    title: "Trade Business Websites",
    description:
      "HVAC, plumbing, electrical, roofing, landscaping — if you work with your hands, we make sure your website works just as hard. Local SEO included.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M20 8l-2-2h-4l-2 2H6v4h20V8h-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="6" y="12" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 17v4M14 19h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-brand-violet to-brand-indigo",
  },
  {
    title: "Growth & Custom Software",
    description:
      "Once your site is dialed in, we can go further — booking systems, customer portals, automation, AI tools. We grow with your business.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26V14M12 26V10M18 26V16M24 26V6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 8l8-2 8 4 8-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
    ),
    gradient: "from-seafoam-400 to-brand-violet",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Tide line top border */}
      <div className="absolute top-0 left-0 right-0 tide-line" />

      {/* Subtle coastal wave pattern background */}
      <div className="absolute inset-0 coastal-waves opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <AnimateOnScroll>
            <span className="font-body text-sm font-semibold text-brand-blue tracking-widest uppercase mb-4 block">
              What We Do
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ocean-900 leading-tight mb-6">
              Websites that{" "}
              <span className="font-serif italic text-brand-indigo">work for you</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-body text-lg text-ocean-700/60 leading-relaxed">
              No matter your industry, we take outdated sites and turn them into
              modern, fast, mobile-friendly tools that bring in business.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1} variant="scaleUp">
              <div className="group relative bg-sand-50 rounded-3xl p-8 lg:p-10 border border-sand-100 hover:border-brand-blue/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1">
                {/* Gradient bar at top */}
                <div
                  className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-ocean-900 mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-ocean-700/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                  <span className="font-body text-sm font-medium">Learn more</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
