"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import WaveDivider from "./WaveDivider";
import { useLeadModal } from "./LeadModalProvider";

export default function Contact() {
  const { open: openModal } = useLeadModal();

  return (
    <>
      <WaveDivider topColor="#ffffff" bottomColor="#0c1b2a" />
      <section id="contact" className="relative bg-ocean-900 py-24 lg:py-32 overflow-hidden noise-overlay">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-950" />
        <div className="absolute inset-0 ocean-ripple" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="font-body text-sm font-semibold text-seafoam-400 tracking-widest uppercase mb-4 block">
              Ready?
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Your competitors already
              <br />
              <span className="font-serif italic text-seafoam-400">updated their site.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="font-body text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-10">
              We deliver modern, high-performing websites at a price that will surprise
              you &mdash; because our team leverages AI-powered development and a decade
              of experience to move faster than anyone else.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Get a Free Quote
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M3 8h10M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-body font-medium text-white/70 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300 cursor-pointer"
              >
                Schedule a Call
              </button>
            </div>
          </AnimateOnScroll>

          {/* Trust signals */}
          <AnimateOnScroll delay={0.4}>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[
                { label: "Free quote", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "No contracts", icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" },
                { label: "Fast turnaround", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                  <span className="font-body text-xs text-white/30">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Direct contact */}
          <AnimateOnScroll delay={0.5}>
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="font-body text-sm text-white/25">
                Prefer email?{" "}
                <a
                  href="mailto:shawn@1322customs.com"
                  className="text-white/40 hover:text-seafoam-400 transition-colors underline underline-offset-2"
                >
                  shawn@1322customs.com
                </a>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
