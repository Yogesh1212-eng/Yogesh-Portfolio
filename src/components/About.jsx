import {
  Code2,
  GraduationCap,
  Users,
  Brain,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">

      {/* Background Text */}
      <div className="about-bg-text">
        ABOUT
      </div>

      <div className="about-container">

        {/* =================================================
            LEFT COLUMN
        ================================================= */}

        <div className="about-left">

          <div className="section-number">
            <span>01</span>
            <span>/</span>
            <span>ABOUT ME</span>
          </div>

          <h2 className="about-heading">
            Turning ideas into{" "}
            <span>scalable digital experiences.</span>
          </h2>

          <div className="about-line"></div>

          <p className="about-description">
            I'm Yogesh Maurya, a Computer Science Engineering student
            and Full Stack Developer focused on building end-to-end
            web applications and automation systems.
          </p>

          <p className="about-description">
            Experienced in the MERN stack, Python, and cloud tools —
            with hands-on experience building and deploying
            real-world applications.
          </p>

        </div>


        {/* =================================================
            RIGHT COLUMN - BENTO GRID
        ================================================= */}

        <div className="about-right">

          {/* ---------------------------------------------
              CARD 1 - CORE STACK
          --------------------------------------------- */}

          <div className="about-card main-card">

            <div className="card-icon">
              <Code2 size={25} />
            </div>

            <div>
              <span>FOCUS</span>

              <h3>
                Full Stack & Cloud
              </h3>

              <p className="tech-badges">
                <b>JavaScript</b>
                <i>•</i>
                <b>React.js</b>
                <i>•</i>
                <b>Node.js</b>
                <i>•</i>
                <b>Express.js</b>
                <i>•</i>
                <b>MongoDB</b>
                <i>•</i>
                <b>SQL</b>
                <i>•</i>
                <b>Python</b>
                <i>•</i>
                <b>GCP</b>
              </p>
            </div>

          </div>


          {/* ---------------------------------------------
              SMALL BENTO GRID
          --------------------------------------------- */}

          <div className="about-grid">

            {/* Education */}

            <div className="about-card">

              <div className="card-icon">
                <GraduationCap size={22} />
              </div>

              <span>EDUCATION</span>

              <h3>
                B.Tech CSE (AKTU)
              </h3>

              <p>
                2023 – 2027 • CGPA: 7.8
              </p>

            </div>


            {/* Leadership */}

            <div className="about-card">

              <div className="card-icon">
                <Users size={22} />
              </div>

              <span>LEADERSHIP</span>

              <h3>
                GDG on Campus Lead
              </h3>

              <p>
                Leading 1000+ student developers
                & tech events
              </p>

            </div>


            {/* Problem Solving */}

            <div className="about-card">

              <div className="card-icon">
                <Brain size={22} />
              </div>

              <span>PROBLEM SOLVING</span>

              <h3>
                300+ LeetCode Solved
              </h3>

              <p>
                Data Structures & Algorithms
              </p>

            </div>


            {/* Cloud */}

            <div className="about-card journey-card">

              <div className="card-icon">
                <Cloud size={22} />
              </div>

              <span>CLOUD</span>

              <h3>
                Building on GCP
              </h3>

              <p>
                Cloud technologies & scalable systems
              </p>

              <ArrowUpRight
                className="journey-arrow"
                size={25}
              />

            </div>

          </div>

        </div>

      </div>


      {/* Bottom indicator */}

      <div className="about-scroll">
        <div></div>
        SCROLL TO EXPLORE
      </div>

    </section>
  );
}

export default About;