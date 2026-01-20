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
    desc: "Lightweight todo app demonstrating python and flask",
    tags: ["Python"],
  },
  {
    id: 3,
    title: "UI Kit",
    desc: "Collection of reusable components designed in Figma and coded in React.",
    tags: ["Figma", "Frontend"],
  },
];

export default function Projects() {
  const pageWrap = {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    width: "100%",
  };

  const titleStyle = {
    margin: "0 0 6px 0",
    fontSize: 20,
    color: "#ffffff",
    fontWeight: 900,
  };

  const grid = {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    alignItems: "start",
  };

  return (
    <section style={pageWrap}>
      <h2 style={titleStyle}>Projects</h2>

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
    padding: 18,
    borderRadius: 14,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,212,64,0.08)",
    boxShadow: "0 18px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
    color: "#ffffff",
    cursor: "default",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  };

  const style = {
    ...baseCard,
    transform: hover ? "translateY(-8px)" : "translateY(0)",
    boxShadow: hover
      ? "0 28px 64px rgba(0,0,0,0.75)"
      : "0 18px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
  };

  const headRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  };

  const title = {
    margin: 0,
    fontSize: 16,
    fontWeight: 900,
    color: "#ffffff",
  };

  const desc = {
    marginTop: 12,
    color: "rgba(255,255,255,0.92)",
    fontSize: 14,
    lineHeight: 1.6,
    flex: 1,
  };

  const tagWrap = {
    marginTop: 14,
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
  };

  // stronger, fully-visible yellow tag style
  const tag = {
    padding: "8px 12px",
    borderRadius: 12,
    background: "linear-gradient(90deg,#ffd400,#ffea7f)",
    color: "#0b0b0b",
    fontWeight: 800,
    fontSize: 13,
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 10px 30px rgba(255,212,64,0.12)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <article
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`Project card: ${project.title}`}
    >
      <div style={headRow}>
        <h3 style={title}>{project.title}</h3>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>•</div>
      </div>

      <p style={desc}>{project.desc}</p>

      <div style={tagWrap}>
        {project.tags.map((t) => (
          <span key={t} style={tag}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}