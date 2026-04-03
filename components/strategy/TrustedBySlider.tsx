"use client";

import { Sparkles } from "lucide-react";

const logos = [
  { name: "FedEx", src: "/Logo/Ai_1.png" },
  { name: "Flipkart", src: "/Logo/Canva_1.png" },
  { name: "Google", src: "/Logo/eBay_1.png" },
  { name: "Netflix", src: "/Logo/Netflix_1.png" },
  { name: "LinkedIn", src: "/Logo/Flipkart_1.png" },
  { name: "Adobe", src: "/Logo/Google_1.png" },
  { name: "UPI", src: "/Logo/Gpay_1.png" },
  { name: "Canva", src: "/Logo/LinkdIn_1.png" },
  { name: "Nescafe", src: "/Logo/Nescafe_1.png" },
  { name: "Google Pay", src: "/Logo/Netflix_1.png" },
  { name: "eBay", src: "/Logo/UPI_1.png" },
];

export function TrustedBySlider() {
  return (
    <section
      className="overflow-hidden relative"
      style={{
        background: "#ecd7ff",
        padding: "0 0 60px",
        marginTop: 0,
      }}
    >
      {/* Background lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.1 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, #7C3AED 39px, #7C3AED 40px)",
          }}
        />
      </div>

      <div className="w-full px-[5%] relative z-10">

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "40px", paddingTop: "32px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "white",
              border: "1px solid rgba(88,41,229,0.1)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            <Sparkles size={11} color="#5829E5" />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 800,
                color: "#5829E5",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Global Recognition
            </span>
          </div>

          <h2 style={{ margin: 0, lineHeight: 1.05 }}>
            <span
              style={{
                fontSize: "clamp(24px, 3vw, 42px)",
                fontWeight: 900,
                color: "#1A0B35",
                letterSpacing: "-0.04em",
              }}
            >
              Trusted by{" "}
            </span>
           <span
  style={{
    fontSize: "clamp(24px, 3vw, 42px)",
    fontWeight: 900,
    fontStyle: "italic",
    letterSpacing: "-0.04em",

    backgroundImage: "linear-gradient(to right, #5829E5 0%, #311882 60%, #7C3AED 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  }}
>
              500+ Top Brands
            </span>
          </h2>
        </div>

        {/* LOGO ROWS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>

          {/* ROW 1 */}
          <div className="relative overflow-hidden">
            <Fade />
            <div className="flex w-max gap-20 animate-scroll-right items-center">
              {[...logos, ...logos].map((logo, i) => (
                <Logo key={`r1-${i}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="relative overflow-hidden">
            <Fade />
            <div className="flex w-max gap-20 animate-scroll-left items-center">
              {[...logos, ...logos].map((logo, i) => (
                <Logo key={`r2-${i}`} logo={logo} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* FADE EDGES */
function Fade() {
  return (
    <>
      <div
        className="absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: "linear-gradient(to right, #ecd7ff, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: "linear-gradient(to left, #ecd7ff, transparent)" }}
      />
    </>
  );
}

/* LOGO */
function Logo({ logo }: { logo: { name: string; src: string } }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.85,
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "scale(1.1)";
        el.style.filter = "drop-shadow(0 6px 16px rgba(88,41,229,0.25))";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.opacity = "0.85";
        el.style.transform = "scale(1)";
        el.style.filter = "none";
      }}
    >
      <img
        src={logo.src}
        alt={logo.name}
        style={{
          height: "48px",
          width: "120px",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}