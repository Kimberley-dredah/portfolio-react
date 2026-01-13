// Footer.js
import React from "react";

export default function Footer() {
  const footer = {
    width: "100%",
    borderTop: "1px solid rgba(255,255,255,0.03)",
    padding: "18px 20px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  };

  const text = {
    color: "rgba(255,255,255,0.6)",
    fontSize: 13,
  };

  return (
    <footer style={footer}>
      <div style={text}>
        © {new Date().getFullYear()} Kimberley Dredah — Minimal glass portfolio
      </div>
    </footer>
  );
}