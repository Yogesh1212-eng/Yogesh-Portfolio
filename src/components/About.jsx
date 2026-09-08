import {
  Code2,
  GraduationCap,
  Users,
  Brain,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

function About({ darkMode }) {
  /*
   * GCP CARD COLORS
   * Sab styling isi file me hai.
   */
  const gcpCardStyle = {
    position: "relative",
    overflow: "hidden",

    opacity: 1,

    display: "block",

    color: darkMode ? "#ffffff" : "#111111",

    background: darkMode
      ? "linear-gradient(135deg, #f4eded 0%, #f5eeef 55%, #110f0f 100%)"
      : "linear-gradient(135deg, rgb(161, 79, 79) 0%, rgb(241, 8, 8) 100%)",

    border: darkMode
      ? "1px solid rgb(248, 245, 245)"
      : "1px solid rgb(229, 198, 199)",

    boxShadow: darkMode
      ? "0 18px 45px rgba(0,0,0,0.30), 0 0 30px rgba(229,9,20,0.14)"
      : "0 18px 40px rgba(0,0,0,0.08), 0 0 25px rgba(229,9,20,0.06)",

    zIndex: 5,
  };

  const gcpIconStyle = {
    color: darkMode ? "#902424" : "#fbf3f3",

    background: darkMode
      ? "rgb(227, 13, 13)"
      : "rgb(245, 11, 23)",

    border: darkMode
      ? "1px solid rgb(240, 233, 233)"
      : "1px solid rgba(228, 217, 218, 0.98)",

    position: "relative",
    zIndex: 10,
  };

  const gcpLabelStyle = {
    display: "block",

    color: darkMode
      ? "rgba(255,255,255,0.82)"
      : "#f1ecec",

    opacity: 1,

    position: "relative",
    zIndex: 10,
  };

  const gcpTitleStyle = {
    color: darkMode ? "#ffffff" : "#111111",

    opacity: 1,

    position: "relative",
    zIndex: 10,
  };

  const gcpDescriptionStyle = {
    color: darkMode
      ? "rgba(255,255,255,0.74)"
      : "rgba(20,20,20,0.68)",

    opacity: 1,

    position: "relative",
    zIndex: 10,
  };

  const gcpArrowStyle = {
    color: darkMode ? "#f5eded" : "#100101",

    opacity: 1,

    position: "absolute",
    right: "22px",
    bottom: "20px",

    zIndex: 10,
  };

  return (
    <section
      className="about-section"
      id="about"
    >

      {/* =================================================
          BACKGROUND TEXT
      ================================================= */}

      <div className="about-bg-text">
        ABOUT
      </div>


      <div className="about-container">

        {/* =================================================
            LEFT COLUMN
        ================================================= */}

        <div className="about-left">

          {/* 01 / ABOUT ME */}

          <div
            className="section-number about-section-number"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",

              width: "max-content",
              minWidth: "max-content",

              height: "auto",
              minHeight: "0",

              margin: "0 0 22px 0",
              padding: "0",

              gap: "8px",

              border: "0",
              borderRadius: "0",

              background: "transparent",

              color: "#e50914",

              fontSize: "10px",
              fontWeight: 700,

              letterSpacing: "0.18em",
              lineHeight: 1,

              whiteSpace: "nowrap",
              overflow: "visible",

              writingMode: "horizontal-tb",
            }}
          >

            <span
              style={{
                display: "inline-block",
                width: "auto",
                whiteSpace: "nowrap",
                color: "#e50914",
              }}
            >
              01
            </span>


            <span
              style={{
                display: "inline-block",
                width: "auto",
                whiteSpace: "nowrap",
                color: "#e50914",
                opacity: 0.55,
              }}
            >
              /
            </span>


            <span
              style={{
                display: "inline-block",
                width: "auto",
                whiteSpace: "nowrap",
                color: "#e50914",
              }}
            >
              ABOUT ME
            </span>

          </div>


          {/* HEADING */}

          <h2 className="about-heading">
            Turning ideas into{" "}
            <span>
              scalable digital experiences.
            </span>
          </h2>


          <div className="about-line"></div>


          {/* DESCRIPTION */}

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
            RIGHT COLUMN
        ================================================= */}

        <div className="about-right">

          {/* =================================================
              FULL STACK CARD
          ================================================= */}

          <div className="about-card main-card">

            <div className="card-icon">
              <Code2 size={25} />
            </div>

            <div>

              <span>
                FOCUS
              </span>

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


          {/* =================================================
              BENTO GRID
          ================================================= */}

          <div className="about-grid">

            {/* EDUCATION */}

            <div className="about-card">

              <div className="card-icon">
                <GraduationCap size={22} />
              </div>

              <span>
                EDUCATION
              </span>

              <h3>
                B.Tech CSE (AKTU)
              </h3>

              <p>
                2023 – 2027 • CGPA: 7.8
              </p>

            </div>


            {/* LEADERSHIP */}

            <div className="about-card">

              <div className="card-icon">
                <Users size={22} />
              </div>

              <span>
                LEADERSHIP
              </span>

              <h3>
                GDG on Campus Lead
              </h3>

              <p>
                Leading 1000+ student developers
                & tech events
              </p>

            </div>


            {/* PROBLEM SOLVING */}

            <div className="about-card">

              <div className="card-icon">
                <Brain size={22} />
              </div>

              <span>
                PROBLEM SOLVING
              </span>

              <h3>
                300+ LeetCode Solved
              </h3>

              <p>
                Data Structures & Algorithms
              </p>

            </div>


            {/* =================================================
                GCP CARD — FULLY CONTROLLED HERE
            ================================================= */}

            <div
              className="about-card journey-card gcp-card"
              style={gcpCardStyle}
            >

              {/* GLOW */}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  zIndex: 1,

                  background: darkMode
                    ? "radial-gradient(circle at 85% 20%, rgba(255,255,255,0.12), transparent 40%)"
                    : "radial-gradient(circle at 85% 20%, rgba(229,9,20,0.07), transparent 40%)",
                }}
              />


              {/* ICON */}

              <div
                className="card-icon"
                style={gcpIconStyle}
              >
                <Cloud size={22} />
              </div>


              {/* LABEL */}

              <span
                className="gcp-label"
                style={gcpLabelStyle}
              >
                CLOUD
              </span>


              {/* TITLE */}

              <h3
                className="gcp-title"
                style={gcpTitleStyle}
              >
                Building on GCP
              </h3>


              {/* DESCRIPTION */}

              <p
                className="gcp-description"
                style={gcpDescriptionStyle}
              >
                Cloud technologies & scalable systems
              </p>


              {/* ARROW */}

              <ArrowUpRight
                className="gcp-arrow"
                size={25}
                style={gcpArrowStyle}
              />

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          BOTTOM INDICATOR
      ================================================= */}

      <div className="about-scroll">

        <div></div>

        SCROLL TO EXPLORE

      </div>

    </section>
  );
}

export default About;