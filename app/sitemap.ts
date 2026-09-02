import type { MetadataRoute } from "next";
import { appPolicies } from "@/lib/legal";

const areas = [
  "charleston",
  "summerville",
  "hanahan",
  "mount-pleasant",
  "north-charleston",
  "goose-creek",
  "james-island",
  "johns-island",
  "west-ashley",
  "daniel-island",
  "isle-of-palms",
  "folly-beach",
];

const services = [
  "app-development",
  "website-modernization",
  "custom-software",
  "growth-software",
  "marine-web",
  "trade-websites",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://1322customs.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...services.map((s) => ({
      url: `${base}/services/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areas.map((a) => ({
      url: `${base}/areas/${a}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // App Store listings link at these, so they must stay indexable.
    ...appPolicies.map((p) => ({
      url: `${base}/privacy/${p.slug}`,
      lastModified: new Date(p.updatedISO),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
