"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "@/styles/hero.css";

export default function ManAndWomanHero() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mw-root">
      <img
        ref={imgRef}
        src="/images/man-and-woman.png"
        alt="Man & Woman"
        className={`hero-photo ${loaded ? "visible" : ""}`}
      />

      <div className="vignette" />
      <div className="hr-accent hr-top" />
      <div className="hr-accent hr-bottom" />

      <header className={`header ${loaded ? "visible" : ""}`}>
        {/* Desktop nav */}
        <nav className="header-nav desktop-nav">
          <Link href="/music">Music</Link>
          <Link href="/tour">Tour</Link>
          <Link href="/about">About</Link>
          <Link href="/video">Watch</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile menu overlay — all 5 links, all with hrefs */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <Link href="/music" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link href="/tour" onClick={() => setMenuOpen(false)}>Tour</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/video" onClick={() => setMenuOpen(false)}>Watch</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      <div className="title-block">
        <h1 className={`title-main ${loaded ? "visible" : ""}`}>
          MAN <em>&</em> WOMAN
        </h1>
      </div>

      <div className={`scroll-indicator ${loaded ? "visible" : ""}`}>
        <div className="scroll-line" />
      </div>
    </div>
  );
}