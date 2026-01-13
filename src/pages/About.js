// About.js
import React from "react";

export default function About() {
  const column = {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  };

  const card = {
    padding: 18,
    borderRadius: 12,
    background: "#ffffff",
    boxShadow: "0 12px 36px rgba(2,6,23,0.06)",
    border: "1px solid rgba(15,15,15,0.04)",
  };

  const heading = {
    margin: 0,
    fontSize: 22,
    color: "#0b0b0b",
    fontWeight: 800,
  };

  const p = {
    margin: "12px 0 0 0",
    color: "#374151",
    lineHeight: 1.6,
    fontSize: 15,
  };

  const skills = {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 12,
  };

  const chip = {
    padding: "6px 10px",
    borderRadius: 10,
    background: "linear-gradient(90deg, rgba(255,212,64,0.08), rgba(255,212,64,0.02))",
    color: "#0b0b0b",
    fontWeight: 700,
    fontSize: 13,
    border: "1px solid rgba(255,212,64,0.06)",
  };

  return (
    <section style={column}>
      <div style={card}>
        <h2 style={heading}>About Me</h2>
        <p style={p}>
          I'm a student software engineer focused on frontend development. I
          enjoy turning ideas into interfaces that are clean, accessible, and
          polished. I work with React, practice component-driven design, and use
          Figma for UI and prototyping.
        </p>

        <div style={skills}>
          <div style={chip}>React</div>
          <div style={chip}>JavaScript (ES6+)</div>
          <div style={chip}>HTML & CSS</div>
          <div style={chip}>Figma</div>
          <div style={chip}>Accessibility</div>
        </div>
      </div>

      <div style={card}>
        <h3 style={{ margin: 0, fontSize: 16, color: "#0b0b0b" }}>Learning & Goals</h3>
        <ul style={{ color: "#374151", marginTop: 12, paddingLeft: 18 }}>
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