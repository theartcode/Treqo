"use client";

import { ArrowRight, Monitor, Building2, Sparkles, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const programs = [
  { id: "sam", name: "SAM Pro", badge: "100% ONLINE", icon: Monitor, tagline: "Master Digital Marketing from Anywhere", description: "Flexible, self-paced learning with live sessions, real projects, and expert mentorship.", highlights: ["Live sessions", "Real projects", "Flexible", "Mentorship"], duration: "12 Weeks", path: "/sam-pro", pill: Zap },
  { id: "mark", name: "MARK Pro", badge: "ONLINE + OFFLINE", icon: Building2, tagline: "The Complete Hybrid Experience", description: "Combine online learning and in-person campus sessions for full career transformation.", highlights: ["Workshops", "Networking", "Campus", "Industry visits"], duration: "16 Weeks", path: "/mark-pro", pill: Globe },
];

export function ProgramsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={{
      position: 'relative',
      /* FLOW FIX: Handshake from previous #E6D7F3 into #B39CD4 */
      background: 'linear-gradient(to bottom, #E6D7F3 0%, #B39CD4 30%, #B39CD4 100%)',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '140px 0',
      fontFamily: "'DM Sans', sans-serif"
    }}>

      {/* BACKGROUND ELEMENTS */}
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

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25) 0%, transparent 70%)'
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 5%' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'white',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: 99,
            padding: '6px 16px',
            marginBottom: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <Sparkles size={12} color="#5829E5" />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Select Your Path</span>
          </div>

          <h2 style={{ margin: 0, lineHeight: 1.1 }}>
            <span style={{
              display: 'block',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#1A0B35',
              letterSpacing: '-0.02em'
            }}>
              Choose Your
            </span>

            <span style={{
              /* BUG-FREE GRADIENT: inline-block + padding */
              display: 'inline-block',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              fontStyle: 'italic',
              background: 'linear-gradient(to right, #1A0B35 0%, #5829E5 50%, #1A0B35 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.02em',
              paddingBottom: '8px'
            }}>
              Learning System
            </span>
          </h2>

          <p style={{
            fontSize: 16,
            color: '#334155',
            maxWidth: 480,
            margin: '20px auto 0',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Two specialized frameworks for different learning trajectories and career goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
          {programs.map(p => {
            const isH = hovered === p.id;
            return (
              <div key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderRadius: 32,
                  background: isH ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.35)',
                  border: `1.5px solid ${isH ? '#5829E5' : 'rgba(255, 255, 255, 0.5)'}`,
                  padding: 40,
                  transition: 'all .4s cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: isH ? 'translateY(-12px)' : 'none',
                  boxShadow: isH ? '0 40px 80px -20px rgba(88, 41, 229, 0.15)' : 'none',
                  position: 'relative',
                  backdropFilter: 'blur(12px)'
                }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#5829E5', borderRadius: 99, padding: '4px 12px', marginBottom: 12 }}>
                      <p.pill size={10} color="#FFFFFF" />
                      <span style={{ fontSize: 10, fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase' }}>{p.badge}</span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: 42, fontWeight: 900, color: '#1A0B35' }}>{p.name}</h3>
                  </div>

                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: isH ? '#1A0B35' : 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}>
                    <p.icon size={24} color={isH ? 'white' : '#5829E5'} />
                  </div>
                </div>

                <p style={{ fontSize: 18, fontWeight: 700, color: '#1A0B35', marginBottom: 12 }}>{p.tagline}</p>
                <p style={{ fontSize: 14, color: '#334155', lineHeight: 1.6, marginBottom: 32, minHeight: 44 }}>{p.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 40 }}>
                  {p.highlights.map(h => (
                    <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255, 255, 255, 0.4)', borderRadius: 12, padding: '10px 14px', border: '1px solid rgba(255, 255, 255, 0.5)' }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#5829E5' }} />
                      <span style={{ fontSize: 10, fontWeight: 700, color: '#1A0B35', textTransform: 'uppercase' }}>{h}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid rgba(26, 11, 53, 0.08)' }}>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 800, color: 'rgba(26, 11, 53, 0.4)', textTransform: 'uppercase', marginBottom: 4 }}>Duration</p>
                    <p style={{ fontSize: 24, fontWeight: 900, color: '#1A0B35' }}>{p.duration}</p>
                  </div>

                  <Link href={p.path} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px',
                    background: isH ? '#1A0B35' : '#5829E5',
                    borderRadius: 99, fontSize: 12, fontWeight: 800,
                    color: 'white', textDecoration: 'none', transition: '0.3s',
                    boxShadow: isH ? '0 10px 20px rgba(26, 11, 53, 0.2)' : 'none'
                  }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}