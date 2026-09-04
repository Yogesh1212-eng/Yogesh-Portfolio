import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const featuredProjects = [
  {
    number: "01",
    title: "Learning Management System",
    description:
      "A full-stack learning platform with authentication, role-based access, course management, lecture uploads and student learning features.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/Yogesh1212-eng/LMS",
  },
  {
    number: "02",
    title: "QR Code-Based Entry Management System",
    description:
      "A digital event and entry management system designed to simplify registration, verification and participant access.",
    tags: ["Python", "QR Code", "Automation", "Database"],
    github: "https://github.com/Yogesh1212-eng/Event-Feedback",
  },
  {
    number: "03",
    title: "Smart Campus AI",
    description:
      "An AI-powered campus platform designed to improve student experience and provide smart automation.",
    tags: ["HTML", "CSS", "JavaScript", "AI"],
    github: "https://github.com/Yogesh1212-eng/SmartCampus_AI",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const wheelLock = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();

      // Projects viewport ke andar hai ya nahi
      const insideSection =
        rect.top <= 5 && rect.bottom >= window.innerHeight - 5;

      if (!insideSection) return;

      // Agar animation already chal rahi hai
      if (wheelLock.current) {
        e.preventDefault();
        return;
      }

      /*
        DOWN SCROLL
      */
      if (e.deltaY > 0) {
        // Project 1 -> 2 -> 3 -> View More
        if (activeProject < featuredProjects.length) {
          e.preventDefault();

          wheelLock.current = true;
          setIsLocked(true);

          setActiveProject((prev) => prev + 1);

          setTimeout(() => {
            wheelLock.current = false;
          }, 700);

          return;
        }

        /*
          View More ke baad browser ko
          normal scroll karne do.
        */
        setIsLocked(false);
        return;
      }

      /*
        UP SCROLL
      */
      if (e.deltaY < 0) {
        if (activeProject > 0) {
          e.preventDefault();

          wheelLock.current = true;
          setIsLocked(true);

          setActiveProject((prev) => prev - 1);

          setTimeout(() => {
            wheelLock.current = false;
          }, 700);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeProject]);

  return (
    <section
      ref={sectionRef}
      className={`projects-section ${
        isLocked ? "projects-scroll-locked" : ""
      }`}
      id="projects"
    >
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-container">

        {/* HEADING */}
        <div className="projects-heading">
          <span className="projects-small-title">
            04 / PROJECTS
          </span>

          <h2>
            Things I've <span>Built.</span>
          </h2>

          <p>
            A collection of projects where ideas turned into
            functional digital experiences.
          </p>
        </div>

        {/* PROJECT VIEWPORT */}
        <div className="projects-stage">

          {featuredProjects.map((project, index) => {
            const isActive = index === activeProject;

            /*
              Project already passed
              stays behind.
            */
            const isBehind = index < activeProject;

            return (
              <article
                className={`project-card ${
                  isActive ? "project-active" : ""
                } ${isBehind ? "project-behind" : ""}`}
                key={project.number}
              >

                {/* TOP */}
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-status">
                    FEATURED PROJECT
                  </span>
                </div>

                {/* VISUAL */}
                <div className="project-visual">
                  <div className="visual-grid"></div>

                  <div className="visual-content">
                    <span className="visual-number">
                      {project.number}
                    </span>

                    <span className="visual-label">
                      FULL STACK
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        className="project-tag"
                        key={tag}
                      >
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

          {/* VIEW MORE */}
          <div
            className={`view-more-projects ${
              activeProject === featuredProjects.length
                ? "view-more-active"
                : ""
            }`}
          >
            <a
              href="/projects"
              className="view-more-button"
            >
              <span>View More Projects</span>
              <span className="view-more-arrow">↗</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;