"use client";

import { useLeadModal } from "./LeadModalProvider";

const footerLinks = {
  Services: [
    { label: "Website Modernization", href: "#services" },
    { label: "Marine & Maritime Web", href: "#services" },
    { label: "Trade Business Websites", href: "#services" },
    { label: "Growth & Custom Software", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const { open: openModal } = useLeadModal();

  return (
    <footer className="relative bg-ocean-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center mb-6">
              <span className="font-display font-bold text-2xl">
                <span className="text-brand-blue-light">/</span><span className="text-white">1322</span>
                <span className="font-normal text-white/40"> Customs</span>
              </span>
            </a>
            <p className="font-body text-white/30 text-sm leading-relaxed max-w-sm mb-4">
              Modern websites for trade businesses and marine companies.
              Based in Charleston, SC — fast turnaround, real results.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 font-body text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/15 transition-all cursor-pointer"
            >
              Get a Free Quote
            </button>
            {/* Social links — hidden until accounts are set up */}
            {/* <div className="flex gap-3">social icons here</div> */}
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {heading === "Company" && (
                  <li>
                    <button
                      onClick={openModal}
                      className="font-body text-sm text-white/30 hover:text-white/60 transition-colors duration-200 cursor-pointer"
                    >
                      Book a Call
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <h4 className="font-display font-semibold text-white/40 text-xs tracking-widest uppercase mb-4">
            Service Areas
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {[
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
            ].map((area) => (
              <a
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="font-body text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                {area.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            &copy; {new Date().getFullYear()} 1322 Customs LLC. All rights reserved.
          </p>
          <span className="font-body text-xs text-white/20">
            Charleston, SC
          </span>
        </div>
      </div>
    </footer>
  );
}
