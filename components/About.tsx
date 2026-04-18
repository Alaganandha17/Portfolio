"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "1st", label: "Cost Event — National" },
  { value: "600+", label: "Students Led" },
  { value: "ICTIS", label: "Conference Paper" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section anchor-section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div
          ref={ref}
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Left */}
          <div>
            <span className="section-label">About me</span>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Builder &<br />
              <em style={{ color: "var(--accent)" }}>Creative</em>
            </h2>

            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
              I specialise in building reliable, scalable backend systems and ML pipelines. My work ranges from AST-based code optimisation tools to full-stack event recommendation platforms — always with a focus on measurable performance.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
              I led 600+ students as House Captain and co-captained our house to 1st place at the Annual Arts Fest. I was Deco Head for Abhiyanthriki 2025 and serve as Placement Representative for my cohort.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Art has been part of me since before code was. Drawing, murals, people — that&apos;s the other half. Let&apos;s build something worthwhile.
            </p>
          </div>

          {/* Right — stats grid */}
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="card"
                  style={{
                    padding: "1.5rem",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.2rem",
                      fontWeight: 900,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--muted)",
                      marginTop: "0.4rem",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education timeline */}
            <div className="card about-edu-card" style={{ padding: "1.5rem" }}>
              <span className="section-label" style={{ marginBottom: "1rem" }}>Education</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    school: "RSET, Kochi",
                    degree: "B.Tech AI & Data Science",
                    year: "2022 – Present",
                    note: "CGPA 7.83",
                  },
                  {
                    school: "Al-Alia Int'l School",
                    degree: "Senior Secondary (CBSE)",
                    year: "2019 – 2021",
                    note: "80%",
                  },
                  {
                    school: "Al-Alia Int'l School",
                    degree: "Secondary School (CBSE)",
                    year: "2017 – 2019",
                    note: "92.6%",
                  },
                ].map((e) => (
                  <div
                    key={e.year}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingBottom: "0.75rem",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 500, fontSize: "0.9rem" }}>{e.school}</div>
                      <div style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{e.degree}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)" }}>{e.year}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--accent)" }}>{e.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-edu-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
