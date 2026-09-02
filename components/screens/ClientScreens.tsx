/**
 * Illustrative client app screens for the "what we build for you" section.
 *
 * All three companies are invented. No real business is named, and every
 * figure is sample data chosen to look plausible. Dates are internally
 * consistent: Sept 10-12 2026 is genuinely Thu/Fri/Sat.
 *
 * Each screen carries its own app icon and wordmark so they read as three
 * separate client builds rather than three views of one app.
 *
 * The top inset is left empty — a real device renders its status bar there.
 */

const SAFE_TOP = 44;

function SafeTop() {
  return <div className="flex-none" style={{ height: SAFE_TOP }} />;
}

function AppHeader({
  icon,
  name,
  sub,
  trailing,
  dark = false,
}: {
  icon: React.ReactNode;
  name: string;
  sub: string;
  trailing?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center flex-none" style={{ gap: 10, padding: "0 20px 14px" }}>
      <div className="flex-none overflow-hidden" style={{ width: 34, height: 34, borderRadius: 9 }}>
        {icon}
      </div>
      <div className="flex-grow">
        <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.2, color: dark ? "#fff" : "#0c1b2a" }}>
          {name}
        </div>
        <div style={{ fontSize: 11, lineHeight: 1.2, color: dark ? "rgba(255,255,255,0.45)" : "#7c8a99" }}>
          {sub}
        </div>
      </div>
      {trailing}
    </div>
  );
}

function TabBar({
  tabs,
  dark = false,
}: {
  tabs: { label: string; active?: boolean; icon: React.ReactNode }[];
  dark?: boolean;
}) {
  return (
    <div
      className="grid flex-none"
      style={{
        gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
        background: dark ? "#040d16" : "#ffffff",
        borderTop: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "#e6ecf3"}`,
        padding: "12px 12px 24px",
      }}
    >
      {tabs.map((tab) => (
        <div key={tab.label} className="flex flex-col items-center" style={{ gap: 5 }}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={tab.active ? "#2563eb" : "#94a3b8"}
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {tab.icon}
          </svg>
          <span style={{ fontSize: 10, fontWeight: tab.active ? 600 : 500, color: tab.active ? "#2563eb" : "#94a3b8" }}>
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Northwind Heating & Air — field dispatch                         */
/* ------------------------------------------------------------------ */

export function HvacDispatchScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#f5f7fa" }}>
      <SafeTop />
      <AppHeader
        name="Northwind"
        sub="Heating & Air"
        icon={
          <svg width="34" height="34" viewBox="0 0 48 48" aria-hidden="true">
            <defs>
              <linearGradient id="hvacIcon" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5ac8fa" />
                <stop offset="0.55" stopColor="#0ea5e9" />
                <stop offset="1" stopColor="#1d4fd8" />
              </linearGradient>
            </defs>
            <rect width="48" height="48" fill="url(#hvacIcon)" />
            <g stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
              <path d="M24 10v28M13.8 15.9l20.4 16.2M34.2 15.9L13.8 32.1" />
              <path d="M24 16.6l-3.4-3M24 16.6l3.4-3M24 31.4l-3.4 3M24 31.4l3.4 3" strokeWidth="2.2" />
            </g>
            <circle cx="24" cy="24" r="3.4" fill="#fff" />
          </svg>
        }
        trailing={
          <div
            className="flex items-center justify-center"
            style={{ width: 30, height: 30, borderRadius: 999, background: "#dfe7ef", fontSize: 11, fontWeight: 700, color: "#47566a" }}
          >
            RT
          </div>
        }
      />

      <div style={{ padding: "0 20px 14px" }}>
        <div style={{ fontSize: 13, color: "#64748b", marginBottom: 3 }}>Thursday, September 10 &middot; 3 calls</div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#0c1b2a", letterSpacing: "-0.02em" }}>Today&rsquo;s Calls</div>
      </div>

      <div className="flex" style={{ gap: 8, padding: "0 20px 14px" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", background: "#2563eb", borderRadius: 999, padding: "7px 15px" }}>All 3</span>
        <span style={{ fontSize: 13, fontWeight: 500, color: "#475569", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 999, padding: "7px 15px" }}>No cool 1</span>
        <span style={{ fontSize: 13, fontWeight: 500, color: "#475569", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 999, padding: "7px 15px" }}>PM 1</span>
      </div>

      <div className="flex flex-col flex-grow" style={{ gap: 10, padding: "0 20px" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: 16, border: "1px solid #e6ecf3", boxShadow: "0 1px 3px rgba(12,27,42,0.05)" }}>
          <div className="flex justify-between items-start" style={{ gap: 10, marginBottom: 7 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0c1b2a", lineHeight: 1.25 }}>No cool &mdash; upstairs</div>
            <span className="whitespace-nowrap" style={{ fontSize: 10, fontWeight: 700, color: "#cc3a20", background: "#fdece8", borderRadius: 6, padding: "4px 7px", letterSpacing: "0.04em" }}>
              NO COOL
            </span>
          </div>
          <div style={{ fontSize: 13, color: "#64748b", marginBottom: 3 }}>1847 Marsh Point Dr &middot; 8:30 AM</div>
          <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 12 }}>Carrier 24ACC6 &middot; parts under warranty</div>
          <div className="flex" style={{ gap: 8 }}>
            <div className="flex-grow text-center" style={{ fontSize: 14, fontWeight: 600, color: "#fff", background: "#2563eb", borderRadius: 11, padding: 11 }}>
              Start Call
            </div>
            <div className="flex items-center justify-center" style={{ width: 44, background: "#f1f5f9", borderRadius: 11 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="flex items-center justify-center" style={{ width: 44, background: "#f1f5f9", borderRadius: 11 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
            </div>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 18, padding: 16, border: "1px solid #e6ecf3", boxShadow: "0 1px 3px rgba(12,27,42,0.05)" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0c1b2a", marginBottom: 7 }}>Spring maintenance</div>
          <div style={{ fontSize: 13, color: "#64748b", marginBottom: 11 }}>Oakhurst Townhomes &middot; 11:00 AM</div>
          <div className="flex items-center" style={{ gap: 8, fontSize: 13, fontWeight: 600, color: "#0ea5e9" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18M8 2v4M16 2v4" />
            </svg>
            <span>3 units &middot; 16x25 filters on truck</span>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 18, padding: 16, border: "1px solid #e6ecf3", opacity: 0.6 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0c1b2a", marginBottom: 6 }}>Ductwork estimate</div>
          <div style={{ fontSize: 13, color: "#64748b" }}>Riverbend Ct &middot; 2:15 PM</div>
        </div>
      </div>

      <TabBar
        tabs={[
          { label: "Calls", active: true, icon: <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /> },
          { label: "Schedule", icon: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></> },
          { label: "Invoices", icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></> },
          { label: "Truck", icon: <><path d="M3 8.5h12v9H3zM15 11h3.2l2.8 3v3.5h-6z" /><circle cx="7" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></> },
        ]}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Dockside Boat Rentals — booking & payments                       */
/* ------------------------------------------------------------------ */

export function RentalBookingScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#060d18" }}>
      <SafeTop />
      <AppHeader
        dark
        name="Dockside"
        sub="Boat Rentals"
        icon={
          <svg width="34" height="34" viewBox="0 0 48 48" aria-hidden="true">
            <defs>
              <linearGradient id="rentIcon" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="0.5" stopColor="#0ea5e9" />
                <stop offset="1" stopColor="#0c4a80" />
              </linearGradient>
            </defs>
            <rect width="48" height="48" fill="url(#rentIcon)" />
            <g stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round">
              <circle cx="24" cy="24" r="11" />
              <circle cx="24" cy="24" r="3.6" />
              <path d="M24 13v-3.4M24 38.4V35M35 24h3.4M9.6 24H13M31.8 16.2l2.4-2.4M13.8 34.2l2.4-2.4M31.8 31.8l2.4 2.4M13.8 13.8l2.4 2.4" />
            </g>
          </svg>
        }
        trailing={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="3.4" />
            <path d="M5 20c0-3.6 3.1-5.6 7-5.6s7 2 7 5.6" />
          </svg>
        }
      />

      <div style={{ padding: "0 20px 14px" }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 3 }}>Book a rental</div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>22&prime; Pontoon</div>
      </div>

      <div
        className="relative overflow-hidden flex-none"
        style={{ margin: "0 20px 16px", height: 132, borderRadius: 18, background: "linear-gradient(150deg, #1a3d5c 0%, #245380 45%, #0ea5e9 100%)" }}
      >
        <svg viewBox="0 0 280 132" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <path d="M0,92 C56,80 112,104 168,90 C224,76 262,98 280,90 L280,132 L0,132 Z" fill="#fff" opacity="0.09" />
          <path d="M0,106 C66,94 122,118 188,104 C244,92 266,112 280,106 L280,132 L0,132 Z" fill="#fff" opacity="0.13" />
        </svg>
        <div className="absolute flex flex-wrap" style={{ left: 16, right: 16, top: 14, gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,0.18)", borderRadius: 999, padding: "4px 10px" }}>Sandbar ready</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,0.18)", borderRadius: 999, padding: "4px 10px" }}>No license needed</span>
        </div>
        <div className="absolute" style={{ left: 16, bottom: 14 }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>Half day &middot; 4 hrs</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>Up to 10 guests</div>
        </div>
      </div>

      <div className="flex flex-col flex-grow" style={{ padding: "0 20px", gap: 10 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Next available
        </div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
          {[
            { day: "THU", date: "10", active: false },
            { day: "FRI", date: "11", active: true },
            { day: "SAT", date: "12", active: false },
          ].map((d) => (
            <div
              key={d.day}
              className="text-center"
              style={{
                borderRadius: 13,
                padding: "11px 4px",
                background: d.active ? "linear-gradient(135deg, #2563eb, #4f46e5)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${d.active ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.09)"}`,
              }}
            >
              <div style={{ fontSize: 11, color: d.active ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.45)", marginBottom: 2 }}>{d.day}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", fontVariantNumeric: "tabular-nums" }}>{d.date}</div>
            </div>
          ))}
        </div>

        <div className="flex" style={{ gap: 8 }}>
          <div className="flex-grow text-center" style={{ fontSize: 14, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: 12 }}>
            8:00 AM
          </div>
          <div className="flex-grow text-center" style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.32)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 12 }}>
            1:00 PM
          </div>
        </div>

        <div className="flex items-center" style={{ gap: 8, padding: "10px 12px", borderRadius: 12, background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.18)" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <span style={{ fontSize: 12, lineHeight: 1.4, color: "rgba(255,255,255,0.62)" }}>
            Life jackets, cooler &amp; bimini &middot; 15-min dock checkout
          </span>
        </div>

        <div className="flex justify-between items-end" style={{ marginTop: "auto", padding: "14px 0 4px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Deposit today</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", fontVariantNumeric: "tabular-nums" }}>$150</div>
          </div>
          <div className="text-right" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.4 }}>
            Balance + fuel
            <br />
            on return
          </div>
        </div>
      </div>

      <div style={{ padding: "12px 20px 26px" }}>
        <div className="text-center" style={{ fontSize: 16, fontWeight: 600, color: "#fff", background: "linear-gradient(to right, #2563eb, #4f46e5)", borderRadius: 999, padding: 15 }}>
          Reserve Friday, 8:00 AM
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. BHC Coastal Services — realtor leads & property management       */
/* ------------------------------------------------------------------ */

export function RealtorPortalScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#faf8f5" }}>
      <SafeTop />
      <AppHeader
        name="BHC Coastal"
        sub="Services"
        icon={
          <svg width="34" height="34" viewBox="0 0 48 48" aria-hidden="true">
            <defs>
              <linearGradient id="bhcIcon" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#3c7fb8" />
                <stop offset="0.52" stopColor="#245380" />
                <stop offset="1" stopColor="#122a42" />
              </linearGradient>
            </defs>
            <rect width="48" height="48" fill="url(#bhcIcon)" />
            <path d="M11 21.5L24 10.5l13 11" fill="none" stroke="#fff" strokeWidth="2.9" strokeLinecap="round" strokeLinejoin="round" />
            <g strokeLinecap="round">
              <line x1="14" y1="27.5" x2="34" y2="27.5" stroke="#e8e0d4" strokeWidth="2.4" />
              <line x1="17.5" y1="32.5" x2="30.5" y2="32.5" stroke="#fff" strokeWidth="2.2" opacity="0.5" />
              <line x1="20.5" y1="37" x2="27.5" y2="37" stroke="#fff" strokeWidth="2" opacity="0.28" />
            </g>
          </svg>
        }
        trailing={
          <div className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c8a99" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
              <path d="M13.7 21a2 2 0 01-3.4 0" />
            </svg>
            <span className="absolute" style={{ top: -2, right: -2, width: 8, height: 8, borderRadius: 999, background: "#e84c30", border: "1.5px solid #faf8f5" }} />
          </div>
        }
      />

      <div style={{ padding: "0 20px 14px" }}>
        <div style={{ fontSize: 13, color: "#64748b", marginBottom: 3 }}>Thursday, September 10</div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#0c1b2a", letterSpacing: "-0.02em" }}>Leads &amp; Listings</div>
      </div>

      <div style={{ margin: "0 20px 14px", borderRadius: 18, padding: 18, background: "linear-gradient(135deg, #245380, #1a3d5c)", color: "#fff" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>Active pipeline</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>12 listings &middot; 5 under contract</div>
        <div className="overflow-hidden" style={{ height: 7, borderRadius: 999, background: "rgba(255,255,255,0.22)", marginBottom: 8 }}>
          <div style={{ width: "42%", height: "100%", borderRadius: 999, background: "#7dd3fc" }} />
        </div>
        <div className="flex justify-between" style={{ fontSize: 12, color: "rgba(255,255,255,0.78)" }}>
          <span>2 closing this week</span>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>$4.1M volume</span>
        </div>
      </div>

      <div className="flex flex-col flex-grow" style={{ padding: "0 20px", gap: 9 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase" }}>Needs you</div>

        <div style={{ background: "#fff", border: "1px solid #f2d9d2", borderRadius: 15, padding: 14 }}>
          <div className="flex items-start" style={{ gap: 11, marginBottom: 11 }}>
            <div className="flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32, borderRadius: 10, background: "#fdece8" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e84c30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="3.6" />
                <path d="M5 20c0-3.7 3.1-5.8 7-5.8s7 2.1 7 5.8" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0c1b2a", marginBottom: 2 }}>New lead &middot; 412 Palmetto Row</div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>Wants a showing &middot; waiting 22 min</div>
            </div>
          </div>
          <div className="flex" style={{ gap: 8 }}>
            <div className="flex-grow text-center" style={{ fontSize: 13, fontWeight: 600, color: "#fff", background: "#2563eb", borderRadius: 10, padding: 9 }}>
              Call now
            </div>
            <div className="text-center" style={{ fontSize: 13, fontWeight: 500, color: "#475569", background: "#f1f5f9", borderRadius: 10, padding: "9px 16px" }}>
              Text
            </div>
          </div>
        </div>

        <div style={{ fontSize: 12, fontWeight: 600, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4 }}>
          Recent activity
        </div>

        <div className="flex items-start" style={{ gap: 11, background: "#fff", border: "1px solid #f3efe8", borderRadius: 15, padding: 13 }}>
          <div className="flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32, borderRadius: 10, background: "#dcfce7" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12734b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2.6v18.8M16.8 6.6c-1-1.3-2.6-2-4.4-2-2.6 0-4.6 1.4-4.6 3.4 0 4.2 9 2.3 9 6.9 0 2-2 3.5-4.6 3.5-1.8 0-3.6-.7-4.6-2.2" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0c1b2a", marginBottom: 2, fontVariantNumeric: "tabular-nums" }}>
              Offer received &middot; $612,000
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>3 Marsh Wren Ln &middot; 1h ago</div>
          </div>
        </div>

        <div className="flex items-start" style={{ gap: 11, background: "#fff", border: "1px solid #f3efe8", borderRadius: 15, padding: 13 }}>
          <div className="flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32, borderRadius: 10, background: "#fef3c7" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a16207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14.5 3.5a4.6 4.6 0 016.1 6.1L9.9 20.3l-6.2 1.3 1.3-6.2z" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0c1b2a", marginBottom: 2 }}>Maintenance request</div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>214 Creekside Unit B &middot; HVAC out</div>
          </div>
        </div>
      </div>

      <TabBar
        tabs={[
          { label: "Today", active: true, icon: <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /> },
          { label: "Leads", icon: <><circle cx="12" cy="8" r="3.6" /><path d="M5 20c0-3.7 3.1-5.8 7-5.8s7 2.1 7 5.8" /></> },
          { label: "Listings", icon: <><path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><path d="M9.5 21v-6h5v6" /></> },
          { label: "Inbox", icon: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l2-5.2A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" /> },
        ]}
      />
    </div>
  );
}
