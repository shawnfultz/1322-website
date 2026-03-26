import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getArea } from "@/lib/areas";
import AreaPage from "@/components/AreaPage";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return {
    title: `Web Design ${area.name} SC | Website Design & SEO | 1322 Customs`,
    description: area.description,
    alternates: { canonical: `https://1322customs.com/areas/${slug}` },
    openGraph: {
      title: `Web Design ${area.name} SC | 1322 Customs`,
      description: area.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return <AreaPage area={area} />;
}
