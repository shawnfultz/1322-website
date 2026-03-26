"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { useLeadModal } from "./LeadModalProvider";

export default function About() {
  const { open: openModal } = useLeadModal();
  return (
    <section id="about" className="relative bg-sand-50 py-24 lg:py-32 overflow-hidden coastal-waves">
      {/* Decorative wave watermark */}
      <svg
        className="absolute top-20 right-0 w-[600px] opacity-[0.04]"
        viewBox="0 0 600 200"
        fill="none"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M0,${100 + i * 15} C150,${60 + i * 15} 300,${140 + i * 15} 600,${100 + i * 15}`}
            stroke="#2563eb"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - text */}
          <div>
            <AnimateOnScroll>
              <span className="font-body text-sm font-semibold text-brand-blue tracking-widest uppercase mb-4 block">
                About Us
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-ocean-900 leading-tight mb-6">
                Your website is your
                <br />
                <span className="font-serif italic text-brand-indigo">first impression.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="font-body text-lg text-ocean-700/70 leading-relaxed mb-6">
                Most small businesses are running on websites built five or ten
                years ago &mdash; slow, outdated, and not bringing in the work
                they should. We fix that. Fast.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <p className="font-body text-lg text-ocean-700/70 leading-relaxed mb-8">
                Based in Charleston, SC with over a decade of software experience,
                we specialize in taking what you have and making it modern, mobile-friendly,
                and built to convert. No six-month timelines. No bloated contracts.
                Just a better website that works harder for your business.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.4}>
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-2 px-6 py-3 font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Get Started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </AnimateOnScroll>
          </div>

          {/* Right column - visual */}
          <AnimateOnScroll variant="fadeRight" delay={0.2}>
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-ocean-900/5 border border-sand-200">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { number: "10+", label: "Years Building Software", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { number: "2-4", label: "Week Turnaround", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                    { number: "100%", label: "Mobile Optimized", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
                    { number: "SEO", label: "Built In From Day 1", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d={stat.icon} />
                        </svg>
                      </div>
                      <div className="font-display font-bold text-3xl text-ocean-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="font-body text-sm text-ocean-700/50">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-2xl p-5 shadow-lg shadow-brand-blue/20 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M10 2L2 7l8 5 8-5-8-5zM2 17l8 5 8-5M2 12l8 5 8-5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">Fast Turnaround</div>
                    <div className="font-body text-xs text-white/70">Weeks, not months</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
