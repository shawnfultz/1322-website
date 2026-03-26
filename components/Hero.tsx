"use client";

import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import { useLeadModal } from "./LeadModalProvider";

export default function Hero() {
  const { open: openModal } = useLeadModal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ocean-950">
      {/* Charleston background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-charleston.jpg')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-ocean-950/50" />
      {/* Gradient overlay — heavier at bottom for wave transition, lighter at top to show image */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/20 to-transparent" />

      {/* Subtle blue tint at bottom for wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ocean-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-station-500 animate-pulse-slow" />
            <span className="text-sm font-body text-white/70">
              Charleston, SC &mdash; Web Modernization for Trades & Marine
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-6"
          >
            Your Business
            <br />
            Deserves a{" "}
            <span className="text-gradient-brand">Better</span>
            <br />
            Website.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl font-body text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            We modernize outdated websites for trade businesses and marine
            companies. Fast turnaround, modern design, built to actually
            bring you customers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
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
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-medium text-white/70 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-body text-white/30 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider topColor="transparent" bottomColor="#faf8f5" />
      </div>
    </section>
  );
}
