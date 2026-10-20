import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SupportPage from "@/components/SupportPage";
import { supportDocs, getSupportDoc } from "@/lib/support";
import { getAppPolicy } from "@/lib/legal";

export function generateStaticParams() {
  return supportDocs.map((d) => ({ app: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ app: string }>;
}): Promise<Metadata> {
  const { app } = await params;
  const doc = getSupportDoc(app);
  if (!doc) return {};

  return {
    title: `${doc.appName} Support | 1322 Customs`,
    description: doc.summary,
    alternates: { canonical: `https://1322customs.com/support/${doc.slug}` },
  };
}

export default async function AppSupport({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app } = await params;
  const doc = getSupportDoc(app);
  if (!doc) notFound();

  // Only link a privacy policy that actually exists.
  const privacy = getAppPolicy(doc.slug);

  return (
    <SupportPage
      badge={doc.badge}
      title={doc.title}
      titleAccent={doc.titleAccent}
      lede={doc.lede}
      updated={doc.updated}
      updatedISO={doc.updatedISO}
      blocks={doc.blocks}
      status={doc.status}
      appName={doc.appName}
      privacyHref={privacy ? `/privacy/${privacy.slug}` : undefined}
    />
  );
}
