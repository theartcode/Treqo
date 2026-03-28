"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home",       id: "hero" },
  { label: "Why Treqo", id: "why-treqo" },
  { label: "Programs",  id: "programs" },
  { label: "Framework", id: "framework" },
  { label: "Tools",     id: "tools" },
  { label: "FAQ",       id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 40);
      setHidden(current > lastScrollY.current && current > 120);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const offsets = navItems.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };
    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMobileOpen(false);
    }
  };

  const scrolledWrapperStyle: React.CSSProperties = {
    width: "84%",
    margin: "10px auto 0",
    padding: "10px 32px",
    background: "#ffffff",
    borderRadius: "9999px",
    border: "1px solid #ede9fe",
    boxShadow: "0 4px 20px rgba(76,29,149,0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 500ms ease-in-out",
  };

  const topWrapperStyle: React.CSSProperties = {
    maxWidth: "100%",
    padding: "22px 5%",
    background: "#ffffff",
    borderBottom: "1px solid #f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    transition: "all 500ms ease-in-out",
  };

  const NavLinks = ({ fontSize = "13px", gap = 40 }: { fontSize?: string; gap?: number }) => (
    <ul
      className="hidden md:flex items-center"
      style={{ gap, listStyle: "none", margin: 0, padding: 0 }}
    >
      {navItems.map((item) => (
        <li
          key={item.id}
          onClick={() => scrollTo(item.id)}
          style={{ cursor: "pointer" }}
        >
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 800,
              fontSize,
              color: active === item.id ? "#7c3aed" : "#64748b",
              transition: "color 300ms",
              position: "relative",
            }}
          >
            {item.label}
            {active === item.id && (
              <span style={{
                position: "absolute",
                bottom: -6,
                left: "50%",
                transform: "translateX(-50%)",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#7c3aed",
              }} />
            )}
          </span>
        </li>
      ))}
    </ul>
  );

  const MobileToggle = () => (
    <button
      className="md:hidden focus:outline-none"
      style={{
        padding: 8, display: "flex", flexDirection: "column",
        gap: 6, background: "none", border: "none", cursor: "pointer",
      }}
      onClick={() => setMobileOpen(!mobileOpen)}
    >
      <div style={{ width: 24, height: 2, background: "#1e293b", transition: "all 300ms", transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
      <div style={{ width: 24, height: 2, background: "#1e293b", transition: "all 300ms", opacity: mobileOpen ? 0 : 1 }} />
      <div style={{ width: 24, height: 2, background: "#1e293b", transition: "all 300ms", transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
    </button>
  );

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 500ms ease-in-out",
        }}
      >
        {scrolled ? (
          /* ── SCROLLED: slim pill, 8% padding each side ── */
          <div style={scrolledWrapperStyle}>

            {/* LOGO */}
            <span
              onClick={() => scrollTo("hero")}
              style={{
                fontSize: "18px", fontWeight: 900, color: "#5829E5",
                letterSpacing: "-0.02em", cursor: "pointer", flexShrink: 0,
                fontFamily: "'Segoe UI', system-ui, sans-serif",
              }}
            >
              Treqo
            </span>

            {/* NAV */}
            <NavLinks fontSize="11px" gap={28} />

            {/* SPACER to balance logo and keep nav centered */}
            <span style={{ fontSize: "18px", fontWeight: 900, opacity: 0, pointerEvents: "none", flexShrink: 0 }}>
              Treqo
            </span>

            <MobileToggle />
          </div>
        ) : (
          /* ── TOP: full width bar ── */
          <div style={topWrapperStyle}>

            {/* LOGO */}
            <span
              onClick={() => scrollTo("hero")}
              style={{
                fontSize: "22px", fontWeight: 900, color: "#5829E5",
                letterSpacing: "-0.02em", cursor: "pointer", flexShrink: 0,
                fontFamily: "'Segoe UI', system-ui, sans-serif",
              }}
            >
              Treqo
            </span>

            {/* NAV — absolutely centered */}
            <div
              className="hidden md:flex"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <NavLinks fontSize="13px" gap={40} />
            </div>

            {/* SPACER */}
            <span style={{ fontSize: "22px", fontWeight: 900, opacity: 0, pointerEvents: "none", flexShrink: 0 }}>
              Treqo
            </span>

            <MobileToggle />
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "#ffffff",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <span
            style={{
              fontSize: 28, fontWeight: 900, color: "#5829E5",
              marginBottom: 48, cursor: "pointer",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
            onClick={() => scrollTo("hero")}
          >
            Treqo
          </span>
          <ul style={{
            display: "flex", flexDirection: "column", gap: 32,
            textAlign: "center", listStyle: "none", padding: 0, margin: 0,
          }}>
            {navItems.map((item) => (
              <li key={item.id} onClick={() => scrollTo(item.id)} style={{ cursor: "pointer" }}>
                <span style={{
                  fontSize: 28, fontWeight: 700,
                  color: active === item.id ? "#7c3aed" : "#1e293b",
                }}>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}