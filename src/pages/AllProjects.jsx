import React from "react";
import { ArrowLeft, ArrowUpRight, Code2, Globe, Terminal, Sparkles, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";
import "./AllProjects.css";

const allProjects = [
  {
    number: "01",
    file: "LMS_Platform.tsx",
    title: "Learning Management System",
    description:
      "A full-stack learning platform with authentication, role-based access, course management, lecture uploads and student learning features.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/Yogesh1212-eng/LMS",
    live: "https://lms-3-7g0b.onrender.com/",
  },
  {
    number: "02",
    file: "EntryVerification.py",
    title: "QR Code-Based Entry Management System",
    description:
      "A digital event and entry management system designed to simplify registration, verification and participant access.",
    tags: ["Python", "QR Code", "Automation", "Database"],
    github: "https://github.com/Yogesh1212-eng/Event-Feedback",
    live: "https://event-feedback-demo.vercel.app",
  },
  {
    number: "03",
    file: "CampusAssistant.js",
    title: "Smart Campus AI",
    description:
      "An AI-powered campus platform designed to improve student experience and provide smart automation.",
    tags: ["HTML", "CSS", "JavaScript", "AI"],
    github: "https://github.com/Yogesh1212-eng/SmartCampus_AI",
    live: "https://smartcampus-ai-demo.vercel.app",
  },
  {
    number: "04",
    file: "JarvisAssistant.py",
    title: "Jarvis Virtual Assistant",
    description:
      "A Python-based virtual assistant designed to perform useful tasks through voice interaction and automation.",
    tags: ["Python", "Automation", "Voice Assistant", "AI"],
    github: "https://github.com/Yogesh1212-eng/Jarvis",
    live: "https://github.com/Yogesh1212-eng/Jarvis",
  },
  {
    number: "05",
    file: "FlappyEngine.js",
    title: "Flappy Bird",
    description:
      "A browser-based recreation of the classic Flappy Bird game with interactive gameplay and score tracking.",
    tags: ["HTML", "CSS", "JavaScript", "Game"],
    github: "https://github.com/Yogesh1212-eng/Flappy-Bird",
    live: "https://flappy-bird-demo.vercel.app",
  },
  {
    number: "06",
    file: "WeatherRuntime.js",
    title: "Weather App",
    description:
      "A weather application that displays real-time weather information using a weather API.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Yogesh1212-eng/Weather-App",
    live: "https://lucent-biscuit-f49b1e.netlify.app/",
  },
  {
    number: "07",
    file: "MatrixCalc.py",
    title: "Matrix Calculator",
    description:
      "A calculator application for performing matrix operations with a simple and interactive interface.",
    tags: ["Python", "Matrix", "Calculator"],
    github: "https://github.com/Yogesh1212-eng/QSkill_Internships_Projects/blob/main/Project%201",
    live: "https://matrix-calculator-flask.onrender.com/",
  },
];

function AllProjects() {
  return (
    <section className="all-projects-page">
      <div className="all-projects-glow all-projects-glow-one" />
      <div className="all-projects-glow all-projects-glow-two" />
      <div className="all-projects-grid-bg-overlay" />

      <div className="all-projects-container">
        {/* BACK BUTTON */}
        <Link
          to="/"
          className="all-projects-back-btn"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
        >
          <ArrowLeft size={16} />
          <span>BACK TO PORTFOLIO</span>
        </Link>

        {/* HEADER */}
        <div className="all-projects-heading">
          <div className="all-projects-eyebrow">
            <FolderGit2 size={13} className="eyebrow-icon" />
            <span>04 / SYSTEM REPOSITORY</span>
          </div>

          <h1>
            Things I've <span>Built.</span>
          </h1>

          <p>
            An exhaustive index of full-stack platforms, machine automation modules, AI assistants, and interactive client builds.
          </p>
        </div>

        {/* STATS STRIP BAR */}
        <div className="projects-vault-stats">
          <div className="stat-unit">
            <span>TOTAL MODULES</span>
            <strong>{String(allProjects.length).padStart(2, "0")} REPOSITORIES</strong>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit">
            <span>RUNTIME ENVIRONMENT</span>
            <strong>PRODUCTION READY</strong>
          </div>
          <div className="stat-divider" />
          <div className="stat-status-chip">
            <span className="pulse-dot" />
            <span>ALL SYSTEMS VERIFIED</span>
          </div>
        </div>

        {/* PROJECT GRID (MACBOOK WINDOW TERMINALS) */}
        <div className="all-projects-grid">
          {allProjects.map((project, index) => (
            <article
              className={`all-project-card ${
                index === allProjects.length - 1 && allProjects.length % 2 !== 0
                  ? "all-project-card-last"
                  : ""
              }`}
              key={project.number}
            >
              {/* MAC TERMINAL TITLEBAR */}
              <div className="mac-terminal-top">
                <div className="mac-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>

                <div className="mac-tab-pill">
                  <Terminal size={11} className="tab-icon" />
                  <span className="mac-filename">{project.file}</span>
                </div>

                <div className="mac-version-badge">
                  <span className="badge-live-dot" />
                  v1.{index}.0
                </div>
              </div>

              {/* CARD BODY */}
              <div className="all-project-content">
                <div className="project-id-row">
                  <span className="project-id-tag">BUILD // {project.number}</span>
                  <span className="project-type-tag">FULL STACK</span>
                </div>

                <h2>{project.title}</h2>
                <p>{project.description}</p>

                {/* TECH STACK TAGS */}
                <div className="all-project-tags">
                  {project.tags.map((tag) => (
                    <span className="all-project-tag" key={tag}>
                      <span className="tag-dot" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* DUAL ACTION BUTTONS (GITHUB & LIVE DEMO) */}
                <div className="all-project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn github-btn"
                  >
                    <Code2 size={15} />
                    <span>Source Code</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn live-btn"
                  >
                    <Globe size={15} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="card-ambient-sheen" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProjects;