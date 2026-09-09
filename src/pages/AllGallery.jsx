import React, { useState, useMemo, useEffect } from "react";
import { ArrowLeft, Camera, X, ChevronLeft, ChevronRight, Sparkles, Trophy, Globe, Users, Presentation, Calendar, Award, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import "./AllGallery.css";

const photos = [
  {
    id: 1,
    image: "/gallery/Trophy.jpeg",
    title: "Milestone To Remember",
    categories: ["ACHIEVEMENTS", "AWARDS"],
    year: "2026",
    aspect: "tall",
  },
  {
    id: 2,
    image: "/gallery/dev3.jpeg",
    title: "Behind the Devfest Experience",
    categories: ["GOOGLE", "EVENTS", "SWAGS"],
    year: "2025",
    aspect: "wide",
  },
  {
    id: 3,
    image: "/gallery/director-award.jpeg",
    title: "GDG Excellence Award",
    categories: ["ACHIEVEMENTS", "AWARDS", "GOOGLE"],
    year: "2026",
    aspect: "tall",
  },
  {
    id: 4,
    image: "/gallery/Hac.jpeg",
    title: "Hackathon Victory",
    categories: ["ACHIEVEMENTS", "EVENTS", "TEAM"],
    year: "2025",
    aspect: "wide",
  },
  {
    id: 5,
    image: "/gallery/Dev1.jpeg",
    title: "Devfest 2024 Organizer",
    categories: ["GOOGLE", "EVENTS", "SEMINAR"],
    year: "2024",
    aspect: "tall",
  },
  {
    id: 6,
    image: "/gallery/swag.jpeg",
    title: "Google Goodies & Recognition",
    categories: ["GOOGLE", "SWAGS", "ACHIEVEMENTS"],
    year: "2026",
    aspect: "square",
  },
  {
    id: 7,
    image: "/gallery/trophy1.jpeg",
    title: "Technical Trophy",
    categories: ["ACHIEVEMENTS", "AWARDS"],
    year: "2026",
    aspect: "tall",
  },
  {
    id: 8,
    image: "/gallery/dev2.jpeg",
    title: "Devfest 2025 Highlights",
    categories: ["GOOGLE", "EVENTS", "TEAM"],
    year: "2026",
    aspect: "wide",
  },
  {
    id: 9,
    image: "/gallery/Anchoring1.jpeg",
    title: "Conducting Technical Session",
    categories: ["SEMINAR", "EVENTS"],
    year: "2026",
    aspect: "tall",
  },
  {
    id: 10,
    image: "/gallery/anchoring2.jpeg",
    title: "GCP Seminar Insights",
    categories: ["SEMINAR", "GOOGLE", "EVENTS"],
    year: "2025",
    aspect: "wide",
  },
  {
    id: 11,
    image: "/gallery/anchoring3.jpeg",
    title: "Anchoring Stage Highlights",
    categories: ["SEMINAR", "EVENTS"],
    year: "2025",
    aspect: "square",
  },
  {
    id: 12,
    image: "/gallery/anchoring.jpeg",
    title: "Technical Session Leadership",
    categories: ["SEMINAR", "EVENTS"],
    year: "2026",
    aspect: "tall",
  },
  {
    id: 13,
    image: "/gallery/team1.jpeg",
    title: "GDG Team Spirit",
    categories: ["TEAM", "GOOGLE"],
    year: "2026",
    aspect: "wide",
  },
  {
    id: 14,
    image: "/gallery/team2.jpeg",
    title: "GDG Core Team Assemble",
    categories: ["TEAM", "GOOGLE"],
    year: "2025",
    aspect: "tall",
  },
  {
    id: 15,
    image: "/gallery/team3.jpeg",
    title: "Team Appreciation Moment",
    categories: ["TEAM", "ACHIEVEMENTS", "GOOGLE"],
    year: "2026",
    aspect: "square",
  },
  {
    id: 16,
    image: "/gallery/team4.jpeg",
    title: "GDG Winning Moment",
    categories: ["TEAM", "ACHIEVEMENTS", "GOOGLE"],
    year: "2026",
    aspect: "wide",
  },
  {
    id: 17,
    image: "/gallery/swag1.jpeg",
    title: "Community Engagement & Swags",
    categories: ["SWAGS", "EVENTS", "GOOGLE"],
    year: "2026",
    aspect: "tall",
  },
  {
    id: 18,
    image: "/gallery/swag2.jpeg",
    title: "Giving Recognition & Rewards",
    categories: ["SWAGS", "ACHIEVEMENTS", "AWARDS"],
    year: "2026",
    aspect: "wide",
  },
  {
    id: 19,
    image: "/gallery/swag3.jpeg",
    title: "Swags Distribution Highlight",
    categories: ["SWAGS", "EVENTS", "GOOGLE"],
    year: "2026",
    aspect: "square",
  },
  {
    id: 20,
    image: "/gallery/swag4.jpeg",
    title: "Honoring Excellence & Swags",
    categories: ["SWAGS", "ACHIEVEMENTS", "AWARDS"],
    year: "2026",
    aspect: "tall",
  },
  {
    id: 21,
    image: "/gallery/director.jpeg",
    title: "Receiving The Honors",
    categories: ["ACHIEVEMENTS", "AWARDS", "TEAM"],
    year: "2026",
    aspect: "wide",
  },
  {
    id: 22,
    image: "/gallery/event.jpeg",
    title: "Hackathon Chronicles",
    categories: ["EVENTS", "ACHIEVEMENTS", "TEAM"],
    year: "2026",
    aspect: "tall",
  },
  {
    id: 23,
    image: "/gallery/help.jpeg",
    title: "Guiding Young Minds",
    categories: ["SEMINAR", "EVENTS"],
    year: "2026",
    aspect: "square",
  },
  {
    id: 24,
    image: "/gallery/robo.jpeg",
    title: "A Triumph in Robotics",
    categories: ["ACHIEVEMENTS", "AWARDS", "EVENTS"],
    year: "2024",
    aspect: "wide",
  },
  {
    id: 25,
    image: "/gallery/meet.jpeg",
    title: "Conference with Director Sir",
    categories: ["TEAM", "GOOGLE", "AWARDS"],
    year: "2025",
    aspect: "tall",
  },
  {
    id: 26,
    image: "/gallery/group.jpeg",
    title: "Technical Club Members",
    categories: ["TEAM", "EVENTS"],
    year: "2026",
    aspect: "wide",
  },
  {
    id: 27,
    image: "/gallery/audiance.jpeg",
    title: "Engaging the Audience",
    categories: ["EVENTS", "SEMINAR"],
    year: "2025",
    aspect: "tall",
  },
  {
    id: 28,
    image: "/gallery/certificate.jpeg",
    title: "MERN Stack Workshop - AKTU",
    categories: ["SEMINAR", "ACHIEVEMENTS", "EVENTS"],
    year: "2025",
    aspect: "wide",
  },
];

const categoryMeta = [
  { key: "ALL", label: "Complete Vault", icon: Sparkles },
  { key: "GOOGLE", label: "Google & DevFest", icon: Globe },
  { key: "ACHIEVEMENTS", label: "Trophies & Wins", icon: Trophy },
  { key: "SWAGS", label: "Swags & Goodies", icon: Gift },
  { key: "EVENTS", label: "Events & Hackathons", icon: Calendar },
  { key: "SEMINAR", label: "Seminars & Stage", icon: Presentation },
  { key: "TEAM", label: "Team & Community", icon: Users },
];

function AllGallery() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categoryCounts = useMemo(() => {
    const counts = { ALL: photos.length };
    categoryMeta.forEach((cat) => {
      if (cat.key !== "ALL") {
        counts[cat.key] = photos.filter((p) => p.categories.includes(cat.key)).length;
      }
    });
    return counts;
  }, []);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "ALL") return photos;
    return photos.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <main className="super-gallery-root">
      <div className="super-ambient-glow glow-1" />
      <div className="super-ambient-glow glow-2" />
      <div className="super-pattern-grid" />

      <div className="super-gallery-shell">
        {/* TOPBAR */}
        <header className="super-topbar">
          <Link
            to="/"
            className="super-back-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          >
            <ArrowLeft size={15} />
            <span>RETURN TO PORTFOLIO</span>
          </Link>

          <div className="super-counter-chip">
            <span className="live-pulse-dot" />
            <span>{photos.length} TOTAL ARCHIVES</span>
          </div>
        </header>

        {/* HERO HEADER */}
        <section className="super-hero">
          <span className="super-badge">
            <Camera size={13} />
            VISUAL LEGACY & EXCELLENCE
          </span>
          <h1 className="super-title">
            The <span>Visual</span> Archive.
          </h1>
          <p className="super-lead">
            A comprehensive photographic vault of hackathon victories, GDG communities, speaker sessions, swag drops, and unforgettable milestones.
          </p>
        </section>

        {/* FLOATING GLASS CATEGORY BAR */}
        <nav className="super-category-dock" aria-label="Gallery categories">
          <div className="super-category-scroller">
            {categoryMeta.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.key;
              const count = categoryCounts[tab.key] || 0;

              return (
                <button
                  key={tab.key}
                  type="button"
                  className={`super-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveCategory(tab.key)}
                >
                  <Icon size={15} className="tab-icon" />
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-count-pill">{count}</span>
                  {isActive && <div className="tab-active-glow" />}
                </button>
              );
            })}
          </div>
        </nav>

        {/* LIVE FILTER STATS BAR */}
        <div className="gallery-status-bar">
          <div className="status-label">
            <span>FILTER ACTIVE:</span>
            <strong>{categoryMeta.find((c) => c.key === activeCategory)?.label}</strong>
          </div>
          <div className="status-divider" />
          <div className="status-count">
            <span>DISPLAYING</span>
            <strong>{filteredPhotos.length} OF {photos.length} FRAMES</strong>
          </div>
        </div>

        {/* CLEAN MASONRY GRID (NO RED LABELS BLOCKING PHOTO) */}
        <section className="super-masonry-canvas">
          {filteredPhotos.map((photo, index) => (
            <figure
              key={photo.id}
              className={`super-photo-tile aspect-${photo.aspect}`}
              onClick={() => setLightboxIndex(index)}
            >
              <div className="tile-inner-glass">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="tile-img"
                  loading={index < 4 ? "eager" : "lazy"}
                />

                <div className="tile-ambient-shade" />

                <figcaption className="tile-meta-layer">
                  <div className="tile-top-chips">
                    <span className="tile-year-tag">{photo.year}</span>
                  </div>

                  <div className="tile-bottom-details">
                    <h3 className="tile-headline">{photo.title}</h3>
                    <div className="tile-expand-badge">
                      <Sparkles size={14} />
                    </div>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="super-gallery-foot">
          <div className="foot-line" />
          <p>
            <Award size={13} />
            END OF ARCHIVE • MEMORIES CONTINUOUSLY IN THE MAKING
          </p>
          <div className="foot-line" />
        </footer>
      </div>

      {/* FULLSCREEN HD LIGHTBOX */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          className="super-lightbox-backdrop"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            className="lightbox-arrow arrow-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          <div
            className="lightbox-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-img-wrapper">
              <img
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                className="lightbox-current-img"
              />
            </div>

            <div className="lightbox-bar">
              <div className="lightbox-bar-left">
                <div className="lightbox-chips">
                  {filteredPhotos[lightboxIndex].categories.map((cat) => (
                    <span key={cat}>{cat}</span>
                  ))}
                  <span className="lightbox-year">{filteredPhotos[lightboxIndex].year}</span>
                </div>
                <h3>{filteredPhotos[lightboxIndex].title}</h3>
              </div>
              <span className="lightbox-pagination">
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(filteredPhotos.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-arrow arrow-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
            }}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </main>
  );
}

export default AllGallery;