"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "AI Solutions",
    description:
      "Custom AI systems that learn your business. From intelligent document processing to predictive analytics, we build AI that delivers real ROI — not hype.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="4" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="28" cy="16" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="16" cy="28" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="4" cy="16" r="2" fill="currentColor" opacity="0.6" />
        <line x1="16" y1="6" x2="16" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="20" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="16" y1="20" x2="16" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="12" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    gradient: "from-brand-blue to-seafoam-400",
  },
  {
    title: "Custom Software",
    description:
      "Web, mobile, and distributed systems built for scale. We architect solutions with modern frameworks and clean code that your team can maintain and grow.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 14l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 14l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="17" y1="12" x2="15" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="3" y1="27" x2="29" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-brand-indigo to-brand-blue",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Kubernetes, AWS, serverless — we design cloud architectures that are resilient, cost-efficient, and ready to scale when you are. DevOps done right.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24a6 6 0 01-.5-12A8 8 0 0124 14a5 5 0 01-1 10H8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 18l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="15" x2="16" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-brand-violet to-brand-indigo",
  },
  {
    title: "Smart Automation",
    description:
      "Eliminate repetitive work with intelligent workflows. We connect your tools, automate your processes, and give your team back their time.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 13l-4.5 4.5L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.8 7.8l2.8 2.8M21.4 21.4l2.8 2.8M7.8 24.2l2.8-2.8M21.4 10.6l2.8-2.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    gradient: "from-seafoam-400 to-brand-violet",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sand-200 to-transparent" />

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
              Solutions that{" "}
              <span className="font-serif italic text-brand-indigo">move the needle</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-body text-lg text-ocean-700/60 leading-relaxed">
              From concept to deployment, we build technology that gives your business
              a genuine competitive edge.
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
