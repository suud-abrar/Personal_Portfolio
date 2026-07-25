import React from "react";
import { projects } from "../data/content";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}
    >
      <SectionLabel path="ls ./projects --list" title="Projects" />
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gap: 28,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
