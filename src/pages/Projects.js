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

  return (
    <section>
      <h2 style={{ margin: "0 0 12px 0", fontSize: 20, color: "#0f172a" }}>
        Projects
      </h2>

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

  const baseCard = {
    padding: 16,
    borderRadius: 12,
    background: "#ffffff",
    border: "1px solid rgba(31,41,55,0.04)",
    boxSizing: "border-box",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    cursor: "pointer",
  };

  const style = {
    ...baseCard,
    transform: hover ? "translateY(-6px)" : "none",
    boxShadow: hover
      ? "0 12px 40px rgba(15,23,42,0.08)"
      : "0 6px 18px rgba(15,23,42,0.04)",
  };

  const titleStyle = {
    margin: 0,
    fontSize: 16,
    color: "#0f172a",
    fontWeight: 700,
  };

  const descStyle = {
    marginTop: 8,
    fontSize: 14,
    color: "#475569",
  };

  const tagStyle = {
    display: "inline-block",
    padding: "6px 8px",
    borderRadius: 8,
    background: "rgba(99,102,241,0.06)",
    color: "#4f46e5",
    fontSize: 12,
    marginRight: 8,
    marginTop: 12,
  };

  return (
    <article
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.alert("This is a placeholder project card.")}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <h3 style={titleStyle}>{project.title}</h3>
        <div style={{ color: "#6b7280", fontSize: 13 }}>•</div>
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