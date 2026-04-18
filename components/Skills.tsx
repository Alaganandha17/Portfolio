"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Languages",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" stroke="var(--accent)" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ["Python", "SQL", "TypeScript", "JavaScript"],
  },
  {
    category: "Core CS",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" stroke="var(--accent)" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    skills: ["Data Structures", "Algorithms", "DBMS", "Problem Solving"],
  },
  {
    category: "Web",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" stroke="var(--accent)" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    skills: ["React", "Next.js", "Flask", "REST APIs", "Tailwind CSS"],
  },
  {
    category: "AI / ML",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" stroke="var(--accent)" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l1.5 3 3.5.5-2.5 2.5.5 3.5L12 10l-3 1.5.5-3.5L7 5.5l3.5-.5z"/>
        <path d="M5 12H3M21 12h-2M12 5V3M12 21v-2"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M6.3 6.3l-1.4-1.4M19.1 4.9l-1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4"/>
      </svg>
    ),
    skills: ["XGBoost", "AST Transformations", "ML Pipelines", "Data Analysis"],
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section anchor-section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <span className="section-label">What I work with</span>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
          Skills
        </h2>

        <div
          ref={ref}
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="card"
              style={{
                padding: "1.75rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                {group.icon}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                  }}
                >
                  {group.category}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience strip */}
        <div className="card" style={{ marginTop: "1rem", padding: "1.75rem" }}>
          <span className="section-label" style={{ marginBottom: "1rem" }}>Experience</span>
          <div
            className="experience-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            {[
              {
                role: "Engineering Intern",
                company: "STEAG Energy Services",
                period: "May – Jun 2025",
                detail: "Analysed manufacturing workflows & identified process inefficiencies.",
              },
              {
                role: "Cost Event — National 1st Place",
                company: "SUPRA SAE India",
                period: "2025",
                detail: "Prepared detailed cost models & technical documentation for engineering prototype.",
              },
            ].map((exp) => (
              <div key={exp.role} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1rem" }}>
                <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{exp.role}</div>
                <div style={{ color: "var(--accent)", fontSize: "0.8rem", marginBottom: "0.25rem" }}>{exp.company}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.75rem", fontFamily: "var(--font-mono)", marginBottom: "0.5rem" }}>{exp.period}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{exp.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .experience-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
