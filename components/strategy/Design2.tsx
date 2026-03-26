"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function KineticMosaic() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const hov = (n: number) => hoveredCard === n;

  return (
    <section
      ref={containerRef}
      style={{
        background: "#F7F5FF",
        padding: "100px 0",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(124,58,237,0.05) 59px, rgba(124,58,237,0.05) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(124,58,237,0.025) 59px, rgba(124,58,237,0.025) 60px)
          `,
        }}
      />
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "-180px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 10 }}>

        {/* ── HEADER ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "flex-end", gap: "40px", marginBottom: "56px" }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}
            >
              <div style={{ width: "32px", height: "1px", background: "rgba(124,58,237,0.4)" }} />
              <span style={{ fontSize: "9px", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.3em" }}>
                Creative Intelligence
              </span>
            </motion.div>
            <h2 style={{ margin: 0, lineHeight: 0.9, letterSpacing: "-0.03em" }}>
              <span style={{ display: "block", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 900, color: "#0D0D1A", textTransform: "uppercase" }}>
                The Art of
              </span>
              <span style={{ display: "block", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 300, color: "#7C3AED", fontStyle: "italic", fontFamily: "Georgia, serif", textTransform: "lowercase" }}>
                Building &amp; Marketing
              </span>
            </h2>
          </div>
          <div style={{ paddingLeft: "32px" }}>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#64748b", lineHeight: 1.7, maxWidth: "380px", margin: 0 }}>
              We don't teach you how to market. We put you in the market.{" "}
              <span style={{ color: "#0D0D1A", fontWeight: 700 }}>Real brand. Real audience. Real revenue built</span>{" "}
              and <span style={{ color: "#0D0D1A", fontWeight: 700 }}>launched by you, from day one.</span>
            </p>
          </div>
        </div>

        {/* ── BENTO GRID ──
            Row 1: Card1 [col 1–4, rows 1–2] | Card2 [col 5–8] | Card3 [col 9–12]
            Row 2:                            | Card4 [col 5–9]  | Card5 [col 10–12]
        */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "minmax(210px, auto) minmax(210px, auto)",
            gap: "16px",
          }}
        >

          {/* ── CARD 1 — Idea Validation (tall, rows 1–2) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: "1 / 5",
              gridRow: "1 / 3",
              background: hov(1) ? "#7C3AED" : "#ffffff",
              borderRadius: "28px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: `1.5px solid ${hov(1) ? "#7C3AED" : "#EDE9FE"}`,
              boxShadow: hov(1) ? "0 24px 60px rgba(124,58,237,0.28)" : "0 2px 16px rgba(124,58,237,0.07)",
              transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, opacity: hov(1) ? 0.07 : 0.03, backgroundImage: "radial-gradient(#7C3AED 1px, transparent 1px)", backgroundSize: "18px 18px", pointerEvents: "none", transition: "opacity 0.4s" }} />
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: `radial-gradient(circle, ${hov(1) ? "rgba(255,255,255,0.15)" : "rgba(124,58,237,0.09)"} 0%, transparent 70%)`, pointerEvents: "none", transition: "background 0.4s" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "9px", fontWeight: 800, color: hov(1) ? "rgba(255,255,255,0.55)" : "#C4B5FD", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px", transition: "color 0.4s" }}>
                Phase 01 · The "Why"
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "26px", fontWeight: 900, color: hov(1) ? "#ffffff" : "#0D0D1A", lineHeight: 1.05, letterSpacing: "-0.02em", textTransform: "uppercase", transition: "color 0.4s" }}>
                IDEA VALIDATION &<br />STRATEGY
              </h3>
              <p style={{ margin: "0 0 20px", fontSize: "13px", color: hov(1) ? "rgba(255,255,255,0.7)" : "#64748b", fontWeight: 500, lineHeight: 1.65, fontStyle: "italic", transition: "color 0.4s" }}>
                "Don't build what you like. Build what people need."
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Talk to 50–100 real people before writing a single line of code",
                  "If you can't explain the problem in one sentence, you haven't understood it yet",
                  "Before TREQO was built, real graduates were asked 'what stopped you from getting hired?' The answer became the curriculum",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "12px", color: hov(1) ? "rgba(255,255,255,0.7)" : "#64748b", fontWeight: 500, lineHeight: 1.55, transition: "color 0.4s" }}>
                    <span style={{ width: "5px", minWidth: "5px", height: "5px", borderRadius: "50%", background: hov(1) ? "rgba(255,255,255,0.5)" : "#A78BFA", marginTop: "5px", flexShrink: 0, transition: "background 0.4s" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: "relative", zIndex: 1, marginTop: "28px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: hov(1) ? "rgba(255,255,255,0.2)" : "#7C3AED",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
                transform: hov(1) ? "translateX(6px)" : "translateX(0)",
                boxShadow: hov(1) ? "none" : "0 4px 14px rgba(124,58,237,0.35)",
              }}>
                <ArrowRight size={18} color="white" />
              </div>
            </div>
          </motion.div>

          {/* ── CARD 2 — MVP Development (row 1, dark) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: "5 / 9",
              gridRow: "1",
              background: "#0D0D1A",
              borderRadius: "28px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              position: "relative",
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
              transform: hov(2) ? "translateY(-5px)" : "translateY(0)",
              boxShadow: hov(2) ? "0 20px 50px rgba(124,58,237,0.3)" : "0 2px 16px rgba(0,0,0,0.15)",
              cursor: "default",
            }}
          >
            <div style={{ position: "absolute", bottom: "-20px", right: "-20px", opacity: hov(2) ? 0.14 : 0.06, transition: "opacity 0.4s" }}>
              <TrendingUp size={100} color="white" />
            </div>
            <div style={{ position: "absolute", top: "-40px", left: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: hov(2) ? "radial-gradient(circle, rgba(124,58,237,0.55) 0%, transparent 70%)" : "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)", pointerEvents: "none", transition: "background 0.4s" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: "9px", fontWeight: 800, color: "#A78BFA", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Phase 02 · The "What"
              </span>
              <h4 style={{ margin: "8px 0 0", fontSize: "22px", fontWeight: 900, color: "white", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                MVP<br />Development
              </h4>
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ margin: "0 0 8px", fontSize: "12px", color: hov(2) ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)", fontWeight: 500, lineHeight: 1.6, fontStyle: "italic", transition: "color 0.4s" }}>
                "Launch ugly. Learn fast."
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: hov(2) ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)", fontWeight: 500, lineHeight: 1.65, transition: "color 0.4s" }}>
                Build the smallest version that solves the core problem. Swiggy started with just WhatsApp + a bike. No app. Ship in days, not months.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 3 — GTM Strategy (row 1, purple gradient) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: "9 / 13",
              gridRow: "1",
              background: hov(3) ? "linear-gradient(135deg, #6D28D9 0%, #3730A3 100%)" : "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
              borderRadius: "28px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
              transform: hov(3) ? "translateY(-5px)" : "translateY(0)",
              boxShadow: hov(3) ? "0 20px 50px rgba(109,40,217,0.4)" : "0 4px 20px rgba(124,58,237,0.22)",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", bottom: "-30px", right: "-30px", width: "140px", height: "140px", borderRadius: "50%", background: hov(3) ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)", pointerEvents: "none", transition: "background 0.4s" }} />

            <div>
              <div style={{ fontSize: "9px", fontWeight: 800, color: "rgba(255,255,255,0.55)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
                Phase 03 · The "How"
              </div>
              <h4 style={{ margin: 0, fontSize: "20px", fontWeight: 900, color: "white", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                GTM STRATEGY &<br />POSITIONING
              </h4>
            </div>
            <div>
              <p style={{ margin: "0 0 14px", fontSize: "13px", color: hov(3) ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.65)", fontWeight: 500, lineHeight: 1.65, fontStyle: "italic", transition: "color 0.4s" }}>
                "The best product doesn't win. The best-positioned one does."
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Pick one customer, one channel, one message",
                  "Zepto didn't say 'groceries' — they said '10 minutes'",
                  "Know exactly where your customer spends time",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "12px", color: hov(3) ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)", fontWeight: 500, lineHeight: 1.55, transition: "color 0.4s" }}>
                    <span style={{ width: "5px", minWidth: "5px", height: "5px", borderRadius: "50%", background: hov(3) ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: "5px", transition: "background 0.4s" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── CARD 4 — Launch Execution (row 2, lavender) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: "5 / 10",
              gridRow: "2",
              background: hov(4) ? "#DDD6FE" : "#EDE9FE",
              borderRadius: "28px",
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",
              transform: hov(4) ? "translateY(-5px)" : "translateY(0)",
              boxShadow: hov(4) ? "0 20px 50px rgba(124,58,237,0.2)" : "0 2px 12px rgba(124,58,237,0.06)",
              cursor: "default",
            }}
          >
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: hov(4) ? "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)" : "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", pointerEvents: "none", transition: "background 0.4s" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "9px", fontWeight: 800, color: hov(4) ? "#7C3AED" : "#A78BFA", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px", transition: "color 0.4s" }}>
                Phase 04 · The "When"
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 900, color: "#3B0764", letterSpacing: "-0.03em", lineHeight: 1.05, textTransform: "uppercase" }}>
                LAUNCH<br />EXECUTION
              </h3>
              <p style={{ margin: "0 0 14px", fontSize: "13px", color: hov(4) ? "#4C1D95" : "#5B21B6", fontWeight: 500, lineHeight: 1.65, fontStyle: "italic", transition: "color 0.4s" }}>
                "Done beats perfect. Every time."
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Get your first 10 customers manually — call, DM, show up",
                  "OYO launched with just 1 hotel. Figure out the rest after",
                  "Create a launch moment, not just a launch",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "12px", color: hov(4) ? "#4C1D95" : "#5B21B6", fontWeight: 500, lineHeight: 1.55, transition: "color 0.4s" }}>
                    <span style={{ width: "5px", minWidth: "5px", height: "5px", borderRadius: "50%", background: hov(4) ? "#7C3AED" : "#A78BFA", flexShrink: 0, marginTop: "5px", transition: "background 0.4s" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── CARD 5 — Scale & Retain (row 2, white) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: "10 / 13",
              gridRow: "2",
              background: "#ffffff",
              borderRadius: "28px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: `1.5px solid ${hov(5) ? "#C4B5FD" : "#EDE9FE"}`,
              transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
              boxShadow: hov(5) ? "0 20px 50px rgba(124,58,237,0.16)" : "0 2px 12px rgba(124,58,237,0.05)",
              transform: hov(5) ? "translateY(-5px)" : "translateY(0)",
              cursor: "default",
            }}
          >
            <div>
              <div style={{ fontSize: "9px", fontWeight: 800, color: hov(5) ? "#7C3AED" : "#C4B5FD", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px", transition: "color 0.4s" }}>
                Phase 05 · Now What
              </div>
              <div style={{ fontSize: "34px", fontWeight: 900, color: hov(5) ? "#6D28D9" : "#7C3AED", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "10px", transition: "color 0.4s" }}>
                ₹0
              </div>
              <p style={{ margin: "0 0 14px", fontSize: "12px", color: hov(5) ? "#4C1D95" : "#3B0764", fontWeight: 500, fontStyle: "italic", lineHeight: 1.55, transition: "color 0.4s" }}>
                "Getting customers is hard. Keeping them is where money lives."
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Track CAC, LTV, Churn — not likes and views",
                  "Find what's working and double down. Build systems so the business runs without you.",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", color: hov(5) ? "#4C1D95" : "#64748b", fontWeight: 500, lineHeight: 1.55, transition: "color 0.4s" }}>
                    <span style={{ width: "5px", minWidth: "5px", height: "5px", borderRadius: "50%", background: hov(5) ? "#7C3AED" : "#A78BFA", flexShrink: 0, marginTop: "5px", transition: "background 0.4s" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}