"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import PhoneFrame from "./screens/PhoneFrame";
import {
  HvacDispatchScreen,
  RentalBookingScreen,
  RealtorPortalScreen,
} from "./screens/ClientScreens";

const builds = [
  {
    screen: <HvacDispatchScreen />,
    title: "Field & dispatch",
    description:
      "Calls, equipment history, photos, and signatures — captured in an attic with no bars, synced later.",
    raised: false,
  },
  {
    screen: <RentalBookingScreen />,
    title: "Booking & payments",
    description:
      "Live availability, deposits, and waivers — wired to the calendar you already keep.",
    raised: true,
  },
  {
    screen: <RealtorPortalScreen />,
    title: "Leads & property management",
    description:
      "Every inquiry, showing, and maintenance ticket in one place — so no lead sits for an hour.",
    raised: false,
  },
];

export default function ClientApps() {
  return (
    <section className="relative bg-ocean-950 py-24 lg:py-32 overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-950" />
      <div className="absolute top-0 left-[12%] w-[720px] h-[720px] bg-brand-blue/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-24 w-[600px] h-[600px] bg-brand-violet/5 rounded-full blur-[190px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <AnimateOnScroll>
            <span className="font-body text-sm font-semibold text-seafoam-400 tracking-widest uppercase mb-4 block">
              And For Your Business
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              Software your crew{" "}
              <span className="font-serif italic text-seafoam-400">actually opens every day</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-body text-lg text-white/40 leading-relaxed">
              Built native, so it works in an attic, on the water, or anywhere the
              signal drops. Three builds we know how to do &mdash; your trade, your
              branding, your workflow.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Phones */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-14 lg:gap-12">
          {builds.map((build, i) => (
            <AnimateOnScroll key={build.title} delay={i * 0.12} variant="fadeUp">
              <div
                className={`flex flex-col items-center gap-6 ${
                  build.raised ? "" : "lg:pt-11"
                }`}
              >
                <PhoneFrame width={320} height={710}>
                  {build.screen}
                </PhoneFrame>
                <div className="text-center max-w-[300px]">
                  <div className="font-display font-bold text-lg text-white mb-1.5">
                    {build.title}
                  </div>
                  <div className="font-body text-sm text-white/40 leading-relaxed">
                    {build.description}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Honest framing — these are illustrative, not shipped client work */}
        <AnimateOnScroll delay={0.3}>
          <p className="text-center font-body text-xs text-white/25 mt-14 max-w-xl mx-auto leading-relaxed">
            Representative builds shown with example branding. Wake and Clear Horizon
            above are our own shipped work.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
