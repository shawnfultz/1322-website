import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Marina & Boat Dealer Website Design | Marine Web | 1322 Customs Charleston SC",
  description: "Website design for marinas, boat dealers, charter companies, and marine services in Charleston SC. Built by a team that knows the water.",
  alternates: { canonical: "https://1322customs.com/services/marine-web" },
};

export default function MarineWeb() {
  return (
    <ServicePage
      badge="Marine & Maritime Web"
      title="Websites built for the"
      titleAccent="water."
      subtitle="Marinas, boat dealers, charter companies, marine services — we know the industry because we live it. Your site should work as hard as your crew."
      gradient="from-brand-indigo to-brand-blue"
      features={[
        {
          title: "Marina & Dock Management",
          description: "Showcase slip availability, amenities, and location. Make it easy for boaters to find you and book.",
          icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        },
        {
          title: "Boat Dealer Inventory",
          description: "Beautiful boat listings with specs, photos, and pricing. Make your inventory look as good as it is.",
          icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
          title: "Charter & Tour Booking",
          description: "Online booking, availability calendars, and trip details. Reduce phone calls and fill more trips.",
          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
          title: "Weather & Tide Integration",
          description: "Live conditions, tide charts, and forecasts right on your site. Add real value for your visitors.",
          icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        },
        {
          title: "Marine SEO",
          description: "Show up when boaters search for services near them. Local SEO optimized for marine keywords and coastal regions.",
          icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
        {
          title: "Mobile Optimized",
          description: "Boaters are on their phones at the dock. Your site needs to work perfectly on mobile — and ours do.",
          icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
        },
      ]}
      whyTitle="Why marine businesses trust us"
      whyPoints={[
        "We're based in Charleston, SC — one of the biggest boating communities on the East Coast. We understand the marine industry because we're part of it.",
        "We built Blue Harbor, an AI-powered boating platform used by thousands of boaters. Marine tech is what we do.",
        "Most web agencies don't know port from starboard. We speak your language and build sites that resonate with boaters.",
        "Seasonal business? We build sites that capture leads year-round and keep your calendar full when the water warms up.",
        "From a single charter boat to a full-service marina, we scale the solution to fit your operation and budget.",
      ]}
    />
  );
}
