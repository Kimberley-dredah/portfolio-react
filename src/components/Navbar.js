function Navbar() {
    const navStyle = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      backgroundColor: "#0f172a",
      color: "#ffffff",
      position: "sticky",
      top: 0,
      zIndex: 100,
    };
  
    const logoStyle = {
      fontSize: "22px",
      fontWeight: "bold",
    };
  
    const linksStyle = {
      display: "flex",
      gap: "20px",
    };
  
    const linkStyle = {
      cursor: "pointer",
      fontSize: "16px",
    };
  
    return (
      <nav style={navStyle}>
        <div style={logoStyle}>Portfolio</div>
  
        <div style={linksStyle}>
          <span style={linkStyle}>Home</span>
          <span style={linkStyle}>About</span>
          <span style={linkStyle}>Skills</span>
          <span style={linkStyle}>Projects</span>
          <span style={linkStyle}>Contact</span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  