import fs from "fs";
import path from "path";
import AutoVideo from "./AutoVideo";

export const runtime = "nodejs";

const exts = new Set([".mp4", ".webm", ".ogg"]);

function naturalSort(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

const videoMeta: Record<string, { title: string; description: string }> = {
  "vid1.mp4": { title: "Grafiti", description: "Attended an intercollege techfest Nakshatra and won 3rd prize for a painting competiton with over 20 participants." },
  "vid2.mp4": { title: "SUPRA", description: "At the SUPRA event conducted by SAE India for which we won 1st prize in the cost event." },
  "vid3.mp4": { title: "Life Size Lenticular Painting", description: "Created when i was elected as Co Captain of the winning team and deco head for the arts fest in college." },
  "vid4.mp4": { title: "Working late nights as deco head", description: "During my third year of college when i was deco head as well as the co captain of the winning team." },
  "vid5.mp4": { title: "SUPRA", description: "Offloading our student formula vehicle at Delhi." },
  "vid6.mp4": { title: "Deco Work", description: "Making of the Lize size Lenticular painting with team." },
  "vid7.mp4": { title: "Deco Work", description: "Workshop session for creating the team banner." },
  "vid8.mp4": { title: "3D Horse made out of paper", description: "Made whilst being the deco head in 2nd year during college arts fest." },
  "vid9.mp4": { title: "Tree Painting", description: "Designed and painted by me and my team during the college arts fest." },
};

export default function VideoGallery() {
  const dir = path.join(process.cwd(), "public", "videos");
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
      <section id="videos" className="section anchor-section">
        <div className="container">
          <span className="section-label">Motion work</span>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Videos
          </h2>
          <div
            className="card"
            style={{
              padding: "3rem",
              textAlign: "center",
              color: "var(--muted)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🎬</div>
            <p>
              Drop videos in{" "}
              <code
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--surface-2)",
                  padding: "0.1rem 0.4rem",
                  borderRadius: "4px",
                  color: "var(--accent)",
                }}
              >
                /public/videos/
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
                vid1.mp4, vid2.mp4
              </code>{" "}
              etc. They&apos;ll autoplay on scroll.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="section anchor-section">
      <div className="container">
        <span className="section-label">Motion work</span>
        <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
          Videos
        </h2>
        <p className="section-sub" style={{ marginBottom: "2.5rem" }}>
          Featured clips &amp; time-lapses
        </p>

        <div className="masonry video-masonry">
          {files.map((f) => {
            const meta = videoMeta[f] ?? { title: f, description: "" };
            return (
              <figure
                key={f}
                className="masonry-item"
                style={{
                  marginBottom: "1rem",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <AutoVideo src={`/videos/${f}`} />
                <figcaption
                  style={{
                    padding: "0.75rem 1rem",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text)",
                      fontWeight: 500,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {meta.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                    }}
                  >
                    {meta.description}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 639px) {
          .video-masonry {
            columns: 1;
          }
        }
        @media (min-width: 640px) and (max-width: 899px) {
          .video-masonry {
            columns: 2;
          }
        }
        @media (min-width: 900px) {
          .video-masonry {
            columns: 3;
          }
        }
      `}</style>
    </section>
  );
}
