"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/contact.css";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">

      {/* Nav */}
      <nav className="contact-nav">
        <Link href="/" className="contact-nav-logo">M&W</Link>

        {/* Desktop links */}
        <div className="contact-nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/video">Watch</Link>
          <Link href="/tour">Tour</Link>
          <a href="#" className="active">Contact</a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`contact-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`contact-mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="contact-mobile-nav">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/video" onClick={() => setMenuOpen(false)}>Watch</Link>
          <Link href="/tour" onClick={() => setMenuOpen(false)}>Tour</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      <section className="contact-hero">
        <p className="contact-eyebrow">Get in Touch</p>
        <h1 className="contact-headline">
          Book the act.<br />
          <em>Start the conversation.</em>
        </h1>
      </section>

      <div className="contact-body">

        <aside className="contact-sidebar">
          <p className="contact-sidebar-label">Bookings & Inquiries</p>

          <div className="contact-info-item">
            <p>For bookings, press, and general inquiries:</p>
            <a href="mailto:manandwomanduets@gmail.com">
              manandwomanduets@gmail.com
            </a>
          </div>

          <div className="contact-info-item">
            <p className="contact-sidebar-label" style={{ marginBottom: "0.5rem" }}>
              Available For
            </p>
            <p>Private Events<br />
            Corporate Engagements<br />
            Festival Appearances<br />
            Residencies<br />
            International Tours</p>
          </div>
        </aside>

        <div className="contact-form-wrap">
          <div className="contact-form">

            <div className="form-row">
              <div className="form-field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Subject</label>
              <select name="subject" value={form.subject} onChange={handleChange}>
                <option value="">Select a subject</option>
                <option value="Booking Inquiry">Booking Inquiry</option>
                <option value="Private Event">Private Event</option>
                <option value="Press / Media">Press / Media</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your event, date, venue, and any details..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="form-submit-row">
              <span className={`form-status ${status}`}>
                {status === "sending" && "Sending..."}
                {status === "success" && "Message sent — we'll be in touch soon."}
                {status === "error" && "Something went wrong. Please try again."}
              </span>
              <button
                className="btn-submit"
                onClick={handleSubmit}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}