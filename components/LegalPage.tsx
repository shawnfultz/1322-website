import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WaveDivider from "./WaveDivider";
import type { LegalBlock } from "@/lib/legal";

/* Inline formatting: **bold**, `code`, [label](href). */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;

function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (!part) return null;

        if (part.startsWith("**") && part.endsWith("**")) {
          // Recurse so a link or code span inside bold still resolves.
          return (
            <strong key={i} className="font-semibold text-ocean-900">
              <RichText text={part.slice(2, -2)} />
            </strong>
          );
        }

        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="px-1.5 py-0.5 rounded-md bg-sand-100 border border-sand-200 text-[0.9em] text-ocean-800"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/")) {
            return (
              <Link
                key={i}
                href={href}
                className="text-brand-blue underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue transition-colors"
              >
                {label}
              </Link>
            );
          }
          return (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-brand-blue underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue transition-colors"
            >
              {label}
            </a>
          );
        }

        // Preserve intentional line breaks inside a paragraph.
        const lines = part.split("\n");
        return (
          <span key={i}>
            {lines.map((line, j) => (
              <span key={j}>
                {line}
                {j < lines.length - 1 && <br />}
              </span>
            ))}
          </span>
        );
      })}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-ocean-900 leading-tight mt-14 mb-4 scroll-mt-28">
          <RichText text={block.text} />
        </h2>
      );

    case "p":
      return (
        <p className="font-body text-[17px] leading-[1.75] text-ocean-700/80 mb-5">
          <RichText text={block.text} />
        </p>
      );

    case "ul":
      return (
        <ul className="flex flex-col gap-3 mb-6 pl-0 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className="mt-[11px] w-1.5 h-1.5 rounded-full bg-brand-blue/40 flex-shrink-0"
              />
              <span className="font-body text-[17px] leading-[1.75] text-ocean-700/80">
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "note":
      return (
        <div className="my-8 rounded-2xl bg-sand-50 border border-sand-200 p-6 md:p-7">
          <p className="font-body text-[17px] leading-[1.7] text-ocean-700/85 m-0">
            <RichText text={block.text} />
          </p>
        </div>
      );
  }
}

interface LegalPageProps {
  badge: string;
  title: string;
  titleAccent: string;
  lede: string;
  updated: string;
  updatedISO: string;
  blocks: LegalBlock[];
  /** Optional status pill, e.g. an app's release state. */
  status?: string;
  /** Optional related-document links rendered under the body. */
  footerLinks?: { label: string; href: string }[];
}

export default function LegalPage({
  badge,
  title,
  titleAccent,
  lede,
  updated,
  updatedISO,
  blocks,
  status,
  footerLinks,
}: LegalPageProps) {
  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="relative bg-ocean-950 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-950" />
        <div className="absolute inset-0 ocean-ripple" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-seafoam-400" />
              <span className="font-body text-sm text-white/70">{badge}</span>
            </span>
            {status && (
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-brand-violet/30 bg-brand-violet/10">
                <span className="font-body text-xs font-semibold tracking-wider uppercase text-brand-violet-light">
                  {status}
                </span>
              </span>
            )}
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            {title} <span className="text-gradient-brand">{titleAccent}</span>
          </h1>

          <p className="font-body text-lg text-white/60 leading-relaxed mb-8">
            {lede}
          </p>

          <p className="font-body text-sm text-white/40">
            Last updated{" "}
            <time dateTime={updatedISO} className="text-white/60">
              {updated}
            </time>
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider topColor="transparent" bottomColor="#ffffff" />
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <article>
            {blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>

          {footerLinks && footerLinks.length > 0 && (
            <div className="mt-16 pt-10 border-t border-sand-200">
              <h2 className="font-display font-semibold text-sm text-ocean-900 tracking-widest uppercase mb-5">
                Related
              </h2>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-body text-ocean-700/70 hover:text-brand-blue transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="text-brand-blue transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M1 7h12M8 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
