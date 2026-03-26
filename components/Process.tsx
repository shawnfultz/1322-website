"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import WaveDivider from "./WaveDivider";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, your challenges, and your goals. No cookie-cutter assessments — we map the real landscape before charting a course.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture, UX, and technical blueprints come together. We prototype fast so you can see and feel the solution before we build it.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Agile sprints with full transparency. You see progress every week, give feedback in real-time, and never wonder where things stand.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "Deployment, monitoring, and continuous improvement. We don't disappear after launch — we stay in the water with you.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
];

export default function Process() {
  return (
    <>
      <WaveDivider topColor="#ffffff" bottomColor="#0c1b2a" />
      <section id="process" className="relative bg-ocean-900 py-24 lg:py-32 overflow-hidden noise-overlay">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <AnimateOnScroll>
              <span className="font-body text-sm font-semibold text-seafoam-400 tracking-widest uppercase mb-4 block">
                Our Process
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
                How we{" "}
                <span className="font-serif italic text-seafoam-400">navigate</span>{" "}
                your project
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="font-body text-lg text-white/40 leading-relaxed">
                A proven approach refined across dozens of projects. Clear milestones,
                constant communication, no surprises.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15} variant="fadeUp">
                <div className="relative group">
                  {/* Connecting line (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px">
                      <div className="w-full h-full bg-gradient-to-r from-white/10 to-white/5" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                  )}

                  {/* Step card */}
                  <div className="text-center lg:text-left">
                    {/* Number + icon */}
                    <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-brand-blue/30 transition-colors duration-500" />
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-blue-light group-hover:text-seafoam-400 transition-colors duration-300"
                      >
                        <path d={step.icon} />
                      </svg>
                      <span className="absolute -top-2 -right-2 font-display text-xs font-bold text-brand-blue bg-ocean-950 border border-white/10 rounded-full w-7 h-7 flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-white/40 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider topColor="#0c1b2a" bottomColor="#faf8f5" flip />
    </>
  );
}
