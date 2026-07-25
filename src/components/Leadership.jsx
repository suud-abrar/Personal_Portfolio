import React from "react";
import { ACCENT, AMBER } from "../constants";
import { leadership } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function Leadership() {
  return (
    <section
      id="leadership"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel
        path="ps aux | grep leadership"
        title="Leadership & mentoring"
      />
      <div
        className="leadership-grid"
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        {leadership.map((l, i) => {
          const Icon = l.icon;
          const Wrapper = l.link ? "a" : "div";
          return (
            <Wrapper
              key={i}
              className="info-card"
              {...(l.link
                ? { href: l.link, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={{
                display: "block",
                background: "#0f151b",
                border: "1px solid #1e2830",
                borderRadius: 10,
                padding: "18px 20px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: `${ACCENT}1f`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={14} color={ACCENT} />
                </div>
                <span
                  style={{ color: "#e8eef2", fontSize: 14.5, fontWeight: 600 }}
                >
                  {l.role}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11.5,
                  color: AMBER,
                  marginBottom: 8,
                }}
              >
                {l.org}
              </div>
              <div style={{ color: "#8ea0ac", fontSize: 13, lineHeight: 1.6 }}>
                {l.detail}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
