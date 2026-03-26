"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "1322 Customs took our messy data pipeline and turned it into a streamlined AI-powered system. What used to take our team three days now happens in minutes.",
    name: "Sarah Mitchell",
    title: "VP of Operations",
    company: "Tideline Logistics",
    initials: "SM",
  },
  {
    quote:
      "They don't just build software — they understand the business problem first. That's rare. Our custom platform has been a game-changer for patient scheduling.",
    name: "Dr. James Harlow",
    title: "Chief Medical Officer",
    company: "Palmetto Health Partners",
    initials: "JH",
  },
  {
    quote:
      "Working with a local Charleston team that really gets our industry made all the difference. The automation suite they built saves us 40+ hours a week.",
    name: "Rachel Torres",
    title: "Director of Engineering",
    company: "Harbor Point Marine",
    initials: "RT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Tide line top border */}
      <div className="absolute top-0 left-0 right-0 tide-line" />

      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 font-serif text-[200px] leading-none text-brand-blue/[0.03] select-none">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <AnimateOnScroll>
            <span className="font-body text-sm font-semibold text-brand-blue tracking-widest uppercase mb-4 block">
              Testimonials
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ocean-900 leading-tight mb-6">
              Trusted by teams{" "}
              <span className="font-serif italic text-brand-indigo">across industries</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15} variant="fadeUp">
              <div className="group relative bg-sand-50 rounded-3xl p-8 lg:p-10 border border-sand-100 hover:border-brand-blue/15 transition-all duration-500 hover:shadow-xl hover:shadow-brand-blue/5 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#2563eb">
                      <path d="M8 1l2.09 4.26L15 6.27l-3.5 3.42.83 4.81L8 12.4l-4.33 2.1.83-4.81L1 6.27l4.91-1.01L8 1z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-ocean-700/70 leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-sand-200">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-white font-display font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-ocean-900 text-sm">
                      {t.name}
                    </div>
                    <div className="font-body text-xs text-ocean-700/40">
                      {t.title}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
