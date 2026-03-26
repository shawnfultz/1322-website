import type { MetadataRoute } from "next";

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
  "website-modernization",
  "marine-web",
  "trade-websites",
  "growth-software",
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
  ];
}
