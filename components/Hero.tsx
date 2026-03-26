"use client";

import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";

function CompassRose() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-[0.04] animate-spin-very-slow"
    >
      {/* Outer circle */}
      <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="170" stroke="white" strokeWidth="0.3" />
      {/* Cardinal lines */}
      <line x1="200" y1="10" x2="200" y2="80" stroke="white" strokeWidth="1" />
      <line x1="200" y1="320" x2="200" y2="390" stroke="white" strokeWidth="1" />
      <line x1="10" y1="200" x2="80" y2="200" stroke="white" strokeWidth="1" />
      <line x1="320" y1="200" x2="390" y2="200" stroke="white" strokeWidth="1" />
      {/* Diagonal lines */}
      <line x1="66" y1="66" x2="120" y2="120" stroke="white" strokeWidth="0.5" />
      <line x1="280" y1="280" x2="334" y2="334" stroke="white" strokeWidth="0.5" />
      <line x1="334" y1="66" x2="280" y2="120" stroke="white" strokeWidth="0.5" />
      <line x1="120" y1="280" x2="66" y2="334" stroke="white" strokeWidth="0.5" />
      {/* Center diamond */}
      <path d="M200 140 L260 200 L200 260 L140 200 Z" stroke="white" strokeWidth="0.8" />
      <path d="M200 160 L240 200 L200 240 L160 200 Z" stroke="white" strokeWidth="0.5" />
      {/* N marker */}
      <text x="200" y="55" textAnchor="middle" fill="white" fontSize="16" fontFamily="serif" opacity="0.8">N</text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ocean-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-950" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[150px] animate-pulse-slow" />

      {/* Compass rose watermark */}
      <CompassRose />

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
            <span className="w-2 h-2 rounded-full bg-seafoam-400 animate-pulse-slow" />
            <span className="text-sm font-body text-white/70">
              Charleston, SC &mdash; Software & AI Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-6"
          >
            Crafting the
            <br />
            <span className="text-gradient-brand">Future</span> of
            <br />
            Software
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl font-body text-white/50 max-w-xl mb-10 leading-relaxed"
          >
            Where lowcountry craft meets cutting-edge technology. We build
            intelligent software solutions that transform how businesses operate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M3 8h10M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-medium text-white/70 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              Explore Services
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
