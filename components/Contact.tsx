"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const text = `New portfolio enquiry from ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`;
    const url = `https://wa.me/917907612679?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="section anchor-section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <span className="section-label">Get in touch</span>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left — copy */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Let&apos;s<br />
              <em style={{ color: "var(--accent)" }}>connect</em>
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
              Whether it&apos;s a project, an opportunity, or just a conversation — I&apos;m
              always up for it. Drop me a message and I&apos;ll get back to you.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Email", value: "alaganandhapradeep17@gmail.com", href: "mailto:alaganandhapradeep17@gmail.com" },
                { label: "Phone", value: "+91 7907612679", href: "tel:+917907612679" },
                { label: "Location", value: "Kochi, Kerala, India", href: null },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--accent)",
                      letterSpacing: "0.1em",
                      minWidth: "60px",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
              <a
                href="https://github.com/Alaganandha17"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/alaganandha-pradeep"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form
            className="card contact-form-card"
            style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            onSubmit={onSubmit}
          >
            <input
              style={{
                width: "100%",
                borderRadius: "10px",
                background: "transparent",
                border: "1px solid var(--border)",
                padding: "0.85rem 1rem",
                fontSize: "0.875rem",
                color: "var(--text)",
                outline: "none",
                fontFamily: "var(--font-body)",
                transition: "border-color 0.2s",
                minHeight: "48px",
              }}
              placeholder="Your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
            <input
              style={{
                width: "100%",
                borderRadius: "10px",
                background: "transparent",
                border: "1px solid var(--border)",
                padding: "0.85rem 1rem",
                fontSize: "0.875rem",
                color: "var(--text)",
                outline: "none",
                fontFamily: "var(--font-body)",
                transition: "border-color 0.2s",
                minHeight: "48px",
              }}
              placeholder="Email address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
            <textarea
              style={{
                width: "100%",
                borderRadius: "10px",
                background: "transparent",
                border: "1px solid var(--border)",
                padding: "0.85rem 1rem",
                fontSize: "0.875rem",
                color: "var(--text)",
                outline: "none",
                fontFamily: "var(--font-body)",
                minHeight: "130px",
                resize: "vertical",
                transition: "border-color 0.2s",
              }}
              placeholder="Your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={status === "sending"}
                style={{ opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? "Opening…" : "Send message →"}
              </button>
              {status === "sent" && (
                <p style={{ fontSize: "0.85rem", color: "var(--accent)" }}>
                  ✓ Opening WhatsApp — your message is ready to send!
                </p>
              )}
              {status === "error" && (
                <p style={{ fontSize: "0.85rem", color: "#f87171" }}>
                  Something went wrong. Try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .contact-form-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
