import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Custom Software Development Charleston SC | 1322 Customs",
  description:
    "Custom software, customer portals, booking systems, and API integrations for small businesses. Charleston SC based, working with clients nationwide.",
  alternates: { canonical: "https://1322customs.com/services/custom-software" },
};

export default function CustomSoftware() {
  return (
    <ServicePage
      badge="Custom Software & Integrations"
      title="The software that makes the"
      titleAccent="rest of it work."
      subtitle="Booking systems, customer portals, dashboards, and the plumbing that connects them to the tools you already run your business on. This is usually the part nobody else wants to touch."
      gradient="from-brand-indigo to-brand-violet"
      features={[
        {
          title: "Customer Portals",
          description:
            "Let clients check progress, approve a change order, and pull an invoice themselves — so your phone stops ringing with status questions.",
          icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
        },
        {
          title: "Booking & Scheduling",
          description:
            "Real-time availability, deposits, and confirmations, wired into the calendar your team already lives in rather than replacing it.",
          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
          title: "Payments",
          description:
            "Take deposits and balances online through Stripe or the processor you already use. Money lands in your account, not ours.",
          icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        },
        {
          title: "API Integrations",
          description:
            "Connect your site or app to the accounting, CRM, dispatch, or inventory system you already pay for, so data stops being retyped between them.",
          icon: "M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5",
        },
        {
          title: "Internal Dashboards",
          description:
            "The one screen that answers the question you keep asking — jobs today, cash this month, what is overdue — instead of four spreadsheets.",
          icon: "M9 17V7m4 10V11m4 6V9M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z",
        },
        {
          title: "Automation & AI Tooling",
          description:
            "Quote drafts, follow-ups, summaries, and the repetitive work that eats an afternoon. Applied where it saves real time, not as a gimmick.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
        },
      ]}
      whyTitle="Why this is different from buying software"
      whyPoints={[
        "Off-the-shelf software makes you change how you work. Custom software fits the way you already work — which is the whole reason to build it instead of subscribing to something.",
        "We start small on purpose. One workflow that actually gets used beats a platform with seventeen features nobody opens.",
        "It connects to what you have. We are not trying to replace your accounting package or your dispatch board; we are trying to make them stop being islands.",
        "You own the code and the data. No per-seat pricing that climbs as you hire, and no vendor who can hold your business hostage at renewal.",
        "We build the app and the website too, so the software underneath is designed alongside the things your customers actually see.",
      ]}
    />
  );
}
