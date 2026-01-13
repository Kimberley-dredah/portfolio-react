// Home.js
import React from "react";

export default function Home({ onNavigate }) {
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-start",
  };

  const headline = {
    fontSize: 34,
    lineHeight: 1.05,
    margin: 0,
    color: "#0f172a",
    fontWeight: 700,
  };

  const sub = {
    fontSize: 16,
    color: "#475569",
    maxWidth: 740,
    margin: 0,
  };

  const ctaRow = {
    display: "flex",
    gap: 12,
    marginTop: 8,
    flexWrap: "wrap",
  };

  const primaryBtn = {
    padding: "10px 16px",
    background: "linear-gradient(90deg,#4f46e5,#06b6d4)",
    color: "#ffffff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
    boxShadow: "0 6px 18px rgba(79,70,229,0.12)",
    transition: "transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease",
  };

  const secondaryBtn = {
    padding: "10px 14px",
    background: "transparent",
    border: "1px solid rgba(99,102,241,0.12)",
    color: "#374151",
    borderRadius: 10,
    cursor: "pointer",
  };

  const heroCard = {
    width: "100%",
    marginTop: 18,
    padding: 20,
    borderRadius: 12,
    background: "linear-gradient(180deg, rgba(79,70,229,0.03), rgba(6,182,212,0.01))",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  };

  return (
    <section style={wrap}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h1 style={headline}>Hi — I’m Kimberley, a student frontend engineer.</h1>
        <p style={sub}>
          I build clean, accessible interfaces with a focus on modern UI and
          delightful interactions. Learning React, CSS fundamentals, and Figma
          to design and ship polished experiences.
        </p>

        <div style={ctaRow}>
          <button
            style={primaryBtn}
            onClick={() => onNavigate("Projects")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            View Projects
          </button>

          <button
            style={secondaryBtn}
            onClick={() => onNavigate("About")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.opacity = "0.85")
            }
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            About Me
          </button>
        </div>
      </div>

      <div style={heroCard}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
            Latest
          </div>
          <div style={{ fontWeight: 700, color: "#0f172a" }}>
            Minimal portfolio template — clean, simple, responsive
          </div>
          <div style={{ marginTop: 8, color: "#475569", fontSize: 14 }}>
            A beginner-friendly starter you can push to GitHub and iterate on.
          </div>
        </div>
        <div style={{ minWidth: 120, textAlign: "right", color: "#0f172a" }}>
          <div style={{ fontSize: 12, color: "#6b7280" }}>Status</div>
          <div style={{ fontWeight: 700 }}>WIP</div>
        </div>
      </div>
    </section>
  );
}