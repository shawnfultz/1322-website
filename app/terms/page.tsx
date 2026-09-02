import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsOfService, appPolicies } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service | 1322 Customs",
  description:
    "Terms for using 1322customs.com. Project work is governed by a separate written agreement; our iPhone apps are licensed under Apple's standard EULA.",
  alternates: { canonical: "https://1322customs.com/terms" },
};

export default function Terms() {
  return (
    <LegalPage
      badge={termsOfService.badge}
      title={termsOfService.title}
      titleAccent={termsOfService.titleAccent}
      lede={termsOfService.lede}
      updated={termsOfService.updated}
      updatedISO={termsOfService.updatedISO}
      blocks={termsOfService.blocks}
      footerLinks={[
        { label: "Privacy Policy", href: "/privacy" },
        ...appPolicies.map((p) => ({
          label: `${p.appName} — app privacy policy`,
          href: `/privacy/${p.slug}`,
        })),
      ]}
    />
  );
}
