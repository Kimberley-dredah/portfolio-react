function Navbar({ setActivePage }) {
    const navStyle = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      backgroundColor: "#0f172a",
      color: "#ffffff",
      position: "sticky",
      top: 0,
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
        <h2 style={{ cursor: "pointer" }} onClick={() => setActivePage("home")}>
          Kimberley
        </h2>
  
        <div style={linksStyle}>
          <span style={linkStyle} onClick={() => setActivePage("home")}>
            Home
          </span>
          <span style={linkStyle} onClick={() => setActivePage("about")}>
            About
          </span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  