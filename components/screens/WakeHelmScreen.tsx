/**
 * Wake's helm screen, at 402x874.
 *
 * Lifted from the app's own design file
 * (BoatingMusicPlayer/design-canvas/Main.dc.html) so the mockup matches the
 * real product rather than approximating it. Wake's palette is its own and
 * deliberately does not use the 1322 site tokens.
 *
 * The top inset is left empty — a real device renders its status bar there.
 */
export default function WakeHelmScreen() {
  return (
    <div
      className="flex flex-col relative overflow-hidden"
      style={{
        width: 402,
        height: 874,
        boxSizing: "border-box",
        padding: 28,
        color: "#EAF4F8",
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "linear-gradient(180deg, #17395C 0%, #123253 38%, #0D2440 100%)",
      }}
    >
      {/* Horizon glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-10%",
          right: "-10%",
          top: "-6%",
          height: "46%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(120,200,220,0.22) 0%, rgba(120,200,220,0) 70%)",
        }}
      />

      {/* Swell */}
      <svg
        width="402"
        height="210"
        viewBox="0 0 402 210"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 bottom-0"
        aria-hidden="true"
      >
        <path d="M0 60 C 70 44, 130 76, 201 60 C 272 44, 332 76, 402 60 L402 210 L0 210 Z" fill="#0B2A47" opacity="0.16" />
        <path d="M0 94 C 70 81, 130 107, 201 94 C 272 81, 332 107, 402 94 L402 210 L0 210 Z" fill="#0A2440" opacity="0.13" />
        <path d="M0 128 C 70 118, 130 138, 201 128 C 272 118, 332 138, 402 128 L402 210 L0 210 Z" fill="#081E38" opacity="0.1" />
      </svg>

      {/* Status bar inset */}
      <div className="flex-none" style={{ height: 24 }} />

      {/* App bar */}
      <div className="flex items-center relative flex-none" style={{ gap: 12, paddingBottom: 18 }}>
        <div
          className="flex items-center justify-center flex-none"
          style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: "linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)",
            boxShadow: "0 2px 8px rgba(26,41,128,0.35)",
          }}
        >
          <svg width="21" height="21" viewBox="0 0 1024 1024" fill="none" stroke="#fff" strokeLinecap="round" aria-hidden="true">
            <path d="M487 373 A 170 170 0 0 1 487 651" strokeWidth="48" />
            <path d="M536 303 A 255 255 0 0 1 536 721" strokeWidth="48" opacity="0.62" />
            <path d="M585 233 A 340 340 0 0 1 585 791" strokeWidth="48" opacity="0.34" />
            <path d="M420 512 C 370 444, 300 440, 236 448 L 236 576 C 300 584, 370 580, 420 512 Z" fill="#fff" stroke="none" />
          </svg>
        </div>
        <div style={{ fontSize: 22, fontWeight: 600 }}>Wake</div>
        <div className="flex-grow" />
        <div
          className="flex items-center"
          style={{ gap: 8, padding: "5px 11px", borderRadius: 999, background: "rgba(255,255,255,0.07)" }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#26D0CE",
              boxShadow: "0 0 8px rgba(38,208,206,0.7)",
            }}
          />
          <div style={{ fontSize: 13, color: "#B4CBD8" }}>Active</div>
        </div>
      </div>

      {/* Speed dial */}
      <div className="flex-grow flex flex-col items-center justify-center relative">
        <div
          className="inline-flex items-center"
          style={{
            gap: 8,
            padding: "9px 16px",
            borderRadius: 999,
            background: "rgba(38,208,206,0.13)",
            border: "1px solid rgba(79,212,208,0.40)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#7FE3E0" aria-hidden="true">
            <rect x="6" y="3" width="12" height="18" rx="3" />
          </svg>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#7FE3E0" }}>Boombox</div>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="#7FE3E0" opacity="0.7" aria-hidden="true">
            <path d="M12 2 L18 9 H6 Z M12 22 L6 15 H18 Z" />
          </svg>
        </div>

        <div className="relative" style={{ width: 262, height: 262, marginTop: 18 }}>
          <svg width="262" height="262" viewBox="0 0 262 262" className="absolute inset-0" aria-hidden="true">
            <defs>
              <linearGradient id="wakeArcGradient" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#3B5BBF" />
                <stop offset="0.4" stopColor="#3F7FC4" />
                <stop offset="0.72" stopColor="#3FA8C4" />
                <stop offset="1" stopColor="#4FD4D0" />
              </linearGradient>
            </defs>
            <path d="M 20.7 150.4 A 112 112 0 1 1 241.3 150.4" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="16" strokeLinecap="round" />
            <path d="M 20.7 150.4 A 112 112 0 1 1 241.3 150.4" pathLength={1} fill="none" stroke="url(#wakeArcGradient)" strokeWidth="16" strokeLinecap="round" strokeDasharray="0.55 1" />
            <line x1="32.5" y1="104.6" x2="13.2" y2="99.4" stroke="#123253" strokeWidth="3" strokeLinecap="round" />
            <line x1="87.9" y1="38.6" x2="79.4" y2="20.4" stroke="#123253" strokeWidth="3" strokeLinecap="round" />
            <line x1="174.1" y1="38.6" x2="182.6" y2="20.4" stroke="#123253" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              style={{
                fontSize: 76,
                fontWeight: 700,
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.03em",
              }}
            >
              22
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#7E9BAC",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              mph
            </div>
          </div>
        </div>

        <div style={{ fontSize: 30, fontWeight: 600, color: "#5FE0DC", marginTop: -22, letterSpacing: "-0.01em" }}>
          Cruising
        </div>
        <div className="flex items-baseline" style={{ gap: 6, marginTop: 8 }}>
          <div style={{ fontSize: 20, fontWeight: 600, fontVariantNumeric: "tabular-nums", color: "#B4CBD8" }}>65%</div>
          <div style={{ fontSize: 15, color: "#7E9BAC" }}>volume</div>
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, color: "#7E9BAC", marginTop: 10 }}>
          Learning your Boombox
        </div>
      </div>

      {/* Primary control */}
      <div
        className="flex items-center justify-center flex-none relative"
        style={{
          height: 88,
          borderRadius: 999,
          background: "linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)",
          boxShadow: "0 10px 30px rgba(13,36,64,0.7)",
          fontSize: 22,
          fontWeight: 600,
          color: "#fff",
        }}
      >
        Wake is on
      </div>
      <div className="flex-none" style={{ height: 20 }} />
    </div>
  );
}
