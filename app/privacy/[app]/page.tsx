import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { appPolicies, getAppPolicy } from "@/lib/legal";

export function generateStaticParams() {
  return appPolicies.map((p) => ({ app: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ app: string }>;
}): Promise<Metadata> {
  const { app } = await params;
  const policy = getAppPolicy(app);
  if (!policy) return {};

  return {
    title: `${policy.appName} Privacy Policy | 1322 Customs`,
    description: policy.summary,
    alternates: { canonical: `https://1322customs.com/privacy/${policy.slug}` },
  };
}

export default async function AppPrivacy({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app } = await params;
  const policy = getAppPolicy(app);
  if (!policy) notFound();

  return (
    <LegalPage
      badge={policy.badge}
      title={policy.title}
      titleAccent={policy.titleAccent}
      lede={policy.lede}
      updated={policy.updated}
      updatedISO={policy.updatedISO}
      blocks={policy.blocks}
      status={policy.status}
      footerLinks={[
        ...appPolicies
          .filter((p) => p.slug !== policy.slug)
          .map((p) => ({
            label: `${p.appName} — app privacy policy`,
            href: `/privacy/${p.slug}`,
          })),
        { label: "1322 Customs privacy policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ]}
    />
  );
}
