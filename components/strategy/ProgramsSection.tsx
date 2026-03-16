"use client";

import { ArrowRight, ArrowLeft, Monitor, Building2, Sparkles, Zap, Globe, Laptop, Users, Star, Download, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const programs = [
  {
    id: "new-age",
    name: "New Age Digital Marketing",
    badge: "OFFLINE",
    icon: Building2,
    tagline: "Learn Marketing The Way Founders, Strategists & Growth Leaders Do",
    subTagline: "( Strategy x Growth x Implementation )",
    highlights: ["Learn by doing", "AI native", "30+ projects", "100% Placements"],
    duration: "4-5 Weeks",
    path: "/new-age",
    pill: Zap,
    theme: "#1A0B35"
  },
  {
    id: "full-stack",
    name: "Full-Stack Growth Masterclass",
    badge: "100% ONLINE",
    icon: Monitor,
    tagline: "Master the Digital Landscape from Anywhere in the World",
    subTagline: "( Creativity x Data x Automation )",
    highlights: ["Learn by doing", "30+ projects", "LMS Access", "Placement Support"],
    duration: "12 Weeks",
    path: "/online-pro",
    pill: Globe,
    theme: "#5829E5"
  },
  {
    id: "elite",
    name: "ELITE Pro",
    badge: "INTENSIVE",
    icon: Star,
    tagline: "For Those Who Want the Best",
    subTagline: "( 1:1 Coaching x Live Clients )",
    highlights: ["1:1 Mentorship", "Live clients", "Cohort-based", "Placement"],
    duration: "20 Weeks",
    path: "/elite-pro",
    pill: Users,
    theme: "#1A0B35"
  },
  {
    id: "rapid",
    name: "RAPID Pro",
    badge: "FAST TRACK",
    icon: Laptop,
    tagline: "Go From Zero to Job-Ready Fast",
    subTagline: "( Portfolio x Interview x Hired )",
    highlights: ["Sprint format", "Job-ready", "Weekly reviews", "Portfolio"],
    duration: "6 Weeks",
    path: "/rapid-pro",
    pill: Zap,
    theme: "#5829E5"
  },
];

const VISIBLE = 3;
const GAP = 32;

export function ProgramsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < programs.length;
  
  const prev = () => { if (canPrev) setStartIndex(i => i - 1); };
  const next = () => { if (canNext) setStartIndex(i => i + 1); };

  return (
    <section style={{ position: 'relative', background: 'linear-gradient(to bottom, #E6D7F3 0%, #B39CD4 30%, #B39CD4 100%)', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <defs><pattern id="prog-grid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="40" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.12" /><line x1="0" y1="0" x2="40" y2="0" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.12" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#prog-grid)" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1400, margin: '0 auto', padding: '0 7%' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', borderRadius: 99, padding: '7px 20px', marginBottom: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            <Sparkles size={12} color="#5829E5" />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Select Your Path</span>
          </div>
          <h2 style={{ margin: 0, lineHeight: 1.1 }}>
            <span style={{ display: 'block', fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 900, color: '#1A0B35' }}>Choose Your</span>
            <span style={{ display: 'inline-block', fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 900, fontStyle: 'italic', background: 'linear-gradient(to right, #1A0B35 0%, #5829E5 50%, #1A0B35 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Learning System</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <button onClick={prev} style={{ position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', background: canPrev ? '#1A0B35' : 'rgba(255,255,255,0.2)', border: 'none', cursor: canPrev ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <ArrowLeft size={20} color={canPrev ? 'white' : 'rgba(26,11,53,0.2)'} />
          </button>
          <button onClick={next} style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', background: canNext ? '#1A0B35' : 'rgba(255,255,255,0.2)', border: 'none', cursor: canNext ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <ArrowRight size={20} color={canNext ? 'white' : 'rgba(26,11,53,0.2)'} />
          </button>

          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: `${GAP}px`, transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transform: `translateX(calc(-${startIndex} * (100% / ${VISIBLE} + ${GAP}px)))` }}>
              {programs.map(p => (
                <div key={p.id} style={{ flex: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`, borderRadius: 24, background: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.6)', padding: '32px', display: 'flex', flexDirection: 'column', backdropFilter: 'blur(16px)', minHeight: '520px' }}>
                  
                  {/* Badge & Icon Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#1A0B35', borderRadius: 99, padding: '5px 12px' }}>
                      <p.pill size={10} color="#FFFFFF" />
                      <span style={{ fontSize: 9, fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.05em' }}>{p.badge}</span>
                    </div>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                      <p.icon size={20} color="#5829E5" />
                    </div>
                  </div>

                  {/* Titles */}
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ margin: '0 0 12px', fontSize: 28, fontWeight: 900, color: '#1A0B35', lineHeight: 1.1 }}>{p.name}</h3>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#000000', margin: '0 0 6px', lineHeight: 1.4 }}>{p.tagline}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(26,11,53,0.5)', margin: 0 }}>{p.subTagline}</p>
                  </div>

                  {/* Highlights Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 'auto' }}>
                    {p.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.4)', borderRadius: 8, padding: '10px 12px', border: '1px solid rgba(255,255,255,0.4)' }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#5829E5' }} />
                        <span style={{ fontSize: 9, fontWeight: 800, color: '#1A0B35', textTransform: 'uppercase' }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid rgba(26,11,53,0.08)' }}>
                    <div style={{ marginBottom: 20 }}>
                      <span style={{ fontSize: 9, fontWeight: 800, color: 'rgba(26,11,53,0.4)', textTransform: 'uppercase', display: 'block', marginBottom: 2 }}>Course Duration</span>
                      <span style={{ fontSize: 20, fontWeight: 900, color: '#1A0B35' }}>{p.duration}</span>
                    </div>

                    {/* Dual Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 10 }}>
                      <button style={{ background: 'transparent', border: '1.5px solid #1A0B35', borderRadius: 10, padding: '12px 0', fontSize: 11, fontWeight: 800, color: '#1A0B35', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        BOOK A DEMO
                      </button>
                      <button style={{ background: '#1A0B35', border: 'none', borderRadius: 10, padding: '12px 0', fontSize: 11, fontWeight: 800, color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        <Download size={14} /> BROCHURE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}