"use client";

import { ArrowRight, Play, Clock, MapPin, Users, Zap, BookOpen, UserCheck, BarChart2, Briefcase, Trophy } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        background: '#F8F9FB',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* BACKGROUND LINES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          opacity: 0.15,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 23px, #8B5CF6 23px, #8B5CF6 24px)`
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 w-full" style={{ padding: '0 6%' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 items-center" style={{ gap: '80px' }}>

          {/* LEFT CONTENT */}
          <div>

            {/* EYEBROW */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(88,41,229,0.07)', border: '1px solid rgba(88,41,229,0.15)',
              borderRadius: '999px', padding: '6px 16px', marginBottom: '28px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5829E5', display: 'inline-block' }} />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                New Age Program
              </span>
            </div>

            {/* TITLE — full gradient across both lines */}
            <h1 style={{ margin: '0 0 16px', lineHeight: 1.0 }}>
              <span style={{
                display: 'block',
                fontSize: 'clamp(42px, 4.6vw, 64px)',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, #1e1035 0%, #3b1fa8 40%, #5829E5 70%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                New Age Digital
              </span>

              <span style={{
                display: 'inline-block',
                fontSize: 'clamp(42px, 4.6vw, 64px)',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                paddingBottom: '8px',
                background: 'linear-gradient(135deg, #5829E5 0%, #311882 50%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Marketing
              </span>

              {/* Subtitle tags */}
              <span style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
                <BracketTag>( Strategy</BracketTag>
                <Divider />
                <BracketTag>Growth</BracketTag>
                <Divider />
                <BracketTag>Implementation )</BracketTag>
              </span>
            </h1>

            {/* TAGLINE */}
            <p style={{
              fontSize: '15px',
              color: '#6B7280',
              fontWeight: 500,
              lineHeight: 1.7,
              margin: '24px 0 32px',
              maxWidth: '440px',
              borderLeft: '2px solid rgba(88,41,229,0.25)',
              paddingLeft: '16px',
            }}>
              Learn Marketing The Way Founders, Strategists &amp; Growth Leaders Do.
            </p>

            {/* META */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '20px' }}>
              <Meta icon={Clock} text="4–5 Months" />
              <Meta icon={MapPin} text="Online & Offline" />
              <Meta icon={Users} text="40 Seats" />
            </div>

            {/* STATS */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
              <StatBadge icon={BarChart2} text="12 Phases" />
              <StatBadge icon={Briefcase} text="16 Industries" />
              <StatBadge icon={BookOpen} text="30+ Projects" />
              <StatBadge icon={Trophy} text="100% Placement" highlight />
            </div>

            {/* PILLS */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
              <Pill icon={BookOpen} text="Learn by Doing" />
              <Pill icon={Zap} text="Strategy First" />
              <Pill icon={UserCheck} text="AI Native" />
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '36px' }}>
              <button
                style={{
                  background: 'linear-gradient(135deg, #5829E5 0%, #311882 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '16px 36px',
                  fontSize: '14px',
                  fontWeight: 800,
                  letterSpacing: '0.07em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 12px 32px rgba(88,41,229,0.28)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(88,41,229,0.36)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(88,41,229,0.28)';
                }}
              >
                APPLY NOW
                <ArrowRight size={16} />
              </button>

              <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 500 }}>
                Next cohort starts <strong style={{ color: '#5829E5' }}>April 2025</strong>
              </span>
            </div>

            {/* TRUST */}
            <div style={{
              display: 'flex',
              borderTop: '1px solid rgba(88,41,229,0.1)',
              paddingTop: '28px',
            }}>
              {[
                { label: "Alumni from", value: "TOP Bschools" },
                { label: "Mentors", value: "CEO's, CMO's & CXO's" },
                { label: "Backed by", value: "Industry Leaders" },
              ].map((item, i) => (
                <div key={i} style={{
                  flex: 1,
                  paddingRight: i < 2 ? '28px' : '0',
                  borderRight: i < 2 ? '1px solid rgba(88,41,229,0.08)' : 'none',
                  paddingLeft: i > 0 ? '28px' : '0',
                }}>
                  <p style={{ fontSize: '9px', color: '#A78BFA', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 6px' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: 800, color: '#1e1035', margin: 0, lineHeight: 1.2 }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT MEDIA */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'relative', width: '100%', maxWidth: '560px',
              background: 'white', borderRadius: '42px', padding: '20px',
              border: '1px solid #E2E8F0', boxShadow: '0 20px 60px rgba(0,0,0,0.06)'
            }}>
              <div style={{
                position: 'relative', width: '100%', aspectRatio: '1.2/1',
                borderRadius: '30px', overflow: 'hidden', background: '#1A0B35'
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #2d1060 0%, #0B041A 50%, #2d1060 100%)', opacity: 0.9 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '28px' }}>
                  <h2 style={{ color: 'white', fontSize: 'clamp(40px, 4.5vw, 60px)', fontWeight: 900, lineHeight: 1.1 }}>
                    Fortune 500<br />Tech Leader
                  </h2>
                </div>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{
                    width: '70px', height: '70px', borderRadius: '50%', background: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  }}>
                    <Play size={24} color="#5829E5" fill="#5829E5" style={{ marginLeft: '3px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── COMPONENTS ── */

function BracketTag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: 'clamp(14px, 1.6vw, 20px)',
      fontWeight: 800,
      color: '#5829E5',
      letterSpacing: '-0.01em',
      fontStyle: 'italic',
      opacity: 0.85,
    }}>
      {children}
    </span>
  );
}

function Divider() {
  return (
    <span style={{
      fontSize: 'clamp(14px, 1.6vw, 20px)',
      fontWeight: 400,
      color: 'rgba(88,41,229,0.25)',
      userSelect: 'none',
    }}>
      ×
    </span>
  );
}

function Meta({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#374151', fontSize: '14px', fontWeight: 600 }}>
      <Icon size={15} color="#7C3AED" />
      <span>{text}</span>
    </div>
  );
}

function StatBadge({ icon: Icon, text, highlight }: { icon: any, text: string, highlight?: boolean }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '7px',
      padding: '9px 16px',
      background: highlight
        ? 'linear-gradient(135deg, #5829E5 0%, #311882 100%)'
        : 'rgba(88,41,229,0.06)',
      borderRadius: '10px',
      fontSize: '12px', fontWeight: 700,
      color: highlight ? 'white' : '#4B5563',
      whiteSpace: 'nowrap',
      boxShadow: highlight ? '0 4px 16px rgba(88,41,229,0.22)' : 'none',
    }}>
      <Icon size={13} color={highlight ? 'rgba(255,255,255,0.9)' : '#7C3AED'} />
      {text}
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '8px',
      padding: '9px 18px',
      background: 'white',
      border: '1px solid rgba(88,41,229,0.12)',
      borderRadius: '999px',
      color: '#374151',
      fontSize: '13px', fontWeight: 700,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <Icon size={14} color="#5829E5" />
      {text}
    </div>
  );
}