// Home.js
import React from "react";

export default function Home({ onNavigate }) {
  const pageWrap = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "72vh",
    width: "100%",
  };

  const hero = {
    width: "100%",
    maxWidth: 1100,
    borderRadius: 18,
    padding: 28,
    display: "flex",
    gap: 24,
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    background:
      "linear-gradient(180deg, rgba(10,10,10,0.88), rgba(0,0,0,0.72))",
    border: "1px solid rgba(255,212,64,0.06)",
    boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
    backdropFilter: "blur(6px) saturate(120%)",
    color: "#ffffff",
    flexWrap: "wrap",
  };

  const left = {
    flex: "1 1 520px",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  };

  const headline = {
    margin: 0,
    fontSize: 36,
    lineHeight: 1.02,
    fontWeight: 900,
    color: "#fff",
    textShadow: "0 4px 20px rgba(0,0,0,0.6)",
  };

  const sub = {
    margin: 0,
    fontSize: 16,
    color: "rgba(255,255,255,0.85)",
    maxWidth: 640,
  };

  const actions = {
    display: "flex",
    gap: 12,
    marginTop: 6,
    flexWrap: "wrap",
  };

  const yellowBtn = {
    padding: "10px 16px",
    borderRadius: 12,
    background: "linear-gradient(90deg,#ffd400,#ffea7f)",
    color: "#101010",
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    boxShadow: "0 14px 40px rgba(255,212,64,0.14)",
    transition: "transform 150ms ease, box-shadow 150ms ease",
  };

  const glassyBtn = {
    padding: "10px 14px",
    borderRadius: 12,
    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.06)",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: 700,
    transition: "transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease",
  };

  const right = {
    width: 320,
    minWidth: 260,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const pcFrame = {
    width: 320,
    borderRadius: 12,
    padding: 18,
    boxSizing: "border-box",
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.04)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
  };

  const pcScreen = {
    width: "100%",
    height: 160,
    borderRadius: 8,
    background: "linear-gradient(180deg,#0b0b0b,#050505)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255,255,255,0.03)",
    boxShadow: "inset 0 -6px 30px rgba(0,0,0,0.6)",
  };

  // small responsive tweak for very small screens
  const containerResponsive = {
    width: "100%",
  };

  return (
    <section style={pageWrap}>
      <div style={{ ...hero, ...containerResponsive }}>
        <div style={left}>
          <h1 style={headline}>Hi — I’m Kimberley, Frontend student & designer.</h1>
          <p style={sub}>
            I build modern interfaces with a minimal, glassy aesthetic — focusing
            on accessibility, clarity, and delightful micro-interactions. I love
            React and Figma and enjoy turning designs into working, responsive UIs.
          </p>

          <div style={actions}>
            <button
              style={yellowBtn}
              onClick={() => onNavigate("Projects")}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              View Projects
            </button>

            <button
              style={glassyBtn}
              onClick={() => onNavigate("Contact")}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.opacity = "0.95";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.opacity = "1";
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div style={right}>
          <div style={pcFrame} aria-hidden>
            <div style={pcScreen}>
              {/* Inline SVG of a simple PC icon + text "Front End Dev" */}
              <svg
                width="260"
                height="120"
                viewBox="0 0 260 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="PC illustration with Front End Dev text"
              >
                <rect x="0" y="6" rx="10" ry="10" width="260" height="88" fill="#0a0a0a" />
                <rect x="6" y="12" width="248" height="64" rx="6" fill="#070707" />
                <g>
                  <rect x="18" y="22" width="214" height="40" rx="4" fill="#050505" />
                  <text
                    x="125"
                    y="48"
                    textAnchor="middle"
                    fill="#ffd400"
                    fontFamily="Segoe UI, Roboto, Arial"
                    fontWeight="800"
                    fontSize="18"
                    letterSpacing="0.6"
                  >
                    Front End Dev
                  </text>
                </g>
                <rect x="74" y="78" width="112" height="8" rx="4" fill="#111" />
                <rect x="102" y="90" width="56" height="6" rx="3" fill="#111" />
              </svg>
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "0 6px" }}>
              <div style={{ color: "rgba(255,255,255,0.9)", fontWeight: 800 }}>PC — Portfolio</div>
              <div style={{ color: "rgba(255,255,255,0.65)" }}>WIP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}