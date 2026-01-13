// About.js
import React from "react";

export default function About() {
  const container = {
    display: "flex",
    gap: 20,
    flexDirection: "column",
  };

  const card = {
    padding: 18,
    borderRadius: 12,
    background: "#ffffff",
    boxShadow: "0 8px 30px rgba(15,23,42,0.04)",
    border: "1px solid rgba(31,41,55,0.03)",
  };

  const heading = {
    margin: 0,
    fontSize: 22,
    color: "#0f172a",
    fontWeight: 700,
  };

  const p = {
    margin: "12px 0 0 0",
    color: "#475569",
    lineHeight: 1.6,
    fontSize: 15,
  };

  const skillsWrap = {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 12,
  };

  const skill = {
    padding: "6px 10px",
    background: "rgba(99,102,241,0.08)",
    color: "#4f46e5",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 13,
  };

  return (
    <section style={container}>
      <div style={card}>
        <h2 style={heading}>About Me</h2>
        <p style={p}>
          I'm a student software engineer focused on frontend development. I
          enjoy turning ideas into clean interfaces that are accessible and
          pleasant to use. I’m currently learning advanced React patterns,
          component design, and UX fundamentals with Figma.
        </p>

        <div style={skillsWrap}>
          <div style={skill}>React</div>
          <div style={skill}>JavaScript (ES6+)</div>
          <div style={skill}>HTML & CSS</div>
          <div style={skill}>Figma</div>
          <div style={skill}>Accessibility</div>
        </div>
      </div>

      <div style={card}>
        <h3 style={{ margin: 0, fontSize: 16, color: "#0f172a" }}>
          Learning & Goals
        </h3>
        <ul style={{ color: "#475569", marginTop: 12 }}>
          <li style={{ margin: "8px 0" }}>
            Improve component-driven design and reusability.
          </li>
          <li style={{ margin: "8px 0" }}>
            Build accessible interfaces with keyboard-first interactions.
          </li>
          <li style={{ margin: "8px 0" }}>
            Publish projects and iterate using GitHub workflows.
          </li>
        </ul>
      </div>
    </section>
  );
}