import React, { useState } from "react";
import {
  ArrowUpRight,
  Award,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Certificates.css";

const Certifications = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 0,
      archive: "ARCHIVE / 01",
      year: "2026",
      label: "TECHNICAL • PROFESSIONAL",
      title: "CERTIFIED",
      subtitle: "LEARNING.",
      bottom: ["GOOGLE", "NPTEL / IIT", "HACKATHONS"],
    },
    {
      id: 1,
      archive: "ARCHIVE / 02",
      year: "2026",
      label: "PROGRAMS • SKILLS",
      title: "BUILD.",
      subtitle: "LEARN.",
      bottom: ["GOOGLE", "COURSES", "WORKSHOPS"],
    },
    {
      id: 2,
      archive: "ARCHIVE / 03",
      year: "2026",
      label: "EVENTS • ACHIEVEMENTS",
      title: "KEEP",
      subtitle: "GROWING.",
      bottom: ["EVENTS", "HACKATHONS", "PROGRAMS"],
    },
  ];

  const getPosition = (cardId) => {
    /*
      Normal state:
      Front card = LEFT/DOWN
      Middle card = CENTER/UP
      Back card = RIGHT/DOWN
    */

    if (hoveredCard === null) {
      if (cardId === 0) return "fan-left";
      if (cardId === 1) return "fan-center";
      return "fan-right";
    }

    /*
      Mouse enters a card:
      hovered card becomes CENTER/UP
      previous card becomes LEFT/DOWN
      next card becomes RIGHT/DOWN
    */

    const relative =
      (cardId - hoveredCard + cards.length) % cards.length;

    if (relative === 0) {
      return "fan-center";
    }

    if (relative === 1) {
      return "fan-right";
    }

    return "fan-left";
  };

  return (
    <section
      className="cert-section"
      id="certificates"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="cert-noise"></div>

      <div className="cert-grid"></div>

      <div className="cert-glow cert-glow-left"></div>

      <div className="cert-glow cert-glow-right"></div>

      <div className="cert-bg-word">
        CERTIFIED
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="cert-container">

        {/* =========================================
            META
        ========================================= */}

        <div className="cert-meta">

          <div className="cert-meta-left">

            <span className="cert-red-dot"></span>

            <span>
              06 / CERTIFICATIONS
            </span>

          </div>

          <span className="cert-meta-right">
            LEARNING ARCHIVE • 2025 — 2026
          </span>

        </div>

        {/* =========================================
            MAIN
        ========================================= */}

        <div className="cert-main">

          {/* =======================================
              LEFT
          ======================================= */}

          <div className="cert-left">

            <div className="cert-eyebrow">

              <Award size={16} />

              <span>
                PROOF OF PROGRESS
              </span>

            </div>

            <h2 className="cert-title">

              Certificates

              <br />

              <span>
                that Validate
              </span>

              <br />

              My Journey.

            </h2>

            <p className="cert-description">
              A collection of certifications, programs,
              workshops and technical achievements that
              represent my continuous journey of learning
              and building.
            </p>

            <div className="cert-stat">

              <div className="cert-stat-number">

                <span>+</span>
                30

              </div>

              <div className="cert-stat-info">

                <strong>
                  CERTIFICATIONS
                </strong>

                <span>
                  AND CREDENTIALS
                </span>

              </div>

            </div>

          </div>

          {/* =======================================
              RIGHT
          ======================================= */}

          <div className="cert-right">

            <div className="cert-archive-label">

              <span>
                MY LEARNING ARCHIVE
              </span>

              <span>
                HOVER TO ARRANGE
              </span>

            </div>

            {/* =====================================
                CARD FAN
            ===================================== */}

            <div
              className="cert-stack"
              onMouseLeave={() => setHoveredCard(null)}
            >

              {cards.map((card) => {

                const position =
                  getPosition(card.id);

                return (
                  <div
                    key={card.id}
                    className={`cert-paper ${position}`}
                    onMouseEnter={() =>
                      setHoveredCard(card.id)
                    }
                  >

                    {/* Red Strip */}

                    <div className="paper-red-strip"></div>

                    {/* Content */}

                    <div className="paper-content">

                      {/* Top */}

                      <div className="paper-top">

                        <span>
                          {card.archive}
                        </span>

                        <span>
                          {card.year}
                        </span>

                      </div>

                      {/* Main */}

                      <div className="paper-main">

                        <div className="paper-logo">

                          <Award size={32} />

                        </div>

                        <div>

                          <span className="paper-small">
                            {card.label}
                          </span>

                          <h3>

                            {card.title}

                            <br />

                            <span>
                              {card.subtitle}
                            </span>

                          </h3>

                        </div>

                      </div>

                      {/* Bottom */}

                      <div className="paper-bottom">

                        {card.bottom.map(
                          (item, index) => (
                            <React.Fragment
                              key={item}
                            >

                              <span>
                                {item}
                              </span>

                              {index !==
                                card.bottom.length - 1 && (
                                <b>/</b>
                              )}

                            </React.Fragment>
                          )
                        )}

                      </div>

                    </div>

                    {/* Visual Arrow ONLY */}

                    <div className="card-arrow">

                      <ArrowUpRight size={16} />

                    </div>

                  </div>
                );
              })}

              {/* Number */}

              <div className="cert-stack-number">

                30<span>+</span>

              </div>

            </div>

            {/* Instruction */}

            <div className="deck-instruction">

              <span className="deck-dot"></span>

              HOVER A CARD TO ARRANGE

            </div>

          </div>

        </div>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="cert-bottom">

          <Link
            to="/certificates/online"
            className="cert-archive-btn"
          >

            <div className="cert-btn-text">

              <span>
                EXPLORE
              </span>

              <strong>
                ALL CERTIFICATES
              </strong>

            </div>

            <div className="cert-btn-icon">

              <ArrowUpRight size={25} />

            </div>

          </Link>

          <div className="cert-click">

            <MoveUpRight size={14} />

            <span>
              ENTER ARCHIVE
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;