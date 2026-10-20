import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { supportDocs, SUPPORT_EMAIL } from "@/lib/support";

export const metadata: Metadata = {
  title: "App Support | 1322 Customs",
  description:
    "Support for the iPhone apps published by 1322 Customs. Email a real person, usually same-day.",
  alternates: { canonical: "https://1322customs.com/support" },
};

export default function Support() {
  return (
    <main>
      <Navigation />

      <section className="relative bg-ocean-950 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-950" />
        <div className="absolute inset-0 ocean-ripple" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-seafoam-400" />
            <span className="font-body text-sm text-white/70">Support</span>
          </span>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            App <span className="text-gradient-brand">Support</span>
          </h1>

          <p className="font-body text-lg text-white/60 leading-relaxed">
            Help for the iPhone apps we publish. Every one of them reaches the same
            inbox, and a real person reads it.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider topColor="transparent" bottomColor="#ffffff" />
        </div>
      </section>

      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="grid gap-5 mb-12">
            {supportDocs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/support/${doc.slug}`}
                className="group block bg-sand-50 rounded-2xl p-7 border border-sand-200 hover:border-brand-blue/25 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-display font-bold text-xl text-ocean-900">
                    {doc.appName}
                  </h2>
                  <span className="font-body text-[11px] font-semibold tracking-wider uppercase text-brand-blue bg-brand-blue/10 border border-brand-blue/20 rounded-full px-2.5 py-1">
                    {doc.status}
                  </span>
                </div>
                <p className="font-body text-ocean-700/60 leading-relaxed mb-4">
                  {doc.summary}
                </p>
                <div className="flex items-center gap-2 text-brand-blue">
                  <span className="font-body text-sm font-medium">
                    1322customs.com/support/{doc.slug}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl border border-sand-200 bg-sand-50 p-7">
            <h2 className="font-display font-bold text-lg text-ocean-900 mb-2">
              Something else?
            </h2>
            <p className="font-body text-ocean-700/70 leading-relaxed mb-5">
              Project enquiries, or an app not listed here &mdash; same inbox.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 font-body font-semibold text-brand-blue hover:text-brand-indigo transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
