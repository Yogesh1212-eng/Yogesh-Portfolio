import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const featuredProjects = [
  {
    number: "01",
    title: "Learning Management System",
    description:
      "A full-stack learning platform with authentication, role-based access, course management, lecture uploads and student learning features.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com/Yogesh1212-eng/LMS",
  },
  {
    number: "02",
    title: "QR Code-Based Entry Management System",
    description:
      "A digital event and entry management system designed to simplify registration, verification and participant access.",
    tags: [
      "Python",
      "QR Code",
      "Automation",
      "Database",
    ],
    github: "https://github.com/Yogesh1212-eng/Event-Feedback",
  },
  {
    number: "03",
    title: "Smart Campus AI",
    description:
      "An AI-powered campus platform designed to improve student experience and provide smart automation.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "AI",
    ],
    github: "https://github.com/Yogesh1212-eng/SmartCampus_AI",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Fresh references for instant wheel/touch handling without state delay
  const activeRef = useRef(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  const handleNavigateProjects = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Naye page ko top se open karne ke liye scroll reset
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    navigate("/projects");
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* =========================================================
       PROJECT LOCKING CONTROLLER
    ========================================================= */
    const changeCard = (direction) => {
      if (isAnimating.current) return true;

      const current = activeRef.current;

      // Downwards / Next Card
      if (direction === "next") {
        if (current < featuredProjects.length - 1) {
          isAnimating.current = true;
          const next = current + 1;
          activeRef.current = next;
          setActiveProject(next);

          setTimeout(() => {
            isAnimating.current = false;
          }, 650);

          return true; // Scroll blocked, card transitioned
        }
        return false; // Last card reached, allow normal scroll to next section
      }

      // Upwards / Previous Card
      if (direction === "prev") {
        if (current > 0) {
          isAnimating.current = true;
          const prev = current - 1;
          activeRef.current = prev;
          setActiveProject(prev);

          setTimeout(() => {
            isAnimating.current = false;
          }, 650);

          return true; // Scroll blocked, card transitioned
        }
        return false; // First card reached, allow normal scroll back to Skills
      }

      return false;
    };

    // Laptop Mouse Wheel
    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 80 && rect.bottom >= window.innerHeight - 80;

      if (!inView) return;

      if (Math.abs(e.deltaY) < 10) return;

      if (e.deltaY > 0) {
        const lock = changeCard("next");
        if (lock) {
          e.preventDefault();
        }
      } else if (e.deltaY < 0) {
        const lock = changeCard("prev");
        if (lock) {
          e.preventDefault();
        }
      }
    };

    // Mobile Touch
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 60 && rect.bottom >= window.innerHeight - 60;

      if (!inView) return;

      const currentY = e.touches[0].clientY;
      const diff = touchStartY.current - currentY;

      if (Math.abs(diff) > 35) {
        if (diff > 0) {
          const lock = changeCard("next");
          if (lock) {
            e.preventDefault();
            touchStartY.current = currentY;
          }
        } else {
          const lock = changeCard("prev");
          if (lock) {
            e.preventDefault();
            touchStartY.current = currentY;
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section className="projects-section" ref={sectionRef} id="projects">
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-container">
        {/* HEADING */}
        <div className="projects-heading">
          <span className="projects-small-title">04 / PROJECTS</span>
          <h2>
            Things I've <span>Built.</span>
          </h2>
          <p>
            A collection of projects where ideas turned into functional digital experiences.
          </p>
        </div>

        {/* ANIMATED CARD STACK */}
        <div className="projects-card-stack">
          {featuredProjects.map((project, index) => {
            const isCurrent = index === activeProject;
            const isPassed = index < activeProject;

            let cardClass = "card-future";
            if (isCurrent) cardClass = "card-current";
            if (isPassed) cardClass = "card-passed";

            return (
              <article
                key={project.number}
                className={`project-card ${cardClass}`}
                style={{
                  "--depth": activeProject - index,
                  zIndex: index + 10,
                }}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">FEATURED PROJECT</span>
                </div>

                <div className="project-visual">
                  <div className="visual-grid"></div>
                  <div className="visual-content">
                    <span className="visual-number">{project.number}</span>
                    <span className="visual-label">FULL STACK</span>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* RESTORED TECH STACK WITH RED DOT & BORDER */}
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        <span className="tag-dot"></span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button github-button"
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* DOTS & BUTTON */}
        <div className="projects-bottom-bar">
          <div className="projects-dots">
            {featuredProjects.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`project-dot ${i === activeProject ? "active" : ""}`}
                onClick={() => {
                  activeRef.current = i;
                  setActiveProject(i);
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <div className="projects-action-wrapper">
            <button
              type="button"
              className="projects-cta-button"
              onClick={handleNavigateProjects}
              aria-label="View all projects"
            >
              <div className="btn-glow-layer"></div>

              <span className="btn-tag">
                <Sparkles size={13} className="sparkle-icon" />
                SHOWCASE
              </span>

              <span className="btn-title">VIEW ALL PROJECTS</span>

              <div className="btn-arrow-badge">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;