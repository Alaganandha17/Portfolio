"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Art" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(8,12,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-display), serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--accent)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          AP
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: "2rem" }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/Alaganandha_Pradeep_Resume.pdf"
          className="btn btn-primary hidden md:inline-flex"
          style={{ fontSize: "0.8rem", padding: "0.45rem 1.1rem" }}
          download
        >
          Resume ↓
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", fontSize: "1.4rem" }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--bg-2)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                minHeight: "48px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ paddingTop: "1rem" }}>
            <a href="/Alaganandha_Pradeep_Resume.pdf" className="btn btn-primary" download>
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
