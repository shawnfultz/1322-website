"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { useLeadModal } from "./LeadModalProvider";

const areas = [
  { name: "Charleston", slug: "charleston" },
  { name: "Summerville", slug: "summerville" },
  { name: "Hanahan", slug: "hanahan" },
  { name: "Mount Pleasant", slug: "mount-pleasant" },
  { name: "North Charleston", slug: "north-charleston" },
  { name: "Goose Creek", slug: "goose-creek" },
  { name: "James Island", slug: "james-island" },
  { name: "Johns Island", slug: "johns-island" },
  { name: "West Ashley", slug: "west-ashley" },
  { name: "Daniel Island", slug: "daniel-island" },
  { name: "Isle of Palms", slug: "isle-of-palms" },
  { name: "Folly Beach", slug: "folly-beach" },
];

export default function ServiceAreas() {
  const { open: openModal } = useLeadModal();
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 tide-line" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimateOnScroll>
            <span className="font-body text-sm font-semibold text-brand-blue tracking-widest uppercase mb-4 block">
              Service Areas
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ocean-900 leading-tight mb-4">
              Serving the{" "}
              <span className="font-serif italic text-brand-indigo">greater Charleston</span>{" "}
              area
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="font-body text-ocean-700/50 max-w-xl mx-auto">
              Local team. Local knowledge. We build websites for businesses across
              the Lowcountry — and nationwide.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group relative bg-sand-50 rounded-xl p-4 border border-sand-100 hover:border-brand-blue/20 transition-all duration-300 hover:shadow-md hover:shadow-brand-blue/5 text-center hover:-translate-y-0.5"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-seafoam-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto mb-2 opacity-40 group-hover:opacity-70 transition-opacity"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-display font-semibold text-sm text-ocean-900 group-hover:text-brand-blue transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <p className="text-center mt-8 font-body text-sm text-ocean-700/30">
            Don&apos;t see your area? We work with businesses nationwide.{" "}
            <button
              onClick={openModal}
              className="text-brand-blue font-medium hover:text-brand-indigo transition-colors cursor-pointer"
            >
              Just reach out.
            </button>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
