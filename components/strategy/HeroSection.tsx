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
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.15,
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 23px,
              #8B5CF6 23px,
              #8B5CF6 24px
            )`
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 70%)'
        }} />
      </div>

      <div className="relative z-10 w-full" style={{ padding: '0 6%' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 items-center" style={{ gap: '80px' }}>

          {/* LEFT CONTENT */}
          <div>

            {/* TITLE */}
            <h1 style={{ margin: '0 0 22px', lineHeight: 1.08 }}>
              <span style={{
                display: 'block',
                fontSize: 'clamp(42px, 4.6vw, 64px)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: '#1e1035',
                marginBottom: '2px',
              }}>
                New Age Digital
              </span>
              <span style={{
                display: 'block',
                fontSize: 'clamp(42px, 4.6vw, 64px)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: '#1e1035',
              }}>
                Marketing
              </span>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '14px',
              }}>
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
              color: '#4B5563',
              fontWeight: 500,
              lineHeight: 1.6,
              margin: '0 0 28px',
              maxWidth: '460px',
            }}>
              Learn Marketing The Way Founders, Strategists &amp; Growth Leaders Do.
            </p>

            {/* META */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '28px',
              marginBottom: '20px'
            }}>
              <Meta icon={Clock} text="4–5 Months" />
              <Meta icon={MapPin} text="Online & Offline" />
              <Meta icon={Users} text="40 Seats" />
            </div>

            {/* STATS */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '22px',
            }}>
              <StatBadge icon={BarChart2} text="12 Phases" />
              <StatBadge icon={Briefcase} text="16 Industries" />
              <StatBadge icon={BookOpen} text="30+ Projects" />
              <StatBadge icon={Trophy} text="100% Placement" highlight />
            </div>

            {/* PILLS */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '34px'
            }}>
              <Pill icon={BookOpen} text="Learn by Doing" />
              <Pill icon={Zap} text="Strategy First" />
              <Pill icon={UserCheck} text="AI Native" />
            </div>

            {/* CTA */}
            <button
              style={{
                background: '#5829E5',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                padding: '16px 36px',
                fontSize: '15px',
                fontWeight: 800,
                letterSpacing: '0.06em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '34px',
                boxShadow: '0 12px 40px rgba(88,41,229,0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#471ecb';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#5829E5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              APPLY NOW
              <ArrowRight size={18} />
            </button>

            {/* TRUST */}
            <div style={{
              display: 'flex',
              gap: '48px',
              borderTop: '1px solid rgba(88, 41, 229, 0.1)',
              paddingTop: '26px'
            }}>
              <Trust label="Alumni from" value="TOP Bschools" />
              <Trust label="Mentors" value="CEO's, CMO's & CXO's" />
              <Trust label="Backed by" value="Industry Leaders" />
            </div>

          </div>

          {/* RIGHT MEDIA */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              background: 'white',
              borderRadius: '42px',
              padding: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.06)'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1.2/1',
                borderRadius: '30px',
                overflow: 'hidden',
                background: '#1A0B35'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(160deg, #2d1060 0%, #0B041A 50%, #2d1060 100%)',
                  opacity: 0.9
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '28px'
                }}>
                  <h2 style={{
                    color: 'white',
                    fontSize: 'clamp(40px, 4.5vw, 60px)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                  }}>
                    Fortune 500<br />Tech Leader
                  </h2>
                </div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
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
      fontSize: 'clamp(16px, 1.8vw, 24px)',
      fontWeight: 800,
      color: '#5829E5',
      letterSpacing: '-0.01em',
      fontStyle: 'italic',
    }}>
      {children}
    </span>
  );
}

function Divider() {
  return (
    <span style={{
      fontSize: 'clamp(16px, 1.8vw, 24px)',
      fontWeight: 400,
      color: 'rgba(88,41,229,0.3)',
      userSelect: 'none',
    }}>
      ×
    </span>
  );
}

function Meta({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      color: '#1e1035',
      fontSize: '15px',
      fontWeight: 600
    }}>
      <Icon size={16} color="#5829E5" />
      <span>{text}</span>
    </div>
  );
}

function StatBadge({ icon: Icon, text, highlight }: { icon: any, text: string, highlight?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '9px 16px',
      background: highlight ? '#5829E5' : 'rgba(88,41,229,0.06)',
      borderRadius: '11px',
      fontSize: '13px',
      fontWeight: 700,
      color: highlight ? 'white' : '#1e1035',
      whiteSpace: 'nowrap',
    }}>
      <Icon size={14} color={highlight ? 'white' : '#5829E5'} />
      {text}
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      padding: '9px 18px',
      background: 'white',
      border: '1px solid #E2E8F0',
      borderRadius: '999px',
      color: '#1e1035',
      fontSize: '14px',
      fontWeight: 700
    }}>
      <Icon size={15} color="#5829E5" />
      {text}
    </div>
  );
}

function Trust({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p style={{
        fontSize: '10px',
        color: '#7C3AED',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 5px'
      }}>
        {label}
      </p>
      <p style={{
        fontSize: '15px',
        fontWeight: 800,
        color: '#1e1035',
        margin: 0
      }}>
        {value}
      </p>
    </div>
  );
}
