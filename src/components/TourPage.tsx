"use client";

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
    day: "05",
    venue: "St. Vincent Winery",
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
  return (
    <div className="tour-page">

      {/* ── Nav ── */}
      <nav className="tour-nav">
        <Link href="/" className="tour-nav-logo">M&W</Link>
        <div className="tour-nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <a href="#" className="active">Tour</a>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="tour-hero">
        <p className="tour-eyebrow">Live Dates — 2026</p>
        
      </section>

      {/* ── Show list ── */}
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

      {/* ── Closing ── */}
      <footer className="tour-closing">
        <p className="tour-closing-text">
          Want us at your event?<br />
          <em>Let&apos;s make it happen.</em>
        </p>
        <Link href="/contact" className="tour-closing-link">
          Get in Touch →
        </Link>
      </footer>

    </div>
  );
}
