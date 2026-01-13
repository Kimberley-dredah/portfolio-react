// Navbar.js
import React from "react";

export default function Navbar({ active = "Home", onNavigate }) {
  const container = {
    position: "sticky",
    top: 18,
    zIndex: 80,
    width: "calc(100% - 40px)",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 14px",
    boxSizing: "border-box",
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(0,0,0,0.66), rgba(10,10,10,0.48))",
    border: "1px solid rgba(255,212,64,0.06)",
    backdropFilter: "blur(8px) saturate(120%)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
  };

  const brand = {
    display: "flex",
    gap: 12,
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
  };

  const logo = {
    height: 44,
    width: 44,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    color: "#111",
    background: "linear-gradient(90deg, #ffd400, #ffea7f)",
    boxShadow: "0 8px 30px rgba(255,212,64,0.12)",
    border: "1px solid rgba(0,0,0,0.12)",
    fontSize: 16,
  };

  const brandText = {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1,
  };

  const nameStyle = {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 800,
  };

  const subStyle = {
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
  };

  const navWrap = {
    display: "flex",
    gap: 8,
    alignItems: "center",
  };

  function NavItem({ label }) {
    const [hover, setHover] = React.useState(false);
    const isActive = active === label;

    const base = {
      padding: "8px 12px",
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      transition: "transform 140ms ease, color 140ms ease, background 140ms ease",
      outline: "none",
      color: isActive ? "#0b0b0b" : hover ? "#ffd400" : "#ffffff",
      background: isActive
        ? "linear-gradient(90deg,#ffd400,#ffea7f)"
        : "transparent",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      boxShadow: hover && !isActive ? "0 8px 24px rgba(0,0,0,0.35)" : "none",
    };

    return (
      <button
        style={base}
        onClick={() => onNavigate(label)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-current={isActive ? "page" : undefined}
        title={label}
      >
        {label}
      </button>
    );
  }

  return (
    <div style={container} role="navigation" aria-label="Main navigation">
      <div
        style={brand}
        onClick={() => onNavigate("Home")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") onNavigate("Home");
        }}
      >
        <div style={logo}>KD</div>
        <div style={brandText}>
          <div style={nameStyle}>Kimberley Dredah</div>
          <div style={subStyle}>Student · Frontend</div>
        </div>
      </div>

      <nav style={navWrap}>
        <NavItem label="Home" />
        <NavItem label="About" />
        <NavItem label="Projects" />
        <NavItem label="Contact" />
      </nav>
    </div>
  );
}