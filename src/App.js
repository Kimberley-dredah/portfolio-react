// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("Home");

  const containerStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    color: "#1f2937",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
  };

  const mainStyle = {
    flex: 1,
    width: "100%",
    maxWidth: 1000,
    margin: "0 auto",
    padding: "28px 20px",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      <Navbar active={page} onNavigate={setPage} />
      <main style={mainStyle}>
        {page === "Home" && <Home onNavigate={setPage} />}
        {page === "About" && <About />}
        {page === "Projects" && <Projects />}
        {page === "Contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}