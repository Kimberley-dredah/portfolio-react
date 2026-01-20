// Contact.js
import React from "react";

export default function Contact() {
  const pageWrap = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingTop: 8,
  };

  const glassCard = {
    width: "100%",
    maxWidth: 720,
    padding: 22,
    borderRadius: 14,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,212,64,0.06)",
    boxShadow: "0 18px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)",
    color: "#ffffff",
    boxSizing: "border-box",
  };

  const heading = {
    margin: 0,
    fontSize: 20,
    fontWeight: 900,
    color: "#ffffff",
  };

  const body = {
    marginTop: 10,
    color: "rgba(255,255,255,0.88)",
    fontSize: 15,
    lineHeight: 1.6,
  };

  const row = {
    marginTop: 16,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
  };

  const linkBtn = {
    padding: "10px 14px",
    borderRadius: 12,
    background: "linear-gradient(90deg,#ffd400,#ffea7f)",
    color: "#0b0b0b",
    fontWeight: 800,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "0 12px 36px rgba(255,212,64,0.12)",
  };

  const glassLink = {
    padding: "10px 14px",
    borderRadius: 12,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.04)",
    color: "#ffffff",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };

  return (
    <section style={pageWrap}>
      <div style={glassCard}>
        <h2 style={heading}>Get in touch</h2>
        <p style={body}>
          I'm open to learning opportunities, collaborations, and feedback.
          Send a short note and I'll get back to you.
        </p>

        <div style={row}>
          <a
            style={linkBtn}
            href="mailto:kimberleydredahnakibuuka@gmail.com"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            Email: kimberleydredahnakibuuka@gmail.com
          </a>

          <a
            style={glassLink}
            href="https://github.com/Kimberley-dredah"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 36px rgba(255,212,64,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            GitHub: github.com/Kimberley-dredah
          </a>
        </div>
      </div>
    </section>
  );
}