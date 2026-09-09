import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import "./Achievements.css";

const achievements = [
  {
    number: "01",
    year: "2025–26",
    category: "COMMUNITY LEADERSHIP",
    title: "GDG On Campus Organizer",
    description:
      "Leading the developer ecosystem at BBDNIIT, driving technical workshops, hackathons, and Google Cloud study pathways.",
    highlight: "Primary Organizer",
  },
  {
    number: "02",
    year: "2026",
    category: "GOOGLE CLOUD",
    title: "Google Cloud Study Jams — Tier 1",
    description:
      "Ranked in Tier 1 nationwide for Google Cloud developer cohorts, completing specialized cloud architectures and labs.",
    highlight: "Tier 1 Ranked",
  },
  {
    number: "03",
    year: "2026",
    category: "NPTEL • IITs",
    title: "NPTEL Silver Medalist — Python & OOP",
    description:
      "Awarded elite Silver Medals across advanced Python and Object-Oriented Programming exams conducted by IIT faculties.",
    highlight: "2× Silver Medalist",
  },
  {
    number: "04",
    year: "2026",
    category: "COMPETITIVE CODING",
    title: "300+ LeetCode DSA Problems",
    description:
      "Consistently mastered complex data structures, dynamic programming algorithms, and optimization patterns.",
    highlight: "300+ Solved",
  },
  {
    number: "05",
    year: "2024–25",
    category: "ROBOTICS CHAMPION",
    title: "Consecutive Robotics Competitions Winner",
    description:
      "Swept first place in Line Follower, Light Follower, Robo-Marathon, and Pick & Place technical fest challenges.",
    highlight: "Multi-Trophy Champion",
  },
  {
    number: "06",
    year: "2026",
    category: "RECOGNITION",
    title: "Official Google Goodies & Swags",
    description:
      "Awarded official Google developer swags, backpacks, and certificates for high-tier program contributions.",
    highlight: "Verified Rewards",
  },
  {
    number: "07",
    year: "2025–26",
    category: "CORE LEADERSHIP",
    title: "Technical Club Internal Coordinator",
    description:
      "Orchestrating internal team directives, student hackathons, and campus technology development initiatives.",
    highlight: "Internal Coordinator",
  },
  {
    number: "08",
    year: "2025–26",
    category: "TECH ECOSYSTEM",
    title: "DevFest Team & AI Community Volunteer",
    description:
      "Assisted large-scale community operations, speaker sessions, and hackathon infrastructure during DevFest.",
    highlight: "Key Volunteer",
  },
  {
    number: "09",
    year: "2023",
    category: "HONORARY RECOGNITION",
    title: "Sam Manekshaw Award",
    description:
      "Conferred the honorary recognition award celebrating scholastic merit, intellectual acumen, and student excellence.",
    highlight: "Merit Award",
  },
];

function Achievements() {
  return (
    <section className="clean-timeline-section" id="achievements">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="timeline-glow glow-left" />
      <div className="timeline-glow glow-right" />
      <div className="timeline-grid-pattern" />

      <div className="timeline-container">
        {/* HEADER */}
        <header className="timeline-header">
          <div className="timeline-pill-badge">
            <Sparkles size={12} className="pill-sparkle" />
            <span>05 / CAREER MILESTONES</span>
          </div>

          <h2 className="timeline-headline">
            Milestones & <span>Achievements.</span>
          </h2>

          <p className="timeline-subtitle">
            A chronological progression of leadership mandates, competitive honors, and engineering milestones.
          </p>
        </header>

        {/* TIMELINE TRACK */}
        <div className="timeline-track">
          {/* CENTER LASER LINE */}
          <div className="timeline-spine-line" />

          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.number}
                className={`timeline-node ${isEven ? "node-left" : "node-right"}`}
              >
                {/* CONTENT (NO BOX, PURE TYPOGRAPHY) */}
                <div className="timeline-content">
                  <div className="timeline-meta-row">
                    <span className="timeline-num">{item.number}</span>
                    <span className="timeline-cat">{item.category}</span>
                    <span className="timeline-year">{item.year}</span>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>

                  <div className="timeline-highlight-wrap">
                    <span className="timeline-highlight">
                      {item.highlight}
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>

                {/* CENTER GLOWING DOT */}
                <div className="timeline-anchor">
                  <div className="anchor-ripple" />
                  <div className="anchor-core" />
                </div>

                {/* EMPTY BALANCING SIDE */}
                <div className="timeline-spacer" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;