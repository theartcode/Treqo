"use client";

import { Download, TrendingUp, BarChart3, Megaphone, Zap, ArrowUpRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const placements = [
  { name: "Dikshtha", company: "BRISTLE TECH", initials: "DK", color: "#F472B6" },
  { name: "Harshit", company: "TCS", initials: "HA", color: "#34A853" },
  { name: "Subhani", company: "JASS MEDIA FOUNDER", initials: "SU", color: "#60A5FA" },
  { name: "Somu Shekar", company: "JASS MEDIA Co-Founder & THE GESTURE", initials: "SS", color: "#FBBF24" },
  { name: "Mounika Grace", company: "BRAND FLIX", initials: "MG", color: "#A78BFA" },
  { name: "Jyothika", company: "DIGITAL MARKEter", initials: "JY", color: "#10B981" },
  { name: "Pravalika", company: "BRANDFLIX", initials: "PR", color: "#FB7185" },
  { name: "Rohith", company: "FREELANCER", initials: "RO", color: "#94A3B8" },
];

const FLOW_STEPS = ['Ideate', 'Scale', 'Build', 'Create'];

export default function PortfolioProof() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0); // 0-indexed, loops 0→1→2→3→0

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % FLOW_STEPS.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="wt-section" style={{
      width: '100%',
      background: '#E5E9F0',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      <div className="wt-inner" style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 5%',
        width: '100%',
        height: '100vh',               /* full height */
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '30px', flexShrink: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'white', border: '1px solid rgba(88,41,229,0.1)',
            borderRadius: '999px', padding: '4px 14px', marginBottom: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
          }}>
            <Sparkles size={11} color="#5829E5" />
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>The Treqo Advantage</span>
          </div>

          <h2 style={{ margin: 0, lineHeight: 1.0 }}>
            <span style={{ display: 'block', fontSize: 'clamp(22px, 2.4vw, 40px)', fontWeight: 900, color: '#1A0B35', letterSpacing: '-0.04em' }}>
              Why Choose Treqo?
            </span>
            
          </h2>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="wt-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 270px',
          gridTemplateRows: '1fr 1fr 50px',   /* fixed tagline row height */
          gap: '12px',
          flex: 1,
          minHeight: 0,
          paddingBottom: '30px',
          boxSizing: 'border-box',
        }}>

          {/* CARD 1 — 0→1 Execution Proof | col 1, row 1–2 */}
          <div
            className="wt-card1"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridRow: '1 / 3',
              gridColumn: '1',
              background: hovered === 1 ? '#471ecb' : '#1A0B35',
              borderRadius: '26px', padding: '22px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === 1 ? 'translateY(-6px)' : 'translateY(0)',
              cursor: 'default', position: 'relative', overflow: 'hidden',
              boxShadow: hovered === 1 ? '0 30px 60px -12px rgba(88,41,229,0.3)' : 'none',
              minHeight: 0,
            }}
          >
            <div style={{ position: 'absolute', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)', top: '-50px', right: '-50px', pointerEvents: 'none', transition: 'opacity 0.4s', opacity: hovered === 1 ? 0.9 : 0.4 }} />
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '13px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                <TrendingUp size={22} color="white" />
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>0→1 Execution Proof</div>
              <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 900, color: 'white', lineHeight: 1.2 }}>Can you take an idea from zero to first paying customers?</h3>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'rgba(255,255,255,0.65)', fontWeight: 500, lineHeight: 1.6 }}>
                That's the real test. Not theory. Not assignments. Revenue. At TREQO, you don't graduate with notes — you graduate with proof that you can make things happen in the real world.
              </p>
            </div>

            {/* ── LOOPING FLOW TRACKER ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px', padding: '10px 14px',
              }}>
                {FLOW_STEPS.map((step, i, arr) => {
                  const isActive = activeStep === i;
                  const isPast = i < activeStep;
                  return (
                    <div key={step} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        {/* number circle */}
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '9px',
                          background: isActive ? 'rgba(167,139,250,0.35)' : isPast ? 'rgba(167,139,250,0.12)' : 'rgba(255,255,255,0.08)',
                          border: `1px solid ${isActive ? 'rgba(167,139,250,0.7)' : isPast ? 'rgba(167,139,250,0.25)' : 'rgba(255,255,255,0.12)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '11px', fontWeight: 900,
                          color: isActive ? '#A78BFA' : isPast ? 'rgba(167,139,250,0.5)' : 'rgba(255,255,255,0.3)',
                          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                          transform: isActive ? 'scale(1.18)' : 'scale(1)',
                          boxShadow: isActive ? '0 0 14px rgba(167,139,250,0.45)' : 'none',
                        }}>
                          {i + 1}
                        </div>
                        {/* label */}
                        <span style={{
                          fontSize: '10px', fontWeight: 800,
                          color: isActive ? '#A78BFA' : isPast ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.3)',
                          textTransform: 'uppercase', letterSpacing: '0.1em',
                          whiteSpace: 'nowrap',
                          transition: 'color 0.4s ease',
                        }}>
                          {step}
                        </span>
                      </div>

                      {/* connector between steps */}
                      {i < arr.length - 1 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0px', padding: '0 2px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                          <div style={{ width: '12px', height: '1.5px', background: 'rgba(255,255,255,0.12)', position: 'relative' }}>
                            <div style={{
                              position: 'absolute', top: 0, left: 0, height: '100%',
                              background: 'rgba(167,139,250,0.7)',
                              width: activeStep > i ? '100%' : activeStep === i ? '50%' : '0%',
                              transition: 'width 0.4s ease',
                            }} />
                          </div>
                          <div style={{
                            width: 0, height: 0,
                            borderTop: '4px solid transparent',
                            borderBottom: '4px solid transparent',
                            borderLeft: `5px solid ${activeStep > i ? 'rgba(167,139,250,0.6)' : 'rgba(255,255,255,0.18)'}`,
                            transition: 'border-left-color 0.4s ease',
                          }} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '8px 14px', alignSelf: 'flex-start', fontSize: '10px', fontWeight: 800, color: 'white', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                BROCHURE_DOWNLOAD.PDF <Download size={12} />
              </div>
            </div>
          </div>

          {/* CARD 2 — Strategy First | col 2, row 1 */}
          <div
            className="wt-card2"
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridColumn: '2', gridRow: '1',
              background: 'white', borderRadius: '26px', padding: '20px',
              display: 'flex', flexDirection: 'column', gap: '12px',
              border: '1px solid #E2E8F0',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === 2 ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: hovered === 2 ? '0 25px 50px rgba(0,0,0,0.06)' : '0 4px 12px rgba(0,0,0,0.02)',
              cursor: 'default', position: 'relative',
              minHeight: 0, overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
              <ArrowUpRight size={16} color="#94A3B8" />
            </div>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#A78BFA', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>Strategy First</div>
              <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 900, color: '#1A0B35', lineHeight: 1.2 }}>Not tools-first.<br />Thinking-first.</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.6 }}>
                Companies don't hire you for the tools you know — they hire you for the thinking you bring. Growth loops, conversion funnels, CAC-to-LTV math, retention psychology, channel strategy.
              </p>
            </div>
            <div style={{ background: '#F5F3FF', borderRadius: '12px', padding: '10px 14px', borderLeft: '3px solid #5829E5', marginTop: 'auto' }}>
              <p style={{ margin: 0, fontSize: '12px', fontWeight: 700, color: '#5829E5', lineHeight: 1.5 }}>
                Tools change every 6 months.<br />
                <span style={{ color: '#1A0B35' }}>Thinking compounds for decades.</span>
              </p>
            </div>
          </div>

          {/* CARD 3 — Placement | col 3, row 1 */}
          <div
            className="wt-card3"
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridColumn: '3', gridRow: '1',
              background: 'linear-gradient(135deg, #5829E5 0%, #311882 100%)',
              borderRadius: '26px', padding: '20px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === 3 ? 'translateY(-6px)' : 'translateY(0)',
              cursor: 'default', position: 'relative', overflow: 'hidden',
              boxShadow: hovered === 3 ? '0 25px 50px rgba(88,41,229,0.3)' : 'none',
              minHeight: 0,
            }}
          >
            <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
              <ArrowUpRight size={15} color="rgba(255,255,255,0.4)" />
            </div>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>Placement</div>
              <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: 900, color: 'white', lineHeight: 1.25, paddingRight: '20px' }}>100% placement isn't a scam — it's a math problem.</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {["Skills that solve real problems, not certificate collections", "A portfolio that screams 'done the work' before you speak", "Projects like freelance gigs, not college assignments"].map(t => (
                  <li key={t} style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.72)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '7px', lineHeight: 1.5 }}>
                    <span style={{ color: '#A78BFA', fontWeight: 900, flexShrink: 0 }}>→</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 12px', borderLeft: '2px solid rgba(167,139,250,0.6)' }}>
              <p style={{ margin: 0, fontSize: '11.5px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>
                The job market isn't broken. Your prep is.{' '}
                <span style={{ color: 'white' }}>Fix the inputs, the output fixes itself.</span>
              </p>
            </div>
          </div>

          {/* CARD 4 — Learn by Doing | col 2–3, row 2 */}
          <div
            className="wt-card4"
            onMouseEnter={() => setHovered(4)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridColumn: '2 / 4', gridRow: '2',
              background: '#FFFFFF', borderRadius: '26px', padding: '18px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px',
              border: '1px solid #E2E8F0',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === 4 ? 'translateY(-6px)' : 'translateY(0)',
              cursor: 'default', position: 'relative', overflow: 'hidden',
              boxShadow: hovered === 4 ? '0 20px 40px rgba(0,0,0,0.05)' : '0 4px 12px rgba(0,0,0,0.02)',
              minHeight: 0,
            }}
          >
            <div className="wt-card4-inner" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={17} color="#5829E5" />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Learn by Doing</span>
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 900, color: '#1A0B35' }}>Real Projects. Real Results.</h3>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748B', fontWeight: 500, lineHeight: 1.6, maxWidth: '440px' }}>
                Textbooks teach you theory. TREQO throws you into real projects — because companies don't care what you studied.{' '}
                <span style={{ color: '#1A0B35', fontWeight: 700 }}>They care what you can deliver on Day 1.</span>
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <div style={{ padding: '11px 24px', background: '#5829E5', borderRadius: '999px', fontSize: '12px', fontWeight: 800, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase', boxShadow: '0 8px 20px rgba(88,41,229,0.2)', whiteSpace: 'nowrap' }}>
                Day 1 Ready
              </div>
            </div>
          </div>

          {/* CARD 5 — Alumni | col 4, row 1–2 */}
          <div className="wt-card5" style={{
            gridColumn: '4', gridRow: '1 / 3',
            background: '#1A0B35', borderRadius: '26px', overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            border: '1px solid rgba(88,41,229,0.2)',
            minHeight: 0,
          }}>
            <div style={{ padding: '20px 18px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(88,41,229,0.15) 0%, transparent 100%)', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', boxShadow: '0 0 8px #4ADE80' }} />
                <span style={{ fontSize: '9px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Global Network</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 900, color: 'white', lineHeight: 1.2 }}>
                Treqo <span style={{ color: '#A78BFA', fontStyle: 'italic' }}>Alumni</span>
              </h3>
            </div>
            <div className="wt-alumni-scroll" style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: '0 12px', minHeight: 0 }}>
              <div className="scroll-track" style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '14px' }}>
                {[...placements, ...placements, ...placements].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '11px 13px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: p.color + '22', border: `1.5px solid ${p.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 900, color: p.color, flexShrink: 0 }}>
                      {p.initials}
                    </div>
                    <div style={{ overflow: 'hidden', flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.company}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '36px', background: 'linear-gradient(to bottom, #1A0B35, transparent)', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '36px', background: 'linear-gradient(to top, #1A0B35, transparent)', zIndex: 2 }} />
            </div>
          </div>

          {/* TAGLINE | full width, row 3 */}
          <div className="wt-tagline" style={{ gridColumn: '1 / 5', gridRow: '3', minHeight: 0 }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.82) 0%, rgba(235,228,255,0.65) 60%, rgba(210,200,255,0.5) 100%)',
              backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.9)',
              borderRadius: '16px', padding: '0 22px',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 6px 28px rgba(88,41,229,0.1), inset 0 1px 0 rgba(255,255,255,1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)', borderRadius: '16px 16px 0 0', pointerEvents: 'none' }} />
              <p className="wt-tagline-p" style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#4B5563', lineHeight: 2, padding: '16px 0', whiteSpace: 'nowrap', position: 'relative', zIndex: 1 }}>
                This program doesn't teach marketing. It trains you to{' '}
                <span style={{ color: '#1A0B35', fontWeight: 800 }}>think, build, and grow brands</span>
                {' '}—{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 800, background: 'linear-gradient(to right, #5829E5, #311882)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  like a founder.
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        .scroll-track { animation: scroll-up 18s linear infinite; }
        .scroll-track:hover { animation-play-state: paused; }

        /* ── TABLET ≤ 1024px ── */
        @media (max-width: 1024px) {
          .wt-section  { height: auto !important; min-height: 100vh; overflow: visible !important; align-items: flex-start !important; }
          .wt-inner    { height: auto !important; padding-top: 36px !important; padding-bottom: 36px !important; }
          .wt-grid     { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto auto auto auto auto !important; flex: none !important; }
          .wt-card1    { grid-column: 1 / 3 !important; grid-row: 1 !important; }
          .wt-card2    { grid-column: 1 !important;     grid-row: 2 !important; }
          .wt-card3    { grid-column: 2 !important;     grid-row: 2 !important; }
          .wt-card4    { grid-column: 1 / 3 !important; grid-row: 3 !important; }
          .wt-card5    { grid-column: 1 / 3 !important; grid-row: 4 !important; height: 260px; }
          .wt-tagline  { grid-column: 1 / 3 !important; grid-row: 5 !important; height: auto !important; }
          .wt-alumni-scroll { flex: none !important; height: 200px; }
          .wt-tagline-p { white-space: normal !important; text-align: center; }
        }

        /* ── MOBILE ≤ 640px ── */
        @media (max-width: 640px) {
          .wt-inner   { padding-left: 4% !important; padding-right: 4% !important; padding-top: 28px !important; padding-bottom: 28px !important; }
          .wt-grid    { grid-template-columns: 1fr !important; grid-template-rows: auto !important; gap: 10px !important; }
          .wt-card1   { grid-column: 1 !important; grid-row: 1 !important; }
          .wt-card2   { grid-column: 1 !important; grid-row: 2 !important; }
          .wt-card3   { grid-column: 1 !important; grid-row: 3 !important; }
          .wt-card4   { grid-column: 1 !important; grid-row: 4 !important; }
          .wt-card5   { grid-column: 1 !important; grid-row: 5 !important; height: 220px; }
          .wt-tagline { grid-column: 1 !important; grid-row: 6 !important; }
          .wt-alumni-scroll { height: 160px; }
          .wt-tagline-p { white-space: normal !important; font-size: 12px !important; }
          .wt-card4-inner { flex-direction: column !important; align-items: flex-start !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}

// "use client";

// import { Download, TrendingUp, BarChart3, Megaphone, Zap, ArrowUpRight, Sparkles } from "lucide-react";
// import { useState, useEffect } from "react";

// const placements = [
//   { name: "Aman Gupta", company: "Meta", initials: "AG", color: "#1877F2" },
//   { name: "Sanya Iyer", company: "Google", initials: "SI", color: "#34A853" },
//   { name: "Rohan Shah", company: "Microsoft", initials: "RS", color: "#00A4EF" },
//   { name: "Vikram R.", company: "Amazon", initials: "VR", color: "#FF9900" },
//   { name: "Priya K.", company: "Netflix", initials: "PK", color: "#E50914" },
//   { name: "Karan J.", company: "Apple", initials: "KJ", color: "#555555" },
//   { name: "Neha M.", company: "Flipkart", initials: "NM", color: "#2874F0" },
//   { name: "Dev S.", company: "Zomato", initials: "DS", color: "#E23744" },
// ];

// const FLOW_STEPS = ['Ideate', 'Scale', 'Build', 'Create'];

// export default function PortfolioProof() {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const [activeStep, setActiveStep] = useState(0); // 0-indexed, loops 0→1→2→3→0

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep(prev => (prev + 1) % FLOW_STEPS.length);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section style={{
//       width: '100%',
//       background: '#E5E9F0',
//       height: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
//       overflow: 'hidden',
//       boxSizing: 'border-box',
//     }}>
//       <div style={{
//         maxWidth: '1440px',
//         margin: '0 auto',
//         padding: '0 5%',
//         width: '100%',
//         height: '100vh',               /* full height */
//         display: 'flex',
//         flexDirection: 'column',
//         boxSizing: 'border-box',
//       }}>

//         {/* ── Header ── */}
//         <div style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '30px', flexShrink: 0 }}>
//           <div style={{
//             display: 'inline-flex', alignItems: 'center', gap: '8px',
//             background: 'white', border: '1px solid rgba(88,41,229,0.1)',
//             borderRadius: '999px', padding: '4px 14px', marginBottom: '6px',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
//           }}>
//             <Sparkles size={11} color="#5829E5" />
//             <span style={{ fontSize: '10px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>The Treqo Advantage</span>
//           </div>

//           <h2 style={{ margin: 0, lineHeight: 1.0 }}>
//             <span style={{ display: 'block', fontSize: 'clamp(22px, 2.4vw, 40px)', fontWeight: 900, color: '#1A0B35', letterSpacing: '-0.04em' }}>
//               Why Choose Treqo?
//             </span>
            
//           </h2>
//         </div>

//         {/* ── BENTO GRID ── */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr 1fr 270px',
//           gridTemplateRows: '1fr 1fr 50px',   /* fixed tagline row height */
//           gap: '12px',
//           flex: 1,
//           minHeight: 0,
//           paddingBottom: '30px',
//           boxSizing: 'border-box',
//         }}>

//           {/* CARD 1 — 0→1 Execution Proof | col 1, row 1–2 */}
//           <div
//             onMouseEnter={() => setHovered(1)}
//             onMouseLeave={() => setHovered(null)}
//             style={{
//               gridRow: '1 / 3',
//               gridColumn: '1',
//               background: hovered === 1 ? '#471ecb' : '#1A0B35',
//               borderRadius: '26px', padding: '22px',
//               display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
//               transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
//               transform: hovered === 1 ? 'translateY(-6px)' : 'translateY(0)',
//               cursor: 'default', position: 'relative', overflow: 'hidden',
//               boxShadow: hovered === 1 ? '0 30px 60px -12px rgba(88,41,229,0.3)' : 'none',
//               minHeight: 0,
//             }}
//           >
//             <div style={{ position: 'absolute', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)', top: '-50px', right: '-50px', pointerEvents: 'none', transition: 'opacity 0.4s', opacity: hovered === 1 ? 0.9 : 0.4 }} />
//             <div>
//               <div style={{ width: '44px', height: '44px', borderRadius: '13px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
//                 <TrendingUp size={22} color="white" />
//               </div>
//               <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>0→1 Execution Proof</div>
//               <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 900, color: 'white', lineHeight: 1.2 }}>Can you take an idea from zero to first paying customers?</h3>
//               <p style={{ margin: 0, fontSize: '12.5px', color: 'rgba(255,255,255,0.65)', fontWeight: 500, lineHeight: 1.6 }}>
//                 That's the real test. Not theory. Not assignments. Revenue. At TREQO, you don't graduate with notes — you graduate with proof that you can make things happen in the real world.
//               </p>
//             </div>

//             {/* ── LOOPING FLOW TRACKER ── */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//               <div style={{
//                 display: 'flex', alignItems: 'center',
//                 background: 'rgba(255,255,255,0.05)',
//                 border: '1px solid rgba(255,255,255,0.08)',
//                 borderRadius: '14px', padding: '10px 14px',
//               }}>
//                 {FLOW_STEPS.map((step, i, arr) => {
//                   const isActive = activeStep === i;
//                   const isPast = i < activeStep;
//                   return (
//                     <div key={step} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
//                       <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
//                         {/* number circle */}
//                         <div style={{
//                           width: '32px', height: '32px', borderRadius: '9px',
//                           background: isActive ? 'rgba(167,139,250,0.35)' : isPast ? 'rgba(167,139,250,0.12)' : 'rgba(255,255,255,0.08)',
//                           border: `1px solid ${isActive ? 'rgba(167,139,250,0.7)' : isPast ? 'rgba(167,139,250,0.25)' : 'rgba(255,255,255,0.12)'}`,
//                           display: 'flex', alignItems: 'center', justifyContent: 'center',
//                           fontSize: '11px', fontWeight: 900,
//                           color: isActive ? '#A78BFA' : isPast ? 'rgba(167,139,250,0.5)' : 'rgba(255,255,255,0.3)',
//                           transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
//                           transform: isActive ? 'scale(1.18)' : 'scale(1)',
//                           boxShadow: isActive ? '0 0 14px rgba(167,139,250,0.45)' : 'none',
//                         }}>
//                           {i + 1}
//                         </div>
//                         {/* label */}
//                         <span style={{
//                           fontSize: '10px', fontWeight: 800,
//                           color: isActive ? '#A78BFA' : isPast ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.3)',
//                           textTransform: 'uppercase', letterSpacing: '0.1em',
//                           whiteSpace: 'nowrap',
//                           transition: 'color 0.4s ease',
//                         }}>
//                           {step}
//                         </span>
//                       </div>

//                       {/* connector between steps */}
//                       {i < arr.length - 1 && (
//                         <div style={{ display: 'flex', alignItems: 'center', gap: '0px', padding: '0 2px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
//                           <div style={{ width: '12px', height: '1.5px', background: 'rgba(255,255,255,0.12)', position: 'relative' }}>
//                             <div style={{
//                               position: 'absolute', top: 0, left: 0, height: '100%',
//                               background: 'rgba(167,139,250,0.7)',
//                               width: activeStep > i ? '100%' : activeStep === i ? '50%' : '0%',
//                               transition: 'width 0.4s ease',
//                             }} />
//                           </div>
//                           <div style={{
//                             width: 0, height: 0,
//                             borderTop: '4px solid transparent',
//                             borderBottom: '4px solid transparent',
//                             borderLeft: `5px solid ${activeStep > i ? 'rgba(167,139,250,0.6)' : 'rgba(255,255,255,0.18)'}`,
//                             transition: 'border-left-color 0.4s ease',
//                           }} />
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>

//               <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', padding: '8px 14px', alignSelf: 'flex-start', fontSize: '10px', fontWeight: 800, color: 'white', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
//                 BROCHURE_DOWNLOAD.PDF <Download size={12} />
//               </div>
//             </div>
//           </div>

//           {/* CARD 2 — Strategy First | col 2, row 1 */}
//           <div
//             onMouseEnter={() => setHovered(2)}
//             onMouseLeave={() => setHovered(null)}
//             style={{
//               gridColumn: '2', gridRow: '1',
//               background: 'white', borderRadius: '26px', padding: '20px',
//               display: 'flex', flexDirection: 'column', gap: '12px',
//               border: '1px solid #E2E8F0',
//               transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
//               transform: hovered === 2 ? 'translateY(-6px)' : 'translateY(0)',
//               boxShadow: hovered === 2 ? '0 25px 50px rgba(0,0,0,0.06)' : '0 4px 12px rgba(0,0,0,0.02)',
//               cursor: 'default', position: 'relative',
//               minHeight: 0, overflow: 'hidden',
//             }}
//           >
//             <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
//               <ArrowUpRight size={16} color="#94A3B8" />
//             </div>
//             <div>
//               <div style={{ fontSize: '10px', fontWeight: 800, color: '#A78BFA', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>Strategy First</div>
//               <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 900, color: '#1A0B35', lineHeight: 1.2 }}>Not tools-first.<br />Thinking-first.</h3>
//               <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.6 }}>
//                 Companies don't hire you for the tools you know — they hire you for the thinking you bring. Growth loops, conversion funnels, CAC-to-LTV math, retention psychology, channel strategy.
//               </p>
//             </div>
//             <div style={{ background: '#F5F3FF', borderRadius: '12px', padding: '10px 14px', borderLeft: '3px solid #5829E5', marginTop: 'auto' }}>
//               <p style={{ margin: 0, fontSize: '12px', fontWeight: 700, color: '#5829E5', lineHeight: 1.5 }}>
//                 Tools change every 6 months.<br />
//                 <span style={{ color: '#1A0B35' }}>Thinking compounds for decades.</span>
//               </p>
//             </div>
//           </div>

//           {/* CARD 3 — Placement | col 3, row 1 */}
//           <div
//             onMouseEnter={() => setHovered(3)}
//             onMouseLeave={() => setHovered(null)}
//             style={{
//               gridColumn: '3', gridRow: '1',
//               background: 'linear-gradient(135deg, #5829E5 0%, #311882 100%)',
//               borderRadius: '26px', padding: '20px',
//               display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
//               transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
//               transform: hovered === 3 ? 'translateY(-6px)' : 'translateY(0)',
//               cursor: 'default', position: 'relative', overflow: 'hidden',
//               boxShadow: hovered === 3 ? '0 25px 50px rgba(88,41,229,0.3)' : 'none',
//               minHeight: 0,
//             }}
//           >
//             <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
//             <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
//               <ArrowUpRight size={15} color="rgba(255,255,255,0.4)" />
//             </div>
//             <div>
//               <div style={{ fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>Placement</div>
//               <h3 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: 900, color: 'white', lineHeight: 1.25, paddingRight: '20px' }}>100% placement isn't a scam — it's a math problem.</h3>
//               <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
//                 {["Skills that solve real problems, not certificate collections", "A portfolio that screams 'done the work' before you speak", "Projects like freelance gigs, not college assignments"].map(t => (
//                   <li key={t} style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.72)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '7px', lineHeight: 1.5 }}>
//                     <span style={{ color: '#A78BFA', fontWeight: 900, flexShrink: 0 }}>→</span>{t}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 12px', borderLeft: '2px solid rgba(167,139,250,0.6)' }}>
//               <p style={{ margin: 0, fontSize: '11.5px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>
//                 The job market isn't broken. Your prep is.{' '}
//                 <span style={{ color: 'white' }}>Fix the inputs, the output fixes itself.</span>
//               </p>
//             </div>
//           </div>

//           {/* CARD 4 — Learn by Doing | col 2–3, row 2 */}
//           <div
//             onMouseEnter={() => setHovered(4)}
//             onMouseLeave={() => setHovered(null)}
//             style={{
//               gridColumn: '2 / 4', gridRow: '2',
//               background: '#FFFFFF', borderRadius: '26px', padding: '18px 24px',
//               display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px',
//               border: '1px solid #E2E8F0',
//               transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
//               transform: hovered === 4 ? 'translateY(-6px)' : 'translateY(0)',
//               cursor: 'default', position: 'relative', overflow: 'hidden',
//               boxShadow: hovered === 4 ? '0 20px 40px rgba(0,0,0,0.05)' : '0 4px 12px rgba(0,0,0,0.02)',
//               minHeight: 0,
//             }}
//           >
//             <div style={{ position: 'relative' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
//                 <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <Zap size={17} color="#5829E5" />
//                 </div>
//                 <span style={{ fontSize: '11px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Learn by Doing</span>
//               </div>
//               <h3 style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 900, color: '#1A0B35' }}>Real Projects. Real Results.</h3>
//               <p style={{ margin: 0, fontSize: '13.5px', color: '#64748B', fontWeight: 500, lineHeight: 1.6, maxWidth: '440px' }}>
//                 Textbooks teach you theory. TREQO throws you into real projects — because companies don't care what you studied.{' '}
//                 <span style={{ color: '#1A0B35', fontWeight: 700 }}>They care what you can deliver on Day 1.</span>
//               </p>
//             </div>
//             <div style={{ flexShrink: 0 }}>
//               <div style={{ padding: '11px 24px', background: '#5829E5', borderRadius: '999px', fontSize: '12px', fontWeight: 800, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase', boxShadow: '0 8px 20px rgba(88,41,229,0.2)', whiteSpace: 'nowrap' }}>
//                 Day 1 Ready
//               </div>
//             </div>
//           </div>

//           {/* CARD 5 — Alumni | col 4, row 1–2 */}
//           <div style={{
//             gridColumn: '4', gridRow: '1 / 3',
//             background: '#1A0B35', borderRadius: '26px', overflow: 'hidden',
//             display: 'flex', flexDirection: 'column',
//             border: '1px solid rgba(88,41,229,0.2)',
//             minHeight: 0,
//           }}>
//             <div style={{ padding: '20px 18px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(88,41,229,0.15) 0%, transparent 100%)', flexShrink: 0 }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', boxShadow: '0 0 8px #4ADE80' }} />
//                 <span style={{ fontSize: '9px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Global Network</span>
//               </div>
//               <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 900, color: 'white', lineHeight: 1.2 }}>
//                 Treqo <span style={{ color: '#A78BFA', fontStyle: 'italic' }}>Alumni</span>
//               </h3>
//             </div>
//             <div style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: '0 12px', minHeight: 0 }}>
//               <div className="scroll-track" style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '14px' }}>
//                 {[...placements, ...placements, ...placements].map((p, i) => (
//                   <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '11px 13px', border: '1px solid rgba(255,255,255,0.06)' }}>
//                     <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: p.color + '22', border: `1.5px solid ${p.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 900, color: p.color, flexShrink: 0 }}>
//                       {p.initials}
//                     </div>
//                     <div style={{ overflow: 'hidden', flex: 1 }}>
//                       <div style={{ fontSize: '13px', fontWeight: 800, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
//                       <div style={{ fontSize: '10px', fontWeight: 700, color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.company}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '36px', background: 'linear-gradient(to bottom, #1A0B35, transparent)', zIndex: 2 }} />
//               <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '36px', background: 'linear-gradient(to top, #1A0B35, transparent)', zIndex: 2 }} />
//             </div>
//           </div>

//           {/* TAGLINE | full width, row 3 */}
//           <div style={{ gridColumn: '1 / 5', gridRow: '3', minHeight: 0 }}>
//             <div style={{
//               height: '100%',
//               background: 'linear-gradient(145deg, rgba(255,255,255,0.82) 0%, rgba(235,228,255,0.65) 60%, rgba(210,200,255,0.5) 100%)',
//               backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
//               border: '1px solid rgba(255,255,255,0.9)',
//               borderRadius: '16px', padding: '0 22px',
//               position: 'relative', overflow: 'hidden',
//               boxShadow: '0 6px 28px rgba(88,41,229,0.1), inset 0 1px 0 rgba(255,255,255,1)',
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//             }}>
//               <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)', borderRadius: '16px 16px 0 0', pointerEvents: 'none' }} />
//               <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#4B5563', lineHeight: 1, whiteSpace: 'nowrap', position: 'relative', zIndex: 1 }}>
//                 This program doesn't teach marketing. It trains you to{' '}
//                 <span style={{ color: '#1A0B35', fontWeight: 800 }}>think, build, and grow brands</span>
//                 {' '}—{' '}
//                 <span style={{ fontStyle: 'italic', fontWeight: 800, background: 'linear-gradient(to right, #5829E5, #311882)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
//                   like a founder.
//                 </span>
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-up {
//           0%   { transform: translateY(0); }
//           100% { transform: translateY(-33.33%); }
//         }
//         .scroll-track { animation: scroll-up 18s linear infinite; }
//         .scroll-track:hover { animation-play-state: paused; }
//       `}</style>
//     </section>
//   );
// }