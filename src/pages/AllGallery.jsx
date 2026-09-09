import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./AllGallery.css";

const photos = [
  {
    id: 1,
    image: "/gallery/Trophy.jpeg",
    title: "Achievement Moment",
    year: "2026",
  },
  {
    id: 2,
    image: "/gallery/dev3.jpeg",
    title: "More Swags",
    year: "2026",
  },
  {
    id: 3,
    image: "/gallery/director-award.jpeg",
    title: "Director Award",
    year: "2026",
  },
  {
    id: 4,
    image: "/gallery/Hac.jpeg",
    title: "Hackathon",
    year: "2026",
  },
  {
    id: 5,
    image: "/gallery/swag.jpeg",
    title: "Robotics Winner",
    year: "2026",
  },
  {
    id: 6,
    image: "/gallery/trophy1.jpeg",
    title: "Winning Moment",
    year: "2026",
  },
  {
    id: 7,
    image: "/gallery/Dev1.jpeg",
    title: "On Stage",
    year: "2026",
  },
  {
    id: 8,
    image: "/gallery/dev2.jpeg",
    title: "Core Team",
    year: "2026",
  },
  {
    id: 9,
    image: "/gallery/anchoring.jpeg",
    title: "Anchoring Event",
    year: "2026",
  },
  {
    id: 10,
    image: "/gallery/Anchoring1.jpeg",
    title: "Certification",
    year: "2026",
  },
  {
    id: 11,
    image: "/gallery/anchoring2.jpeg",
    title: "Certification",
    year: "2026",
  },
  {
    id: 12,
    image: "/gallery/anchoring3.jpeg",
    title: "Certification",
    year: "2026",
  },
  {
    id: 13,
    image: "/gallery/team1.jpeg",
    title: "Team Moment",
    year: "2026",
  },
  {
    id: 14,
    image: "/gallery/team2.jpeg",
    title: "Team Moment",
    year: "2026",
  },
  {
    id: 15,
    image: "/gallery/team3.jpeg",
    title: "Team Moment",
    year: "2026",
  },
  {
    id: 16,
    image: "/gallery/team4.jpeg",
    title: "Team Moment",
    year: "2026",
  },
  {
    id: 17,
    image: "/gallery/swag1.jpeg",
    title: "Robotics Winner",
    year: "2026",
  },
  {
    id: 18,
    image: "/gallery/swag2.jpeg",
    title: "Robotics Winner",
    year: "2026",
  },
  {
    id: 19,
    image: "/gallery/swag3.jpeg",
    title: "Robotics Winner",
    year: "2026",
  },
  {
    id: 20,
    image: "/gallery/swag4.jpeg",
    title: "Robotics Winner",
    year: "2026",
  },
  {
    id: 21,
    image: "/gallery/director.jpeg",
    title: "With Students",
    year: "2026",
  },
  {
    id: 22,
    image: "/gallery/event.jpeg",
    title: "Hackathon Team",
    year: "2026",
  },
  {
    id: 23,
    image: "/gallery/help.jpeg",
    title: "Robotics Winner",
    year: "2026",
  },
  {
    id: 24,
    image: "/gallery/robo.jpeg",
    title: "Robotics Winner",
    year: "2026",
  },
  {
    id: 25,
    image: "/gallery/meet.jpeg",
    title: "Robotics Winner",
    year: "2026",
  },
  {
    id: 26,
    image: "/gallery/group.jpeg",
    title: "Award Ceremony",
    year: "2026",
  },
  {
    id: 27,
    image: "/gallery/audiance.jpeg",
    title: "College Fest",
    year: "2026",
  },
  {
    id: 28,
    image: "/gallery/certificate.jpeg",
    title: "College Fest",
    year: "2026",
  },
];

const INITIAL_COUNT = 6;
const LOAD_COUNT = 6;

const AllGallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visiblePhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;

  const handleLoadMore = () => {
    setVisibleCount((current) =>
      Math.min(current + LOAD_COUNT, photos.length)
    );
  };

  return (
    <div className="all-gallery-page">
      {/* BACKGROUND */}
      <div className="all-gallery-grid"></div>
      <div className="all-gallery-noise"></div>
      <div className="all-gallery-glow"></div>

      {/* CONTAINER */}
      <div className="all-gallery-container">
        {/* Back */}
        <Link to="/" className="all-gallery-back">
          <ArrowLeft size={17} />
          <span>BACK TO PORTFOLIO</span>
        </Link>

        {/* HEADER */}
        <div className="all-gallery-header">
          <div className="all-gallery-eyebrow">
            <Camera size={17} />
            <span>07 / VISUAL ARCHIVE</span>
          </div>

          <h1>
            My <span>Journey</span>
            <br />
            In Frames.
          </h1>

          <p>
            From hosting events and building communities to winning
            competitions, receiving recognition, collecting swags and creating
            unforgettable moments along the way.
          </p>
        </div>

        {/* ARCHIVE INFO */}
        <div className="gallery-archive-info">
          <div>
            <span>TOTAL MOMENTS</span>
            <strong>{photos.length}</strong>
          </div>

          <div>
            <span>SHOWING</span>
            <strong>{visibleCount}</strong>
          </div>

          <div className="gallery-info-line"></div>

          <p>A VISUAL RECORD OF THE JOURNEY</p>
        </div>

        {/* PHOTO GRID */}
        <div className="full-gallery-grid">
          {visiblePhotos.map((photo, index) => (
            <article
              key={photo.id}
              className={`full-gallery-card card-${index % 6}`}
            >
              <div className="full-gallery-image-wrap">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="full-gallery-image"
                  loading={index < 3 ? "eager" : "lazy"}
                />

                <div className="full-gallery-overlay">
                  <div className="full-gallery-top">
                    <span>
                      MOMENT / {String(photo.id).padStart(2, "0")}
                    </span>
                    <span>{photo.year}</span>
                  </div>

                  <div className="full-gallery-bottom">
                    <h3>{photo.title}</h3>
                    <div className="full-gallery-arrow">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* LOAD MORE */}
        {hasMore && (
          <div className="gallery-load-area">
            <button className="gallery-load-btn" onClick={handleLoadMore}>
              <span>LOAD MORE</span>
              <strong>MOMENTS</strong>
              <div className="gallery-load-icon">
                <ArrowUpRight size={20} />
              </div>
            </button>

            <p>
              {photos.length - visibleCount} MORE MOMENTS IN THE ARCHIVE
            </p>
          </div>
        )}

        {/* END */}
        {!hasMore && (
          <div className="gallery-end">
            <span></span>
            <p>YOU'VE REACHED THE END OF MY JOURNEY</p>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGallery;