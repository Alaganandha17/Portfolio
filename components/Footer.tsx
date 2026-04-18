"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 0",
        background: "var(--bg)",
      }}
    >
      <div
        className="container footer-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--accent)",
          }}
        >
          Alaganandha Pradeep
        </span>

        

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: "https://github.com/Alaganandha17" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/alaganandha-pradeep" },
            { label: "Email", href: "mailto:alaganandhapradeep17@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
