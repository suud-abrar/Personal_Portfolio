import React from "react";
import { AMBER } from "../constants";
import { skills } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function Skills() {
  return (
    <section
      id="skills"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel path="ls ./skills --grouped" title="Skills" />
      <div
        className="skills-grid"
        style={{
          display: "grid",
          gap: 20,
        }}
      >
        {skills.map((s, i) => (
          <div
            key={i}
            className="info-card"
            style={{
              background: "#0f151b",
              border: "1px solid #1e2830",
              borderRadius: 10,
              padding: "20px 20px 22px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: AMBER,
                marginBottom: 14,
              }}
            >
              {s.group}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {s.items.map((item, j) => (
                <span
                  key={j}
                  className="skill-item"
                  style={{ color: "#c3ccd2", fontSize: 14 }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
