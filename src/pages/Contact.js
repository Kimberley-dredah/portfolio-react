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
    border: "1px solid rgba(31,41,55,0.04)",
    boxShadow: "0 8px 30px rgba(15,23,42,0.04)",
  };

  const linkStyle = {
    color: "#0f172a",
    textDecoration: "none",
    fontWeight: 700,
  };

  const info = {
    color: "#475569",
    fontSize: 15,
    marginTop: 8,
  };

  return (
    <section style={wrap}>
      <div style={card}>
        <h2 style={{ margin: 0, fontSize: 20, color: "#0f172a" }}>Get in touch</h2>
        <p style={{ marginTop: 8, color: "#475569" }}>
          I'm open to learning opportunities, collaborations, and feedback.
          Send a short note and I'll get back to you.
        </p>

        <div style={info}>
          <div>
            Email:{" "}
            <a
              style={linkStyle}
              href="mailto:kimberley@example.com"
              rel="noopener noreferrer"
            >
              kimberley@example.com
            </a>
          </div>

          <div style={{ marginTop: 8 }}>
            GitHub:{" "}
            <a
              style={linkStyle}
              href="https://github.com/Kimberley-dredah"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Kimberley-dredah
            </a>
          </div>
        </div>
      </div>

      <div style={{ color: "#6b7280", fontSize: 14 }}>
        Note: This site uses client-side links only — no backend is required for
        contact. Replace the email and GitHub link with your real ones before
        publishing.
      </div>
    </section>
  );
}