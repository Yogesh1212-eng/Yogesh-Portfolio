import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import CodingProfile from "./sections/CodingProfile";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certificates from "./sections/Certificates";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

import OnlineCertificates from "./pages/OnlineCertificates";
import AllProjects from "./pages/AllProjects";
import AllGallery from "./pages/AllGallery";

import "./App.css";
import "./components/Navbar.css";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <CodingProfile />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  /* =========================================================
      ALWAYS DEFAULT TO DARK MODE ON LOAD
  ========================================================= */
  // Har baar website khulne par by default true (Dark Mode) hi rahega
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Body tag par class toggle
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      {/* Pura application ek consistent wrapper mein rahega */}
      <div className={`app ${darkMode ? "dark" : "light"}`}>
        {/* NAVBAR */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/certificates/online" element={<OnlineCertificates />} />
          <Route path="/gallery" element={<AllGallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;