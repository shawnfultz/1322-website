"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const props = [
  {
    stat: "One team",
    label: "App, web, and backend together",
    description:
      "No handoffs between an app shop, a web shop, and whoever built your database. Same people, whole stack — which is why the pieces actually fit.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    gradient: "from-seafoam-400 to-brand-blue",
  },
  {
    stat: "Native",
    label: "Real Swift, not a wrapped page",
    description:
      "Camera, GPS, push, offline storage — the things a crew in the field depends on. A website in an app icon can't do them.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    gradient: "from-brand-blue to-brand-indigo",
  },
  {
    stat: "10+ yrs",
    label: "Of software behind the work",
    description:
      "Ten years of shipping software, and a real person on the other end of the phone. Local when you want to meet, remote when you don't.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    gradient: "from-seafoam-400 to-seafoam-500",
  },
  {
    stat: "You own it",
    label: "Code, domain, and App Store listing",
    description:
      "Your repo, your domain, your App Store listing. No proprietary platform, no hostage situation if you ever want to move on.",
    icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
    gradient: "from-brand-indigo to-brand-violet",
  },
];

const places = ["Charleston", "Mount Pleasant", "Summerville", "the Lowcountry"];

export default function WhyUs() {
  return (
    <section className="relative bg-sand-50 py-24 lg:py-32 overflow-hidden coastal-waves">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <AnimateOnScroll>
            <span className="font-body text-sm font-semibold text-brand-blue tracking-widest uppercase mb-4 block">
              Why 1322 Customs
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ocean-900 leading-tight mb-6">
              Charleston-built,{" "}
              <span className="font-serif italic text-brand-indigo">shipping nationwide</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-body text-lg text-ocean-700/60 leading-relaxed">
              You don&apos;t need an agency with fifty people and a six-figure proposal.
              You need a small team that ships, answers the phone, and hands you the keys.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Props grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {props.map((prop, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1} variant="fadeUp">
              <div className="group relative flex gap-6 bg-white rounded-2xl p-8 border border-sand-100 hover:border-brand-blue/15 transition-all duration-500 hover:shadow-lg hover:shadow-brand-blue/5 overflow-hidden h-full">
                {/* Coastal gradient accent — top edge */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center shadow-sm`}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={prop.icon} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="font-display font-extrabold text-3xl text-gradient-brand mb-1">
                    {prop.stat}
                  </div>
                  <div className="font-display font-semibold text-ocean-900 mb-2">
                    {prop.label}
                  </div>
                  <p className="font-body text-sm text-ocean-700/50 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Reach strip */}
        <AnimateOnScroll delay={0.2}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 bg-white border border-sand-100 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
              </svg>
              <span className="font-body font-semibold text-ocean-900 text-center lg:text-left">
                Charleston born &mdash; and set up to work remote
              </span>
            </div>
            <div className="hidden lg:block w-px h-7 bg-sand-200" />
            <div className="flex flex-wrap justify-center gap-2">
              {places.map((place) => (
                <span
                  key={place}
                  className="font-body text-[13px] font-medium text-ocean-700 bg-sand-50 border border-sand-200 rounded-full px-3.5 py-1.5"
                >
                  {place}
                </span>
              ))}
              <span className="font-body text-[13px] font-medium text-brand-blue bg-brand-blue/5 border border-brand-blue/15 rounded-full px-3.5 py-1.5">
                &amp; remote, anywhere
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
