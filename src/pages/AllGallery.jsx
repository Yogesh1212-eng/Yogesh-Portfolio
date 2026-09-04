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
    image: "/gallery/gdg-slack.jpg",
    title: "Slack Distribution",
    year: "2026",
  },
  {
    id: 2,
    image: "/gallery/director-award.jpg",
    title: "Recognition Moment",
    year: "2026",
  },
  {
    id: 3,
    image: "/gallery/anchoring.jpg",
    title: "Event Anchoring",
    year: "2025",
  },
  {
    id: 4,
    image: "/gallery/group-photo.jpg",
    title: "Community Moment",
    year: "2025",
  },
  {
    id: 5,
    image: "/gallery/google-swags.jpg",
    title: "Google Swag Collection",
    year: "2026",
  },
  {
    id: 6,
    image: "/gallery/hackathon.jpg",
    title: "Hackathon",
    year: "2025",
  },
  {
    id: 7,
    image: "/gallery/robotics-winner.jpg",
    title: "Robotics Winner",
    year: "2025",
  },
  {
    id: 8,
    image: "/gallery/trophy.jpg",
    title: "Winner Moment",
    year: "2025",
  },
  {
    id: 9,
    image: "/gallery/certificate.jpg",
    title: "Certificate & Appreciation",
    year: "2026",
  },
  {
    id: 10,
    image: "/gallery/students.jpg",
    title: "With The Community",
    year: "2026",
  },
  {
    id: 11,
    image: "/gallery/event-stage.jpg",
    title: "On Stage",
    year: "2025",
  },
  {
    id: 12,
    image: "/gallery/team.jpg",
    title: "Team Moment",
    year: "2025",
  },
  {
    id: 13,
    image: "/gallery/swags-2.jpg",
    title: "More Swags",
    year: "2026",
  },
  {
    id: 14,
    image: "/gallery/hackathon-team.jpg",
    title: "Hackathon Team",
    year: "2025",
  },
  {
    id: 15,
    image: "/gallery/award-stage.jpg",
    title: "Award Ceremony",
    year: "2025",
  },
  {
    id: 16,
    image: "/gallery/event-crowd.jpg",
    title: "Event Day",
    year: "2025",
  },
  {
    id: 17,
    image: "/gallery/google-event.jpg",
    title: "Google Community",
    year: "2026",
  },
  {
    id: 18,
    image: "/gallery/college-fest.jpg",
    title: "College Fest",
    year: "2025",
  },
];

const INITIAL_COUNT = 6;
const LOAD_COUNT = 6;

const AllGallery = () => {
  const [visibleCount, setVisibleCount] =
    useState(INITIAL_COUNT);

  const visiblePhotos = photos.slice(
    0,
    visibleCount
  );

  const hasMore = visibleCount < photos.length;

  const handleLoadMore = () => {
    setVisibleCount((current) =>
      Math.min(
        current + LOAD_COUNT,
        photos.length
      )
    );
  };

  return (
    <div className="all-gallery-page">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="all-gallery-grid"></div>

      <div className="all-gallery-noise"></div>

      <div className="all-gallery-glow"></div>

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="all-gallery-container">

        {/* Back */}

        <Link
          to="/"
          className="all-gallery-back"
        >
          <ArrowLeft size={17} />

          <span>
            BACK TO PORTFOLIO
          </span>
        </Link>

        {/* =======================================
            HEADER
        ======================================= */}

        <div className="all-gallery-header">

          <div className="all-gallery-eyebrow">

            <Camera size={17} />

            <span>
              07 / VISUAL ARCHIVE
            </span>

          </div>

          <h1>

            My

            <span>
              Journey
            </span>

            <br />

            In Frames.

          </h1>

          <p>
            From hosting events and building communities
            to winning competitions, receiving recognition,
            collecting swags and creating unforgettable
            moments along the way.
          </p>

        </div>

        {/* =======================================
            ARCHIVE INFO
        ======================================= */}

        <div className="gallery-archive-info">

          <div>

            <span>
              TOTAL MOMENTS
            </span>

            <strong>
              {photos.length}
            </strong>

          </div>

          <div>

            <span>
              SHOWING
            </span>

            <strong>
              {visibleCount}
            </strong>

          </div>

          <div className="gallery-info-line"></div>

          <p>
            A VISUAL RECORD OF THE JOURNEY
          </p>

        </div>

        {/* =======================================
            PHOTO GRID
        ======================================= */}

        <div className="full-gallery-grid">

          {visiblePhotos.map(
            (photo, index) => (

              <article
                key={photo.id}
                className={`full-gallery-card card-${index % 6}`}
              >

                <div className="full-gallery-image-wrap">

                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="full-gallery-image"
                    loading={
                      index < 3
                        ? "eager"
                        : "lazy"
                    }
                  />

                  <div className="full-gallery-overlay">

                    <div className="full-gallery-top">

                      <span>
                        MOMENT /{" "}
                        {String(
                          photo.id
                        ).padStart(2, "0")}
                      </span>

                      <span>
                        {photo.year}
                      </span>

                    </div>

                    <div className="full-gallery-bottom">

                      <h3>
                        {photo.title}
                      </h3>

                      <div className="full-gallery-arrow">

                        <ArrowUpRight
                          size={18}
                        />

                      </div>

                    </div>

                  </div>

                </div>

              </article>
            )
          )}

        </div>

        {/* =======================================
            LOAD MORE
        ======================================= */}

        {hasMore && (

          <div className="gallery-load-area">

            <button
              className="gallery-load-btn"
              onClick={handleLoadMore}
            >

              <span>
                LOAD MORE
              </span>

              <strong>
                MOMENTS
              </strong>

              <div className="gallery-load-icon">
                <ArrowUpRight size={20} />
              </div>

            </button>

            <p>
              {photos.length - visibleCount} MORE
              MOMENTS IN THE ARCHIVE
            </p>

          </div>
        )}

        {/* =======================================
            END
        ======================================= */}

        {!hasMore && (

          <div className="gallery-end">

            <span></span>

            <p>
              YOU'VE REACHED THE END OF MY JOURNEY
            </p>

            <span></span>

          </div>
        )}

      </div>
    </div>
  );
};

export default AllGallery;