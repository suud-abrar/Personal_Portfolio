import React from "react";
import { User } from "lucide-react";
import { ACCENT } from "../constants";
import { about } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel path="cat ./about.md" title="About" />
      <div className="about-grid">
        <div>
          <div className="photo-row">
            <div className="photo-circle">
              <img
                src="/my-photo.jpg"
                alt="Suud — profile photo"
                className="photo-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="photo-fallback" style={{ display: "none" }}>
                <User size={26} color="#5a6a75" />
                <span>add photo</span>
              </div>
            </div>
          </div>
          <p
            style={{
              color: "#c3ccd2",
              fontSize: 16,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            I'm a self taught software developer in Addis Ababa, originally from Waliso, Ethiopia. I
            completed high school at Oromia Development Association Boarding
            School (ODA SBS). I build full-stack web applications, automation
            pipelines, and AI-powered tools — from a Telegram bot that serves
            7,000+ students daily to a forum platform with an embedded AI
            assistant.
          </p>
          <p
            style={{
              color: "#8ea0ac",
              fontSize: 15,
              lineHeight: 1.8,
              marginTop: 18,
            }}
          >
            Alongside development, I'm interested in AI, data analysis, and
            cybersecurity, and I care about the reasoning behind a technical
            decision — not just the code that implements it.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {about.bullets.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="info-card"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "14px 16px",
                  background: "#0f151b",
                  border: "1px solid #1e2830",
                  borderRadius: 10,
                }}
              >
                <Icon
                  size={16}
                  color={ACCENT}
                  style={{ marginTop: 2, flexShrink: 0 }}
                />
                <span
                  style={{ color: "#c3ccd2", fontSize: 13.5, lineHeight: 1.5 }}
                >
                  {b.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
