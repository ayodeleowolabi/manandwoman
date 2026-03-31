"use client";

import { useEffect } from "react";
import Link from "next/link";
import "@/styles/about.css";

export default function AboutPage() {

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    els.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }, []);

  return (
    <div className="about-page">

      <nav className="about-nav">
        <Link href="/" className="about-nav-logo">M&W</Link>
        <div className="about-nav-links">
          <Link href="/">Home</Link>
          <Link href="/video">Watch</Link>
          <Link href="/about" className="active">
            About
          </Link>
          <Link href="/tour" className="active">
            Tour
          </Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="about-hero">
        <p className="about-eyebrow fade-up">Reimagined, Classic Duets of our time</p>
      </section>

      <section className="about-body">

        <aside className="about-sidebar fade-up">
          <p className="about-sidebar-label">The Artists</p>
          <div className="about-sidebar-names">
            <span>iothesinger</span>
            <span className="amp">&</span>
            <span>Jean-Francis Varre</span>
          </div>

          <div className="about-venues">
            <p className="about-sidebar-label" style={{ marginTop: "2rem" }}>Stages</p>
            <span className="about-venue-item">Kennedy Center</span>
            <span className="about-venue-item">The Apollo</span>
            <span className="about-venue-item">The Smithsonian</span>
            <span className="about-venue-item">The Ned Club</span>
            <span className="about-venue-item">Spain · Portugal</span>
            <span className="about-venue-item">Brazil · London</span>
          </div>
        </aside>

        <div className="about-content">
          <div className="about-body-text">
            <p className="fade-up">
              <strong>Man and Woman</strong> is a live duet performance act built
              for people who believe music should move you. Fronted by{" "}
              <strong>IOtheSinger</strong> and <strong>Jean-Francis Varre</strong> two
              artists who have each commanded stages at the Kennedy Center, the
              Apollo, the Smithsonian, the Ned Club, and across Spain, Portugal,
              Brazil, and London.
            </p>

            <p className="fade-up">
              Together, they bring something neither could do alone: the push and
              pull of two distinct voices finding each other mid-song, locking in
              on a chorus, then drifting into something you didn&apos;t expect. Soul,
              jazz, Latin grooves, classic pop duets, soft rock the set moves across
              genres the way a great conversation moves across decades. Naturally.
              Without effort.
            </p>

            <p className="fade-up">
              The repertoire is deliberately iconic; songs people carry in their
              bodies before the first note lands. From{" "}
             <strong>Ain&apos;t No Mountain High Enough</strong> to{" "}
             <strong>Die With a Smile</strong>. from {" "}
              <strong>Waters of March</strong>, to{" "}
               <strong>Islands in the Stream</strong> {" "}, every song is chosen for
              emotional weight and then stripped back, rebuilt, and delivered with
              full presence.
            </p>

            <div className="genre-row fade-up">
              <span className="genre-tag">Soul</span>
              <span className="genre-tag">Jazz</span>
              <span className="genre-tag">Latin</span>
              <span className="genre-tag">Classic Pop</span>
              <span className="genre-tag">Soft Rock</span>
              <span className="genre-tag">Live Duet</span>
            </div>
          </div>
        </div>

      </section>

      <footer className="about-closing">

        <a href="#" className="about-closing-cta fade-up">
          View Dates →
        </a>
      </footer>

    </div>
  );
}