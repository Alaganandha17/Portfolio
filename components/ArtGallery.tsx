import fs from "fs";
import path from "path";
import ArtGalleryClient from "./ArtGalleryClient";

export const runtime = "nodejs";

const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function naturalSort(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

export default function ArtGallery() {
  const dir = path.join(process.cwd(), "public", "art");
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => exts.has(path.extname(f).toLowerCase()))
      .sort(naturalSort);
  } catch {
    files = [];
  }

  return (
    <section id="gallery" className="section anchor-section">
      <div className="container">
        <span className="section-label">Creative work</span>
        <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
          Art &amp; Gallery
        </h2>

        <div
          style={{
            color: "var(--muted)",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            fontSize: "0.95rem",
          }}
        >
          <p>
            I&apos;ve been drawing since I could hold a pencil. Art and people are
            what draw me — conversations inspire me, and creating art grounds me.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Go through these pictures and form your own understanding of me.{" "}
            <strong style={{ color: "var(--text)" }}>And let&apos;s connect if you like what you see.</strong>
          </p>
        </div>

        {files.length === 0 ? (
          <div
            className="card"
            style={{
              padding: "3rem",
              textAlign: "center",
              color: "var(--muted)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🎨</div>
            <p>
              Drop your art images in{" "}
              <code
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--surface-2)",
                  padding: "0.1rem 0.4rem",
                  borderRadius: "4px",
                  color: "var(--accent)",
                }}
              >
                /public/art/
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
                art1.jpg, art2.png
              </code>{" "}
              etc. They&apos;ll appear here automatically.
            </p>
          </div>
        ) : (
          <ArtGalleryClient files={files} />
        )}
      </div>
    </section>
  );
}
