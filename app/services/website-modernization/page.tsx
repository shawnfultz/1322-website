import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Website Modernization Charleston SC | Redesign Your Site | 1322 Customs",
  description: "Outdated website? We rebuild it with modern tech, fast load times, mobile-first design, and SEO that ranks. 2-4 week turnaround. Charleston, SC.",
  alternates: { canonical: "https://1322customs.com/services/website-modernization" },
};

export default function WebsiteModernization() {
  return (
    <ServicePage
      badge="Website Modernization"
      title="Stop losing customers to a"
      titleAccent="slow, outdated site."
      subtitle="We rebuild your website from the ground up with modern technology, blazing speed, and a design that actually converts visitors into paying customers."
      gradient="from-brand-blue to-seafoam-400"
      features={[
        {
          title: "Modern, Clean Design",
          description: "No templates. We design a site that matches your brand and speaks directly to your customers.",
          icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        },
        {
          title: "Lightning Fast",
          description: "Built with Next.js and modern frameworks. Sub-second load times that Google rewards with better rankings.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
        },
        {
          title: "Mobile-First",
          description: "Over 60% of your traffic is mobile. Every page is designed and tested for phones and tablets first.",
          icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
        },
        {
          title: "SEO Built In",
          description: "Proper meta tags, structured data, fast page speeds, and local SEO setup so you actually show up in search.",
          icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
        {
          title: "Content Migration",
          description: "We move your existing content, images, and pages. Nothing gets lost in the transition.",
          icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
        },
        {
          title: "Analytics & Tracking",
          description: "Google Analytics, conversion tracking, and reporting so you can see exactly how your site performs.",
          icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        },
      ]}
      whyTitle="Why modernize now?"
      whyPoints={[
        "Your competitors have already updated their sites. Every day with an outdated site is a day you're losing potential customers to someone with a faster, cleaner website.",
        "Google prioritizes fast, mobile-friendly sites. If your site is slow or broken on mobile, you're invisible in local search results.",
        "First impressions happen in 0.05 seconds. If your site looks like it was built in 2015, visitors assume your business is behind the times too.",
        "A modern site pays for itself. Better conversion rates, more leads, and a professional image that builds trust before you ever pick up the phone.",
        "We deliver in 2-4 weeks, not 6 months. You'll be live with a new site before most agencies finish their discovery phase.",
      ]}
    />
  );
}
