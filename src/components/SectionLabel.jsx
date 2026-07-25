import React from "react";
import { ChevronRight } from "lucide-react";
import { ACCENT } from "../constants";

export const TerminalPrompt = ({ children, style }) => (
  <div
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 13,
      letterSpacing: "0.03em",
      color: ACCENT,
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 20,
      ...style,
    }}
  >
    <ChevronRight size={14} strokeWidth={2.5} />
    {children}
  </div>
);

export const SectionLabel = ({ path, title }) => (
  <div style={{ marginBottom: 48 }}>
    <TerminalPrompt>{path}</TerminalPrompt>
    <h2
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "clamp(28px, 4vw, 40px)",
        fontWeight: 700,
        color: "#e8eef2",
        margin: 0,
        letterSpacing: "-0.02em",
      }}
    >
      {title}
    </h2>
    <div className="section-underline" />
  </div>
);
