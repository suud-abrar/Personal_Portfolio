import React, { useState } from "react";
import { Send, Github, Mail, Linkedin, Phone } from "lucide-react";
import { ACCENT } from "../constants";
import { SectionLabel } from "./SectionLabel";

const inputStyle = {
  background: "#0c1116",
  border: "1px solid #1e2830",
  borderRadius: 7,
  padding: "11px 14px",
  color: "#e8eef2",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xlgqogog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("Something went wrong — please try again or email me directly.");
      }
    } catch {
      alert("Something went wrong — please try again or email me directly.");
    }
  };

  return (
    <section
      id="contact"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px 100px" }}
    >
      <SectionLabel path="./contact --new" title="Get in touch" />

      <div className="contact-grid" style={{ display: "grid", gap: 40 }}>
        <div>
          <p
            style={{
              color: "#8ea0ac",
              fontSize: 15,
              lineHeight: 1.8,
              margin: "0 0 24px",
            }}
          >
            Open to internships, collaborations, and interesting problems. Reach
            out directly, or find me here:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="https://t.me/scholarscorner1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Send size={16} color={ACCENT} /> Scholars' Corner (Telegram)
            </a>
            <a
              href="https://github.com/suud-abrar"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Github size={16} color={ACCENT} /> GitHub
            </a>
            <a href="mailto:suudabrar0@gmail.com" className="contact-link">
              <Mail size={16} color={ACCENT} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/suud-a-gelan-921933403"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Linkedin size={16} color={ACCENT} /> LinkedIn
            </a>
            <a
              href="tel:+251947853943"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Phone size={16} color={ACCENT} /> Phone: +25947853943
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {sent ? (
            <div style={{ textAlign: "center", padding: "30px 0" }}>
              <div
                style={{
                  color: ACCENT,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14,
                }}
              >
                $ message sent ✓
              </div>
              <p style={{ color: "#8ea0ac", fontSize: 13, marginTop: 10 }}>
                Thanks for reaching out — I'll reply soon.
              </p>
            </div>
          ) : (
            <>
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
              <textarea
                required
                placeholder="Your message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
              <button
                type="submit"
                className="btn btn-solid"
                style={{
                  background: ACCENT,
                  justifyContent: "center",
                  padding: "12px 0",
                }}
              >
                send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
