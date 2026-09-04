import "./AllProjects.css";

const allProjects = [
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

  {
    number: "04",
    title: "Jarvis Virtual Assistant",
    description:
      "A Python-based virtual assistant designed to perform useful tasks through voice interaction and automation.",
    tags: ["Python", "Automation", "Voice Assistant", "AI"],
    github: "https://github.com/Yogesh1212-eng/Jarvis",
  },

  {
    number: "05",
    title: "Flappy Bird",
    description:
      "A browser-based recreation of the classic Flappy Bird game with interactive gameplay and score tracking.",
    tags: ["HTML", "CSS", "JavaScript", "Game"],
    github: "https://github.com/Yogesh1212-eng/Flappy-Bird",
  },

  {
    number: "06",
    title: "Weather App",
    description:
      "A weather application that displays real-time weather information using a weather API.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Yogesh1212-eng/Weather-App",
  },

  {
    number: "07",
    title: "Matrix Calculator",
    description:
      "A calculator application for performing matrix operations with a simple and interactive interface.",
    tags: ["Python", "Matrix", "Calculator"],
    github: "https://github.com/Yogesh1212-eng/Matrix-Calculator",
  },
];

function AllProjects() {
  return (
    <section className="all-projects-page">

      <div className="all-projects-glow all-projects-glow-one"></div>
      <div className="all-projects-glow all-projects-glow-two"></div>

      <div className="all-projects-container">

        {/* HEADER */}
        <div className="all-projects-heading">

          <span className="all-projects-small-title">
            04 / ALL PROJECTS
          </span>

          <h1>
            Things I've <span>Built.</span>
          </h1>

          <p>
            Explore my complete collection of projects, experiments
            and digital experiences.
          </p>

        </div>


        {/* PROJECT GRID */}
        <div className="all-projects-grid">

          {allProjects.map((project) => (

            <article
              className={`all-project-card ${
                project.number === "07"
                  ? "all-project-card-last"
                  : ""
              }`}
              key={project.number}
            >

              {/* TOP */}
              <div className="all-project-top">

                <span className="all-project-number">
                  {project.number}
                </span>

                <span className="all-project-label">
                  PROJECT
                </span>

              </div>


              {/* VISUAL */}
              <div className="all-project-visual">

                <div className="all-project-grid-bg"></div>

                <div className="all-project-visual-content">

                  <span className="all-project-visual-number">
                    {project.number}
                  </span>

                  <span className="all-project-visual-label">
                    BUILD
                  </span>

                </div>

              </div>


              {/* CONTENT */}
              <div className="all-project-content">

                <h2>{project.title}</h2>

                <p>{project.description}</p>


                {/* TAGS */}
                <div className="all-project-tags">

                  {project.tags.map((tag) => (

                    <span
                      className="all-project-tag"
                      key={tag}
                    >
                      <span>•</span>
                      {tag}
                    </span>

                  ))}

                </div>


                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="all-project-github"
                >
                  GitHub
                  <span>↗</span>
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AllProjects;