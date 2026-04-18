import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function naturalSort(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

export default function Activities() {
  const dir = path.join(process.cwd(), "public", "activities");
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => exts.has(path.extname(f).toLowerCase()))
      .sort(naturalSort);
  } catch {
    files = [];
  }

  if (files.length === 0) {
    return (
      <section id="activities" className="section anchor-section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <span className="section-label">Beyond code</span>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Activities
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "2rem", lineHeight: 1.8 }}>
            Events, murals, clubs, making-ofs — a record of things I&apos;ve been part of beyond the screen.
          </p>
          <div
            className="card"
            style={{
              padding: "3rem",
              textAlign: "center",
              color: "var(--muted)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>📸</div>
            <p>
              Drop activity photos in{" "}
              <code
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--surface-2)",
                  padding: "0.1rem 0.4rem",
                  borderRadius: "4px",
                  color: "var(--accent)",
                }}
              >
                /public/activities/
              </code>{" "}
              as{" "}
              <code
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--surface-2)",
                  padding: "0.1rem 0.4rem",
                  borderRadius: "4px",
                  color: "var(--accent)",
                }}
              >
                activity1.jpg, activity2.jpg
              </code>{" "}
              etc.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="activities" className="section anchor-section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <span className="section-label">Beyond code</span>
        <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
          Activities
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "2.5rem", lineHeight: 1.8 }}>
          Events, murals, clubs, making-ofs — a record of things I&apos;ve been part of beyond the screen.
        </p>

        <div className="masonry activities-masonry">
          {files.map((f) => (
            <figure
              key={f}
              className="masonry-item activity-item"
              style={{
                marginBottom: "0.5rem",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/activities/${f}`}
                alt={f.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease",
                }}
              />
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .activity-item img:hover {
          transform: scale(1.04);
          cursor: zoom-in;
        }
        @media (max-width: 639px) {
          .activities-masonry {
            columns: 2;
            column-gap: 0.5rem;
          }
        }
        @media (min-width: 640px) {
          .activities-masonry {
            columns: 3;
            column-gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
