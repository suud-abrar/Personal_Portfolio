import React from "react";
import { ACCENT, AMBER } from "../constants";

export function Nav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(12,17,22,0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #1e2830",
      }}
    >
      <div
        className="nav-row"
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            color: "#e8eef2",
          }}
        >
          <span style={{ display: "flex", gap: 6 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#f2555a",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: AMBER,
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: ACCENT,
              }}
            />
          </span>
          <span style={{ marginLeft: 4 }}>suud@portfolio</span>
        </div>
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: 24,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#8ea0ac",
            overflowX: "auto",
            maxWidth: "100%",
          }}
        >
          {[
            "about",
            "skills",
            "education",
            "leadership",
            "projects",
            "contact",
          ].map((s) => (
            <a key={s} href={`#${s}`} className="nav-link">
              ./{s}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
