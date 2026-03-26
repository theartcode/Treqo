"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

const logos = [
  { name: "Booking", src: "/logos/booking.svg" },
  { name: "BCG", src: "/logos/bcg.svg" },
  { name: "Coinbase", src: "/logos/coinbase.svg" },
  { name: "Colgate", src: "/logos/colgate.svg" },
  { name: "Databricks", src: "/logos/databricks.svg" },
  { name: "Dropbox", src: "/logos/dropbox.svg" },
  { name: "Vimeo", src: "/logos/vimeo.svg" },
  { name: "Intuit", src: "/logos/intuit.svg" },
  { name: "Lyft", src: "/logos/lyft.svg" },
  { name: "MasterClass", src: "/logos/masterclass.svg" },
  { name: "Palo Alto", src: "/logos/paloalto.svg" },
  { name: "Pernod Ricard", src: "/logos/pernod.svg" },
];

export function TrustedBySlider() {
  return (
    <section
      className="overflow-hidden relative"
      style={{ background: '#ecd7ff', padding: '0 0 48px', marginTop: 0 }}
    >
      {/* Top flow bleed — removed */}

      {/* Blueprint lines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.1 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #7C3AED 39px, #7C3AED 40px)' }} />
      </div>

      <div className="w-full px-[5%] relative z-10" style={{ paddingTop: 0 }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '36px', paddingTop: '28px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'white', border: '1px solid rgba(88,41,229,0.1)',
            borderRadius: '999px', padding: '5px 14px', marginBottom: '14px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
          }}>
            <Sparkles size={11} color="#5829E5" />
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Global Recognition
            </span>
          </div>

          <h2 style={{ margin: 0, lineHeight: 1.05, whiteSpace: 'nowrap' }}>
            <span style={{
              fontSize: 'clamp(24px, 3vw, 42px)',
              fontWeight: 900,
              color: '#1A0B35',
              letterSpacing: '-0.04em',
            }}>
              Trusted by{' '}
            </span>
            <span style={{
              display: 'inline-block',
              fontSize: 'clamp(24px, 3vw, 42px)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.04em',
              paddingBottom: '4px',
              background: 'linear-gradient(to right, #5829E5 0%, #311882 60%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              500+ Top Brands
            </span>
          </h2>
        </div>

        {/* LOGO ROWS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

          {/* ROW 1 → RIGHT */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #ecd7ff, transparent)' }} />
            <div className="absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #ecd7ff, transparent)' }} />
            <div className="flex w-max gap-14 animate-scroll-right">
              {[...logos, ...logos].map((logo, index) => (
                <Logo key={`row1-${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* ROW 2 → LEFT */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #ecd7ff, transparent)' }} />
            <div className="absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #ecd7ff, transparent)' }} />
            <div className="flex w-max gap-14 animate-scroll-left">
              {[...logos, ...logos].map((logo, index) => (
                <Logo key={`row2-${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 50s linear infinite; }
        .animate-scroll-right { animation: scroll-right 50s linear infinite; }
      `}</style>
    </section>
  );
}

function Logo({ logo }: { logo: { name: string; src: string } }) {
  return (
    <div
      className="flex items-center justify-center min-w-[110px]"
      style={{ opacity: 0.4, transition: 'all 400ms ease', filter: 'grayscale(1) brightness(0.2)' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.opacity = '1';
        (e.currentTarget as HTMLElement).style.filter = 'grayscale(0) brightness(1)';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.opacity = '0.4';
        (e.currentTarget as HTMLElement).style.filter = 'grayscale(1) brightness(0.2)';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
      }}
    >
      <Image src={logo.src} alt={logo.name} width={110} height={40} className="object-contain" />
    </div>
  );
}
