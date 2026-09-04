import { useEffect, useRef, useState } from "react";
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
    github:
      "https://github.com/Yogesh1212-eng/Event-Feedback",
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
    github:
      "https://github.com/Yogesh1212-eng/SmartCampus_AI",
  },
];

function Projects() {
  const sectionRef = useRef(null);

  const [activeProject, setActiveProject] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  /*
    Refs use kar rahe hain taaki wheel handler
    stale state ke saath kaam na kare.
  */
  const activeProjectRef = useRef(0);
  const wheelLock = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleWheel = (e) => {
      const rect =
        section.getBoundingClientRect();

      /*
        Section ko thoda tolerant range diya hai.

        Pehle:
        rect.top <= 5
        rect.bottom >= viewport - 5

        Ab:
        section agar viewport me properly aa gaya
        hai to project scroll lock kaam karega.
      */

      const viewportHeight =
        window.innerHeight;

      const sectionVisible =
        rect.top <= 120 &&
        rect.bottom >=
          viewportHeight - 120;

      if (!sectionVisible) {
        return;
      }

      /*
        Animation already chal rahi hai.
        Browser ko bilkul scroll nahi karne dena.
      */

      if (wheelLock.current) {
        e.preventDefault();
        return;
      }

      /*
        Small wheel movements ignore.
        Isse trackpad jitter kam hoga.
      */

      if (Math.abs(e.deltaY) < 8) {
        e.preventDefault();
        return;
      }

      /*
        Current project ref
        */
      const current =
        activeProjectRef.current;

      /* ========================================
         SCROLL DOWN
      ======================================== */

      if (e.deltaY > 0) {

        /*
          Jab tak:
          Project 1 -> Project 2
          Project 2 -> Project 3
          Project 3 -> View More

          tab tak browser scroll BLOCK rahega.
        */

        if (
          current <
          featuredProjects.length
        ) {
          e.preventDefault();

          /*
            Projects ko viewport ke exact top par
            softly lock kar dete hain.
          */

          if (rect.top > 2) {
            window.scrollTo({
              top:
                window.scrollY +
                rect.top,
              behavior: "auto",
            });
          }

          wheelLock.current = true;

          setIsLocked(true);

          const next =
            current + 1;

          activeProjectRef.current =
            next;

          setActiveProject(next);

          /*
            Slow enough so that fast wheel
            ek saath multiple project skip
            na kare.
          */

          setTimeout(() => {
            wheelLock.current = false;
          }, 950);

          return;
        }

        /*
          activeProject === 3

          Matlab View More visible hai.
          Ab normal browser scrolling allowed.
        */

        setIsLocked(false);

        return;
      }

      /* ========================================
         SCROLL UP
      ======================================== */

      if (e.deltaY < 0) {

        /*
          Project 3 -> Project 2
          Project 2 -> Project 1
          Project 1 -> section ke previous part

          Jab current > 0 hai tab page lock rahega.
        */

        if (current > 0) {
          e.preventDefault();

          /*
            Section ko top par hold rakho.
          */

          if (rect.top > 2) {
            window.scrollTo({
              top:
                window.scrollY +
                rect.top,
              behavior: "auto",
            });
          }

          wheelLock.current = true;

          setIsLocked(true);

          const previous =
            current - 1;

          activeProjectRef.current =
            previous;

          setActiveProject(previous);

          setTimeout(() => {
            wheelLock.current = false;
          }, 950);

          return;
        }

        /*
          Project 1 par ho aur user aur
          upar scroll kare -> browser ko
          normal scroll karne do.
        */

        setIsLocked(false);

        return;
      }
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, []);

  return (
    <section
      
      ref={sectionRef}
      className={`projects-section ${
        isLocked
          ? "projects-scroll-locked"
          : ""
      }`}
      id="projects"
    >
      {/* Glow */}

      <div className="projects-glow projects-glow-one"></div>

      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-container">

        {/* ======================================
            HEADING
        ====================================== */}

        <div className="projects-heading">

          <span className="projects-small-title">
            04 / PROJECTS
          </span>

          <h2>
            Things I've{" "}
            <span>Built.</span>
          </h2>

          <p>
            A collection of projects where ideas
            turned into functional digital
            experiences.
          </p>

        </div>


        {/* ======================================
            PROJECT VIEWPORT
        ====================================== */}

        <div className="projects-stage">

          {featuredProjects.map(
            (project, index) => {

              const isActive =
                index === activeProject;

              const isBehind =
                index < activeProject;

              return (
                <article
                  className={`project-card ${
                    isActive
                      ? "project-active"
                      : ""
                  } ${
                    isBehind
                      ? "project-behind"
                      : ""
                  }`}
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

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>


                    {/* TAGS */}

                    <div className="project-tags">

                      {project.tags.map(
                        (tag) => (
                          <span
                            className="project-tag"
                            key={tag}
                          >
                            {tag}
                          </span>
                        )
                      )}

                    </div>


                    {/* ACTION */}

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
            }
          )}


          {/* ====================================
              VIEW MORE
          ==================================== */}

          <div
            className={`view-more-projects ${
              activeProject ===
              featuredProjects.length
                ? "view-more-active"
                : ""
            }`}
          >

            <a
              href="/projects"
              className="view-more-button"
            >

              <span>
                View More Projects
              </span>

              <span className="view-more-arrow">
                ↗
              </span>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;