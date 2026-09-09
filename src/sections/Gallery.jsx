import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const galleryPhotos = [
  { id: 1, src: "/gallery/Trophy.jpeg", title: "Milestone To Remember", category: "ACHIEVEMENT", date: "2026" },
  { id: 2, src: "/gallery/dev3.jpeg", title: "Behind the Devfest Experience", category: "GOOGLE", date: "2025" },
  { id: 3, src: "/gallery/director-award.jpeg", title: "GDG Excellence Award", category: "AWARD", date: "2026" },
  { id: 4, src: "/gallery/Hac.jpeg", title: "Hackathon Victory", category: "HACKATHON", date: "2025" },
  { id: 5, src: "/gallery/Dev1.jpeg", title: "With Devfest 2024 Organizer", category: "GOOGLE EVENT", date: "2024" },
  { id: 6, src: "/gallery/swag.jpeg", title: "Google Goodies & Recognition", category: "GOOGLE", date: "2026" },
  { id: 7, src: "/gallery/trophy1.jpeg", title: "Technical Trophy", category: "ACHIEVEMENT", date: "2026" },
  { id: 8, src: "/gallery/dev2.jpeg", title: "Devfest 2025 Highlights", category: "TEAM", date: "2026" },
  { id: 9, src: "/gallery/Anchoring1.jpeg", title: "Conducting Technical Session", category: "SEMINAR", date: "2026" },
  { id: 10, src: "/gallery/anchoring2.jpeg", title: "GCP Seminar Insights", category: "SEMINAR", date: "2025" },
  { id: 11, src: "/gallery/anchoring3.jpeg", title: "Anchoring Highlights", category: "SEMINAR", date: "2025" },
  { id: 12, src: "/gallery/anchoring.jpeg", title: "Technical Session Leadership", category: "EVENT", date: "2026" },
  { id: 13, src: "/gallery/team1.jpeg", title: "GDG Team Spirit", category: "TEAM", date: "2026" },
  { id: 14, src: "/gallery/team2.jpeg", title: "GDG Core Team", category: "TEAM", date: "2025" },
  { id: 15, src: "/gallery/team3.jpeg", title: "GDG Team Appreciation", category: "TEAM", date: "2026" },
  { id: 16, src: "/gallery/team4.jpeg", title: "GDG Winning Moment", category: "TEAM", date: "2026" },
  { id: 17, src: "/gallery/swag1.jpeg", title: "Community Engagement", category: "SWAGS", date: "2026" },
  { id: 18, src: "/gallery/swag2.jpeg", title: "Rewards & Recognition", category: "SWAGS", date: "2026" },
  { id: 19, src: "/gallery/swag3.jpeg", title: "Swags Distribution Day", category: "REWARD", date: "2026" },
  { id: 20, src: "/gallery/swag4.jpeg", title: "Honoring Excellence", category: "RECOGNITION", date: "2026" },
  { id: 21, src: "/gallery/director.jpeg", title: "Recieving The Honour", category: "COMMUNITY", date: "2026" },
  { id: 22, src: "/gallery/event.jpeg", title: "Events Chronicles", category: "HACKATHON", date: "2026" },
  { id: 23, src: "/gallery/help.jpeg", title: "Guiding Young Minds", category: "SEMINAR", date: "2026" },
  { id: 24, src: "/gallery/robo.jpeg", title: "A Triumph in Robotics", category: "ROBOTICS", date: "2024" },
  { id: 25, src: "/gallery/meet.jpeg", title: "Conference with Director Sir", category: "MEETING", date: "2025" },
  { id: 26, src: "/gallery/group.jpeg", title: "Technical Club Members", category: "TEAM", date: "2026" },
  { id: 27, src: "/gallery/audiance.jpeg", title: "Engaging the Audience", category: "EVENT", date: "2025" },
  { id: 28, src: "/gallery/certificate.jpeg", title: "MERN Stack Workshop", category: "WORKSHOP", date: "2025" },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const activeRef = useRef(0);
  const touchStartX = useRef(0);

  const total = galleryPhotos.length;

  const nextCard = useCallback(() => {
    const next = (activeRef.current + 1) % total;
    activeRef.current = next;
    setActiveIndex(next);
  }, [total]);

  const prevCard = useCallback(() => {
    const prev = (activeRef.current - 1 + total) % total;
    activeRef.current = prev;
    setActiveIndex(prev);
  }, [total]);

  /* =========================================================
     VIEWPORT OBSERVER (LAPTOP & MOBILE ACCURATE)
  ========================================================= */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* =========================================================
     CONTINUOUS AUTO-CHANGE (1.4 SECONDS)
  ========================================================= */
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      nextCard();
    }, 1400);

    return () => clearInterval(interval);
  }, [isInView, nextCard]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextCard();
      else prevCard();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="deck-gallery-section"
      id="gallery"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="deck-glow-circle glow-circle-left" />
      <div className="deck-glow-circle glow-circle-right" />
      <div className="deck-grid-overlay" />

      <div className="deck-container">
        {/* HEADER */}
        <div className="deck-header">
          <div className="deck-pill-badge">
            <Flame size={13} className="deck-badge-icon" />
            <span>INTERACTIVE ARCHIVE</span>
          </div>
          <h2 className="deck-title">
            Moments In <span>Motion.</span>
          </h2>
          <p className="deck-subtitle">
            A visual chronicle of milestones, hackathons, and moments that shaped the journey.
          </p>
        </div>

        {/* 3D CARDS STAGE */}
        <div className="deck-stage">
          {galleryPhotos.map((photo, index) => {
            let offset = index - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCurrent = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <div
                key={photo.id}
                className={`deck-card ${isCurrent ? "deck-card-center" : ""}`}
                style={{
                  "--offset": offset,
                  "--abs-offset": Math.abs(offset),
                  zIndex: 20 - Math.abs(offset) * 5,
                }}
                onClick={() => {
                  activeRef.current = index;
                  setActiveIndex(index);
                }}
              >
                <div className="deck-card-glass">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="deck-card-image"
                    loading="lazy"
                  />
                  <div className="deck-card-gradient" />

                  <div className="deck-card-content">
                    <div className="deck-card-tags">
                      <span className="deck-category">{photo.category}</span>
                      <span className="deck-year">{photo.date}</span>
                    </div>
                    <h3 className="deck-card-title">{photo.title}</h3>
                  </div>

                  {isCurrent && <div className="deck-card-glow-edge" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTROLS & INDICATOR */}
        <div className="deck-controls-strip">
          <button
            type="button"
            className="deck-arrow-btn"
            onClick={prevCard}
            aria-label="Previous card"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="deck-indicator-wrap">
            <span className="deck-active-num">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="deck-bar-track">
              <div
                className="deck-bar-progress"
                style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
              />
            </div>
            <span className="deck-total-num">
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            className="deck-arrow-btn"
            onClick={nextCard}
            aria-label="Next card"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="deck-action-wrapper">
          <Link
            to="/gallery"
            className="deck-cta-button"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
          >
            <div className="deck-cta-glow" />
            <Layers size={16} />
            <span>EXPLORE ALL ARCHIVES ({total})</span>
            <div className="deck-cta-arrow">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Gallery;