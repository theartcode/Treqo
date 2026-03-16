"use client";

import { BookOpen, Target, Rocket, Briefcase, Sparkles } from "lucide-react";
import { useState } from "react";

const steps = [
  { num: "01", title: "Foundation", sub: "Core Principles", desc: "Build a solid base with core marketing principles, consumer psychology, and brand execution strategies.", icon: BookOpen, tags: ["Marketing 101", "Brand Strategy", "Consumer Psych"] },
  { num: "02", title: "Specialization", sub: "Advanced Mastery", desc: "Master advanced SEO, PPC, content architecture, and data-driven campaign management techniques.", icon: Target, tags: ["SEO & SEM", "PPC Funnels", "Content Systems"] },
  { num: "03", title: "Application", sub: "Live Projects", desc: "Work on real client briefs and live campaigns to apply expertise under high-pressure real-world conditions.", icon: Rocket, tags: ["Real Clients", "Live Campaigns", "Portfolio Build"] },
  { num: "04", title: "Career Launch", sub: "Industry Entry", desc: "Placement support, resume optimization, mock interviews, and direct hiring partner network access.", icon: Briefcase, tags: ["Placements", "Resume Craft", "Interview Prep"] },
];

export function FrameworkSection() {

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        position: "relative",
        background: "#1A0A3D",
        overflow: "hidden",
        padding: "100px 0 180px",
        fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
      }}
    >

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 5%" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(196,181,253,0.1)",
              border: "1px solid rgba(196,181,253,0.22)",
              borderRadius: 999,
              padding: "5px 16px",
              marginBottom: 20,
            }}
          >
            <Sparkles size={11} color="#C4B5FD" />
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: "#C4B5FD",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              The Treqo Framework
            </span>
          </div>

          <h2 style={{ margin: "0 0 16px", lineHeight: 1 }}>

            <span
              style={{
                display: "block",
                fontSize: "clamp(38px,5vw,64px)",
                fontWeight: 900,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "-0.03em",
              }}
            >
              Our Learning
            </span>

            {/* FIXED GRADIENT TEXT */}
            <span
              style={{
                display: "inline-block",
                fontSize: "clamp(38px,5vw,64px)",
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg,#C4B5FD 0%,#7C3AED 50%,#b3affd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "6px",
              }}
            >
              Execution Framework
            </span>

          </h2>

          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 400,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A battle-tested 4-stage system that transforms beginners into industry-ready marketers.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>

          {steps.map((step, i) => {

            const isH = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform .35s",
                  transform: isH ? "translateY(-8px)" : "none",
                }}
              >

                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: isH ? "linear-gradient(135deg,#C4B5FD,#7C3AED,#3730A3)" : "rgba(196,181,253,0.1)",
                    border: `2px solid ${isH ? "transparent" : "rgba(196,181,253,0.25)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: 13,
                    fontWeight: 900,
                    color: isH ? "white" : "#C4B5FD",
                  }}
                >
                  {step.num}
                </div>

                <div
                  style={{
                    background: isH ? "rgba(196,181,253,0.08)" : "rgba(255,255,255,0.03)",
                    border: `1.5px solid ${isH ? "rgba(196,181,253,0.3)" : "rgba(196,181,253,0.08)"}`,
                    borderRadius: 24,
                    padding: "26px 22px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >

                  <div style={{ marginBottom: 16 }}>
                    <step.icon size={20} color="#C4B5FD" />
                  </div>

                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      color: isH ? "#C4B5FD" : "rgba(196,181,253,0.65)",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {step.sub}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: 22,
                      fontWeight: 900,
                      color: isH ? "white" : "rgba(255,255,255,0.9)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 18px",
                      fontSize: 12,
                      color: isH ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.65)",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </p>

                </div>
              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}