import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Trade Business Websites | 1322 Customs — Charleston, SC",
  description: "Modern websites for HVAC, plumbing, electrical, roofing, and landscaping companies. Local SEO included. Fast turnaround.",
};

export default function TradeWebsites() {
  return (
    <ServicePage
      badge="Trade Business Websites"
      title="Your work speaks for itself."
      titleAccent="Your website should too."
      subtitle="HVAC, plumbing, electrical, roofing, landscaping — if you work with your hands, we make sure your website works just as hard to bring in jobs."
      gradient="from-brand-violet to-brand-indigo"
      features={[
        {
          title: "Local SEO Domination",
          description: "Show up first when someone Googles 'plumber near me' or 'HVAC Charleston SC'. We optimize for local search from day one.",
          icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
        },
        {
          title: "Service Area Pages",
          description: "Dedicated pages for each city and neighborhood you serve. More pages, more keywords, more leads.",
          icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        },
        {
          title: "Click-to-Call & Forms",
          description: "Big phone number, easy contact forms, click-to-call on mobile. Make it dead simple for customers to reach you.",
          icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
        },
        {
          title: "Reviews & Trust Signals",
          description: "Google reviews, certifications, licenses, and trust badges prominently displayed. Build credibility instantly.",
          icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
        },
        {
          title: "Before & After Gallery",
          description: "Show off your best work. Photo galleries with before/after sliders that prove the quality of what you do.",
          icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
          title: "Fast & Reliable",
          description: "Your site loads in under 2 seconds on any device. No downtime, no excuses. Hosted on enterprise infrastructure.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
        },
      ]}
      whyTitle="Why trade businesses choose us"
      whyPoints={[
        "We understand that your website is your #1 salesperson. It needs to generate leads 24/7, even when you're on a job site.",
        "Local SEO is not optional for trade businesses — it's everything. We build it into the foundation, not as an afterthought.",
        "Your customers are comparing 3-4 companies before they call. A professional site with reviews and clear pricing wins the job.",
        "We've worked with contractors, service companies, and hands-on businesses. We know what converts in your industry.",
        "2-4 weeks from kickoff to launch. You'll have a modern, lead-generating site before your next busy season hits.",
      ]}
    />
  );
}
