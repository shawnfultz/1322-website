import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WaveDivider from "./WaveDivider";
import Prose from "./Prose";
import type { ProseBlock } from "@/lib/prose";
import { SUPPORT_EMAIL } from "@/lib/support";

interface SupportPageProps {
  badge: string;
  title: string;
  titleAccent: string;
  lede: string;
  updated: string;
  updatedISO: string;
  blocks: ProseBlock[];
  status?: string;
  appName: string;
  privacyHref?: string;
}

export default function SupportPage({
  badge,
  title,
  titleAccent,
  lede,
  updated,
  updatedISO,
  blocks,
  status,
  appName,
  privacyHref,
}: SupportPageProps) {
  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="relative bg-ocean-950 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-950" />
        <div className="absolute inset-0 ocean-ripple" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-seafoam-400" />
              <span className="font-body text-sm text-white/70">{badge}</span>
            </span>
            {status && (
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-seafoam-400/30 bg-seafoam-400/10">
                <span className="font-body text-xs font-semibold tracking-wider uppercase text-seafoam-300">
                  {status}
                </span>
              </span>
            )}
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            {title} <span className="text-gradient-brand">{titleAccent}</span>
          </h1>

          <p className="font-body text-lg text-white/60 leading-relaxed">{lede}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider topColor="transparent" bottomColor="#ffffff" />
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Contact first — this is what most people arrive for */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-indigo p-8 md:p-10 text-white mb-14 shadow-xl shadow-brand-blue/20">
            <div className="font-body text-sm font-semibold tracking-widest uppercase text-white/70 mb-3">
              Contact support
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
              A real person reads this, usually same day.
            </h2>
            <p className="font-body text-white/80 leading-relaxed mb-7 max-w-xl">
              Email is the fastest way to get help with {appName}. Tell me the boat,
              the speaker, and roughly when you were out &mdash; that is almost always
              enough to work out what happened.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`${appName} support`)}`}
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-white text-ocean-900 rounded-full font-body font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {SUPPORT_EMAIL}
            </a>
          </div>

          <Prose blocks={blocks} />

          {/* Footer links */}
          <div className="mt-16 pt-10 border-t border-sand-200">
            <h2 className="font-display font-semibold text-sm text-ocean-900 tracking-widest uppercase mb-5">
              Related
            </h2>
            <div className="flex flex-col gap-3">
              {privacyHref && (
                <Link
                  href={privacyHref}
                  className="group inline-flex items-center gap-2 font-body text-ocean-700/70 hover:text-brand-blue transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {appName} privacy policy
                </Link>
              )}
              <Link
                href="/terms"
                className="group inline-flex items-center gap-2 font-body text-ocean-700/70 hover:text-brand-blue transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-brand-blue transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Terms of Service
              </Link>
            </div>

            <p className="font-body text-sm text-ocean-700/40 mt-8">
              Last updated{" "}
              <time dateTime={updatedISO}>{updated}</time>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
