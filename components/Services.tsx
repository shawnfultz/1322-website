"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "iOS & Mobile Apps",
    href: "/services/app-development",
    description:
      "Native Swift and SwiftUI apps built for the App Store — not a website in a wrapper. We handle the build, the review submission, and the updates after launch.",
    tags: ["Swift & SwiftUI", "App Store submission", "Push & offline"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="14" height="26" rx="3" />
        <path d="M14 6.5h4" />
        <path d="M13 14h6M13 18.5h6M13 23h3.5" opacity="0.55" />
      </svg>
    ),
    gradient: "from-seafoam-400 to-brand-blue",
  },
  {
    title: "Web Design & Modernization",
    href: "/services/website-modernization",
    description:
      "Your site is outdated and it's costing you work. We rebuild it with modern tech, fast load times, and a design that turns visitors into customers.",
    tags: ["2–4 week builds", "SEO built in", "Mobile-first"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h26" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="9" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="10.5" cy="9" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="9" r="1" fill="currentColor" opacity="0.5" />
        <path d="M8 17h6M8 20h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <rect x="20" y="16" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    gradient: "from-brand-blue to-brand-indigo",
  },
  {
    title: "Custom Software & Integrations",
    href: "/services/custom-software",
    description:
      "Booking systems, customer portals, dashboards, AI tooling — plus the plumbing that connects them to the software you already run your business on.",
    tags: ["Customer portals", "Booking & payments", "API integrations"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="16" cy="7" rx="10.5" ry="4" />
        <path d="M5.5 7v8c0 2.21 4.7 4 10.5 4s10.5-1.79 10.5-4V7" />
        <path d="M5.5 15v8c0 2.21 4.7 4 10.5 4s10.5-1.79 10.5-4v-8" />
      </svg>
    ),
    gradient: "from-brand-indigo to-brand-violet",
  },
  {
    title: "Ongoing Growth Partnership",
    href: "/services/growth-software",
    description:
      "Launch is the start, not the finish. We stay on for updates, new features, and the next thing you need built — without a new agency search each time.",
    tags: ["Monthly retainers", "No lock-in", "You own the code"],
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
              One team,{" "}
              <span className="font-serif italic text-brand-indigo">the whole build</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-body text-lg text-ocean-700/60 leading-relaxed">
              Most shops do one of these and subcontract the rest. We keep apps, web,
              and the software underneath in-house &mdash; then stay on once it&apos;s live.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1} variant="scaleUp">
              <Link href={service.href} className="block group relative bg-sand-50 rounded-3xl p-8 lg:p-10 border border-sand-100 hover:border-brand-blue/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1 h-full">
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
                <p className="font-body text-ocean-700/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capability chips */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[13px] font-medium text-ocean-700 bg-white border border-sand-200 rounded-full px-3.5 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                  <span className="font-body text-sm font-medium">Learn more</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
