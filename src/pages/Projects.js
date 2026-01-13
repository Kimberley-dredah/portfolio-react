// Projects.js
import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Template",
    desc: "A simple, modern portfolio starter built with Create React App.",
    tags: ["React", "Design"],
  },
  {
    id: 2,
    title: "Todo App",
    desc: "Lightweight todo app demonstrating component state and hooks.",
    tags: ["React", "Hooks"],
  },
  {
    id: 3,
    title: "UI Kit",
    desc: "Collection of reusable components designed in Figma and coded in React.",
    tags: ["Figma", "Frontend"],
  },
];

export default function Projects() {
  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  };

  const pageTitle = {
    margin: "0 0 12px 0",
    fontSize: 20,
    color: "#0b0b0b",
    fontWeight: 800,
  };

  return (
    <section>
      <h2 style={pageTitle}>Projects</h2>

      <div style={grid}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hover, setHover] = React.useState(false);

  const base = {
    padding: 16,
    borderRadius: 12,
    background: "#ffffff",
    border: "1px solid rgba(15,15,15,0.04)",
    boxSizing: "border-box",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    cursor: "pointer",
  };

  const style = {
    ...base,
    transform: hover ? "translateY(-8px)" : "translateY(0)",
    boxShadow: hover
      ? "0 18px 48px rgba(2,6,23,0.12)"
      : "0 8px 20px rgba(2,6,23,0.06)",
  };

  const titleStyle = {
    margin: 0,
    fontSize: 16,
    color: "#0b0b0b",
    fontWeight: 800,
  };

  const descStyle = {
    marginTop: 8,
    fontSize: 14,
    color: "#374151",
  };

  const tagStyle = {
    display: "inline-block",
    padding: "6px 8px",
    borderRadius: 10,
    background: "linear-gradient(90deg, rgba(255,212,64,0.06), rgba(255,212,64,0.02))",
    color: "#0b0b0b",
    fontSize: 12,
    marginRight: 8,
    marginTop: 12,
    border: "1px solid rgba(255,212,64,0.04)",
    fontWeight: 700,
  };

  return (
    <article
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.alert("This is a placeholder project card.")}
      aria-label={`Open project ${project.title}`}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <h3 style={titleStyle}>{project.title}</h3>
        <div style={{ color: "#9ca3af", fontSize: 13 }}>•</div>
      </div>

      <p style={descStyle}>{project.desc}</p>

      <div style={{ marginTop: 12 }}>
        {project.tags.map((t) => (
          <span key={t} style={tagStyle}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}