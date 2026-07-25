import React from "react";
import { Award } from "lucide-react";
import { AMBER } from "../constants";
import { achievements } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function Achievements() {
  return (
    <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}>
      <SectionLabel path="cat ./achievements.log" title="Achievements" />
      <div
        className="achievements-grid"
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        {achievements.map((a, i) => (
          <div
            key={i}
            className="info-card"
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              background: "#0f151b",
              border: "1px solid #1e2830",
              borderRadius: 10,
              padding: "16px 18px",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: `${AMBER}1f`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Award size={14} color={AMBER} />
            </div>
            <div>
              <div
                style={{
                  color: "#e8eef2",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                {a.title}
              </div>
              <div style={{ color: "#8ea0ac", fontSize: 13 }}>{a.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
