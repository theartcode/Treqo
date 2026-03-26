"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  "Home",
  "About",
  "Team",
  "Services",
  "Portfolio",
  "Testimonials",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("Home");
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

  const scrolledWrapperStyle: React.CSSProperties = {
    maxWidth: "60%",
    margin: "14px auto 0",
    padding: "14px 20px",
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
    transition: "all 500ms ease-in-out",
  };

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
        <div style={scrolled ? scrolledWrapperStyle : topWrapperStyle}>
          {/* LOGO */}
          <span
            style={{
              fontSize: scrolled ? "20px" : "22px",
              fontWeight: 900,
              color: "#5829E5",
              letterSpacing: "-0.02em",
              transition: "font-size 0.3s",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
          >
            Treqo
          </span>

          {/* DESKTOP NAV */}
          <ul
            className="hidden md:flex items-center"
            style={{ gap: scrolled ? 32 : 40, listStyle: "none", margin: 0, padding: 0 }}
          >
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className="relative group"
                style={{ cursor: "pointer" }}
              >
                <span
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 800,
                    fontSize: scrolled ? "12px" : "13px",
                    color: active === item ? "#7c3aed" : "#64748b",
                    transition: "color 300ms",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden focus:outline-none"
            style={{ padding: 8, display: "flex", flexDirection: "column", gap: 6, background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div style={{ width: 24, height: 2, background: "#1e293b", transition: "all 300ms", transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
            <div style={{ width: 24, height: 2, background: "#1e293b", transition: "all 300ms", opacity: mobileOpen ? 0 : 1 }} />
            <div style={{ width: 24, height: 2, background: "#1e293b", transition: "all 300ms", transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: 32, textAlign: "center", listStyle: "none", padding: 0, margin: 0 }}>
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setMobileOpen(false);
                }}
                style={{ cursor: "pointer" }}
              >
                <span style={{ fontSize: 28, fontWeight: 700, color: active === item ? "#7c3aed" : "#1e293b" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
