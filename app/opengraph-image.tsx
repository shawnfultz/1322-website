import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "1322 Customs — Web Design Charleston SC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #060d18 0%, #0c1b2a 50%, #122a42 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "32px" }}>
          <span style={{ fontSize: "48px", fontWeight: 800, color: "#60a5fa" }}>/</span>
          <span style={{ fontSize: "48px", fontWeight: 800, color: "white" }}>1322</span>
          <span style={{ fontSize: "48px", fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: "12px" }}>
            Customs
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Modern Websites.
          <br />
          <span style={{ color: "#60a5fa" }}>Real Results.</span>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.5,
          }}
        >
          Web design & SEO for small businesses — Charleston, SC
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #2563eb, #4f46e5, #7c3aed)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
