import React from "react";
import { Calendar } from "lucide-react";
import { education } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function Education() {
  return (
    <section
      id="education"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel
        path="git log --oneline ./education"
        title="Education & training"
      />
      <div className="timeline">
        {education.map((e, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-dot" />
              {i !== education.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <div className="timeline-year">
                <Calendar size={12} />
                {e.year}
              </div>
              <div
                style={{
                  color: "#e8eef2",
                  fontSize: 15.5,
                  fontWeight: 700,
                  margin: "4px 0 7px",
                }}
              >
                {e.title}
              </div>
              <div
                style={{ color: "#8ea0ac", fontSize: 13.5, lineHeight: 1.75 }}
              >
                {e.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
