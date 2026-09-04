import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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


function Home({ darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <Hero />

      <About />

      <CodingProfile />

      <Skills />

      <Projects />

      <Achievements />

      <Certificates />

      <Gallery />

      <Contact />

    </div>
  );
}


function App() {
  /*
   * SINGLE SOURCE OF TRUTH
   *
   * Theme state yahin rahega.
   * Navbar isi ko change karega.
   * Pura Home isi state se dark/light hoga.
   */
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>

      {/* ================= NAVBAR ================= */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      {/* ================= ROUTES ================= */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />


        {/* ALL PROJECTS */}

        <Route
          path="/projects"
          element={
            <div
              className={
                darkMode
                  ? "app dark"
                  : "app light"
              }
            >
              <AllProjects />
            </div>
          }
        />


        {/* ONLINE CERTIFICATES */}

        <Route
          path="/certificates/online"
          element={
            <div
              className={
                darkMode
                  ? "app dark"
                  : "app light"
              }
            >
              <OnlineCertificates />
            </div>
          }
        />


        {/* ALL GALLERY */}

        <Route
          path="/gallery"
          element={
            <div
              className={
                darkMode
                  ? "app dark"
                  : "app light"
              }
            >
              <AllGallery />
            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;