// About.js
import React from "react";

export default function About() {
  const container = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
  };

  const row = {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
  };

  const glassCard = {
    flex: "1 1 320px",
    minWidth: 280,
    padding: 20,
    borderRadius: 16,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,212,64,0.06)",
    boxShadow: "0 18px 48px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.02)",
    color: "#ffffff",
    boxSizing: "border-box",
  };

  const heading = {
    margin: 0,
    fontSize: 20,
    fontWeight: 900,
    color: "#ffffff",
  };

  const subText = {
    marginTop: 10,
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.6,
    fontSize: 15,
  };

  const skillsWrap = {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 14,
  };

  const skill = {
    padding: "6px 10px",
    borderRadius: 10,
    background: "linear-gradient(90deg,#ffd400,#ffea7f)",
    color: "#0b0b0b",
    fontWeight: 800,
    fontSize: 13,
    border: "1px solid rgba(0,0,0,0.06)",
    boxShadow: "0 8px 20px rgba(255,212,64,0.08)",
  };

  const goalsCard = {
    ...glassCard,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const list = {
    marginTop: 12,
    color: "rgba(255,255,255,0.9)",
    paddingLeft: 18,
  };

  const goalItem = {
    margin: "8px 0",
    fontSize: 15,
    color: "rgba(255,255,255,0.92)",
  };

  return (
    <section style={container}>
      <div style={row}>
        <article style={glassCard} aria-labelledby="about-heading">
          <h2 id="about-heading" style={heading}>
            About Me
          </h2>

          <p style={subText}>
            I'm a student software engineer focused on frontend development. I
            enjoy crafting clean, accessible interfaces with a modern glassy
            aesthetic. I work with React, practice component-driven design, and
            use Figma to prototype and refine UI.
          </p>

          <div style={skillsWrap} aria-hidden>
            <div style={skill}>React</div>
            <div style={skill}>JavaScript (ES6+)</div>
            <div style={skill}>HTML & CSS</div>
            <div style={skill}>Figma</div>
            <div style={skill}>Python</div>
          </div>
        </article>

        <article style={goalsCard} aria-labelledby="goals-heading">
          <div>
            <h3 id="goals-heading" style={{ ...heading, fontSize: 18 }}>
              Learning & Goals
            </h3>

            <ul style={list}>
              <li style={goalItem}>
                Improve component-driven design and build reusable UI primitives.
              </li>
              <li style={goalItem}>
                Prioritise accessibility and keyboard-first interactions.
              </li>
              <li style={goalItem}>
                Ship projects, learn GitHub workflows, and iterate with feedback.
              </li>
              <li style={goalItem}>
                Grow visual design skills in Figma and translate them to code.
              </li>
            </ul>
          </div>

          <div style={{ marginTop: 14, color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
            Looking to collaborate or give feedback? Reach out via the Contact
            page — I welcome opportunities to learn and grow.
          </div>
        </article>
      </div>
    </section>
  );
}