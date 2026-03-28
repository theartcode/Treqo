"use client";

import { useState } from "react";
import { ArrowRight, Play, Clock, MapPin, Users, Zap, BookOpen, UserCheck, BarChart2, Briefcase, Trophy, X } from "lucide-react";

// ── REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL ──
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwo2YANqQCCM5-a-HSRLPDx4pkGQVGVEcOuBkJ7bjJX05eg_mQ9f5AdPlcUOl8IdYea/exec";
// ────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", age: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.age || !form.email || !form.phone) return;
    setLoading(true);
    const [_, __] = await Promise.all([
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      }).catch(() => {}),
      new Promise(res => setTimeout(res, 1800)),
    ]);
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => { setSubmitted(false); setForm({ name: "", age: "", email: "", phone: "" }); }, 300);
  };

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          display: flex;
          align-items: center;
          background: #F8F9FB;
          font-family: 'DM Sans', 'Segoe UI', system-ui, sans-serif;
          min-height: 100vh;
          box-sizing: border-box;
          padding: 90px 6% 60px;
        }
        .hero-grid {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 64px;
        }
        .hero-right {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .hero-video-card {
          position: relative;
          width: 100%;
          max-width: 520px;
          background: white;
          border-radius: 40px;
          padding: 18px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
        }
        .meta-row { display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 18px; }
        .stats-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .pills-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
        .cta-row { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; flex-wrap: wrap; }
        .trust-row { display: flex; border-top: 1px solid rgba(88,41,229,0.1); padding-top: 22px; }
        .trust-item { flex: 1; }
        .apply-btn {
          background: linear-gradient(135deg, #5829E5 0%, #311882 100%);
          color: white; border: none; border-radius: 14px;
          padding: 15px 32px; font-size: 13px; font-weight: 800;
          letter-spacing: 0.07em; cursor: pointer;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 12px 32px rgba(88,41,229,0.28);
          transition: all 0.2s ease; white-space: nowrap; font-family: inherit;
        }
        .apply-btn:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(88,41,229,0.36); }

        /* MODAL OVERLAY */
        .modal-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(10,4,30,0.65);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .modal-card {
          background: white; border-radius: 28px;
          padding: 40px 36px; width: 100%; max-width: 460px;
          position: relative; box-shadow: 0 40px 100px rgba(88,41,229,0.18);
          border: 1px solid rgba(88,41,229,0.1);
          animation: slideUp 0.25s ease;
        }
        .modal-close {
          position: absolute; top: 18px; right: 18px;
          width: 34px; height: 34px; border-radius: 50%;
          border: none; background: rgba(88,41,229,0.07);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
        }
        .modal-close:hover { background: rgba(88,41,229,0.15); }

        .form-label {
          display: block; font-size: 11px; font-weight: 800;
          color: #5829E5; text-transform: uppercase; letter-spacing: 0.1em;
          margin-bottom: 7px;
        }
        .form-input {
          width: 100%; box-sizing: border-box;
          padding: 13px 16px; border-radius: 12px;
          border: 1.5px solid rgba(88,41,229,0.15);
          background: rgba(88,41,229,0.02);
          font-size: 14px; font-weight: 500; color: #1e1035;
          font-family: inherit; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          border-color: #5829E5;
          box-shadow: 0 0 0 3px rgba(88,41,229,0.1);
        }
        .form-input::placeholder { color: #C4C7D0; }

        .submit-btn {
          width: 100%; padding: 15px;
          background: linear-gradient(135deg, #5829E5 0%, #311882 100%);
          color: white; border: none; border-radius: 14px;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          cursor: pointer; font-family: inherit;
          box-shadow: 0 8px 24px rgba(88,41,229,0.3);
          transition: all 0.2s ease; margin-top: 8px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(88,41,229,0.38); }
        .submit-btn:disabled { opacity: 0.85; cursor: not-allowed; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 18px; height: 18px; border-radius: 50%;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: white;
          animation: spin 0.75s linear infinite;
          flex-shrink: 0;
        }

        .success-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: linear-gradient(135deg, #5829E5, #7C3AED);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px; font-size: 28px;
        }

        @media (max-width: 1024px) {
          .hero-section { padding: 80px 5% 56px; }
          .hero-grid { gap: 36px; }
          .hero-video-card { max-width: 400px; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 80px 6% 56px; align-items: flex-start; }
          .hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .hero-right { order: -1; }
          .hero-video-card { max-width: 100%; }
          .trust-row { flex-wrap: wrap; gap: 16px; }
          .trust-item { flex: 1 1 40%; border-right: none !important; padding-right: 0 !important; padding-left: 0 !important; }
          .modal-card { padding: 32px 24px; }
        }
        @media (max-width: 480px) {
          .hero-section { padding: 72px 5% 48px; }
          .meta-row { gap: 14px; }
          .cta-row { flex-direction: column; align-items: flex-start; gap: 12px; }
          .trust-item { flex: 1 1 100%; }
          .apply-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* ── MODAL ── */}
      {modalOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
          <div className="modal-card">
            <button className="modal-close" onClick={handleClose}>
              <X size={16} color="#5829E5" />
            </button>

            {!submitted ? (
              <>
                {/* Modal Header */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    background: 'rgba(88,41,229,0.07)', borderRadius: '999px',
                    padding: '5px 14px', marginBottom: '14px',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#5829E5', display: 'inline-block' }} />
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      New Age Program
                    </span>
                  </div>
                  <h2 style={{ margin: '0 0 6px', fontSize: '22px', fontWeight: 900, color: '#1e1035', letterSpacing: '-0.03em' }}>
                    Apply Now
                  </h2>
                  <p style={{ margin: 0, fontSize: '13px', color: '#9CA3AF', fontWeight: 500 }}>
                    Fill in your details and we'll get back to you shortly.
                  </p>
                </div>

                {/* Form Fields */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label className="form-label">Full Name</label>
                    <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Arjun Sharma" />
                  </div>
                  <div>
                    <label className="form-label">Age</label>
                    <input className="form-input" name="age" type="number" value={form.age} onChange={handleChange} placeholder="e.g. 22" min="16" max="60" />
                  </div>
                  <div>
                    <label className="form-label">Email Address</label>
                    <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                  </div>

                  <button
                    className="submit-btn"
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.age || !form.email || !form.phone}
                  >
                    {loading ? <><div className="spinner" /><span>Submitting…</span></> : <><span>SUBMIT APPLICATION</span> <ArrowRight size={15} /></>}
                  </button>
                </div>
              </>
            ) : (
              /* Success State */
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div className="success-icon">✓</div>
                <h2 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: 900, color: '#1e1035', letterSpacing: '-0.03em' }}>
                  You're In!
                </h2>
                <p style={{ margin: '0 0 28px', fontSize: '14px', color: '#6B7280', fontWeight: 500, lineHeight: 1.6 }}>
                  You'll be shortly informed about the next steps. Keep an eye on your inbox!
                </p>
                <button className="submit-btn" onClick={handleClose} style={{ marginTop: 0 }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <section className="hero-section">

        {/* BACKGROUND */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.15,
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 23px, #8B5CF6 23px, #8B5CF6 24px)`
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 70%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div className="hero-grid">

            {/* ── LEFT ── */}
            <div>
              {/* EYEBROW */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(88,41,229,0.07)', border: '1px solid rgba(88,41,229,0.15)',
                borderRadius: '999px', padding: '6px 16px', marginBottom: '22px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5829E5', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  New Age Program
                </span>
              </div>

              {/* TITLE */}
              <h1 style={{ margin: '0 0 0' }}>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(34px, 4vw, 62px)',
                  fontWeight: 900, letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, #1e1035 0%, #3b1fa8 40%, #5829E5 70%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  New Age Digital
                </span>
                <span style={{
                  display: 'inline-block',
                  fontSize: 'clamp(34px, 4vw, 62px)',
                  fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', paddingBottom: '6px',
                  background: 'linear-gradient(135deg, #5829E5 0%, #311882 50%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Marketing
                </span>
                <span style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                  <BracketTag>( Strategy</BracketTag>
                  <Divider />
                  <BracketTag>Growth</BracketTag>
                  <Divider />
                  <BracketTag>Implementation )</BracketTag>
                </span>
              </h1>

              {/* TAGLINE */}
              <p style={{
                fontSize: '14px', color: '#6B7280', fontWeight: 500, lineHeight: 1.7,
                margin: '20px 0 22px', maxWidth: '420px',
                borderLeft: '2px solid rgba(88,41,229,0.25)', paddingLeft: '14px',
              }}>
                Learn Marketing The Way Founders, Strategists &amp; Growth Leaders Do.
              </p>

              {/* META */}
              <div className="meta-row">
                <Meta icon={Clock} text="4–5 Months" />
                <Meta icon={MapPin} text="Online & Offline" />
                <Meta icon={Users} text="40 Seats" />
              </div>

              {/* STATS */}
              <div className="stats-row">
                <StatBadge icon={BarChart2} text="12 Phases" />
                <StatBadge icon={Briefcase} text="16 Industries" />
                <StatBadge icon={BookOpen} text="30+ Projects" />
                <StatBadge icon={Trophy} text="100% Placement" highlight />
              </div>

              {/* PILLS */}
              <div className="pills-row">
                <Pill icon={BookOpen} text="Learn by Doing" />
                <Pill icon={Zap} text="Strategy First" />
                <Pill icon={UserCheck} text="AI Native" />
              </div>

              {/* CTA */}
              <div className="cta-row">
                <button className="apply-btn" onClick={() => setModalOpen(true)}>
                  APPLY NOW <ArrowRight size={16} />
                </button>
                <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 500 }}>
                  Next cohort starts <strong style={{ color: '#5829E5' }}>April 2025</strong>
                </span>
              </div>

              {/* TRUST */}
              <div className="trust-row">
                {[
                  { label: "Alumni from", value: "TOP Bschools" },
                  { label: "Mentors", value: "CEO's, CMO's & CXO's" },
                  { label: "Backed by", value: "Industry Leaders" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="trust-item"
                    style={{
                      paddingRight: i < 2 ? '22px' : '0',
                      borderRight: i < 2 ? '1px solid rgba(88,41,229,0.08)' : 'none',
                      paddingLeft: i > 0 ? '22px' : '0',
                    }}
                  >
                    <p style={{ fontSize: '9px', color: '#A78BFA', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 5px' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '13px', fontWeight: 800, color: '#1e1035', margin: 0, lineHeight: 1.2 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="hero-right">
              <div className="hero-video-card">
                <div style={{
                  position: 'relative', width: '100%', aspectRatio: '1.2/1',
                  borderRadius: '28px', overflow: 'hidden', background: '#1A0B35',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #2d1060 0%, #0B041A 50%, #2d1060 100%)', opacity: 0.9 }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '28px' }}>
                    <h2 style={{ color: 'white', fontSize: 'clamp(28px, 3.5vw, 54px)', fontWeight: 900, lineHeight: 1.1, margin: 0 }}>
                      Fortune 500<br />Tech Leader
                    </h2>
                  </div>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                      width: '68px', height: '68px', borderRadius: '50%', background: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
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
    </>
  );
}

/* ── SUB-COMPONENTS ── */

function BracketTag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: 'clamp(13px, 1.4vw, 18px)', fontWeight: 800,
      color: '#5829E5', letterSpacing: '-0.01em', fontStyle: 'italic', opacity: 0.85,
    }}>
      {children}
    </span>
  );
}

function Divider() {
  return (
    <span style={{
      fontSize: 'clamp(13px, 1.4vw, 18px)', fontWeight: 400,
      color: 'rgba(88,41,229,0.25)', userSelect: 'none',
    }}>
      ×
    </span>
  );
}

function Meta({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#374151', fontSize: '13px', fontWeight: 600 }}>
      <Icon size={14} color="#7C3AED" />
      <span>{text}</span>
    </div>
  );
}

function StatBadge({ icon: Icon, text, highlight }: { icon: any; text: string; highlight?: boolean }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      padding: '8px 14px',
      background: highlight ? 'linear-gradient(135deg, #5829E5 0%, #311882 100%)' : 'rgba(88,41,229,0.06)',
      borderRadius: '10px', fontSize: '11px', fontWeight: 700,
      color: highlight ? 'white' : '#4B5563', whiteSpace: 'nowrap',
      boxShadow: highlight ? '0 4px 16px rgba(88,41,229,0.22)' : 'none',
    }}>
      <Icon size={12} color={highlight ? 'rgba(255,255,255,0.9)' : '#7C3AED'} />
      {text}
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '7px',
      padding: '8px 16px', background: 'white',
      border: '1px solid rgba(88,41,229,0.12)', borderRadius: '999px',
      color: '#374151', fontSize: '12px', fontWeight: 700,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)', whiteSpace: 'nowrap',
    }}>
      <Icon size={13} color="#5829E5" />
      {text}
    </div>
  );
}