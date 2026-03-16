"use client";

import React, { useState } from "react";
import { BookOpen, Target, Rocket, Briefcase, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Foundation",
    sub: "Core Principles",
    desc: "Build a solid base with core marketing principles, consumer psychology, and brand execution strategies.",
    icon: BookOpen,
    tags: ["Marketing 101", "Brand Strategy", "Consumer Psych"],
    accent: "#7C3AED",
    glow: "rgba(124,58,237,0.4)",
  },
  {
    num: "02",
    title: "Specialization",
    sub: "Advanced Mastery",
    desc: "Master advanced SEO, PPC, content architecture, and data-driven campaign management techniques.",
    icon: Target,
    tags: ["SEO & SEM", "PPC Funnels", "Content Systems"],
    accent: "#6D28D9",
    glow: "rgba(109,40,217,0.4)",
  },
  {
    num: "03",
    title: "Application",
    sub: "Live Projects",
    desc: "Work on real client briefs and live campaigns to apply expertise under high-pressure real-world conditions.",
    icon: Rocket,
    tags: ["Real Clients", "Live Campaigns", "Portfolio Build"],
    accent: "#5B21B6",
    glow: "rgba(91,33,182,0.4)",
  },
  {
    num: "04",
    title: "Career Launch",
    sub: "Industry Entry",
    desc: "Placement support, resume optimization, mock interviews, and direct hiring partner network access.",
    icon: Briefcase,
    tags: ["Placements", "Resume Craft", "Interview Prep"],
    accent: "#4C1D95",
    glow: "rgba(76,29,149,0.4)",
  },
];

export function FrameworkSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      style={{
        position: "relative",
        background: "#0F051F", // Slightly deeper dark for better contrast
        overflow: "hidden",
        padding: "120px 0 180px",
        fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
      }}
    >
      {/* Ambient orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "0%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto", padding: "0 5%" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: 999, padding: "6px 18px", marginBottom: 24,
          }}>
            <Sparkles size={12} color="#A78BFA" />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#A78BFA", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              The Treqo Framework
            </span>
          </div>

          <h2 style={{ margin: "0 0 20px", lineHeight: 1.1 }}>
            <span style={{ display: "block", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.04em" }}>
              Our Learning
            </span>
            <span style={{
              display: "inline-block", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800,
              fontStyle: "italic", letterSpacing: "-0.02em",
              background: "linear-gradient(90deg, #A78BFA, #7C3AED)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Execution Framework
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
          gap: 24 
        }}>
          {steps.map((step, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <div 
                key={i} 
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  position: "relative", 
                  transition: "all 0.4s cubic-bezier(0.2, 1, 0.3, 1)",
                  transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                }}
              >
                {/* Connector line (Visible on desktop) */}
                {i < steps.length - 1 && (
                  <div className="connector-line" style={{
                    position: "absolute",
                    top: "50%",
                    right: -24,
                    width: 24,
                    height: 1,
                    background: "linear-gradient(90deg, rgba(167,139,250,0.3), transparent)",
                    zIndex: 1,
                  }} />
                )}

                <div style={{
                  height: "100%",
                  borderRadius: 32,
                  padding: "40px 30px",
                  background: isHovered 
                    ? "linear-gradient(165deg, rgba(30,12,60,0.9) 0%, rgba(15,5,31,0.95) 100%)"
                    : "linear-gradient(165deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  border: isHovered 
                    ? "1px solid rgba(167,139,250,0.5)" 
                    : "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  boxShadow: isHovered 
                    ? `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px ${step.glow}`
                    : "0 10px 30px -15px rgba(0,0,0,0.3)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  
                  {/* Decorative Number Watermark */}
                  <div style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontSize: 60,
                    fontWeight: 900,
                    color: isHovered ? "rgba(167,139,250,0.08)" : "rgba(255,255,255,0.03)",
                    transition: "color 0.4s ease",
                    pointerEvents: "none",
                  }}>
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 18,
                    background: isHovered ? step.accent : "rgba(167,139,250,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 32,
                    transition: "all 0.4s ease",
                    transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
                    boxShadow: isHovered ? `0 0 20px ${step.glow}` : "none",
                  }}>
                    <step.icon size={24} color={isHovered ? "#FFF" : "#A78BFA"} />
                  </div>

                  {/* Content */}
                  <span style={{ 
                    fontSize: 10, 
                    fontWeight: 800, 
                    color: isHovered ? "#A78BFA" : "rgba(167,139,250,0.6)", 
                    letterSpacing: "0.2em", 
                    textTransform: "uppercase",
                    transition: "color 0.4s ease"
                  }}>
                    {step.sub}
                  </span>
                  
                  <h3 style={{ 
                    fontSize: 26, 
                    fontWeight: 800, 
                    color: "#FFF", 
                    margin: "8px 0 16px",
                    letterSpacing: "-0.02em"
                  }}>
                    {step.title}
                  </h3>

                  <p style={{ 
                    fontSize: 14, 
                    color: "rgba(255,255,255,0.5)", 
                    lineHeight: 1.6, 
                    marginBottom: 24,
                    flexGrow: 1 
                  }}>
                    {step.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {step.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: 10,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontWeight: 600,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Animated Bottom Accent */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: 4,
                    width: isHovered ? "100%" : "0%",
                    background: step.accent,
                    transition: "width 0.6s cubic-bezier(0.2, 1, 0.3, 1)",
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  );
}