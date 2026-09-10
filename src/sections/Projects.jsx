import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles, Code2, Terminal, FolderGit2, ExternalLink, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const featuredProjects = [
  {
    number: "01",
    title: "Learning Management System",
    file: "LMS_Platform.tsx",
    version: "v1.2.0-prod",
    description:
      "A full-stack enterprise learning platform with JWT authentication, role-based access, course management, video uploads via Cloudinary, and progress tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/Yogesh1212-eng/LMS",
    live: "https://lms-3-7g0b.onrender.com/", // Aapka live link yahan aayega
  },
  {
    number: "02",
    title: "QR Code Entry System",
    file: "EntryVerification.py",
    version: "v2.0.4-prod",
    description:
      "A digital event and entry management system designed to automate registration, live verification, participant access logs, and rapid badge validation.",
    tags: ["Python", "QR Code", "Automation", "SQLite", "FastAPI"],
    github: "https://github.com/Yogesh1212-eng/Event-Feedback",
    live: "https://event-feedback-demo.vercel.app", // Aapka live link yahan aayega
  },
  {
    number: "03",
    title: "Smart Campus AI",
    file: "CampusAssistant.js",
    version: "v1.0.8-prod",
    description:
      "An intelligent digital campus platform built to improve student productivity, automate academic queries, and provide predictive campus navigation.",
    tags: ["HTML5", "CSS3", "JavaScript", "AI Integration", "FastAPI"],
    github: "https://github.com/Yogesh1212-eng/SmartCampus_AI",
    live: "https://smartcampus-ai-demo.vercel.app", // Aapka live link yahan aayega
  },
];

function Projects() {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  const handleNavigateProjects = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    navigate("/projects");
  };

  // Scroll karte waqt screen ke center wale card ko detect karna
  useEffect(() => {
    const handleScroll = () => {
      const vhCenter = window.innerHeight / 2;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= vhCenter && rect.bottom >= vhCenter) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-glow glow-left" />
      <div className="projects-glow glow-right" />
      <div className="projects-grid-bg" />

      <div className="projects-container">
        {/* HEADER */}
        <div className="projects-header">
          <span className="projects-badge">
            <Sparkles size={13} className="badge-sparkle" />
            04 / FEATURED LABS
          </span>
          <h2 className="projects-title">
            Things I've <span>Built.</span>
          </h2>
          <p className="projects-subtitle">
            Scroll down to explore production modules. Focused applications expand smoothly in view.
          </p>
        </div>

        {/* PROJECTS LIST WITH NATURAL SCROLL SCALE */}
        <div className="projects-mac-deck">
          {featuredProjects.map((project, index) => {
            const isSelected = activeCard === index;

            return (
              <article
                key={project.number}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`project-mac-window ${isSelected ? "card-scaled" : ""}`}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* MAC TITLEBAR */}
                <div className="mac-titlebar">
                  <div className="mac-traffic-lights">
                    <span className="traffic-dot dot-red" />
                    <span className="traffic-dot dot-yellow" />
                    <span className="traffic-dot dot-green" />
                  </div>

                  <div className="mac-tab">
                    <Terminal size={12} className="tab-terminal-icon" />
                    <span className="mac-filename">{project.file}</span>
                  </div>

                  <div className="mac-meta-badge">
                    <span className="live-indicator" />
                    {project.version}
                  </div>
                </div>

                {/* WINDOW BODY */}
                <div className="mac-window-body">
                  <div className="mac-content-left">
                    <div className="mac-card-id">
                      <span>BUILD</span> // {project.number}
                    </div>
                    <h3 className="mac-project-title">{project.title}</h3>
                    <p className="mac-project-desc">{project.description}</p>

                    <div className="mac-tags-row">
                      {project.tags.map((tag) => (
                        <span key={tag} className="mac-tag">
                          <span className="tag-pulse" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CODE RIGHT PANE */}
                  <div className="mac-content-right">
                    <div className="code-preview-pane">
                      <div className="code-lines">
                        <span className="c-keyword">import</span> &#123; Module &#125; <span className="c-keyword">from</span> <span className="c-string">"@core/runtime"</span>;
                        <br />
                        <span className="c-keyword">const</span> app = <span className="c-keyword">new</span> Module.Init();
                        <br />
                        app.<span className="c-func">execute</span>(&#123;
                        <br />
                        &nbsp;&nbsp;id: <span className="c-string">"{project.number}"</span>,
                        <br />
                        &nbsp;&nbsp;state: <span className="c-const">ACTIVE_PROD</span>
                        <br />
                        &#125;);
                      </div>

                      {/* ACTION BUTTONS: INSPECT SOURCE & LIVE DEMO */}
                      <div className="mac-buttons-row">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="mac-action-btn github-action-btn"
                        >
                          <Code2 size={15} />
                          <span>Inspect Source</span>
                          <ExternalLink size={13} />
                        </a>

                        <a
                          href={project.live || project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="mac-action-btn live-action-btn"
                        >
                          <Globe size={15} />
                          <span>Live Demo</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mac-glow-rim" />
              </article>
            );
          })}
        </div>

        {/* ALWAYS VISIBLE SHOWCASE CTA */}
        <div className="projects-bottom-cta">
          <button
            type="button"
            className="projects-showcase-btn"
            onClick={handleNavigateProjects}
            aria-label="View all projects"
          >
            <div className="btn-ambient-halo" />
            <span className="btn-tag-pill">
              <FolderGit2 size={13} />
              SHOWCASE
            </span>
            <span className="btn-main-text">VIEW ALL PROJECTS</span>
            <div className="btn-arrow-sphere">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;