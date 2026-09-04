import "./Achievements.css";

const achievements = [
  {
    number: "01",
    year: "2025–26",
    category: "LEADERSHIP",
    title: "GDG On Campus Organizer",
    description:
      "Google Developer Group On Campus Organizer at BBDNIIT, contributing to the developer community through events, workshops and technical initiatives.",
    highlight: "BBDNIIT",
  },

  {
    number: "02",
    year: "2026",
    category: "GOOGLE CLOUD",
    title: "Google Cloud Study Jams — Tier 1",
    description:
      "Achieved Tier 1 ranking in Google Cloud Study Jams and actively participated in Google Cloud learning initiatives.",
    highlight: "Tier 1 Ranked",
  },

  {
    number: "03",
    year: "2026",
    category: "GOOGLE",
    title: "Google Goodies & Swags",
    description:
      "Earned multiple official Google goodies and swags through participation and achievements in Google developer programs.",
    highlight: "Google Goodies",
  },

  {
    number: "04",
    year: "2025–26",
    category: "COMMUNITY",
    title: "Devfest Organizing Team & AI Community Volunteer",
    description:
      "Contributed as part of the Devfest organizing team and volunteered with the AI community in technical and community-driven activities.",
    highlight: "Volunteer",
  },

  {
    number: "05",
    year: "2023",
    category: "AWARD",
    title: "Sam Manekshaw Award",
    description:
      "Received the Sam Manekshaw Award for being recognized as the most bright and smartest child.",
    highlight: "Award",
  },

  {
    number: "06",
    year: "2026",
    category: "CODING",
    title: "300+ LeetCode DSA Problems",
    description:
      "Solved 300+ Data Structures and Algorithms problems on LeetCode, strengthening problem-solving and competitive programming skills.",
    highlight: "DSA",
  },

  {
    number: "07",
    year: "2025–26",
    category: "LEADERSHIP",
    title: "Technical Club Internal Coordinator",
    description:
      "Worked as the Internal Coordinator of the Technical Club at BBDNIIT, supporting technical activities and student initiatives.",
    highlight: "Coordinator",
  },

  {
    number: "08",
    year: "2024–25",
    category: "ROBOTICS",
    title: "Multiple Robotics Competition Winner",
    description:
      "Winner in Line Follower, Light Follower, Robo Marathon and Pick & Place competitions consecutively during college fest activities.",
    highlight: "Winner",
  },
  {
  number: "09",
  year: "2026",
  category: "NPTEL • IIT",
  title: "NPTEL Silver Medalist — Python & Object-Oriented Programming",
  description:
    "Earned Silver Medals in NPTEL certifications for Programming in Python and Object-Oriented Programming, conducted through the IITs.",
  highlight: "2× Silver Medalist",
},
];

function Achievements() {
  return (
    <section
      className="achievements-section"
      id="achievements"
    >
      {/* Background */}
      <div className="achievement-bg-glow achievement-bg-glow-one"></div>
      <div className="achievement-bg-glow achievement-bg-glow-two"></div>

      <div className="achievements-container">

        {/* HEADER */}
        <div className="achievements-heading">
          <span className="achievements-small-title">
            05 / ACHIEVEMENTS
          </span>

          <h2>
            Milestones & <span>Achievements.</span>
          </h2>

          <p>
            A timeline of achievements, leadership experiences
            and milestones from my journey in technology.
          </p>
        </div>


        {/* TIMELINE */}
        <div className="achievement-timeline">

          <div className="timeline-line"></div>

          {achievements.map((achievement, index) => {

            const isRight = index % 2 !== 0;

            return (
              <div
                className={`achievement-item ${
                  isRight
                    ? "achievement-item-right"
                    : "achievement-item-left"
                }`}
                key={achievement.number}
              >

                {/* CONTENT */}
                <div className="achievement-content">

                  <div className="achievement-meta">
                    <span className="achievement-number">
                      {achievement.number}
                    </span>

                    <span className="achievement-category">
                      {achievement.category}
                    </span>

                    <span className="achievement-year">
                      {achievement.year}
                    </span>
                  </div>

                  <h3>
                    {achievement.title}
                  </h3>

                  <p>
                    {achievement.description}
                  </p>

                  <span className="achievement-highlight">
                    {achievement.highlight}
                  </span>

                </div>


                {/* CENTER POINT */}
                <div className="achievement-dot">
                  <span></span>
                </div>


                {/* EMPTY SIDE FOR ALTERNATING LAYOUT */}
                <div className="achievement-space"></div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Achievements;