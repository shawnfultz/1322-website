"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
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
                Born on the Coast.
                <br />
                <span className="font-serif italic text-brand-indigo">Built for the future.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="font-body text-lg text-ocean-700/70 leading-relaxed mb-6">
                With over 10 years of deep experience in the mortgage and financial
                services industry, 1322 Customs has expanded into a full-service
                software and AI studio serving healthcare, logistics, marine,
                real estate, and beyond.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <p className="font-body text-lg text-ocean-700/70 leading-relaxed mb-8">
                Whether you need a polished front-end website or a complex distributed
                system, we move fast without cutting corners. Our Charleston-based team
                brings hands-on industry knowledge to every project &mdash; we don&apos;t
                just write code, we understand the business behind it.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.4}>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["bg-brand-blue", "bg-brand-indigo", "bg-brand-violet", "bg-seafoam-400"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-full ${bg} border-2 border-sand-50 flex items-center justify-center`}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="white" opacity="0.9">
                          <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM2 14a6 6 0 0112 0H2z" />
                        </svg>
                      </div>
                    )
                  )}
                </div>
                <p className="font-body text-sm text-ocean-700/50">
                  A dedicated team of engineers, designers & strategists
                </p>
              </div>
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
                    { number: "10+", label: "Years in Industry", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { number: "6+", label: "Verticals Served", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
                    { number: "50+", label: "Projects Delivered", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                    { number: "Fast", label: "Time to Delivery", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
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
                    <div className="font-display font-bold text-sm">Full-Stack AI</div>
                    <div className="font-body text-xs text-white/70">End-to-end solutions</div>
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
