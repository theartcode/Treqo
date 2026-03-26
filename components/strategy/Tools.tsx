"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, Star, Sparkles, ArrowRight, BarChart2, Search, Mail, Globe, Target, Zap } from "lucide-react";

/* ─────────────────────────────────────────────
   CERTIFICATE DATA  — grouped by provider
───────────────────────────────────────────── */
const semrush = [
  { name: "PPC Fundamentals",           provider: "SEMrush", icon: <Target size={15} />,    color: "#FF642D", providerColor: "#FF642D" },
  { name: "SEO Fundamentals",           provider: "SEMrush", icon: <Search size={15} />,    color: "#FF642D", providerColor: "#FF642D" },
  { name: "Social Media",               provider: "SEMrush", icon: <Star size={15} />,      color: "#FF642D", providerColor: "#FF642D" },
  { name: "Content Marketing",          provider: "SEMrush", icon: <Award size={15} />,     color: "#FF642D", providerColor: "#FF642D" },
];

const hubspot = [
  { name: "SEO Certification",                  provider: "HubSpot", icon: <Search size={15} />,    color: "#FF7A59", providerColor: "#FF7A59" },
  { name: "Digital Marketing",                  provider: "HubSpot", icon: <Globe size={15} />,     color: "#FF7A59", providerColor: "#FF7A59" },
  { name: "Social Media Marketing",             provider: "HubSpot", icon: <Star size={15} />,      color: "#FF7A59", providerColor: "#FF7A59" },
  { name: "Email Marketing",                    provider: "HubSpot", icon: <Mail size={15} />,      color: "#FF7A59", providerColor: "#FF7A59" },
  { name: "Inbound Marketing",                  provider: "HubSpot", icon: <Zap size={15} />,       color: "#FF7A59", providerColor: "#FF7A59" },
  { name: "Content Marketing",                  provider: "HubSpot", icon: <Award size={15} />,     color: "#FF7A59", providerColor: "#FF7A59" },
];

const google = [
  { name: "Google My Business",            provider: "Google", icon: <Globe size={15} />,     color: "#34A853", providerColor: "#4285F4" },
  { name: "Google Analytics (GA4)",        provider: "Google", icon: <BarChart2 size={15} />, color: "#4285F4", providerColor: "#4285F4" },
  { name: "Google Ads Shopping",           provider: "Google", icon: <Target size={15} />,    color: "#EA4335", providerColor: "#4285F4" },
  { name: "Performance Max",               provider: "Google", icon: <Zap size={15} />,       color: "#FBBC04", providerColor: "#4285F4" },
  { name: "Google Ads Video",              provider: "Google", icon: <Star size={15} />,      color: "#EA4335", providerColor: "#4285F4" },
  { name: "Google Ads Display",            provider: "Google", icon: <Award size={15} />,     color: "#34A853", providerColor: "#4285F4" },
  { name: "Fundamentals of Digital Mkt",  provider: "Google", icon: <Globe size={15} />,     color: "#4285F4", providerColor: "#4285F4" },
  { name: "Google Ads Search",             provider: "Google", icon: <Search size={15} />,    color: "#FBBC04", providerColor: "#4285F4" },
];

const meta = [
  { name: "Community Manager",         provider: "Meta", price: "$99",  icon: <Star size={15} />,       color: "#0082FB", providerColor: "#0082FB" },
  { name: "Creative Strategy Pro",     provider: "Meta", price: "$150", icon: <Sparkles size={15} />,   color: "#0082FB", providerColor: "#0082FB" },
  { name: "Media Planning Pro",        provider: "Meta", price: "$150", icon: <BarChart2 size={15} />,  color: "#0082FB", providerColor: "#0082FB" },
  { name: "Marketing Science Pro",     provider: "Meta", price: "$150", icon: <Award size={15} />,      color: "#0082FB", providerColor: "#0082FB" },
  { name: "Digital Marketing Assoc.",  provider: "Meta", price: "$99",  icon: <BadgeCheck size={15} />, color: "#0082FB", providerColor: "#0082FB" },
  { name: "Media Buying Pro",          provider: "Meta", price: "$150", icon: <Target size={15} />,     color: "#0082FB", providerColor: "#0082FB" },
];

/* provider logo pill colours */
const providerBadge: Record<string, { bg: string; text: string }> = {
  SEMrush: { bg: "rgba(255,100,45,0.15)",  text: "#FF642D" },
  HubSpot: { bg: "rgba(255,122,89,0.15)",  text: "#FF7A59" },
  Google:  { bg: "rgba(66,133,244,0.15)",  text: "#4285F4" },
  Meta:    { bg: "rgba(0,130,251,0.15)",   text: "#0082FB" },
};

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
type Cert = {
  name: string;
  provider: string;
  icon: React.ReactNode;
  color: string;
  providerColor: string;
  price?: string;
};

function CertCard({ cert }: { cert: Cert }) {
  const badge = providerBadge[cert.provider];
  return (
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      minWidth: 230, maxWidth: 230,
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 20,
      padding: "20px 20px 16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      flexShrink: 0,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* subtle top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${cert.color}, transparent)`, borderRadius: "20px 20px 0 0" }} />

      {/* icon + provider */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 12,
          background: cert.color + "18",
          border: `1px solid ${cert.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: cert.color,
        }}>
          {cert.icon}
        </div>
        <div style={{
          fontSize: 9, fontWeight: 800,
          background: badge.bg, color: badge.text,
          borderRadius: 999, padding: "3px 10px",
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          {cert.provider}
        </div>
      </div>

      {/* name */}
      <p style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 800, color: "white", lineHeight: 1.35 }}>
        {cert.name}
      </p>

      {/* footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {cert.price ? (
          <span style={{ fontSize: 10, fontWeight: 800, color: cert.color, background: cert.color + "15", borderRadius: 6, padding: "3px 8px" }}>
            {cert.price} exam
          </span>
        ) : (
          <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Included
          </span>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 3, color: cert.color, fontSize: 9, fontWeight: 800, textTransform: "uppercase" }}>
          <span>View</span><ArrowRight size={10} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   INFINITE ROW
───────────────────────────────────────────── */
function InfiniteRow({ certs, direction = 1, speed = 28 }: { certs: Cert[]; direction?: 1 | -1; speed?: number }) {
  const loop = [...certs, ...certs, ...certs]; // triple for seamless
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        style={{ display: "flex", gap: 16 }}
        animate={{ x: direction === 1 ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((cert, i) => <CertCard key={i} cert={cert} />)}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export default function CertificatesSection() {
  return (
    <section style={{
      padding: "96px 5% 80px",
      background: "#0F0A1F",
      color: "white",
      overflow: "hidden",
      borderTop: "1px solid rgba(139,92,246,0.12)",
      borderBottom: "1px solid rgba(139,92,246,0.12)",
      fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
      position: "relative",
    }}>
      {/* ambient glow */}
      <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: 800, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* ── HEADER ── */}
      <div style={{ textAlign: "center", marginBottom: 60, padding: "0 5%", position: "relative", zIndex: 2 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)",
          borderRadius: 999, padding: "6px 18px", marginBottom: 20,
        }}>
          <ShieldCheck size={12} color="#A78BFA" />
          <span style={{ fontSize: 10, fontWeight: 800, color: "#A78BFA", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Industry Certifications
          </span>
        </div>

        <h2 style={{ margin: "0 0 14px", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          <span style={{ display: "block", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, color: "white" }}>
            30+ Certifications
          </span>
          <span style={{
            display: "inline-block", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, fontStyle: "italic",
            background: "linear-gradient(90deg, #A78BFA 0%, #7C3AED 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Yours to Earn.
          </span>
        </h2>

        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontWeight: 500 }}>
          From Google & Meta to HubSpot & SEMrush — graduate with credentials that recruiters actually search for.
        </p>

        {/* provider pills */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
          {[
            { name: "Google", bg: "rgba(66,133,244,0.12)", text: "#4285F4", count: "8 certs" },
            { name: "Meta",   bg: "rgba(0,130,251,0.12)",  text: "#0082FB", count: "6 certs · paid" },
            { name: "HubSpot",bg: "rgba(255,122,89,0.12)", text: "#FF7A59", count: "6 certs" },
            { name: "SEMrush",bg: "rgba(255,100,45,0.12)", text: "#FF642D", count: "4 certs" },
          ].map(p => (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 8, background: p.bg, border: `1px solid ${p.text}22`, borderRadius: 999, padding: "6px 14px" }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: p.text }}>{p.name}</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.3)" }}>{p.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4 SCROLLING ROWS ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <InfiniteRow certs={google}  direction={1}  speed={32} />
        <InfiniteRow certs={meta}    direction={-1} speed={28} />
        <InfiniteRow certs={hubspot} direction={1}  speed={35} />
        <InfiniteRow certs={semrush} direction={-1} speed={24} />
      </div>

      {/* ── FOOTER NOTE ── */}
      <div style={{ marginTop: 48, textAlign: "center", padding: "0 5%", position: "relative", zIndex: 2 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14, padding: "12px 24px",
        }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 8px #4ADE80" }} />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
            Google, HubSpot & SEMrush certifications are <strong style={{ color: "rgba(255,255,255,0.75)" }}>included in your fee</strong>. Meta certifications require separate exam fees.
          </span>
        </div>
      </div>
    </section>
  );
}
