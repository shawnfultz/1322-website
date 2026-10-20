/**
 * Shared content model for long-form pages (legal, support).
 *
 * Kept as data rather than JSX so the wording is easy to diff and review.
 * Inline formatting supported in every `text` field: **bold**, `code`,
 * and [label](href).
 */
export type ProseBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string };
