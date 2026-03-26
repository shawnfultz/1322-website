import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Custom Software Development Charleston SC | Booking & Automation | 1322 Customs",
  description: "Custom software, booking systems, customer portals, workflow automation, and AI tools for businesses in Charleston SC. We grow with you.",
  alternates: { canonical: "https://1322customs.com/services/growth-software" },
};

export default function GrowthSoftware() {
  return (
    <ServicePage
      badge="Growth & Custom Software"
      title="Your website was just the"
      titleAccent="starting line."
      subtitle="Once your site is dialed in, we can take your business further — booking systems, customer portals, workflow automation, AI tools. We grow with you."
      gradient="from-seafoam-400 to-brand-violet"
      features={[
        {
          title: "Online Booking & Scheduling",
          description: "Let customers book appointments, services, or tours directly on your site. Fewer phone calls, more confirmed jobs.",
          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
          title: "Customer Portals",
          description: "Give your clients a login to check project status, view invoices, upload documents, or track their orders.",
          icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        },
        {
          title: "Workflow Automation",
          description: "Automate follow-ups, invoicing, notifications, and repetitive tasks. Save hours every week without hiring.",
          icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        },
        {
          title: "AI-Powered Tools",
          description: "Smart chatbots, document processing, predictive analytics — we build AI that solves real business problems.",
          icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        },
        {
          title: "Integrations",
          description: "Connect your website to QuickBooks, Stripe, Mailchimp, CRMs, and any other tools you already use.",
          icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
        },
        {
          title: "Ongoing Support",
          description: "We don't disappear after launch. Maintenance, updates, new features — we're here for the long haul.",
          icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
        },
      ]}
      whyTitle="Why grow with us"
      whyPoints={[
        "We already know your business. If we built your site, we know your customers, your workflow, and where the bottlenecks are.",
        "Over 10 years of building enterprise software — from fintech to healthcare to marine. We've seen it all.",
        "AI-powered development means we deliver custom software at a fraction of the typical cost and timeline.",
        "No outsourcing, no handoffs. The same team that built your site builds your custom tools.",
        "Start small. A booking widget, an automated email sequence, a simple portal. Then scale up as you see results.",
      ]}
      ctaText="Let's Talk Growth"
    />
  );
}
