/**
 * Clear Horizon's Today screen, at 402x874.
 *
 * Lifted from the app's own design file
 * (BoatingOSApp/design-canvas/Main.dc.html) at its real tokens — the arc is
 * the day 6a-8p with the good window lit, which is the whole product.
 *
 * The top inset is left empty — a real device renders its status bar there.
 */

const readiness = [
  { label: "Impeller replacement", badge: "3 WK OVERDUE", accent: "#F56565", badgeBg: "rgba(245,101,101,0.22)", badgeBorder: "rgba(245,101,101,0.42)", badgeText: "#FFE9E9", color: "#F2F9FC" },
  { label: "Registration", badge: "12 DAYS", accent: "#FB6340", badgeBg: "rgba(251,99,64,0.20)", badgeBorder: "rgba(251,99,64,0.40)", badgeText: "#FFEDE4", color: "#F2F9FC" },
];

const tabs = [
  {
    label: "Today",
    active: true,
    icon: <path d="M3 17h18M7.5 17a4.5 4.5 0 019 0M12 4.5v2.6M6.3 7.6l1.8 1.8M17.7 7.6l-1.8 1.8M2.5 21h19" />,
  },
  { label: "Plan", active: false, icon: <path d="M9 4L3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4zM9 4v13M15 6.5v13" /> },
  { label: "Boats", active: false, icon: <path d="M3 17h18l-2.5 4h-13L3 17zM12 3v14M12 3l6 9H6l6-9z" /> },
  {
    label: "Expenses",
    active: false,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.4 9.3c-.6-.8-1.5-1.2-2.4-1.2-1.4 0-2.5.8-2.5 1.9 0 2.4 5 1.3 5 3.9 0 1.1-1.1 2-2.5 2-1 0-2-.4-2.6-1.3M12 6.3v11.4" />
      </>
    ),
  },
  {
    label: "Settings",
    active: false,
    icon: (
      <>
        <circle cx="12" cy="12" r="3.1" />
        <path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6L17 17M7 7L5.4 5.4" strokeLinecap="round" />
      </>
    ),
  },
];

export default function ClearHorizonTodayScreen() {
  return (
    <div
      className="flex flex-col relative overflow-hidden"
      style={{
        width: 402,
        height: 874,
        boxSizing: "border-box",
        padding: "52px 20px 0 20px",
        color: "#EAF4F8",
        fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        background:
          "linear-gradient(180deg, #0A2A3E 0%, #08202F 34%, #061523 66%, #040D16 100%)",
      }}
    >
      {/* Light gathering on the horizon */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-16%",
          right: "-16%",
          top: "2%",
          height: "52%",
          background:
            "radial-gradient(ellipse at 50% 46%, rgba(0,187,255,0.20) 0%, rgba(0,187,255,0) 68%)",
        }}
      />

      {/* Water settling toward the foot */}
      <svg width="402" height="300" viewBox="0 0 402 300" preserveAspectRatio="none" className="absolute left-0 bottom-0" aria-hidden="true">
        <path d="M0 74 C 72 58, 132 90, 201 74 C 270 58, 330 90, 402 74 L402 300 L0 300 Z" fill="#0B3A52" opacity="0.30" />
        <path d="M0 122 C 72 108, 132 136, 201 122 C 270 108, 330 136, 402 122 L402 300 L0 300 Z" fill="#082A3E" opacity="0.34" />
        <path d="M0 172 C 72 161, 132 183, 201 172 C 270 161, 330 183, 402 172 L402 300 L0 300 Z" fill="#051B29" opacity="0.42" />
      </svg>

      {/* Header */}
      <div className="flex items-center relative flex-none" style={{ gap: 11 }}>
        <div className="flex-none overflow-hidden" style={{ width: 34, height: 34, borderRadius: 9, boxShadow: "0 2px 10px rgba(0,120,175,0.45)" }}>
          <svg width="34" height="34" viewBox="0 0 1024 1024" aria-hidden="true">
            <defs>
              <linearGradient id="chMarkToday" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#00D4FF" />
                <stop offset="0.42" stopColor="#00A6E0" />
                <stop offset="0.62" stopColor="#00628F" />
                <stop offset="1" stopColor="#04263A" />
              </linearGradient>
            </defs>
            <rect width="1024" height="1024" fill="url(#chMarkToday)" />
            <circle cx="512" cy="600" r="176" fill="#EFFBFF" opacity="0.97" />
            <rect x="0" y="600" width="1024" height="12" fill="#FFF" opacity="0.92" />
            <g fill="#FFF">
              <rect x="150" y="680" width="724" height="22" rx="11" opacity="0.30" />
              <rect x="236" y="756" width="552" height="22" rx="11" opacity="0.18" />
            </g>
          </svg>
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em", color: "#F2F9FC" }}>Clear Horizon</div>
        <div className="flex-grow" />
        <div
          className="flex items-center"
          style={{ gap: 7, padding: "5px 11px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
        >
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 9px rgba(74,222,128,0.85)" }} />
          <div style={{ fontSize: 12, color: "#9FBACB", fontVariantNumeric: "tabular-nums" }}>12 min</div>
        </div>
      </div>

      {/* The instrument: the day as an arc, good window lit */}
      <div className="relative flex-none flex justify-center" style={{ marginTop: 12 }}>
        <svg width="330" height="196" viewBox="0 0 302 182" aria-hidden="true">
          <defs>
            <linearGradient id="chWindow" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#2DCE89" />
              <stop offset="0.55" stopColor="#4ADE80" />
              <stop offset="1" stopColor="#9BF0C0" />
            </linearGradient>
            <filter id="chSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <path d="M 20 151 A 131 131 0 0 1 282 151" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="15" strokeLinecap="round" />
          <path d="M 48.6 69.3 A 131 131 0 0 1 180.2 23.3" fill="none" stroke="url(#chWindow)" strokeWidth="15" strokeLinecap="round" opacity="0.55" filter="url(#chSoftGlow)" />
          <path d="M 48.6 69.3 A 131 131 0 0 1 180.2 23.3" fill="none" stroke="url(#chWindow)" strokeWidth="15" strokeLinecap="round" />
          <circle cx="103.1" cy="29.1" r="11" fill="#061523" />
          <circle cx="103.1" cy="29.1" r="6.5" fill="#FFFFFF" />
          <line x1="8" y1="151" x2="294" y2="151" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
          <text x="20" y="171" fill="#7593A6" fontSize="11" textAnchor="middle">6a</text>
          <text x="151" y="171" fill="#7593A6" fontSize="11" textAnchor="middle">1p</text>
          <text x="282" y="171" fill="#7593A6" fontSize="11" textAnchor="middle">8p</text>
          <text x="151" y="112" textAnchor="middle" fill="#F2F9FC" fontSize="46" fontWeight="700" letterSpacing="-1.6">9&ndash;2</text>
          <text x="151" y="134" textAnchor="middle" fill="#8FB2C6" fontSize="12" fontWeight="600" letterSpacing="1.4">GOOD WINDOW</text>
        </svg>
      </div>

      {/* Verdict */}
      <div className="relative flex flex-col flex-none" style={{ marginTop: 2, gap: 9 }}>
        <div
          className="inline-flex items-center self-start"
          style={{ gap: 7, padding: "6px 13px", borderRadius: 999, background: "rgba(74,222,128,0.13)", border: "1px solid rgba(74,222,128,0.34)" }}
        >
          <svg width="13" height="13" viewBox="0 0 20 20" fill="#4ADE80" aria-hidden="true">
            <path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm4.1 6.3l-4.9 5.5a.9.9 0 01-1.3.05L5.7 11a.9.9 0 111.2-1.32l1.5 1.37 4.3-4.83a.9.9 0 011.4 1.18z" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.09em", color: "#7FE9A8" }}>GOOD</span>
        </div>
        <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.027em", color: "#F2F9FC" }}>
          Good window 9am&ndash;2pm
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.45, color: "#9FBACB", fontVariantNumeric: "tabular-nums" }}>
          Wind 8&ndash;12 kt &middot; seas 1 ft &middot; tide rising until 1:40pm
        </div>
      </div>

      {/* Readiness */}
      <div className="relative flex flex-col flex-none" style={{ marginTop: 22, gap: 9 }}>
        <div className="flex items-baseline justify-between" style={{ padding: "0 2px" }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.09em", color: "#7593A6" }}>BAYLINER 245</span>
          <span style={{ fontSize: 13, color: "#7593A6" }}>2 need attention</span>
        </div>

        <div
          className="overflow-hidden"
          style={{ borderRadius: 14, background: "rgba(255,255,255,0.045)", border: "1px solid rgba(255,255,255,0.075)" }}
        >
          {readiness.map((row, i) => (
            <div key={row.label}>
              {i > 0 && <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginLeft: 14 }} />}
              <div className="flex items-center" style={{ minHeight: 46, gap: 11, padding: "12px 14px" }}>
                <span className="flex-none" style={{ width: 3, height: 22, borderRadius: 2, background: row.accent }} />
                <span className="flex-grow" style={{ fontSize: 16, color: row.color }}>{row.label}</span>
                <span
                  className="whitespace-nowrap"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: row.badgeText,
                    background: row.badgeBg,
                    border: `1px solid ${row.badgeBorder}`,
                    borderRadius: 999,
                    padding: "4px 9px",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {row.badge}
                </span>
              </div>
            </div>
          ))}
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginLeft: 14 }} />
          <div className="flex items-center" style={{ minHeight: 46, gap: 11, padding: "12px 14px" }}>
            <span className="flex-none" style={{ width: 3, height: 22, borderRadius: 2, background: "rgba(255,255,255,0.14)" }} />
            <span className="flex-grow" style={{ fontSize: 16, color: "#B9CEDB" }}>Insurance</span>
            <span className="whitespace-nowrap" style={{ fontSize: 12, fontWeight: 600, color: "#7593A6" }}>Current</span>
          </div>
        </div>
      </div>

      <div className="flex-grow" />

      {/* Tab bar */}
      <div
        className="relative flex-none flex items-start"
        style={{
          margin: "0 -20px",
          height: 82,
          background:
            "linear-gradient(180deg, rgba(6,21,35,0) 0%, rgba(4,13,22,0.92) 42%, #040D16 100%)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: 11,
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className="flex flex-col items-center"
            style={{ flex: 1, gap: 4, color: tab.active ? "#00bbff" : "#7593A6" }}
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {tab.icon}
            </svg>
            <span style={{ fontSize: 10, fontWeight: tab.active ? 600 : 400 }}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
