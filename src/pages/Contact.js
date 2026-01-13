// Contact.js
import React from "react";

export default function Contact() {
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxWidth: 720,
  };

  const card = {
    padding: 18,
    borderRadius: 12,
    background: "#ffffff",
    border: "1px solid rgba(15,15,15,0.04)",
    boxShadow: "0 12px 36px rgba(2,6,23,0.06)",
  };

  const heading = {
    margin: 0,
    fontSize: 20,
    color: "#0b0b0b",
    fontWeight: 800,
  };

  const body = {
    marginTop: 8,
    color: "#374151",
    fontSize: 15,
  };

  const link = {
    color: "#0b0b0b",
    fontWeight: 800,
    textDecoration: "none",
    background: "linear-gradient(90deg, rgba(255,212,64,0.08), rgba(255,212,64,0.02))",
    padding: "6px 10px",
    borderRadius: 8,
    display: "inline-block",
    border: "1px solid rgba(255,212,64,0.04)",
  };

  const note = {
    color: "#6b7280",
    fontSize: 14,
  };

  return (
    <section style={wrap}>
      <div style={card}>
        <h2 style={heading}>Get in touch</h2>
        <p style={body}>
          I'm open to learning opportunities, collaborations, and feedback.
          Send a short note and I'll get back to you.
        </p>

        <div style={{ marginTop: 12 }}>
          <div style={{ marginBottom: 8 }}>
            Email:{" "}
            <a style={link} href="mailto:kimberley@example.com" rel="noopener noreferrer">
              kimberley@example.com
            </a>
          </div>

          <div>
            GitHub:{" "}
            <a
              style={link}
              href="https://github.com/Kimberley-dredah"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Kimberley-dredah
            </a>
          </div>
        </div>
      </div>

      <div style={note}>
        Note: This site uses client-side links only — no backend is required for
        contact. Replace the email and GitHub link with your real ones before
        publishing.
      </div>
    </section>
  );
}