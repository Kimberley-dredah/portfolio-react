// Footer.js
import React from "react";

export default function Footer() {
  const footerStyle = {
    width: "100%",
    borderTop: "1px solid rgba(31,41,55,0.06)",
    background: "transparent",
    padding: "18px 20px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = {
    color: "#6b7280",
    fontSize: 13,
  };

  return (
    <footer style={footerStyle}>
      <div style={textStyle}>
        © {new Date().getFullYear()} Kimberley Dredah — Built with React (CRA)
      </div>
    </footer>
  );
}