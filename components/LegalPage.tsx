import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WaveDivider from "./WaveDivider";
import Prose from "./Prose";
import type { LegalBlock } from "@/lib/legal";

interface LegalPageProps {
  badge: string;
  title: string;
  titleAccent: string;
  lede: string;
  updated: string;
  updatedISO: string;
  blocks: LegalBlock[];
  /** Optional status pill, e.g. an app's release state. */
  status?: string;
  /** Optional related-document links rendered under the body. */
  footerLinks?: { label: string; href: string }[];
}

export default function LegalPage({
  badge,
  title,
  titleAccent,
  lede,
  updated,
  updatedISO,
  blocks,
  status,
  footerLinks,
}: LegalPageProps) {
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
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-brand-violet/30 bg-brand-violet/10">
                <span className="font-body text-xs font-semibold tracking-wider uppercase text-brand-violet-light">
                  {status}
                </span>
              </span>
            )}
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            {title} <span className="text-gradient-brand">{titleAccent}</span>
          </h1>

          <p className="font-body text-lg text-white/60 leading-relaxed mb-8">
            {lede}
          </p>

          <p className="font-body text-sm text-white/40">
            Last updated{" "}
            <time dateTime={updatedISO} className="text-white/60">
              {updated}
            </time>
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider topColor="transparent" bottomColor="#ffffff" />
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Prose blocks={blocks} />

          {footerLinks && footerLinks.length > 0 && (
            <div className="mt-16 pt-10 border-t border-sand-200">
              <h2 className="font-display font-semibold text-sm text-ocean-900 tracking-widest uppercase mb-5">
                Related
              </h2>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-body text-ocean-700/70 hover:text-brand-blue transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="text-brand-blue transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M1 7h12M8 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
