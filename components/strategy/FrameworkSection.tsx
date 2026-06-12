"use client";

import React, { useState, useEffect, useRef } from "react";
import { BookOpen, Target, Rocket, Briefcase, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Learn",
    sub: "Industry First",
    desc: "Master what the industry actually needs — not what textbooks say. Focus on high-impact skills that drive immediate results in today's market.",
    icon: BookOpen,
    tags: ["Market Realities", "Core Execution", "Strategy"],
    accent: "#7C3AED",
    glow: "rgba(124,58,237,0.25)",
    lightBg: "linear-gradient(145deg, rgba(237,233,255,0.97) 0%, rgba(221,214,254,0.92) 100%)",
  },
  {
    num: "02",
    title: "Apply",
    sub: "Action Oriented",
    desc: "Use real tools on real problems — learning by doing, not just watching. Bridge the gap between theory and practical application.",
    icon: Target,
    tags: ["Live Tools", "Problem Solving", "Agility"],
    accent: "#6D28D9",
    glow: "rgba(109,40,217,0.25)",
    lightBg: "linear-gradient(145deg, rgba(233,228,255,0.97) 0%, rgba(216,207,254,0.92) 100%)",
  },
  {
    num: "03",
    title: "Build",
    sub: "Proof of Work",
    desc: "Create a portfolio that speaks before you do. Develop a body of work that demonstrates your expertise to global employers.",
    icon: Rocket,
    tags: ["Asset Building", "Portfolio", "Case Studies"],
    accent: "#5B21B6",
    glow: "rgba(91,33,182,0.25)",
    lightBg: "linear-gradient(145deg, rgba(230,224,255,0.97) 0%, rgba(212,202,254,0.92) 100%)",
  },
  {
    num: "04",
    title: "Get Hired",
    sub: "Industry Entry",
    desc: "Enter the room with proof, not just a degree. Secure your spot in the industry with direct hiring partner access and interview mastery.",
    icon: Briefcase,
    tags: ["Placements", "Networking", "Career Launch"],
    accent: "#4C1D95",
    glow: "rgba(76,29,149,0.25)",
    lightBg: "linear-gradient(145deg, rgba(226,219,255,0.97) 0%, rgba(207,196,254,0.92) 100%)",
  },
];

export function FrameworkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── mobile slider ── */
  const [slideIdx, setSlideIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideIdxRef = useRef(0);
  const isHeldRef = useRef(false);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToSlide = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
    setSlideIdx(index);
    slideIdxRef.current = index;
  };

  const stopAuto = () => {
    if (autoTimerRef.current) { clearInterval(autoTimerRef.current); autoTimerRef.current = null; }
  };
  const startAuto = () => {
    stopAuto();
    autoTimerRef.current = setInterval(() => {
      if (!isHeldRef.current) scrollToSlide((slideIdxRef.current + 1) % steps.length);
    }, 3000);
  };

  useEffect(() => { if (isMobile) { startAuto(); return stopAuto; } }, [isMobile]);

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.offsetWidth);
    const c = Math.max(0, Math.min(idx, steps.length - 1));
    setSlideIdx(c); slideIdxRef.current = c;
  };

  /* ── Scroll-triggered staggered reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, i) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 140);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: "#0F051F",
        overflow: "hidden",
        padding: "50px 0 50px", // top reduced to pull cards up
        fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
        width: "100%",
      }}
    >

      {/* ── Ambient glows ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: 1000, height: 1000, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />
        {/* animated floating orb */}
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", animation: "orbFloat 8s ease-in-out infinite" }} />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1800, margin: "0 auto", padding: "0 4%" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 80 }}> {/* was 120 — tighter so cards sit higher */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: 999, padding: "8px 20px", marginBottom: 30,
            animation: "fadeSlideDown 0.7s ease both",
          }}>
            <Sparkles size={14} color="#A78BFA" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#A78BFA", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              The Treqo Framework
            </span>
          </div>

          <h2 style={{ margin: "0 0 20px", lineHeight: 1.05, animation: "fadeSlideDown 0.8s 0.1s ease both" }}>
            <span style={{ display: "block", fontSize: "clamp(40px, 7vw, 65px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.04em" }}>
              Our Learning
            </span>
            <span style={{
              display: "inline-block", fontSize: "clamp(40px, 7vw, 65px)", fontWeight: 800,
              fontStyle: "italic", letterSpacing: "-0.02em",
              background: "linear-gradient(90deg, #A78BFA, #7C3AED)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Execution Framework
            </span>
          </h2>
        </div>

        {/* ── Cards grid / mobile slider ── */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={() => { isHeldRef.current = true; stopAuto(); }}
          onTouchEnd={() => { isHeldRef.current = false; startAuto(); }}
          style={isMobile ? {
            display: "flex", flexDirection: "row",
            overflowX: "scroll", scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch" as any,
            scrollbarWidth: "none" as any,
            gap: 0, alignItems: "stretch",
          } : {
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40,
          }}
        >
          {steps.map((step, i) => {
            const isHov = hoveredIndex === i;
            const isVisible = visibleCards[i];

            return (
              <div
                key={i}
                onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                style={{
                  position: "relative",
                  ...(isMobile ? {
                    flex: "0 0 100%", width: "100%", height: "440px",
                    scrollSnapAlign: "start", opacity: 1, transform: "none",
                  } : {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? (isHov ? "translateY(-15px)" : "translateY(0)") : "translateY(48px)",
                    transition: isVisible ? `opacity 0.6s ${i * 0.1}s ease, transform 0.5s cubic-bezier(0.2,1,0.3,1)` : "none",
                  }),
                }}
              >
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div className="connector-line" style={{
                    position: "absolute", top: "50%", right: -40,
                    width: 40, height: 1,
                    background: "linear-gradient(90deg, rgba(167,139,250,0.3), transparent)",
                    zIndex: 1,
                  }} />
                )}

                <div style={{
                  height: "100%",
                  borderRadius: 32,
                  padding: "50px 35px",
                  background: isHov
                    ? step.lightBg
                    : "linear-gradient(165deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  border: isHov
                    ? "1px solid rgba(167,139,250,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: isHov
                    ? `0 30px 60px -12px rgba(0,0,0,0.25), 0 0 40px ${step.glow}, inset 0 1px 0 rgba(255,255,255,0.85)`
                    : "0 10px 40px -15px rgba(0,0,0,0.4)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                }}>

                  {/* top gloss on hover */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "45%",
                    background: isHov ? "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" : "transparent",
                    pointerEvents: "none", transition: "background 0.4s",
                  }} />

                  {/* shimmer sweep on hover */}
                  {isHov && (
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                      animation: "shimmer 1.2s ease forwards",
                      pointerEvents: "none", zIndex: 1,
                    }} />
                  )}

                  {/* big number watermark */}
                  <div style={{
                    position: "absolute", top: 18, right: 22,
                    fontSize: 70, fontWeight: 900,
                    color: isHov ? "rgba(124,58,237,0.1)" : "rgba(255,255,255,0.03)",
                    transition: "color 0.4s ease", pointerEvents: "none",
                    lineHeight: 1,
                  }}>
                    {step.num}
                  </div>

                  {/* icon — spins slightly on hover */}
                  <div style={{
                    width: 64, height: 64, borderRadius: 20,
                    background: isHov ? "white" : "rgba(167,139,250,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 35,
                    transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                    transform: isHov ? "scale(1.12) rotate(-8deg)" : "scale(1) rotate(0deg)",
                    boxShadow: isHov ? `0 12px 28px ${step.glow}` : "none",
                    position: "relative", zIndex: 2,
                  }}>
                    <step.icon size={28} color={isHov ? step.accent : "#A78BFA"} />
                  </div>

                  <span style={{
                    fontSize: 11, fontWeight: 800, position: "relative", zIndex: 2,
                    color: isHov ? step.accent : "rgba(167,139,250,0.6)",
                    letterSpacing: "0.2em", textTransform: "uppercase",
                  }}>
                    {step.sub}
                  </span>

                  <h3 style={{
                    fontSize: 28, fontWeight: 800,
                    color: isHov ? "#1A0B35" : "#FFF",
                    margin: "10px 0 18px", letterSpacing: "-0.02em",
                    position: "relative", zIndex: 2,
                    transition: "color 0.35s",
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    fontSize: 15,
                    color: isHov ? "rgba(26,11,53,0.65)" : "rgba(255,255,255,0.5)",
                    lineHeight: 1.65, marginBottom: 28, flexGrow: 1,
                    position: "relative", zIndex: 2,
                    transition: "color 0.35s",
                  }}>
                    {step.desc}
                  </p>

                  {/* tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, position: "relative", zIndex: 2 }}>
                    {step.tags.map((tag, ti) => (
                      <span key={tag} style={{
                        fontSize: 10, padding: "6px 14px", borderRadius: 6, fontWeight: 600,
                        background: isHov ? "rgba(124,58,237,0.1)" : "rgba(255,255,255,0.05)",
                        color: isHov ? step.accent : "rgba(255,255,255,0.7)",
                        border: isHov ? "1px solid rgba(124,58,237,0.2)" : "1px solid rgba(255,255,255,0.1)",
                        /* stagger tag pop-in on hover */
                        animation: isHov ? `tagPop 0.3s ${ti * 0.06}s cubic-bezier(0.34,1.56,0.64,1) both` : "none",
                        transition: "background 0.3s, color 0.3s, border 0.3s",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* bottom progress bar — slides in on hover */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, height: 4,
                    width: isHov ? "100%" : "0%",
                    background: `linear-gradient(to right, ${step.accent}, rgba(167,139,250,0.6))`,
                    transition: "width 0.65s cubic-bezier(0.16,1,0.3,1)",
                    borderRadius: "0 0 0 32px",
                  }} />

                  {/* pulsing dot top-left when hovered */}
                  {isHov && (
                    <div style={{
                      position: "absolute", top: 20, left: 20, zIndex: 3,
                      width: 8, height: 8, borderRadius: "50%",
                      background: step.accent,
                      boxShadow: `0 0 12px ${step.accent}`,
                      animation: "pulseGlow 1.2s ease-in-out infinite",
                    }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* mobile dots */}
        {isMobile && (
          <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "20px 0 8px" }}>
            {steps.map((_, i) => (
              <button key={i} onClick={() => scrollToSlide(i)} style={{
                width: slideIdx === i ? 20 : 8, height: 8, borderRadius: 4,
                background: slideIdx === i ? "#A78BFA" : "rgba(167,139,250,0.3)",
                border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s",
              }} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        /* scroll-reveal fade + slide */
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* shimmer sweep across card */
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        /* floating background orb */
        @keyframes orbFloat {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(-40px); }
        }

        /* pulsing accent dot */
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.6); opacity: 0.5; }
        }

        /* tag stagger pop */
        @keyframes tagPop {
          from { opacity: 0; transform: scale(0.8) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 1200px) {
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  );
}
