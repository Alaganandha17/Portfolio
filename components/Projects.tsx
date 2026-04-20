"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "CodeForge",
    subtitle: "AI Code Optimizer",
    year: "2025",
    description:
      "AST-based Python code optimisation tool with rule-based rewriting and safety guards. Achieves up to 2× runtime improvement. Research accepted at ICTIS 2026 (Paper #859).",
    tech: ["Python", "AST", "APIs"],
    highlight: "2× runtime boost",
    color: "var(--accent)",
    big: true,
    ictis: true,
    github: "https://github.com/Alaganandha17/CodeForge",
    demo: "https://codeforge-25.streamlit.app/Dashboard",
  },
  {
    title: "AIgenda",
    subtitle: "Event Recommendation System",
    year: "2024",
    description:
      "Full-stack platform recommending event plans based on budget and preferences. REST APIs deliver ranked results in real-time via ML models.",
    tech: ["React", "Flask", "XGBoost"],
    highlight: "Real-time ML",
    color: "var(--accent-2)",
    big: false,
    ictis: false,
    github: "https://github.com/Alaganandha17/AI-Genda",
    demo: "https://aigenda17.netlify.app/",
  },
  {
    title: "E-Commerce Backend",
    subtitle: "Production REST API",
    year: "2025",
    description:
      "Scalable backend with auth, product listing, cart and order management. Efficient DB queries and clean architecture.",
    tech: ["Node.js", "Flask", "SQL"],
    highlight: "Full CRUD",
    color: "#a78bfa",
    big: false,
    ictis: false,
    github: "",
    demo: "",
  },
  {
    title: "URL Shortener",
    subtitle: "High-performance Service",
    year: "2025",
    description:
      "Hashing-based URL shortener with database indexing. Constant-time O(1) redirection with optimized lookup logic.",
    tech: ["Python", "Hashing", "SQL"],
    highlight: "O(1) lookup",
    color: "#34d399",
    big: false,
    ictis: false,
    github: "",
    demo: "",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function ProjectCard({
  project,
  delay,
  inView,
}: {
  project: (typeof projects)[0];
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface-2)" : "var(--surface)",
        border: `1px solid ${hovered ? project.color + "44" : "var(--border)"}`,
        borderRadius: "16px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        cursor: "default",
        transition: "all 0.3s ease",
        transform: inView
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(30px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}s`,
        boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.4)` : "none",
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      {/* Accent corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "80px",
          height: "80px",
          background: `radial-gradient(circle at top right, ${project.color}18, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: project.color,
            letterSpacing: "0.1em",
            background: project.color + "18",
            padding: "0.2rem 0.6rem",
            borderRadius: "4px",
          }}
        >
          {project.highlight}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--muted)",
          }}
        >
          {project.year}
        </span>
      </div>

      <div>
        <h3
          className={project.big ? "project-title-big" : "project-title-small"}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: project.big ? "1.8rem" : "1.3rem",
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>
        <p style={{ color: project.color, fontSize: "0.8rem", marginTop: "0.2rem", fontWeight: 500 }}>
          {project.subtitle}
        </p>

        {/* ICTIS badge */}
        {project.ictis && (
          <span
            style={{
              display: "inline-block",
              marginTop: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              color: "var(--accent)",
              background: "rgba(232,201,126,0.12)",
              border: "1px solid rgba(232,201,126,0.3)",
              borderRadius: "4px",
              padding: "0.2rem 0.55rem",
            }}
          >
            ICTIS 2026 — Accepted
          </span>
        )}
      </div>

      <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.25rem" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ fontSize: "0.75rem", padding: "0.4rem 0.9rem" }}
          >
            GitHub ↗
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ fontSize: "0.75rem", padding: "0.4rem 0.9rem" }}
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="section anchor-section">
      <div className="container">
        <span className="section-label">What I&apos;ve built</span>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem" }}>
          <h2 className="section-title">Projects</h2>
          <span style={{ color: "var(--muted)", fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
            {projects.length} total
          </span>
        </div>

        {/* Bento grid */}
        <div
          ref={ref}
          className="projects-bento"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1rem",
          }}
        >
          <div className="project-big-col" style={{ gridColumn: "1 / 3" }}>
            <ProjectCard project={projects[0]} delay={0} inView={inView} />
          </div>

          <div>
            <ProjectCard project={projects[1]} delay={0.1} inView={inView} />
          </div>

          <div>
            <ProjectCard project={projects[2]} delay={0.15} inView={inView} />
          </div>
          <div className="project-last-col" style={{ gridColumn: "2 / 4" }}>
            <ProjectCard project={projects[3]} delay={0.2} inView={inView} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-bento {
            grid-template-columns: 1fr !important;
          }
          .project-big-col,
          .project-last-col {
            grid-column: auto !important;
          }
          .project-title-big {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
