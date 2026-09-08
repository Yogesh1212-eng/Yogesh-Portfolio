import React from "react";
import { ArrowUpRight, Award, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Certificates.css";

const Certifications = () => {
  const navigate = useNavigate();

  const handleNavigateDirect = (e) => {
    // Kisi bhi parent container ya global scroll listener ko roko
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigate("/certificates/online");
  };

  const cards = [
    {
      id: 0,
      archive: "ARCHIVE / 01",
      year: "2026",
      label: "TECHNICAL • PROFESSIONAL",
      title: "CERTIFIED",
      subtitle: "LEARNING.",
      bottom: ["GOOGLE", "NPTEL / IIT", "HACKATHONS"],
      posClass: "card-left",
    },
    {
      id: 1,
      archive: "ARCHIVE / 02",
      year: "2026",
      label: "PROGRAMS • SKILLS",
      title: "BUILD.",
      subtitle: "LEARN.",
      bottom: ["GOOGLE", "COURSES", "WORKSHOPS"],
      posClass: "card-center",
    },
    {
      id: 2,
      archive: "ARCHIVE / 03",
      year: "2026",
      label: "EVENTS • ACHIEVEMENTS",
      title: "KEEP",
      subtitle: "GROWING.",
      bottom: ["EVENTS", "HACKATHONS", "PROGRAMS"],
      posClass: "card-right",
    },
  ];

  return (
    <section className="cert-section" id="certificates">
      {/* Background Decor */}
      <div className="cert-noise"></div>
      <div className="cert-grid"></div>
      <div className="cert-glow cert-glow-left"></div>
      <div className="cert-glow cert-glow-right"></div>
      <div className="cert-bg-word">CERTIFIED</div>

      <div className="cert-container">
        {/* Meta Bar */}
        <div className="cert-meta">
          <div className="cert-meta-left">
            <span className="cert-red-dot"></span>
            <span>06 / CERTIFICATIONS</span>
          </div>
          <span className="cert-meta-right">LEARNING ARCHIVE • 2025 — 2026</span>
        </div>

        {/* Main Content */}
        <div className="cert-main">
          {/* Left Hero Content */}
          <div className="cert-left">
            <div className="cert-eyebrow">
              <Award size={16} />
              <span>PROOF OF PROGRESS</span>
            </div>

            <h2 className="cert-title">
              Certificates
              <br />
              <span>that Validate</span>
              <br />
              My Journey.
            </h2>

            <p className="cert-description">
              A collection of certifications, programs, workshops and technical
              achievements that represent my continuous journey of learning and building.
            </p>

            <div className="cert-stat">
              <div className="cert-stat-number">
                <span>+</span>30
              </div>
              <div className="cert-stat-info">
                <strong>CERTIFICATIONS</strong>
                <span>AND CREDENTIALS</span>
              </div>
            </div>
          </div>

          {/* Right Static Cards Stack */}
          <div className="cert-right">
            <div className="cert-archive-label">
              <span>MY LEARNING ARCHIVE</span>
              <span>VERIFIED CREDENTIALS</span>
            </div>

            <div className="cert-stack">
              {cards.map((card) => (
                <div key={card.id} className={`cert-paper ${card.posClass}`}>
                  <div className="paper-red-strip"></div>

                  <div className="paper-content">
                    <div className="paper-top">
                      <span>{card.archive}</span>
                      <span>{card.year}</span>
                    </div>

                    <div className="paper-main">
                      <div className="paper-logo">
                        <Award size={30} />
                      </div>

                      <div>
                        <span className="paper-small">{card.label}</span>
                        <h3>
                          {card.title}
                          <br />
                          <span>{card.subtitle}</span>
                        </h3>
                      </div>
                    </div>

                    <div className="paper-bottom">
                      {card.bottom.map((item, index) => (
                        <React.Fragment key={item}>
                          <span>{item}</span>
                          {index !== card.bottom.length - 1 && <b>/</b>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="cert-stack-number">
                30<span>+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button Container */}
        <div className="cert-action-wrapper">
          <button
            type="button"
            className="cert-cta-button"
            onPointerDown={handleNavigateDirect}
            onClick={handleNavigateDirect}
            aria-label="View all certifications"
          >
            <div className="btn-glow-layer"></div>

            <span className="btn-tag">
              <Sparkles size={13} className="sparkle-icon" />
              PORTFOLIO
            </span>

            <span className="btn-title">VIEW ALL CERTIFICATES</span>

            <div className="btn-arrow-badge">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;