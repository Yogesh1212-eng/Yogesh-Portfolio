import "./Skills.css";

const rowOne = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    light: true,
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "GCP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    light: true,
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

const rowTwo = [
  {
    name: "GCP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    light: true,
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    light: true,
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

const skills = [
  {
    number: "01",
    title: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "Frontend",
    items: ["HTML", "CSS", "React.js"],
  },
  {
    number: "03",
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "04",
    title: "Database",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas"],
  },
  {
    number: "05",
    title: "Core CS",
    items: ["DSA", "OOPS", "DBMS", "OS", "Computer Networks"],
  },
  {
    number: "06",
    title: "Cloud & Tools",
    items: ["GCP", "Git", "GitHub", "VS Code", "Cloudinary"],
  },
];

function LogoRow({ items, reverse = false }) {
  const duplicated = [...items, ...items];

  return (
    <div className={`tech-logo-row ${reverse ? "reverse" : ""}`}>
      {duplicated.map((item, index) => (
        <div className="tech-logo-box" key={`${item.name}-${index}`}>
          <img
            src={item.logo}
            alt={item.name}
            className={item.light ? "light-logo" : ""}
          />
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section className="tech-skills-section" id="skills">

      {/* Heading */}
      <div className="skills-heading">
        <h2>
          My <span>Tech Stack.</span>
        </h2>

        <p>
          Technologies and tools I use to design, build and deploy scalable
          digital experiences.
        </p>
      </div>

      {/* Moving logos */}
      <div className="tech-marquee">
        <LogoRow items={rowOne} />

        <LogoRow items={rowTwo} reverse />
      </div>

      {/* Section intro */}
      <div className="skills-section-intro">

        <div className="section-number">
          03
        </div>

        <div className="section-intro-text">
          <span>TECHNOLOGY STACK</span>
          <h3>From idea to production.</h3>
        </div>

        <div className="intro-line"></div>

      </div>

      {/* Skill Cards */}
      <div className="skills-grid">

        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill.number}
          >

            <div className="skill-card-top">

              <div>
                <span className="skill-number">
                  {skill.number}
                </span>

                <h3>
                  {skill.title}
                </h3>
              </div>

              <span className="skill-arrow">
                ↗
              </span>

            </div>

            <div className="skill-tags">

              {skill.items.map((item) => (
                <span
                  className="skill-tag"
                  key={item}
                >
                  <span className="tag-dot"></span>
                  {item}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;