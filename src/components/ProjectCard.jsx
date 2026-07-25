import React from "react";
import { Github, ExternalLink } from "lucide-react";

export function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <div className="project-card" style={{ "--pcolor": project.color }}>
      <div
        className="project-card-top"
        style={{
          background: `linear-gradient(135deg, ${project.color}22, transparent 70%)`,
        }}
      >
        <div className="project-card-topbar">
          <span style={{ display: "flex", gap: 6 }}>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </span>
          <span className="project-card-name">{project.name}</span>
          {project.demo && (
            <span className="live-badge">
              <span className="live-dot" />
              live
            </span>
          )}
        </div>

        <div className="project-card-heading">
          <div
            className="icon-badge"
            style={{
              background: `${project.color}22`,
              borderColor: `${project.color}55`,
            }}
          >
            <Icon size={20} color={project.color} />
          </div>
          <h3>{project.tagline}</h3>
        </div>
      </div>

      <div className="project-card-body">
        <p className="project-card-desc">{project.description}</p>

        <div className="project-card-highlights">
          {project.highlights.map((h, i) => (
            <div key={i} className="project-card-highlight">
              <span style={{ color: project.color }}>●</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="project-card-stack">
          {project.stack.map((t, i) => (
            <span
              key={i}
              className="stack-pill"
              style={{
                borderColor: `${project.color}45`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={14} /> code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
              style={{ background: project.color }}
            >
              live demo <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
