"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import WaveDivider from "./WaveDivider";
import PhoneFrame from "./screens/PhoneFrame";
import WakeHelmScreen from "./screens/WakeHelmScreen";
import ClearHorizonTodayScreen from "./screens/ClearHorizonTodayScreen";

function Check({ color }: { color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-1"
      aria-hidden="true"
    >
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-body text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
      {children}
    </span>
  );
}

export default function AppShowcase() {
  return (
    <>
      <WaveDivider topColor="#ffffff" bottomColor="#0c1b2a" />
      <section id="apps" className="relative bg-ocean-900 py-24 lg:py-32 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-900" />
        <div className="absolute inset-0 ocean-ripple" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-brand-blue/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-20 w-[620px] h-[620px] bg-brand-violet/5 rounded-full blur-[190px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <AnimateOnScroll>
              <span className="font-body text-sm font-semibold text-seafoam-400 tracking-widest uppercase mb-4 block">
                App Development
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
                We ship our own apps,{" "}
                <span className="font-serif italic text-seafoam-400">not just invoices</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="font-body text-lg text-white/40 leading-relaxed">
                Two native iOS products built in-house under 1322 Customs &mdash; same
                Swift, same App Store process, same review scars we&apos;ll put behind
                your build.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Featured apps */}
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-14">
            {/* Wake */}
            <AnimateOnScroll variant="fadeUp">
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                <PhoneFrame width={295} height={616} designWidth={402} designHeight={874} radius={42}>
                  <WakeHelmScreen />
                </PhoneFrame>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" stroke="#fff" strokeLinecap="round" aria-hidden="true">
                        <path d="M487 373 A 170 170 0 0 1 487 651" strokeWidth="52" />
                        <path d="M536 303 A 255 255 0 0 1 536 721" strokeWidth="52" opacity="0.62" />
                        <path d="M420 512 C 370 444, 300 440, 236 448 L 236 576 C 300 584, 370 580, 420 512 Z" fill="#fff" stroke="none" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white tracking-tight">Wake</h3>
                  </div>

                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-seafoam-400/10 border border-seafoam-400/30 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-seafoam-400" />
                    <span className="font-body text-xs font-bold tracking-wider text-seafoam-300">
                      IN TESTFLIGHT
                    </span>
                  </span>

                  <div className="font-display font-semibold text-white mb-2.5 leading-snug">
                    Auto volume for boat speed &amp; no-wake zones
                  </div>

                  <p className="font-body text-[15px] text-white/45 leading-relaxed mb-5">
                    Reads GPS speed and moves system volume through learned, per-speaker
                    profiles &mdash; so music rises onto plane and drops in the no-wake zone
                    without anyone taking a hand off the wheel.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Chip>Swift &amp; SwiftUI</Chip>
                    <Chip>CoreLocation</Chip>
                    <Chip>SwiftData</Chip>
                    <Chip>StoreKit 2</Chip>
                  </div>

                  <div className="border-t border-white/10 pt-5 flex flex-col gap-3">
                    <div className="flex gap-2.5">
                      <Check color="#38bdf8" />
                      <span className="font-body text-sm text-white/55 leading-relaxed">
                        Learns a new speaker in about two outings
                      </span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check color="#38bdf8" />
                      <span className="font-body text-sm text-white/55 leading-relaxed">
                        Works in the background, one-handed, in direct sun
                      </span>
                    </div>
                  </div>

                  <a
                    href="/privacy/wake"
                    className="inline-flex items-center gap-2 mt-5 font-body text-sm text-white/35 hover:text-seafoam-400 transition-colors"
                  >
                    Privacy policy
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Clear Horizon */}
            <AnimateOnScroll variant="fadeUp" delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                <PhoneFrame width={295} height={616} designWidth={402} designHeight={874} radius={42}>
                  <ClearHorizonTodayScreen />
                </PhoneFrame>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-[9px] overflow-hidden flex-shrink-0">
                      <svg width="36" height="36" viewBox="0 0 1024 1024" aria-hidden="true">
                        <defs>
                          <linearGradient id="chMarkShowcase" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#00D4FF" />
                            <stop offset="0.42" stopColor="#00A6E0" />
                            <stop offset="0.62" stopColor="#00628F" />
                            <stop offset="1" stopColor="#04263A" />
                          </linearGradient>
                        </defs>
                        <rect width="1024" height="1024" fill="url(#chMarkShowcase)" />
                        <circle cx="512" cy="600" r="176" fill="#EFFBFF" opacity="0.97" />
                        <rect x="0" y="600" width="1024" height="12" fill="#FFF" opacity="0.92" />
                        <g fill="#FFF">
                          <rect x="150" y="680" width="724" height="22" rx="11" opacity="0.30" />
                          <rect x="236" y="756" width="552" height="22" rx="11" opacity="0.18" />
                        </g>
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                      Clear Horizon
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet-light/30 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet-light" />
                    <span className="font-body text-xs font-bold tracking-wider text-brand-violet-light">
                      IN DEVELOPMENT
                    </span>
                  </span>

                  <div className="font-display font-semibold text-white mb-2.5 leading-snug">
                    One honest go/no-go answer for today
                  </div>

                  <p className="font-body text-[15px] text-white/45 leading-relaxed mb-5">
                    Reads NOAA tides and marine conditions into a single verdict for a
                    specific boat on a specific day &mdash; then keeps that boat&apos;s costs,
                    upkeep, and paperwork in order the rest of the time.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Chip>SwiftUI</Chip>
                    <Chip>Supabase</Chip>
                    <Chip>MapKit</Chip>
                    <Chip>NOAA data</Chip>
                  </div>

                  <div className="border-t border-white/10 pt-5 flex flex-col gap-3">
                    <div className="flex gap-2.5">
                      <Check color="#a78bfa" />
                      <span className="font-body text-sm text-white/55 leading-relaxed">
                        Answers the question instead of showing you four charts
                      </span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check color="#a78bfa" />
                      <span className="font-body text-sm text-white/55 leading-relaxed">
                        Offline-first, because the dock has no signal
                      </span>
                    </div>
                  </div>

                  <a
                    href="/privacy/clear-horizon"
                    className="inline-flex items-center gap-2 mt-5 font-body text-sm text-white/35 hover:text-brand-violet-light transition-colors"
                  >
                    Privacy policy
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
