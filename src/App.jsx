import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import CodingProfile from "./sections/CodingProfile";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import AllProjects from "./pages/AllProjects";
import Achievements from "./sections/Achievements";
import "./App.css";

function Home({ darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Hero
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <About />

      <CodingProfile />

      <Skills />

      <Projects />
      <Achievements />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN PORTFOLIO */}
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        {/* ALL PROJECTS PAGE */}
        <Route
          path="/projects"
          element={
            <div className={darkMode ? "app dark" : "app light"}>
              <AllProjects />
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;