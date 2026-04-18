"use client";

import { useState } from "react";

export default function ArtGalleryClient({ files }: { files: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function openLightbox(i: number) {
    setLightboxIndex(i);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prev() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + files.length) % files.length);
  }

  function next() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % files.length);
  }

  return (
    <>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.8rem",
              cursor: "pointer",
              lineHeight: 1,
              zIndex: 10000,
            }}
          >
            ✕
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute",
              left: "1rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              borderRadius: "8px",
              padding: "0.5rem 0.9rem",
              zIndex: 10000,
            }}
          >
            ←
          </button>

          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/art/${files[lightboxIndex]}`}
            alt={files[lightboxIndex]}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 0 60px rgba(0,0,0,0.8)",
            }}
          />

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute",
              right: "1rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              borderRadius: "8px",
              padding: "0.5rem 0.9rem",
              zIndex: 10000,
            }}
          >
            →
          </button>
        </div>
      )}

      {/* Masonry grid */}
      <div className="masonry art-masonry">
        {files.map((f, i) => (
          <figure
            key={f}
            className="masonry-item art-item"
            onClick={() => openLightbox(i)}
            style={{
              marginBottom: "0.5rem",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              cursor: "zoom-in",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/art/${f}`}
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

      <style>{`
        .art-item img:hover {
          transform: scale(1.04);
        }
        @media (max-width: 639px) {
          .art-masonry { columns: 2; column-gap: 0.5rem; }
        }
        @media (min-width: 640px) {
          .art-masonry { columns: 3; column-gap: 0.5rem; }
        }
      `}</style>
    </>
  );
}
