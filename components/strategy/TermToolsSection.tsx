"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, Terminal, ArrowRight, Zap, Clock, Users, BarChart2 } from "lucide-react";

const TERM_DATA = [
  {
    id: 1,
    title: "Marketing Foundations",
    subtitle: "Build the base",
    duration: "2 weeks",
    projects: 3,
    level: "Beginner",
    tools: ["Google Trends", "Canva", "ChatGPT", "Notion"],
    techniques: ["Market Research", "Customer Personas", "Brand Positioning", "Value Proposition"],
    outcome: "You'll walk away with a complete brand brief and a validated customer persona ready for real campaign use.",
  },
  {
    id: 2,
    title: "Performance Marketing",
    subtitle: "Run paid campaigns",
    duration: "3 weeks",
    projects: 4,
    level: "Intermediate",
    tools: ["Google Ads", "Meta Ads Manager", "Hotjar", "Triple Whale"],
    techniques: ["Paid Campaign Structuring", "Conversion Tracking", "A/B Testing", "ROAS Optimization"],
    outcome: "Launch and manage a real ₹10,000 test ad campaign with measurable ROAS outcomes.",
  },
  {
    id: 3,
    title: "Content & SEO",
    subtitle: "Own organic traffic",
    duration: "2 weeks",
    projects: 3,
    level: "Intermediate",
    tools: ["Ahrefs", "SEMrush", "Surfer SEO", "Screaming Frog"],
    techniques: ["Keyword Research", "On-page SEO", "Content Calendars", "Topic Clustering"],
    outcome: "Rank a live article in 60 days and build a full editorial calendar for a real brand.",
  },
  {
    id: 4,
    title: "Growth Funnels",
    subtitle: "Convert & retain",
    duration: "2 weeks",
    projects: 4,
    level: "Intermediate",
    tools: ["Webflow", "Zapier", "Klaviyo", "Google Analytics"],
    techniques: ["Funnel Mapping", "Lead Magnets", "Email Automation", "Retention Loops"],
    outcome: "Build a fully automated 5-step lead funnel that captures and converts real traffic.",
  },
  {
    id: 5,
    title: "Analytics & Optimization",
    subtitle: "Measure everything",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    tools: ["GA4", "Looker Studio", "Mixpanel", "Amplitude"],
    techniques: ["Cohort Analysis", "Event Tracking", "Funnel Analysis", "Data-led Decisions"],
    outcome: "Deliver a live analytics dashboard for a real client with actionable growth recommendations.",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    subtitle: "Build audiences",
    duration: "2 weeks",
    projects: 3,
    level: "Beginner",
    tools: ["Buffer", "Sprout Social", "Later", "Hootsuite"],
    techniques: ["Platform Strategy", "Organic Growth", "Community Building", "Engagement Loops"],
    outcome: "Grow a brand account by 500+ followers organically using a documented content strategy.",
  },
  {
    id: 7,
    title: "Email Marketing",
    subtitle: "Own your list",
    duration: "1 week",
    projects: 2,
    level: "Intermediate",
    tools: ["Mailchimp", "ConvertKit", "ActiveCampaign", "Beehiiv"],
    techniques: ["List Segmentation", "Drip Campaigns", "Open Rate Optimization", "Lifecycle Emails"],
    outcome: "Launch a 5-email welcome sequence that achieves 35%+ open rate on a real subscriber list.",
  },
  {
    id: 8,
    title: "Brand Strategy",
    subtitle: "Define your identity",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    tools: ["Figma", "Adobe Express", "Miro", "Loom"],
    techniques: ["Brand Archetypes", "Tone of Voice", "Visual Identity", "Messaging Frameworks"],
    outcome: "Produce a complete brand guidelines deck for a startup client, pitch-ready for investors.",
  },
  {
    id: 9,
    title: "Influencer & Partnerships",
    subtitle: "Leverage networks",
    duration: "1 week",
    projects: 2,
    level: "Intermediate",
    tools: ["Modash", "Grin", "Aspire", "Creator.co"],
    techniques: ["Creator Outreach", "Campaign Briefs", "ROI Measurement", "Co-marketing"],
    outcome: "Close and execute one real influencer deal with tracked impressions and conversion data.",
  },
  {
    id: 10,
    title: "E-commerce Growth",
    subtitle: "Drive online revenue",
    duration: "2 weeks",
    projects: 4,
    level: "Advanced",
    tools: ["Shopify", "Klaviyo", "Yotpo", "Gorgias"],
    techniques: ["Product Listings", "Cart Abandonment", "Upsell Strategy", "Review Generation"],
    outcome: "Increase a live Shopify store's conversion rate by 20% using tested CRO interventions.",
  },
  {
    id: 11,
    title: "AI & Automation",
    subtitle: "Scale with systems",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    tools: ["Make.com", "ChatGPT", "Jasper", "n8n"],
    techniques: ["Prompt Engineering", "Workflow Automation", "AI Content Strategy", "Smart Reporting"],
    outcome: "Ship an end-to-end automated content and reporting workflow saving 10+ hours per week.",
  },
  {
    id: 12,
    title: "Career & Portfolio",
    subtitle: "Land your dream role",
    duration: "1 week",
    projects: 2,
    level: "All Levels",
    tools: ["LinkedIn", "Notion", "Contra", "Read.cv"],
    techniques: ["Portfolio Building", "Personal Branding", "Interview Prep", "Salary Negotiation"],
    outcome: "Walk out with a live portfolio, optimised LinkedIn, and 3 warm hiring introductions.",
  },
];

const levelColor: Record<string, string> = {
  "Beginner": "#34D399",
  "Intermediate": "#60A5FA",
  "Advanced": "#F472B6",
  "All Levels": "#FBBF24",
};

export default function TermToolsPage() {
  const [activeTerm, setActiveTerm] = useState(TERM_DATA[0]);

  return (
    <section style={{
      background: "#0B233F",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      padding: "48px 0 48px",
    }}>

      {/* GRID BACKGROUND */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.1 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: "1440px", width: "100%",
        margin: "0 auto", padding: "0 4%",
        boxSizing: "border-box",
        flex: 1, display: "flex", flexDirection: "column", minHeight: 0,
      }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "28px", flexShrink: 0 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px", padding: "6px 16px", marginBottom: "16px",
          }}>
            <Sparkles size={11} color="#7278ec" />
            <span style={{ fontSize: "10px", fontWeight: 800, color: "white", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Curriculum Stack
            </span>
          </div>

          <h2 style={{ margin: "0 auto 10px", lineHeight: 1.0, letterSpacing: "-0.04em" }}>
            <span style={{
              display: "block", fontSize: "clamp(38px, 4.5vw, 62px)", fontWeight: 900,
              background: "linear-gradient(to right, #FFFFFF 0%, #acbfef 35%, #86bcff 36%, #ffffff 100%)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              What You'll Learn
            </span>
            <span style={{ display: "block", fontSize: "clamp(38px, 4.5vw, 62px)", fontWeight: 900, color: "white", fontStyle: "italic" }}>
              Inside The System
            </span>
          </h2>

          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", fontWeight: 500, maxWidth: "460px", margin: "0 auto", lineHeight: 1.5 }}>
            Each term is engineered to build high-performance execution skills through a unified growth framework.
          </p>
        </div>

        {/* MAIN LAYOUT — fills all remaining height */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          borderRadius: "36px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
          flex: 1,
          minHeight: 0,
        }}>

          {/* ── LEFT PANEL ── */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            display: "flex", flexDirection: "column", minHeight: 0,
          }}>

            {/* Panel header */}
            <div style={{ padding: "24px 24px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)", flexShrink: 0 }}>
              <p style={{ margin: "0 0 4px", fontSize: "9px", fontWeight: 800, color: "#60A5FA", textTransform: "uppercase", letterSpacing: "0.25em" }}>Program Timeline</p>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 900, color: "white", letterSpacing: "-0.02em" }}>PHASES</h3>
                <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>12 TERMS</span>
              </div>
            </div>

            {/* Scrollable list — 8 items visible, 4 scroll */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              {/* Bottom fade hint */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "48px",
                background: "linear-gradient(to top, rgba(11,35,63,0.9), transparent)",
                pointerEvents: "none", zIndex: 2, borderRadius: "0 0 0 0",
              }} />
            <div style={{
              overflowY: "auto",
              maxHeight: "504px",
              padding: "14px 14px",
              display: "flex", flexDirection: "column", gap: "6px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(96,165,250,0.25) transparent",
            }}>
              {TERM_DATA.map((term) => {
                const isActive = term.id === activeTerm.id;
                return (
                  <button
                    key={term.id}
                    onClick={() => setActiveTerm(term)}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      width: "100%", padding: "15px 18px",
                      borderRadius: "16px", textAlign: "left",
                      background: isActive ? "white" : "transparent",
                      border: `1px solid ${isActive ? "white" : "rgba(255,255,255,0.04)"}`,
                      cursor: "pointer",
                      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{
                      fontSize: "13px", fontWeight: 900, minWidth: "24px",
                      color: isActive ? "#0B233F" : "#60A5FA", fontFamily: "serif",
                    }}>
                      {term.id < 10 ? `0${term.id}` : term.id}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{
                        margin: "0 0 2px", fontSize: "12px", fontWeight: 800,
                        color: isActive ? "#0B233F" : "rgba(255,255,255,0.8)",
                        textTransform: "uppercase", letterSpacing: "0.04em",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}>
                        {term.title}
                      </p>
                      <p style={{
                        margin: 0, fontSize: "11px", fontWeight: 500,
                        color: isActive ? "rgba(11,35,63,0.5)" : "rgba(255,255,255,0.35)",
                        fontStyle: "italic",
                      }}>
                        {term.subtitle}
                      </p>
                    </div>
                    {isActive && <Terminal size={13} color="#0B233F" opacity={0.4} />}
                  </button>
                );
              })}
            </div>
            </div>{/* end scroll wrapper */}

            {/* Enroll CTA pinned bottom */}
            <div style={{ padding: "14px", flexShrink: 0, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <button style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "#60A5FA", color: "#0B233F", border: "none",
                borderRadius: "14px", padding: "16px", fontSize: "12px", fontWeight: 800,
                textTransform: "uppercase", cursor: "pointer", width: "100%",
                justifyContent: "center", letterSpacing: "0.06em",
                boxShadow: "0 10px 24px rgba(96,165,250,0.25)",
              }}>
                Enroll Now <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div style={{
            overflowY: "auto", display: "flex", flexDirection: "column",
            padding: "44px 60px", gap: "32px",
          }}>

            {/* Heading + level + meta */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#60A5FA", boxShadow: "0 0 12px #60A5FA" }} />
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#60A5FA", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Term {activeTerm.id < 10 ? `0${activeTerm.id}` : activeTerm.id}
                </span>
                <div style={{
                  marginLeft: "auto", padding: "5px 14px", borderRadius: "999px",
                  background: `${levelColor[activeTerm.level]}18`,
                  border: `1px solid ${levelColor[activeTerm.level]}44`,
                  fontSize: "10px", fontWeight: 800, color: levelColor[activeTerm.level],
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {activeTerm.level}
                </div>
              </div>

              <h2 style={{ margin: "0 0 6px", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 900, color: "white", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {activeTerm.title}
              </h2>
              <p style={{ margin: "0 0 20px", fontSize: "15px", color: "rgba(255,255,255,0.4)", fontWeight: 500, fontStyle: "italic" }}>
                {activeTerm.subtitle}
              </p>

              {/* Meta chips */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { icon: Clock, label: activeTerm.duration },
                  { icon: BarChart2, label: `${activeTerm.projects} Projects` },
                  { icon: Users, label: "Mentor-Led" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "8px 16px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  }}>
                    <Icon size={13} color="rgba(255,255,255,0.4)" />
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.65)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <Zap size={14} color="#60A5FA" />
                <h3 style={{ margin: 0, fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Tech Stack</h3>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {activeTerm.tools.map((tool, i) => (
                  <div key={i} style={{
                    padding: "11px 22px", borderRadius: "14px",
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "13px", fontWeight: 700, color: "white",
                  }}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Methodology */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <CheckCircle2 size={14} color="#60A5FA" />
                <h3 style={{ margin: 0, fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Core Methodology</h3>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {activeTerm.techniques.map((tech, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "20px 24px", borderRadius: "20px",
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "10px", flexShrink: 0,
                      background: "white", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "11px", fontWeight: 900, color: "#0B233F",
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ margin: 0, fontSize: "13px", fontWeight: 800, color: "white", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Term Outcome */}
            <div style={{
              flexShrink: 0,
              padding: "24px 28px", borderRadius: "22px",
              background: "rgba(96,165,250,0.07)", border: "1px solid rgba(96,165,250,0.18)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60A5FA", boxShadow: "0 0 8px #60A5FA" }} />
                <span style={{ fontSize: "10px", fontWeight: 800, color: "#60A5FA", textTransform: "uppercase", letterSpacing: "0.2em" }}>Term Outcome</span>
              </div>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, fontWeight: 500 }}>
                {activeTerm.outcome}
              </p>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { width: 4px; }
        div::-webkit-scrollbar-track { background: transparent; }
        div::-webkit-scrollbar-thumb { background: rgba(96,165,250,0.2); border-radius: 99px; }
        div::-webkit-scrollbar-thumb:hover { background: rgba(96,165,250,0.4); }
      `}</style>
    </section>
  );
}
