import Link from "next/link";
import type { ProseBlock } from "@/lib/prose";

/* Inline formatting: **bold**, `code`, [label](href). */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;

export function RichText({ text }: { text: string }) {
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
          const className =
            "text-brand-blue underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue transition-colors";

          if (href.startsWith("/")) {
            return (
              <Link key={i} href={href} className={className}>
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
              className={className}
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

function Bullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-[11px] w-1.5 h-1.5 rounded-full bg-brand-blue/40 flex-shrink-0"
    />
  );
}

export function Block({ block }: { block: ProseBlock }) {
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
              <Bullet />
              <span className="font-body text-[17px] leading-[1.75] text-ocean-700/80">
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="flex flex-col gap-4 mb-6 pl-0 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo text-white font-display font-bold text-sm flex items-center justify-center"
              >
                {i + 1}
              </span>
              <span className="font-body text-[17px] leading-[1.75] text-ocean-700/80">
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ol>
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

export default function Prose({ blocks }: { blocks: ProseBlock[] }) {
  return (
    <article>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </article>
  );
}
