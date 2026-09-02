import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy, appPolicies } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | 1322 Customs",
  description:
    "How 1322 Customs handles your information on 1322customs.com and in client work. No analytics, no advertising, no data selling. App policies linked.",
  alternates: { canonical: "https://1322customs.com/privacy" },
};

export default function Privacy() {
  return (
    <>
      <LegalPage
        badge={privacyPolicy.badge}
        title={privacyPolicy.title}
        titleAccent={privacyPolicy.titleAccent}
        lede={privacyPolicy.lede}
        updated={privacyPolicy.updated}
        updatedISO={privacyPolicy.updatedISO}
        blocks={privacyPolicy.blocks}
        footerLinks={[
          { label: "Terms of Service", href: "/terms" },
          ...appPolicies.map((p) => ({
            label: `${p.appName} — app privacy policy`,
            href: `/privacy/${p.slug}`,
          })),
        ]}
      />
      {/* App policy index — crawlable list so each App Store URL is discoverable */}
      <section className="bg-sand-50 border-t border-sand-200 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="font-body text-sm font-semibold text-brand-blue tracking-widest uppercase mb-4 block">
            Our Apps
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean-900 leading-tight mb-4">
            Each app has its own policy
          </h2>
          <p className="font-body text-lg text-ocean-700/60 leading-relaxed mb-10">
            Our apps handle data differently from each other, so none of them
            share a policy. These are the URLs referenced from their App Store
            listings.
          </p>
          <div className="grid gap-5">
            {appPolicies.map((p) => (
              <Link
                key={p.slug}
                href={`/privacy/${p.slug}`}
                className="group block bg-white rounded-2xl p-7 border border-sand-200 hover:border-brand-blue/25 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display font-bold text-xl text-ocean-900">
                    {p.appName}
                  </h3>
                  <span className="font-body text-[11px] font-semibold tracking-wider uppercase text-brand-violet bg-brand-violet/10 border border-brand-violet/20 rounded-full px-2.5 py-1">
                    {p.status}
                  </span>
                </div>
                <p className="font-body text-ocean-700/60 leading-relaxed mb-4">
                  {p.summary}
                </p>
                <div className="flex items-center gap-2 text-brand-blue">
                  <span className="font-body text-sm font-medium">
                    1322customs.com/privacy/{p.slug}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
