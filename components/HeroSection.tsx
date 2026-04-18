"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const imageScale = Math.max(0.85, 1 - scrollY * 0.0003);
  const imageOpacity = Math.max(0, 1 - scrollY * 0.002);
  const textY = scrollY * 0.3;

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "1fr",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Background grid lines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.4,
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,201,126,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
          paddingTop: "100px",
          paddingBottom: "4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT — Typography */}
        <div
          className="hero-text-col"
          style={{ transform: `translateY(${textY * 0.5}px)`, order: 2 }}
        >
          <span className="section-label">Portfolio — 2026</span>

          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            Alaganandha
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Pradeep
            </em>
          </h1>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "clamp(0.875rem, 2.2vw, 1rem)",
              lineHeight: 1.7,
              maxWidth: "380px",
              marginBottom: "2rem",
            }}
          >
            Final-year B.Tech student in AI &amp; Data Science at RSET, Kochi. I
            build end-to-end systems — from ML pipelines to polished frontends —
            and ship things I&apos;m proud of.
          </p>

          <div
            className="hero-cta-row"
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Say hello
            </a>
          </div>

          {/* Social row */}
          <div
            className="hero-social-row"
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <a
              href="https://github.com/Alaganandha17"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/alaganandha-pradeep"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:alaganandhapradeep17@gmail.com"
              style={{
                color: "var(--muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* RIGHT — Photo + magazine decorations */}
        <div
          className="hero-photo-col"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            transform: `scale(${imageScale})`,
            transformOrigin: "center center",
            opacity: imageOpacity,
            transition: "transform 0.05s linear, opacity 0.05s linear",
            order: 1,
          }}
        >
          {/* Decorative accent rings */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              border: "1px solid rgba(232,201,126,0.2)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "1px dashed rgba(232,201,126,0.1)",
              pointerEvents: "none",
            }}
          />

          {/* Photo card */}
          <div
            className="hero-photo-card"
            style={{
              width: "280px",
              height: "360px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              position: "relative",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/me.jpg"
              alt="Alaganandha Pradeep"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                const parent = el.parentElement;
                if (parent) {
                  parent.style.display = "flex";
                  parent.style.alignItems = "center";
                  parent.style.justifyContent = "center";
                  parent.innerHTML =
                    '<span style="font-family:var(--font-display);font-size:4rem;color:var(--accent);opacity:0.4">AP</span>';
                }
              }}
            />
          </div>

          {/* Floating location label */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "0px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "0.6rem 1rem",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "var(--accent)",
              letterSpacing: "0.05em",
            }}
          >
            Kochi, Kerala 📍
          </div>

          {/* Floating CGPA badge */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "-10px",
              background: "var(--accent)",
              color: "#000",
              borderRadius: "8px",
              padding: "0.5rem 0.9rem",
              fontSize: "0.7rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 500,
              letterSpacing: "0.05em",
              transform: "rotate(-3deg)",
            }}
          >
            Artist and Engineer
          </div>
        </div>
      </div>

      
      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* Mobile: single column, photo on top */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-photo-col {
            order: 1 !important;
            margin-bottom: 1.5rem;
          }
          .hero-text-col {
            order: 2 !important;
          }
          .hero-photo-card {
            width: 200px !important;
            height: 260px !important;
          }
          .hero-cta-row {
            justify-content: center;
          }
          .hero-social-row {
            justify-content: center;
          }
          .hero-text-col p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
