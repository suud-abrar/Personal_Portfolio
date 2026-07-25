import React from "react";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1e2830", padding: "28px 24px" }}>
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: "#5a6a75",
        }}
      >
        <span>suud — Addis Ababa, Ethiopia</span>
        <span>built with React</span>
      </div>
    </footer>
  );
}
