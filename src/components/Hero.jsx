import React from "react";
import { ACCENT } from "../constants";
import { useTypewriter } from "../hooks/useTypewriter";

export function Hero() {
  const lines = [
    "$ whoami",
    "Suud Gelan — full-stack developer, Addis Ababa, Ethiopia",
    "$ cat interests.txt",
    "full-stack web development · AI-powered applications · data",
    "$ ./run --status",
    "shippings full-stack products from research to production.",
  ];
  const { output, done } = useTypewriter(lines, 18, 300);

  return (
    <section
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "96px 24px 80px",
      }}
    >
      <div className="hero-eyebrow">
        <span className="hero-eyebrow-dot" /> available for internships &
        full-stack roles
      </div>

      <div className="hero-terminal">
        {lines.map((line, i) => {
          const isPrompt = line.startsWith("$");
          const shown = output[i] ?? "";
          return (
            <div
              key={i}
              style={{
                color: isPrompt ? "#8ea0ac" : "#e8eef2",
                fontWeight: isPrompt ? 400 : 500,
                marginBottom: isPrompt ? 2 : 14,
              }}
            >
              {shown}
              {i === output.length - 1 && !done && (
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 16,
                    background: ACCENT,
                    marginLeft: 2,
                    animation: "blink 1s steps(1) infinite",
                    verticalAlign: "text-bottom",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}
      >
        <a
          href="#projects"
          className="btn btn-solid hero-btn"
          style={{ background: ACCENT }}
        >
          view projects
        </a>
        <a href="#contact" className="btn btn-outline hero-btn">
          get in touch
        </a>
      </div>
    </section>
  );
}
