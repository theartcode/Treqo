"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp, MousePointer, BarChart2, Zap, Target, Globe, Mail, Search } from "lucide-react";

/* ─── live feed ticker ──────────────────────────────────────────────────────── */
const FEED = [
  { dot: "#34D399", msg: "Meta Ads · 1,240 leads synced · CTR 8.4% · ROAS 4.2x" },
  { dot: "#60A5FA", msg: "GA4 · 12,841 sessions · Bounce 28% · CVR 4.2%" },
  { dot: "#F472B6", msg: "SEMrush · 87 SEO issues fixed · Domain Rating 42" },
  { dot: "#FBBF24", msg: "Zapier · 340 zaps triggered · 0 errors · 99.9% uptime" },
  { dot: "#A78BFA", msg: "Google Ads PMAX · Impression share 68% · CPC ₹12.4" },
  { dot: "#34D399", msg: "Klaviyo · 42% open rate · 8.1% CTR · ₹3.2L revenue" },
  { dot: "#60A5FA", msg: "LinkedIn Ads · 220 B2B leads · CPL ₹184 · CTR 1.8%" },
];

/* bars for the chart */
const BARS = [32, 48, 42, 62, 55, 70, 58, 78, 64, 85, 72, 91];

export function LaptopShowcaseSection() {
  const [feedIdx, setFeedIdx] = useState(0);
  const [metricTick, setMetricTick] = useState(0);

  useEffect(() => {
    const f = setInterval(() => setFeedIdx(i => (i + 1) % FEED.length), 2200);
    const m = setInterval(() => setMetricTick(t => t + 1), 3000);
    return () => { clearInterval(f); clearInterval(m); };
  }, []);

  const metrics = [
    { label: "CTR",  value: metricTick % 2 === 0 ? "8.4%"  : "9.1%",  up: true  },
    { label: "ROAS", value: metricTick % 2 === 0 ? "4.2x"  : "4.7x",  up: true  },
    { label: "CPL",  value: metricTick % 2 === 0 ? "₹184"  : "₹171",  up: false },
    { label: "CVR",  value: metricTick % 2 === 0 ? "4.2%"  : "4.9%",  up: true  },
  ];

  return (
    <section style={{
      position: "relative",
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      overflow: "hidden",
    }}>

      {/* ══════════════════════════════════════════════
          TOP HALF — deep purple
      ══════════════════════════════════════════════ */}
      <div style={{
        background: "linear-gradient(160deg, #1A0B35 0%, #2D1060 55%, #1A0B35 100%)",
        paddingTop: 100,
        paddingBottom: 320, /* extra so laptop overlaps */
        position: "relative",
        overflow: "hidden",
      }}>
        {/* dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }} />
        {/* glow */}
        <div style={{
          position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.22) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* text content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 5%" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)",
            borderRadius: 999, padding: "6px 18px", marginBottom: 24,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 10px #34D399" }} />
            <span style={{ fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.75)", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Learn Live · Build Real · Get Hired
            </span>
          </div>

          <h2 style={{ margin: "0 0 18px", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            <span style={{ display: "block", fontSize: "clamp(40px, 5vw, 70px)", fontWeight: 900, color: "white" }}>
              Your Dashboard,
            </span>
            <span style={{
              display: "block", fontSize: "clamp(40px, 5vw, 70px)", fontWeight: 900, fontStyle: "italic",
              background: "linear-gradient(90deg, #C4B5FD 0%, #A78BFA 40%, #7C3AED 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              From Day One.
            </span>
          </h2>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 44px", fontWeight: 500 }}>
            Every metric you see below is what you'll move — live campaigns, real spend, real results. Not theory. Execution.
          </p>

          {/* 3 stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: 56 }}>
            {[["30+", "Live Projects"], ["16", "Terms"], ["100%", "Placement"]].map(([num, lbl]) => (
              <div key={lbl} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: "white", letterSpacing: "-0.04em" }}>{num}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BOTTOM HALF — soft lavender/white
      ══════════════════════════════════════════════ */}
      <div style={{
        background: "linear-gradient(180deg, #EDE5FF 0%, #F5F0FF 60%, #FFFFFF 100%)",
        paddingTop: 260,
        paddingBottom: 80,
        position: "relative",
      }}>
        {/* subtle grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* bottom floating badges */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", padding: "0 5%" }}>
          {[
            { icon: Target,     label: "Meta Ads",    val: "ROAS 4.2x",  color: "#0082FB" },
            { icon: Search,     label: "SEO",         val: "DR 42 ↑",    color: "#7C3AED" },
            { icon: Mail,       label: "Email",       val: "42% Open",   color: "#10B981" },
            { icon: BarChart2,  label: "GA4",         val: "12k Sessions",color: "#F59E0B"},
          ].map(({ icon: Icon, label, val, color }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "white", borderRadius: 16,
              padding: "14px 20px",
              boxShadow: "0 4px 24px rgba(88,41,229,0.1)",
              border: "1px solid rgba(124,58,237,0.1)",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: color + "18",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={18} color={color} />
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, color: "rgba(26,11,53,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#1A0B35" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          LAPTOP — absolutely centered, straddles split
      ══════════════════════════════════════════════ */}
      <div style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(1020px, 92vw)",
        zIndex: 20,
        filter: "drop-shadow(0 40px 80px rgba(26,11,53,0.45)) drop-shadow(0 8px 24px rgba(88,41,229,0.25))",
      }}>

        {/* floating chip top-right */}
        <div style={{
          position: "absolute", top: -16, right: "8%", zIndex: 30,
          background: "white", borderRadius: 14, padding: "10px 18px",
          boxShadow: "0 8px 28px rgba(88,41,229,0.18)",
          display: "flex", alignItems: "center", gap: 10,
          animation: "floatA 3.2s ease-in-out infinite",
        }}>
          <TrendingUp size={16} color="#7C3AED" />
          <div>
            <div style={{ fontSize: 12, fontWeight: 900, color: "#1A0B35" }}>ROAS 4.2x ↑</div>
            <div style={{ fontSize: 9, color: "#7C3AED", fontWeight: 700, letterSpacing: "0.05em" }}>LIVE CAMPAIGN</div>
          </div>
        </div>

        {/* floating chip bottom-left */}
        <div style={{
          position: "absolute", bottom: 56, left: "4%", zIndex: 30,
          background: "#1A0B35", borderRadius: 14, padding: "10px 18px",
          boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
          display: "flex", alignItems: "center", gap: 10,
          animation: "floatB 3.8s ease-in-out infinite",
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 10px #34D399" }} />
          <div style={{ fontSize: 12, fontWeight: 800, color: "white" }}>Meta Campaign Live</div>
        </div>

        {/* ── REALISTIC LAPTOP SVG ── */}
        <svg
          viewBox="0 0 900 580"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", display: "block" }}
        >
          <defs>
            <linearGradient id="lidTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A2A2E" />
              <stop offset="100%" stopColor="#1A1A1E" />
            </linearGradient>
            <linearGradient id="lidSide" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#111113" />
              <stop offset="100%" stopColor="#222226" />
            </linearGradient>
            <linearGradient id="baseTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2E2E32" />
              <stop offset="100%" stopColor="#222226" />
            </linearGradient>
            <linearGradient id="baseFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A1A1E" />
              <stop offset="100%" stopColor="#111113" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D0622" />
              <stop offset="100%" stopColor="#0A0418" />
            </linearGradient>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <clipPath id="screenClip">
              <rect x="72" y="26" width="756" height="454" rx="6" />
            </clipPath>
          </defs>

          {/* ── LID BACK (slight 3-D perspective top edge) ── */}
          <path d="M60 18 Q450 8 840 18 L830 26 Q450 16 70 26 Z" fill="#111113" />

          {/* ── LID FACE ── */}
          <rect x="60" y="18" width="780" height="466" rx="10" fill="url(#lidTop)" />

          {/* subtle lid sheen */}
          <rect x="60" y="18" width="780" height="80" rx="10" fill="rgba(255,255,255,0.03)" />

          {/* ── LID LEFT EDGE ── */}
          <path d="M60 18 L50 26 L50 492 L60 484 Z" fill="url(#lidSide)" />
          {/* ── LID RIGHT EDGE ── */}
          <path d="M840 18 L850 26 L850 492 L840 484 Z" fill="url(#lidSide)" />

          {/* ── SCREEN BEZEL ── */}
          <rect x="68" y="22" width="764" height="462" rx="8" fill="#111113" />

          {/* ── SCREEN SURFACE ── */}
          <rect x="72" y="26" width="756" height="454" rx="6" fill="url(#screenGrad)" />

          {/* ══ SCREEN CONTENT ══════════════════════════════ */}
          <g clipPath="url(#screenClip)">

            {/* Top bar */}
            <rect x="72" y="26" width="756" height="32" fill="#160935" />
            {/* Traffic lights */}
            <circle cx="96"  cy="42" r="5.5" fill="#FF5F57" />
            <circle cx="114" cy="42" r="5.5" fill="#FFBD2E" />
            <circle cx="132" cy="42" r="5.5" fill="#28CA42" />
            {/* URL bar */}
            <rect x="240" y="33" width="360" height="18" rx="9" fill="rgba(255,255,255,0.06)" />
            <text x="420" y="45.5" fill="rgba(255,255,255,0.35)" fontSize="9" textAnchor="middle" fontFamily="monospace">dashboard.treq.co/live-campaigns</text>

            {/* ── SIDEBAR ── */}
            <rect x="72" y="58" width="80" height="422" fill="#0A0320" />
            {/* logo mark */}
            <rect x="88" y="72" width="48" height="14" rx="4" fill="#5829E5" />
            {/* nav items */}
            {[0,1,2,3,4,5].map(i => (
              <g key={i}>
                <rect x="84" y={102 + i*52} width="48" height="36" rx="8"
                  fill={i===0 ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.03)"} />
                <rect x="92" y={115 + i*52} width="16" height="10" rx="3"
                  fill={i===0 ? "#7C3AED" : "rgba(255,255,255,0.1)"} />
              </g>
            ))}

            {/* ── MAIN CONTENT AREA ── */}

            {/* Page title */}
            <text x="168" y="80" fill="white" fontSize="13" fontWeight="bold" fontFamily="'DM Sans', sans-serif">Campaign Overview</text>
            <text x="168" y="93" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">Last updated: just now · Auto-refreshing</text>

            {/* ── METRIC CARDS ROW ── */}
            {metrics.map((m, i) => (
              <g key={m.label}>
                <rect x={168 + i*147} y="104" width="133" height="68" rx="10"
                  fill="rgba(124,58,237,0.12)" stroke="rgba(124,58,237,0.25)" strokeWidth="0.8" />
                {/* top accent line */}
                <rect x={168 + i*147} y="104" width="133" height="3" rx="2" fill="#5829E5" opacity="0.7" />
                <text x={178 + i*147} y="122" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">{m.label}</text>
                <text x={178 + i*147} y="147" fill="white" fontSize="18" fontWeight="bold" fontFamily="monospace">{m.value}</text>
                <text x={278 + i*147} y="147" fill={m.up ? "#34D399" : "#F87171"} fontSize="8" fontFamily="monospace">{m.up ? "↑" : "↓"}</text>
              </g>
            ))}

            {/* ── BAR CHART ── */}
            <rect x="168" y="184" width="330" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <text x="180" y="201" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">Conversions · Last 30 days</text>
            {/* y-axis lines */}
            {[0,1,2,3].map(i => (
              <line key={i} x1="180" y1={316 - i*34} x2="488" y2={316 - i*34} stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
            ))}
            {/* bars */}
            {BARS.map((h, i) => {
              const barH = h * 1.05;
              return (
                <g key={i}>
                  <rect x={182 + i*25} y={316 - barH} width="18" height={barH} rx="4"
                    fill={i === BARS.length-1 ? "url(#barGrad)" : `rgba(124,58,237,${0.28 + i*0.055})`} />
                  {i === BARS.length-1 && (
                    <rect x={182 + i*25} y={316 - barH} width="18" height="4" rx="2" fill="#A78BFA" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
                    </rect>
                  )}
                </g>
              );
            })}

            {/* ── DONUT CHART ── */}
            <rect x="508" y="184" width="164" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <text x="520" y="201" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">Channel Mix</text>
            {/* donut rings */}
            <circle cx="590" cy="280" r="42" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="18" />
            <circle cx="590" cy="280" r="42" fill="none" stroke="#7C3AED" strokeWidth="18"
              strokeDasharray="88 176" strokeDashoffset="44" />
            <circle cx="590" cy="280" r="42" fill="none" stroke="#60A5FA" strokeWidth="18"
              strokeDasharray="52 176" strokeDashoffset="-44" />
            <circle cx="590" cy="280" r="42" fill="none" stroke="#34D399" strokeWidth="18"
              strokeDasharray="36 176" strokeDashoffset="-96" />
            <text x="590" y="276" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">50%</text>
            <text x="590" y="287" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle" fontFamily="monospace">Meta</text>
            {/* legend */}
            {[["#7C3AED","Meta","50%"],["#60A5FA","Google","30%"],["#34D399","Email","20%"]].map(([c,l,v],i)=>(
              <g key={l}>
                <rect x="520" y={300+i*13} width="8" height="8" rx="2" fill={c} />
                <text x="532" y={308+i*13} fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">{l} {v}</text>
              </g>
            ))}

            {/* ── LIVE ACTIVITY FEED ── */}
            <rect x="168" y="354" width="504" height="96" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <text x="180" y="371" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">Live Activity Feed</text>
            <circle cx="516" cy="368" r="3" fill="#34D399">
              <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <text x="522" y="372" fill="#34D399" fontSize="7" fontFamily="monospace">LIVE</text>

            {/* feed rows */}
            {FEED.slice(0, 4).map((item, i) => (
              <g key={i}>
                <circle cx="184" cy={388 + i*16} r="3" fill={item.dot} />
                <text x="194" y={392 + i*16} fill={i === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)"} fontSize="8" fontFamily="monospace">
                  {item.msg}
                </text>
              </g>
            ))}

            {/* blinking cursor */}
            <rect x="656" y="434" width="2" height="10" rx="1" fill="#7C3AED">
              <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
            </rect>

            {/* ── screen glare ── */}
            <rect x="72" y="26" width="756" height="454" rx="6"
              fill="url(#screenGrad)" opacity="0" />
            {/* diagonal glare */}
            <path d="M72 26 L200 26 L72 120 Z" fill="rgba(255,255,255,0.015)" />

          </g>
          {/* ══ END SCREEN CONTENT ══════════════════════════ */}

          {/* ── CAMERA ── */}
          <circle cx="450" cy="22" r="3.5" fill="#0A0320" />
          <circle cx="450" cy="22" r="1.5" fill="#1a1a2e" />

          {/* ── HINGE BAR ── */}
          <rect x="50" y="484" width="800" height="10" rx="3" fill="#111113" />
          <rect x="50" y="484" width="800" height="4" rx="2" fill="rgba(255,255,255,0.05)" />

          {/* ── BASE TOP SURFACE ── */}
          <path d="M18 494 Q450 490 882 494 L900 520 Q450 516 0 520 Z" fill="url(#baseTop)" />

          {/* trackpad */}
          <rect x="340" y="496" width="220" height="130" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

          {/* keyboard rows */}
          {[0,1,2,3].map(row => (
            Array.from({ length: row === 0 ? 13 : row === 3 ? 6 : 12 }).map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={row === 3 ? 270 + col * 60 : 90 + col * 57 + row * 4}
                y={502 + row * 22}
                width={row === 3 ? 52 : 48}
                height="16"
                rx="4"
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="0.5"
              />
            ))
          ))}

          {/* ── BASE FRONT EDGE ── */}
          <path d="M0 520 Q450 516 900 520 L900 540 Q450 538 0 540 Z" fill="url(#baseFront)" />
          <path d="M0 540 Q450 538 900 540 L890 548 Q450 546 10 548 Z" fill="#0D0D10" />

          {/* ── REFLECTION UNDER BASE ── */}
          <ellipse cx="450" cy="555" rx="380" ry="12" fill="rgba(88,41,229,0.12)" />
          <ellipse cx="450" cy="560" rx="300" ry="8" fill="rgba(0,0,0,0.2)" />
        </svg>
      </div>

      <style>{`
        @keyframes floatA {
          0%,100% { transform: translateY(0) rotate(-1deg); }
          50%      { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0) rotate(1deg); }
          50%      { transform: translateY(-9px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
}
