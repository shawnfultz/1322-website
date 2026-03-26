export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "1322 Customs LLC",
    description:
      "Modern website design and development for trade businesses and marine companies. Fast turnaround, SEO built in.",
    url: "https://1322customs.com",
    logo: "https://1322customs.com/logo.svg",
    image: "https://1322customs.com/hero-charleston.jpg",
    telephone: "",
    email: "shawn@1322customs.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charleston",
      addressRegion: "SC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7765,
      longitude: -79.9311,
    },
    areaServed: [
      { "@type": "City", name: "Charleston", containedInPlace: { "@type": "State", name: "South Carolina" } },
      { "@type": "City", name: "Summerville" },
      { "@type": "City", name: "Hanahan" },
      { "@type": "City", name: "Mount Pleasant" },
      { "@type": "City", name: "North Charleston" },
      { "@type": "City", name: "Goose Creek" },
      { "@type": "City", name: "James Island" },
      { "@type": "City", name: "Johns Island" },
      { "@type": "City", name: "West Ashley" },
      { "@type": "City", name: "Daniel Island" },
      { "@type": "City", name: "Isle of Palms" },
      { "@type": "City", name: "Folly Beach" },
    ],
    serviceType: [
      "Website Design",
      "Website Development",
      "Website Modernization",
      "SEO",
      "Marine Industry Websites",
      "Trade Business Websites",
      "Custom Software Development",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
