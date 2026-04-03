"use client";

import { ArrowRight, ArrowLeft, Monitor, Building2, Sparkles, Zap, Globe, Laptop, Users, Star, Download, Calendar, Bot, Database } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
    id: "ai-marketing-offline",
    name: "AI in Marketing",
    badge: "OFFLINE",
    icon: Database,
    tagline: "Build AI-Powered Campaigns, Automate Workflows & Outperform at Scale",
    subTagline: "Tools x Data x Automation",
    highlights: ["Claude AI", "ChatGPT", "Zapier / Make", "100% Placements"],
    duration: "4-5 Months",
    pill: Zap,
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
    comingSoon: true,
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
];

const VISIBLE = 3;
const GAP = 24;

export function ProgramsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isPaused = useRef(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const visibleCount = isMobile ? 1 : VISIBLE;
  const gap = isMobile ? 16 : GAP;

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < programs.length;

  const prev = () => { if (canPrev) setStartIndex(i => i - 1); };
  const next = () => { if (canNext) setStartIndex(i => i + 1); };

  // Reset index when switching between mobile/desktop
  useEffect(() => { setStartIndex(0); }, [isMobile]);

  // Auto-slide on mobile — loops through all cards every 3s
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      if (isPaused.current) return;
      setStartIndex(i => (i + 1) % programs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
const [notifyOpen, setNotifyOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);


const [form, setForm] = useState({
  name: "",
  age: "",
  email: "",
  phone: "",
  qualification: "",
  city: ""
});
  const openDemo = (programName: string) => {
    setSelectedProgram(programName);
    setModalOpen(true);
  };

  const handleChange = (e: any) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.phone) return;

  setLoading(true);

  try {
    await fetch("https://n8n.srv993899.hstgr.cloud/webhook/treqo-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        program: selectedProgram,
        source: "program-card",
        timestamp: new Date().toISOString()
      })
    });

    setSubmitted(true);
  } catch (err) {
    alert("Something went wrong");
  }

  setLoading(false);
};

const handleClose = () => {
  setModalOpen(false);
  setTimeout(() => {
    setSubmitted(false);
    setForm({
      name: "",
      age: "",
      email: "",
      phone: "",
      qualification: "",
      city: ""
    });
  }, 300);
};

  // Touch swipe handlers — pause auto-slide on touch
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isPaused.current = true;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    // Resume auto-slide after 5s
    setTimeout(() => { isPaused.current = false; }, 5000);
  };

  const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(88,41,229,0.2)",
  fontSize: 14,
  outline: "none",
  color: "#1A0B35",
  background: "#FAFAFF"
};
  return (
    <>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        /* ── Mobile only ── */
        @media (max-width: 768px) {
          .ps-section { padding: 60px 0 !important; }
          .ps-inner { padding: 0 5% !important; }
          .ps-arrow-prev, .ps-arrow-next { display: none !important; }
          .ps-heading { margin-bottom: 28px !important; }
          .ps-dots-row { margin-top: 20px !important; }
        }
      `}</style>

      <section className="ps-section" style={{
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

        <div className="ps-inner" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1400, margin: '0 auto', padding: '0 7%' }}>

          {/* Heading */}
          <div className="ps-heading" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', borderRadius: 99, padding: '7px 20px', marginBottom: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <Sparkles size={12} color="#5829E5" />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Select Your Path</span>
            </div>
            <h2 style={{ margin: 0, lineHeight: 1.1 }}>
              <span style={{ display: 'block', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: '#1A0B35' }}>Choose Your</span>
              <span style={{ display: 'inline-block', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, fontStyle: 'italic', background: 'linear-gradient(to right, #1A0B35 0%, #5829E5 50%, #1A0B35 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Learning System</span>
            </h2>
          </div>

          {/* Carousel */}
          <div style={{ position: 'relative' }}>

            {/* Prev arrow */}
            <button
              className="ps-arrow-prev"
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

            {/* Next arrow */}
            <button
              className="ps-arrow-next"
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

            {/* Cards track */}
            <div
              className="ps-carousel-outer"
              style={{ overflow: 'hidden' }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="ps-track" style={{
                display: 'flex',
                gap: `${gap}px`,
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: `translateX(calc(-${startIndex} * (100% / ${visibleCount} + ${gap / visibleCount}px)))`,
              }}>
                {programs.map((p, index) => (
                  <div
                    className="ps-card"
                    key={p.id}
                    style={{
                      flex: `0 0 calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`,
                      borderRadius: 28,
                      background: p.comingSoon ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.52)',
                      border: p.comingSoon ? '1.5px dashed rgba(88,41,229,0.25)' : '1px solid rgba(255,255,255,0.75)',
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

                    {/* Coming Soon overlay */}
                    {p.comingSoon && (
                      <div style={{
                        position: 'absolute', inset: 0, zIndex: 10,
                        borderRadius: 28,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center', gap: 12,
                        pointerEvents: 'none',
                      }}>
                        <div style={{
                          background: 'linear-gradient(135deg, #5829E5, #1A0B35)',
                          borderRadius: 999, padding: '12px 32px',
                          display: 'flex', alignItems: 'center', gap: 10,
                          boxShadow: '0 8px 32px rgba(88,41,229,0.45)',
                        }}>
                          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.8)', animation: 'pulse 2s infinite' }} />
                          <span style={{ fontSize: 14, fontWeight: 900, color: 'white', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                            Coming Soon
                          </span>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 600, color: '#1A0B35', opacity: 0.6 }}>We're working on it!</span>
                      </div>
                    )}

                    {/* Card content */}
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, filter: p.comingSoon ? 'blur(4px)' : 'none', userSelect: p.comingSoon ? 'none' : 'auto' }}>

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
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 10 }}>
                       <button
onClick={() => {
  if (index === 0) {
    openDemo(p.name); // ✅ only 1st card form
  } else {
    setSelectedProgram(p.name);
    setNotifyOpen(true); // ✅ all others popup
  }
}}
  style={{
    background: 'transparent',
    border: '1.5px solid #1A0B35',
    borderRadius: 12,
    padding: '13px 0',
    fontSize: 11,
    fontWeight: 800,
    color: '#1A0B35',
    cursor: p.comingSoon ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    letterSpacing: '0.05em',
  }}
>
  BOOK A DEMO
</button>
                          <div style={{
                            background: '#1A0B35', borderRadius: 12, padding: '13px 0',
                            fontSize: 11, fontWeight: 800, color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: 6, letterSpacing: '0.05em',
                          }}>
                            <Download size={14} /> BROCHURE
                          </div>
                        </div>
                      </div>

                    </div>{/* end blurred content wrapper */}
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="ps-dots-row" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
              {programs.map((_, i) => (
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
                    display: isMobile ? 'block' : (i <= programs.length - VISIBLE ? 'block' : 'none'),
                  }}
                />
              ))}
            </div>

          </div>
        </div>

        {modalOpen && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(10,4,30,0.65)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999
    }}
    onClick={(e) => e.target === e.currentTarget && handleClose()}
  >
    <div
      style={{
        background: "white",
        borderRadius: 24,
        padding: 30,
        width: "100%",
        maxWidth: 480,
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
      }}
    >
      {!submitted ? (
        <>
          {/* HEADER */}
          <h2 style={{
            fontWeight: 900,
            fontSize: 22,
            color: "#1A0B35",
            marginBottom: 6
          }}>
            Apply Now
          </h2>

          <p style={{
            fontSize: 13,
            color: "#6B7280",
            marginBottom: 20
          }}>
            {selectedProgram}
          </p>

          {/* FORM */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />

            <select
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Qualification</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="B.Com">B.Com</option>
              <option value="Other">Other</option>
            </select>

            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* SUBMIT */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: "100%",
                padding: 14,
                background: "linear-gradient(135deg, #5829E5, #311882)",
                color: "white",
                borderRadius: 12,
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
                marginTop: 6
              }}
            >
              {loading ? "Submitting..." : "SUBMIT APPLICATION"}
            </button>

          </div>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: 20 }}>
          <h2 style={{ color: "#1A0B35" }}>You're In 🚀</h2>
          <p style={{ color: "#6B7280" }}>We’ll contact you soon.</p>

          <button
            onClick={handleClose}
            style={{
              marginTop: 20,
              padding: 12,
              background: "#1A0B35",
              color: "white",
              borderRadius: 10,
              border: "none",
              cursor: "pointer"
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  </div>
)}


{notifyOpen && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(10,4,30,0.65)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999
    }}
    onClick={(e) => e.target === e.currentTarget && setNotifyOpen(false)}
  >
    <div
      style={{
        background: "white",
        borderRadius: 20,
        padding: 30,
        width: "100%",
        maxWidth: 360,
        textAlign: "center"
      }}
    >
      <h2 style={{ fontWeight: 900, color: "#1A0B35" }}>
        Coming Soon 🚀
      </h2>

      <p style={{ color: "#6B7280", marginTop: 10 }}>
        We’ll update you once this program is live.
      </p>

      <button
        onClick={() => setNotifyOpen(false)}
        style={{
          marginTop: 20,
          padding: 12,
          width: "100%",
          background: "#1A0B35",
          color: "white",
          borderRadius: 10,
          border: "none",
          cursor: "pointer"
        }}
      >
        OK
      </button>
    </div>
  </div>
)}
      </section>
    </>


  );
}