"use client";

import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import { useLeadModal } from "./LeadModalProvider";

const pillars = [
  {
    title: "Native iOS Apps",
    description: "Swift and SwiftUI, built for the App Store — not a wrapped website.",
    gradient: "from-seafoam-400 to-brand-blue",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 5h2" />
      </svg>
    ),
  },
  {
    title: "Modern Websites",
    description: "Fast, mobile-first, SEO built in from day one. Live in 2–4 weeks.",
    gradient: "from-brand-blue to-brand-indigo",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="4" width="19" height="14" rx="2.5" />
        <path d="M2.5 8.5h19M8 21h8" />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    description: "Booking, portals, integrations, automation — the engine behind it all.",
    gradient: "from-brand-indigo to-brand-violet",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        <path d="M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
];

export default function Hero() {
  const { open: openModal } = useLeadModal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ocean-950">
      {/* Charleston background image — using img for SEO alt text */}
      <img
        src="/hero-charleston.jpg"
        alt="Morris Island Lighthouse at sunset near Folly Beach, Charleston SC — 1322 Customs app and web development"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Light overlay — let the image breathe */}
      <div className="absolute inset-0 bg-ocean-950/30" />
      {/* Gradient — dark at bottom for wave transition, transparent at top to show image */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-ocean-950/10" />

      {/* Subtle blue tint at bottom for wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ocean-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-32">
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-seafoam-400 animate-pulse-slow" />
            <span className="text-sm font-body text-white/70">
              Charleston, SC &mdash; building for clients nationwide
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-6"
          >
            Apps, websites, and
            <br />
            the software that
            <br />
            <span className="text-gradient-brand">ties them together.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl font-body text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            We build native iOS apps, modern websites, and the custom software
            underneath &mdash; as one team, on one timeline.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Start Your Project
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
            <a
              href="#apps"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-medium text-white/70 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              See the Apps
            </a>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="grid sm:grid-cols-3 gap-5 max-w-4xl"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col gap-3.5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white`}
                >
                  {pillar.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-base text-white mb-1">
                    {pillar.title}
                  </div>
                  <div className="font-body text-sm text-white/45 leading-relaxed">
                    {pillar.description}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider topColor="transparent" bottomColor="#faf8f5" />
      </div>
    </section>
  );
}
