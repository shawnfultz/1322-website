"use client";

import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WaveDivider from "./WaveDivider";
import AnimateOnScroll from "./AnimateOnScroll";
import { useLeadModal } from "./LeadModalProvider";

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  gradient: string;
  features: ServiceFeature[];
  whyTitle: string;
  whyPoints: string[];
  ctaText?: string;
}

export default function ServicePage({
  badge,
  title,
  titleAccent,
  subtitle,
  gradient,
  features,
  whyTitle,
  whyPoints,
  ctaText = "Get a Free Quote",
}: ServicePageProps) {
  const { open: openModal } = useLeadModal();

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950" />
        <div className="absolute inset-0 ocean-ripple" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${gradient} opacity-[0.06] rounded-full blur-[150px]`} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="text-sm font-body text-white/60">{badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
          >
            {title}{" "}
            <span className="text-gradient-brand">{titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-body text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {ctaText}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-body font-medium text-white/60 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              All Services
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider topColor="transparent" bottomColor="#ffffff" />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean-900 text-center mb-4">
              What&apos;s included
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="font-body text-ocean-700/50 text-center max-w-xl mx-auto mb-16">
              Every project is different, but here&apos;s what you can expect when you work with us.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1} variant="fadeUp">
                <div className="group p-6 rounded-2xl bg-sand-50 border border-sand-100 hover:border-brand-blue/15 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/5 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-ocean-900 mb-2">{feature.title}</h3>
                  <p className="font-body text-sm text-ocean-700/50 leading-relaxed">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="bg-sand-50 py-20 lg:py-28 coastal-waves">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean-900 text-center mb-12">
              {whyTitle}
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {whyPoints.map((point, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08} variant="fadeUp">
                <div className="flex gap-4 items-start bg-white rounded-xl p-5 border border-sand-100">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mt-0.5`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="font-body text-ocean-700/70 leading-relaxed">{point}</p>
                </div>
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
              Ready to get started?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="font-body text-white/40 mb-8 max-w-lg mx-auto">
              Takes 30 seconds. We&apos;ll review your current site and get back to you within 24 hours with a plan.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {ctaText}
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
