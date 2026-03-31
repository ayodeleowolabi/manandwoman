"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import "@/styles/video.css";

const BASE = "https://customer-bhx35sxtf94ncmdm.cloudflarestream.com";

const videos = [
  {
    id: "f13c067a295f0754330b7d2867e4db5a",
    title: "Change the World",
    subtitle: "Eric Clapton & Babyface",
    location: "Artechouse, Washington DC",
    orientation: "horizontal" as const,
    comingSoon: false,
  },
  {
    id: "328efa60e80b473cdea3574b5c939e94",
    title: "A Little Bit of Everything",
    subtitle: "",
    location: "Artechouse, Washington DC",
    orientation: "vertical" as const,
    comingSoon: false,
  },
];

export default function VideoPage() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(videos.length - 1, c + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    if (isMobile) return; // let mobile scroll naturally
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (isMobile || touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
  };

  const embedUrl = (id: string) => {
    const poster = encodeURIComponent(
      `${BASE}/${id}/thumbnails/thumbnail.jpg?time=&height=600`
    );
    return `${BASE}/${id}/iframe?poster=${poster}`;
  };

  return (
    <div className="video-page">

      {/* Nav */}
      <nav className="video-nav">
        <Link href="/" className="video-nav-logo">M&W</Link>
        <div className="video-nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tour">Tour</Link>
          <a href="#" className="active">Watch</a>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* Carousel (desktop) / Scroll stack (mobile) */}
      <section className="carousel-section">
        <div
          className="carousel-track-wrap"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}vw)` }}
          >
            {videos.map((v, i) => (
              <div className="carousel-slide" key={i}>
                <div className={`slide-video-wrap ${v.orientation}`}>
                  <div className={`aspect-box ${v.orientation}`}>
                    {v.comingSoon ? (
                      <div className="coming-soon-box">
                        <div className="coming-soon-rule" />
                        <span className="coming-soon-label">Coming Soon</span>
                        <div className="coming-soon-rule" />
                      </div>
                    ) : (
                      <iframe
                        src={embedUrl(v.id)}
                        loading="lazy"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>

                <div className="slide-meta">
                  <div className="slide-meta-left">
                    <span className="slide-counter">
                      {String(i + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
                    </span>
                    <span className="slide-title">{v.title}</span>
                    {v.subtitle && (
                      <span className="slide-subtitle">{v.subtitle}</span>
                    )}
                  </div>
                  {v.location && (
                    <span className="slide-tag">{v.location}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls — hidden on mobile via CSS */}
        <div className="carousel-controls">
          <button
            className="carousel-btn"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
          >
            ←
          </button>
          <div className="carousel-dots">
            {videos.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="carousel-btn"
            onClick={next}
            disabled={current === videos.length - 1}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
}