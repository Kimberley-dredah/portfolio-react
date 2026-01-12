function Home() {
    const containerStyle = {
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 40px",
      backgroundColor: "#f8fafc",
    };
  
    const nameStyle = {
      fontSize: "48px",
      marginBottom: "10px",
    };
  
    const titleStyle = {
      fontSize: "22px",
      color: "#475569",
      marginBottom: "20px",
    };
  
    const textStyle = {
      fontSize: "18px",
      maxWidth: "600px",
      lineHeight: "1.6",
    };
  
    return (
      <section style={containerStyle}>
        <h1 style={nameStyle}>Kimberley Dredah Nakibuuka</h1>
        <h2 style={titleStyle}>Software Engineering Student</h2>
  
        <p style={textStyle}>
          I am a third-year Software Engineering student at Ndejje University with a
          passion for building clean, user-friendly web applications. I enjoy
          turning ideas into functional interfaces and continuously improving my
          skills.
        </p>
      </section>
    );
  }
  
  export default Home;
  