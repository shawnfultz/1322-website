"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WaveDivider from "./WaveDivider";
import AnimateOnScroll from "./AnimateOnScroll";
import { useLeadModal } from "./LeadModalProvider";
import { type AreaData, areas } from "@/lib/areas";

const services = [
  {
    title: "Website Modernization",
    href: "/services/website-modernization",
    description: "Rebuild your outdated site with modern tech, fast load times, and a design that converts.",
    gradient: "from-brand-blue to-seafoam-400",
  },
  {
    title: "Trade Business Websites",
    href: "/services/trade-websites",
    description: "HVAC, plumbing, electrical, roofing — sites built to generate leads with local SEO.",
    gradient: "from-brand-violet to-brand-indigo",
  },
  {
    title: "Marine & Maritime Web",
    href: "/services/marine-web",
    description: "Marinas, dealers, charters — we know the water and build sites that speak to boaters.",
    gradient: "from-brand-indigo to-brand-blue",
  },
  {
    title: "Growth & Custom Software",
    href: "/services/growth-software",
    description: "Booking systems, portals, automation, AI tools — we grow with your business.",
    gradient: "from-seafoam-400 to-brand-violet",
  },
];

export default function AreaPage({ area }: { area: AreaData }) {
  const { open: openModal } = useLeadModal();
  const otherAreas = areas.filter((a) => a.slug !== area.slug).slice(0, 8);

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950" />
        <div className="absolute inset-0 ocean-ripple" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-body text-white/60">
              {area.name}, {area.county}, SC
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
          >
            Web Design & SEO in{" "}
            <span className="text-gradient-brand">{area.name}, SC</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-body text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {area.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Get a Free Quote in {area.name}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider topColor="transparent" bottomColor="#faf8f5" />
        </div>
      </section>

      {/* Intro + Local Facts */}
      <section className="bg-sand-50 py-20 lg:py-28 coastal-waves">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="font-body text-lg text-ocean-700/70 leading-relaxed mb-10">
              {area.intro}
            </p>
          </AnimateOnScroll>

          <div className="space-y-4">
            {area.localFacts.map((fact, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1} variant="fadeUp">
                <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-sand-100">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="font-body text-ocean-700/70 leading-relaxed">{fact}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 tide-line" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean-900 text-center mb-4">
              Industries we serve in {area.name}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="font-body text-ocean-700/50 text-center max-w-xl mx-auto mb-12">
              We work with businesses across {area.name} — here are some of the industries we specialize in.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {area.industries.map((industry, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05} variant="scaleUp">
                <div className="bg-sand-50 rounded-xl p-5 border border-sand-100 text-center hover:border-brand-blue/15 transition-all duration-300 hover:shadow-md">
                  <span className="font-display font-semibold text-sm text-ocean-900">{industry}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-sand-50 py-20 lg:py-28 coastal-waves">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean-900 text-center mb-12">
              Our services in {area.name}
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1} variant="fadeUp">
                <Link href={service.href} className="block group bg-white rounded-2xl p-6 border border-sand-100 hover:border-brand-blue/15 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-ocean-900 mb-1">{service.title}</h3>
                  <p className="font-body text-sm text-ocean-700/50">{service.description}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider topColor="#faf8f5" bottomColor="#0c1b2a" />
      <section className="bg-ocean-950 py-20 lg:py-28 noise-overlay relative">
        <div className="absolute inset-0 ocean-ripple" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to modernize your {area.name} business?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="font-body text-white/40 mb-8">
              Get a free quote in 30 seconds. We&apos;ll review your current site and get back to you within 24 hours.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Get a Free Quote
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Other areas */}
      <section className="bg-ocean-900 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="font-display font-semibold text-white/60 text-sm text-center mb-6">
            Also serving
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/5 font-body text-sm text-white/40 hover:text-white/70 hover:bg-white/10 transition-all duration-200"
              >
                {a.name}, SC
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
