"use client";

import { ArrowRight, ArrowLeft, Monitor, Building2, Sparkles, Zap, Globe, Laptop, Users, Star, Download, Calendar, Bot, Database } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    id: "new-age-offline",
    name: "New Age Digital Marketing",
    badge: "OFFLINE",
    icon: Building2,
    tagline: "Learn Marketing The Way Founders, Strategists & Growth Leaders Do",
    subTagline: "Strategy x Growth x Implementation",
    highlights: ["Learn by doing", "AI native", "30+ projects", "100% Placements"],
    duration: "4-5 Months",
    pill: Zap,
    comingSoon: false,
  },
  {
    id: "new-age-online",
    name: "New Age Digital Marketing",
    badge: "100% ONLINE",
    icon: Monitor,
    tagline: "Learn Marketing The Way Founders, Strategists & Growth Leaders Do",
    subTagline: "Strategy x Growth x Implementation",
    highlights: ["Learn by doing", "AI native", "LMS Access", "Placement Support"],
    duration: "4-5 Months",
    pill: Globe,
    comingSoon: false,
  },
  {
    id: "marketing-sales-online",
    name: "Marketing & Sales",
    badge: "100% ONLINE",
    icon: Star,
    tagline: "Master the Art of Selling & Scaling in the Modern Digital World",
    subTagline: "Persuasion x Pipeline x Performance",
    highlights: ["Live projects", "Sales playbooks", "CRM mastery", "Placement Support"],
    duration: "4-5 Months",
    pill: Globe,
    comingSoon: false,
  },
  {
    id: "marketing-sales-offline",
    name: "Marketing & Sales",
    badge: "OFFLINE",
    icon: Users,
    tagline: "Master the Art of Selling & Scaling in the Modern Digital World",
    subTagline: "Persuasion x Pipeline x Performance",
    highlights: ["Live projects", "Sales playbooks", "CRM mastery", "100% Placements"],
    duration: "7 Months",
    pill: Zap,
    comingSoon: true,
  },
  {
    id: "ai-marketing-online",
    name: "AI in Marketing",
    badge: "100% ONLINE",
    icon: Bot,
    tagline: "Build AI-Powered Campaigns, Automate Workflows & Outperform at Scale",
    subTagline: "Tools x Data x Automation",
    highlights: ["Claude AI", "ChatGPT", "Zapier / Make", "Placement Support"],
    duration: "4-5 Months",
    pill: Globe,
    comingSoon: false,
  },
  {
    id: "ai-marketing-offline",
    name: "AI in Marketing",
    badge: "OFFLINE",
    icon: Database,
    tagline: "Build AI-Powered Campaigns, Automate Workflows & Outperform at Scale",
    subTagline: "Tools x Data x Automation",
    highlights: ["Claude AI", "ChatGPT", "Zapier / Make", "100% Placements"],
    duration: "4-5 Months",
    pill: Zap,
    comingSoon: true,
  },
];

const VISIBLE = 3;
const GAP = 24;

export function ProgramsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < programs.length;

  const prev = () => { if (canPrev) setStartIndex(i => i - 1); };
  const next = () => { if (canNext) setStartIndex(i => i + 1); };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  const openDemo = (programName: string) => {
    setSelectedProgram(programName);
    setModalOpen(true);
  };

  return (
    <>
      <section style={{
        position: 'relative',
        background: 'linear-gradient(to bottom, #E6D7F3 0%, #B39CD4 30%, #B39CD4 100%)',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {/* Grid bg */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
            <defs>
              <pattern id="prog-grid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.12" />
                <line x1="0" y1="0" x2="40" y2="0" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.12" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#prog-grid)" />
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1400, margin: '0 auto', padding: '0 7%' }}>

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', borderRadius: 99, padding: '7px 20px', marginBottom: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <Sparkles size={12} color="#5829E5" />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Select Your Path</span>
            </div>
            <h2 style={{ margin: 0, lineHeight: 1.1 }}>
              <span style={{ display: 'block', fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 900, color: '#1A0B35' }}>Choose Your</span>
              <span style={{ display: 'inline-block', fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 900, fontStyle: 'italic', background: 'linear-gradient(to right, #1A0B35 0%, #5829E5 50%, #1A0B35 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Learning System</span>
            </h2>
          </div>

          {/* Carousel */}
          <div style={{ position: 'relative' }}>
            {/* Prev */}
            <button
              onClick={prev}
              style={{
                position: 'absolute', left: '-56px', top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: canPrev ? '#1A0B35' : 'rgba(255,255,255,0.2)',
                border: 'none', cursor: canPrev ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, transition: 'background 0.3s',
              }}
            >
              <ArrowLeft size={18} color={canPrev ? 'white' : 'rgba(26,11,53,0.2)'} />
            </button>

            {/* Next */}
            <button
              onClick={next}
              style={{
                position: 'absolute', right: '-56px', top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: canNext ? '#1A0B35' : 'rgba(255,255,255,0.2)',
                border: 'none', cursor: canNext ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, transition: 'background 0.3s',
              }}
            >
              <ArrowRight size={18} color={canNext ? 'white' : 'rgba(26,11,53,0.2)'} />
            </button>

            <div style={{ overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                gap: `${GAP}px`,
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: `translateX(calc(-${startIndex} * (100% / ${VISIBLE} + ${GAP / VISIBLE}px)))`,
              }}>
                {programs.map(p => (
                  <div
                    key={p.id}
                    style={{
                      flex: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
                      borderRadius: 28,
                      background: p.comingSoon
                        ? 'rgba(255,255,255,0.32)'
                        : 'rgba(255,255,255,0.52)',
                      border: p.comingSoon
                        ? '1.5px dashed rgba(88,41,229,0.25)'
                        : '1px solid rgba(255,255,255,0.75)',
                      padding: '36px 32px',
                      display: 'flex',
                      flexDirection: 'column',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      minHeight: '580px',
                      boxShadow: '0 8px 32px rgba(88,41,229,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Gloss shine */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.45), transparent)', borderRadius: '28px 28px 0 0', pointerEvents: 'none' }} />

                    {/* Coming Soon ribbon */}
                    {p.comingSoon && (
                      <div style={{
                        position: 'absolute', top: 18, right: -28,
                        background: 'linear-gradient(135deg, #5829E5, #1A0B35)',
                        color: 'white', fontSize: 8, fontWeight: 900,
                        letterSpacing: '0.12em', padding: '5px 40px',
                        transform: 'rotate(35deg)', zIndex: 5,
                        boxShadow: '0 4px 12px rgba(88,41,229,0.3)',
                      }}>
                        COMING SOON
                      </div>
                    )}

                    {/* Badge & Icon Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26, position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#1A0B35', borderRadius: 99, padding: '6px 14px' }}>
                        <p.pill size={10} color="#FFFFFF" />
                        <span style={{ fontSize: 9, fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.08em' }}>{p.badge}</span>
                      </div>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.08)' }}>
                        <p.icon size={22} color="#5829E5" />
                      </div>
                    </div>

                    {/* Titles */}
                    <div style={{ marginBottom: 26, position: 'relative', zIndex: 1 }}>
                      <h3 style={{ margin: '0 0 14px', fontSize: 26, fontWeight: 900, color: '#1A0B35', lineHeight: 1.15 }}>{p.name}</h3>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#000000', margin: '0 0 12px', lineHeight: 1.45 }}>{p.tagline}</p>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: 'linear-gradient(135deg, rgba(88,41,229,0.12) 0%, rgba(88,41,229,0.06) 100%)',
                        border: '1px solid rgba(88,41,229,0.2)',
                        borderRadius: 99, padding: '6px 14px',
                      }}>
                        <span style={{ fontSize: 10, fontWeight: 800, color: '#5829E5', letterSpacing: '0.04em' }}>( {p.subTagline} )</span>
                      </div>
                    </div>

                    {/* Highlights Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 'auto', position: 'relative', zIndex: 1 }}>
                      {p.highlights.map(h => (
                        <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.55)', borderRadius: 10, padding: '11px 14px', border: '1px solid rgba(255,255,255,0.6)' }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#5829E5', flexShrink: 0 }} />
                          <span style={{ fontSize: 10, fontWeight: 800, color: '#1A0B35', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Section */}
                    <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid rgba(26,11,53,0.08)', position: 'relative', zIndex: 1 }}>
                      <div style={{ marginBottom: 20 }}>
                        <span style={{ fontSize: 9, fontWeight: 800, color: 'rgba(26,11,53,0.4)', textTransform: 'uppercase', display: 'block', marginBottom: 3, letterSpacing: '0.12em' }}>Course Duration</span>
                        <span style={{ fontSize: 22, fontWeight: 900, color: '#1A0B35' }}>{p.duration}</span>
                      </div>

                      {/* Buttons */}
                      {p.comingSoon ? (
                        /* Coming Soon state */
                        <div style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          gap: 10, padding: '16px 0',
                          background: 'linear-gradient(135deg, rgba(88,41,229,0.08), rgba(88,41,229,0.04))',
                          borderRadius: 14, border: '1.5px dashed rgba(88,41,229,0.25)',
                        }}>
                          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5829E5', animation: 'pulse 2s infinite' }} />
                          <span style={{ fontSize: 12, fontWeight: 900, color: '#5829E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                            Coming Soon
                          </span>
                        </div>
                      ) : (
                        /* Normal buttons */
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 10 }}>
                          <button
                            onClick={() => openDemo(p.name)}
                            style={{
                              background: 'transparent', border: '1.5px solid #1A0B35',
                              borderRadius: 12, padding: '13px 0',
                              fontSize: 11, fontWeight: 800, color: '#1A0B35',
                              cursor: 'pointer', display: 'flex', alignItems: 'center',
                              justifyContent: 'center', gap: 6, letterSpacing: '0.05em',
                              transition: 'background 0.2s, color 0.2s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#1A0B35'; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1A0B35'; }}
                          >
                            BOOK A DEMO
                          </button>
                          <a
                            href="/brochure.pdf"
                            download
                            style={{
                              background: '#1A0B35', borderRadius: 12, padding: '13px 0',
                              fontSize: 11, fontWeight: 800, color: 'white',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              gap: 6, letterSpacing: '0.05em', textDecoration: 'none',
                            }}
                          >
                            <Download size={14} /> BROCHURE
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
              {Array.from({ length: programs.length - VISIBLE + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStartIndex(i)}
                  style={{
                    width: i === startIndex ? 24 : 8,
                    height: 8, borderRadius: 99,
                    background: i === startIndex ? '#1A0B35' : 'rgba(26,11,53,0.2)',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </>
  );
}
