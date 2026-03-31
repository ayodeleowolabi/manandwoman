"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/tour.css";

const shows = [
  {
    month: "April",
    day: "03",
    venue: "Ned's Club",
    time: null,
    badge: "Private Event",
    badgeType: "private",
  },
  {
    month: "April",
    day: "04",
    venue: "The Alex, Speakeasy DC",
    time: null,
    badge: "Free",
    badgeType: "free",
  },
  {
    month: "April",
    day: "05",
    venue: "St. Vincent Winery",
    time: null,
    badge: "Free",
    badgeType: "free",
  },
  {
    month: "April",
    day: "10",
    venue: "The Alex, Speakeasy DC",
    time: null,
    badge: "Free",
    badgeType: "free",
  },
  {
    month: "April",
    day: "18",
    venue: "The Ned",
    time: null,
    badge: "Private Event",
    badgeType: "private",
  },
];

export default function TourPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="tour-page">

      {/* Nav */}
      <nav className="tour-nav">
        <Link href="/" className="tour-nav-logo">M&W</Link>

        {/* Desktop links */}
        <div className="tour-nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/video">Watch</Link>
          <a href="#" className="active">Tour</a>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`tour-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`tour-mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="tour-mobile-nav">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/video" onClick={() => setMenuOpen(false)}>Watch</Link>
          <Link href="/tour" onClick={() => setMenuOpen(false)}>Tour</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Hero */}
      <section className="tour-hero">
        <p className="tour-eyebrow">Live Dates — 2026</p>
      </section>

      {/* Show list */}
      <section className="tour-list">
        {shows.map((show, i) => (
          <div className="tour-date-row" key={i}>
            <div className="tour-date">
              <span className="tour-date-month">{show.month}</span>
              <span className="tour-date-day">{show.day}</span>
            </div>

            <div className="tour-venue">
              <span className="tour-venue-name">{show.venue}</span>
              <div className="tour-venue-meta">
                {show.time && (
                  <span className="tour-venue-time">{show.time}</span>
                )}
                <span className={`tour-badge ${show.badgeType}`}>
                  {show.badge}
                </span>
              </div>
            </div>

            <div className="tour-action">
              {show.badgeType === "free" ? "Free Entry" : "By Invitation"}
            </div>
          </div>
        ))}
      </section>

      {/* Closing */}
      <footer className="tour-closing">
        <p className="tour-closing-text">
          Want us at your event?<br />
        </p>
        <Link href="/contact" className="tour-closing-link">
          Get in Touch →
        </Link>
      </footer>

    </div>
  );
}