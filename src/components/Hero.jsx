import {
  FileText,
  ArrowRight,
} from "lucide-react";

function Hero() {
  return (
    <main className="hero">

      {/* ================= MAIN CONTENT ================= */}
      <section
        id="home"
        className="hero-content"
      >

        {/* BIG PORTFOLIO TEXT */}
        <div className="portfolio-title">
          PORTFOLIO
        </div>


        {/* PROFILE IMAGE */}
        <div className="profile-container">
          <img
            src="/profile.png"
            alt="Yogesh Maurya"
            className="profile-image"
          />
        </div>


        {/* RIGHT CONTENT */}
        <div className="hero-info">

          <div className="role-wrapper">

            <div className="full-stack">
              Full Stack
            </div>

            <h1>
              Developer
            </h1>

          </div>


          <p className="description">
            Hi, I'm Yogesh Maurya — a Computer Science Engineering
            student and full stack developer passionate about building
            scalable, creative and impactful digital experiences.
          </p>


          {/* ================= BUTTONS ================= */}

          <div className="action-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects

              <ArrowRight size={18} />
            </a>


            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              <FileText size={18} />

              Resume
            </a>

          </div>


          {/* ================= SOCIAL BUTTONS ================= */}

          <div className="social-buttons">

            <a
              href="https://github.com/Yogesh1212-eng"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>


            <a
              href="https://www.linkedin.com/in/yogesh-maurya-4010b2325/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* ================= SCROLL INDICATOR ================= */}

      <div className="scroll-indicator">
        <span>
          Scroll to explore
        </span>

        <span className="scroll-arrow">
          ↓
        </span>
      </div>

    </main>
  );
}

export default Hero;