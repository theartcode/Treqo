"use client";

import { ArrowRight, Play, Calendar, Clock, MapPin, Users, Zap, BookOpen, UserCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background: '#F8F9FB',
        fontFamily: "'Segoe UI', system-ui, sans-serif"
      }}
    >
      {/* --- SIMPLE HORIZONTAL LINES BACKGROUND (Balanced Visibility) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.15, // Subtle but defined
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

      <div className="relative z-10 w-full px-16 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p style={{ color: '#7C3AED', fontSize: '17px', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.02em' }}>
              Advanced Program in
            </p>

            <h1 style={{ margin: '0 0 28px', lineHeight: 1.05 }}>
              <span style={{
                display: 'block',
                fontSize: 'clamp(50px, 6vw, 78px)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: '#1e1035'
              }}>
                Digital Marketing
              </span>
              <span style={{
                display: 'block',
                fontSize: 'clamp(45px, 5.5vw, 72px)',
                fontWeight: 900,
                color: '#5829E5',
                lineHeight: 1.1,
                letterSpacing: '-0.04em'
              }}>
                & Growth Strategy
              </span>
            </h1>

            {/* Logistics */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '36px' }}>
              <Meta icon={Calendar} text="12 Weeks" />
              <Meta icon={Clock} text="Live + Self-Paced" />
              <Meta icon={MapPin} text="Online & Offline" />
              <Meta icon={Users} text="50 Seats" />
            </div>

            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              <Pill icon={Zap} text="AI-Powered Tools" />
              <Pill icon={BookOpen} text="Learn by Doing" />
              <Pill icon={UserCheck} text="Industry-Led Sessions" />
            </div>

            {/* CTA */}
            <button
              style={{
                background: '#5829E5',
                color: 'white',
                border: 'none',
                borderRadius: '14px',
                padding: '16px 36px',
                fontSize: '15px',
                fontWeight: 800,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '52px',
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

            {/* Trust Footer */}
            <div style={{ display: 'flex', gap: '48px', borderTop: '1px solid rgba(88, 41, 229, 0.1)', paddingTop: '28px' }}>
              <Trust label="Built by alumni from" value="Top B-Schools" />
              <Trust label="Mentors from" value="Google, Meta" />
              <Trust label="Backed by" value="Industry Leaders" />
            </div>
          </div>

          {/* RIGHT MEDIA SECTION */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '540px',
              background: 'white',
              borderRadius: '40px',
              padding: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1.2/1',
                borderRadius: '28px',
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
                  padding: '24px'
                }}>
                  <h2 style={{
                    color: 'white',
                    fontSize: '52px',
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
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>
                    <Play size={22} color="#5829E5" fill="#5829E5" style={{ marginLeft: '3px' }} />
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

function Meta({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e1035', fontSize: '14px', fontWeight: 600 }}>
      <Icon size={16} color="#5829E5" />
      <span>{text}</span>
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 18px',
      background: 'white',
      border: '1px solid #E2E8F0',
      borderRadius: '999px',
      color: '#1e1035',
      fontSize: '13px',
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
      <p style={{ fontSize: '10px', color: '#7C3AED', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px' }}>{label}</p>
      <p style={{ fontSize: '14px', fontWeight: 800, color: '#1e1035', margin: 0 }}>{value}</p>
    </div>
  );
}