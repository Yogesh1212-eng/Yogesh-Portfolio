import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const PHOTOS_PER_VIEW = 4;

const galleryPhotos = [
  { src: "/gallery/Trophy.jpeg", title: "Milestone To Remember", category: "ACHIEVEMENT", date: "2026" },
  { src: "/gallery/dev3.jpeg", title: "Behind the Devfest Experiences", category: "GOOGLE", date: "2025" },
  { src: "/gallery/director-award.jpeg", title: "GDG Excellence Award", category: "AWARD", date: "2026" },
  { src: "/gallery/Hac.jpeg", title: "Hackathon Victory", category: "HACKATHON", date: "2025" },

  { src: "/gallery/Dev1.jpeg", title: "Devfest 2024 Organizer", category: " GOOGLE EVENT", date: "2024" },
  { src: "/gallery/swag.jpeg", title: "Google Goodies & Recognition", category: "ACHIEVEMENT", date: "2026" },
  { src: "/gallery/trophy1.jpeg", title: "Technical Trophy", category: "ACHIEVEMENT", date: "2026" },
  { src: "/gallery/dev2.jpeg", title: "Devfest 2025 Highlights", category: "TEAM", date: "2026" },

  { src: "/gallery/Anchoring1.jpeg", title: "Conducting Technical Session", category: "Seminar", date: "2026" },
  { src: "/gallery/anchoring2.jpeg", title: "GCP Seminar Insights", category: "Seminar", date: "2025" },
  { src: "/gallery/anchoring3.jpeg", title: "Anchoring", category: "Seminar", date: "2025" },
  { src: "/gallery/anchoring.jpeg", title: "Technical Session Leadership ", category: "EVENT", date: "2026" },

  { src: "/gallery/team1.jpeg", title: " GDG Team", category: "TEAM", date: "2026" },
  { src: "/gallery/team2.jpeg", title: "GDG Core Team", category: "TEAM", date: "2025" },
  { src: "/gallery/team3.jpeg", title: "GDG Team Appreciation Moment", category: "TEAM", date: "2026" },
  { src: "/gallery/team4.jpeg", title: "GDG Winning Moment", category: "TEAM", date: "2026" },

  { src: "/gallery/swag1.jpeg", title: "Community Engagement", category: "SWAGS", date: "2026" },
  { src: "/gallery/swag2.jpeg", title: "Giving Recognition & Rewards", category: "SWAGS", date: "2026" },
  { src: "/gallery/swag3.jpeg", title: "Swags Distribution Highlight", category: "REWARD", date: "2026" },
  { src: "/gallery/swag4.jpeg", title: "Honoring Excellence", category: "RECOGNITION", date: "2026" },

  { src: "/gallery/director.jpeg", title: "Recieving The Honors", category: "COMMUNITY", date: "2026" },
  { src: "/gallery/event.jpeg", title: "Events Chronicles", category: "HACKATHON", date: "2026" },
  { src: "/gallery/help.jpeg", title: "Guiding Young Minds", category: "Seminar", date: "2026" },
  { src: "/gallery/robo.jpeg", title: "A Triumph in Robotics ", category: "Robotics", date: "2024" },

  
  { src: "/gallery/meet.jpeg", title: "GDG Conference with Director Sir ", category: "Meeting", date: "2025" },
  { src: "/gallery/group.jpeg", title: "Technical Club Members", category: "Team", date: "2026" },
  { src: "/gallery/audiance.jpeg", title: "Engaging the Audience", category: "EVENT", date: "2025" },
  { src: "/gallery/certificate.jpeg", title: "MERN Stack Workshop - AKTU", category: "Workshop", date: "2025" },

];

function Gallery() {
  const sectionRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  const currentStepRef = useRef(0);
  const isLockedRef = useRef(false);
  const wheelAccumulatorRef = useRef(0);
  const touchStartYRef = useRef(0);
  const cooldownRef = useRef(false);

  const groups = useMemo(() => {
    const result = [];
    for (let i = 0; i < galleryPhotos.length; i += PHOTOS_PER_VIEW) {
      result.push(galleryPhotos.slice(i, i + PHOTOS_PER_VIEW));
    }
    return result;
  }, []);

  const VIEW_MORE_STEP = groups.length;
  const TOTAL_STEPS = groups.length + 1;

  const setGalleryStep = (step) => {
    currentStepRef.current = step;
    setCurrentStep(step);
  };

  const pinGallery = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY;
    if (Math.abs(window.scrollY - top) > 4) {
      window.scrollTo({ top, behavior: "auto" });
    }
  }, []);

  const releaseToNext = useCallback(() => {
    const nextEl = sectionRef.current?.nextElementSibling;
    if (!nextEl) return;
    cooldownRef.current = true;
    const nextTop = nextEl.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: nextTop, behavior: "smooth" });
    setTimeout(() => {
      cooldownRef.current = false;
    }, 700);
  }, []);

  const releaseToPrev = useCallback(() => {
    const prevEl = sectionRef.current?.previousElementSibling;
    if (!prevEl) return;
    cooldownRef.current = true;
    const prevTop = prevEl.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: prevTop, behavior: "smooth" });
    setTimeout(() => {
      cooldownRef.current = false;
    }, 700);
  }, []);

  const moveNext = useCallback(() => {
    if (isLockedRef.current) return;
    const current = currentStepRef.current;

    if (current < VIEW_MORE_STEP) {
      isLockedRef.current = true;
      setGalleryStep(current + 1);
      setTimeout(() => {
        isLockedRef.current = false;
      }, 550);
    } else {
      releaseToNext();
    }
  }, [VIEW_MORE_STEP, releaseToNext]);

  const movePrev = useCallback(() => {
    if (isLockedRef.current) return;
    const current = currentStepRef.current;

    if (current > 0) {
      isLockedRef.current = true;
      setGalleryStep(current - 1);
      setTimeout(() => {
        isLockedRef.current = false;
      }, 550);
    } else {
      releaseToPrev();
    }
  }, [releaseToPrev]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Desktop Mouse Wheel
    const handleWheel = (event) => {
      if (cooldownRef.current) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Check active gallery viewport
      const isInZone = rect.top <= 60 && rect.bottom >= vh - 60;
      const isEnteringTop = event.deltaY > 0 && rect.top > 0 && rect.top < vh * 0.55;
      const isEnteringBottom = event.deltaY < 0 && rect.bottom < vh && rect.bottom > vh * 0.45;

      if (!isInZone && !isEnteringTop && !isEnteringBottom) return;

      if (!isInZone && (isEnteringTop || isEnteringBottom)) {
        event.preventDefault();
        pinGallery();
        return;
      }

      const isAtStart = currentStepRef.current === 0;
      const isAtEnd = currentStepRef.current === VIEW_MORE_STEP;

      if (isAtStart && event.deltaY < 0) {
        releaseToPrev();
        return;
      }
      if (isAtEnd && event.deltaY > 0) {
        releaseToNext();
        return;
      }

      event.preventDefault();
      pinGallery();

      if (isLockedRef.current) return;

      wheelAccumulatorRef.current += event.deltaY;
      const WHEEL_THRESHOLD = 45;

      if (wheelAccumulatorRef.current > WHEEL_THRESHOLD) {
        wheelAccumulatorRef.current = 0;
        moveNext();
      } else if (wheelAccumulatorRef.current < -WHEEL_THRESHOLD) {
        wheelAccumulatorRef.current = 0;
        movePrev();
      }
    };

    // Mobile Swipe Handler
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (cooldownRef.current) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const isInZone = rect.top <= 80 && rect.bottom >= vh - 80;

      if (!isInZone) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      const isAtStart = currentStepRef.current === 0;
      const isAtEnd = currentStepRef.current === VIEW_MORE_STEP;

      if (isAtStart && deltaY < -25) {
        releaseToPrev();
        return;
      }
      if (isAtEnd && deltaY > 25) {
        releaseToNext();
        return;
      }

      if (e.cancelable) {
        event.preventDefault();
      }
      pinGallery();

      if (Math.abs(deltaY) > 35 && !isLockedRef.current) {
        touchStartYRef.current = currentY;
        if (deltaY > 0) {
          moveNext();
        } else {
          movePrev();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    section.addEventListener("touchstart", handleTouchStart, { passive: true });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
    };
  }, [VIEW_MORE_STEP, moveNext, movePrev, pinGallery, releaseToNext, releaseToPrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top > 60 || rect.bottom < vh - 60) return;

      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        moveNext();
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        movePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveNext, movePrev]);

  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  return (
    <section ref={sectionRef} id="gallery" className="gallery-section">
      <div className="gallery-grid" />
      <div className="gallery-noise" />
      <div className="gallery-glow gallery-glow-one" />
      <div className="gallery-glow gallery-glow-two" />

      <div className="gallery-container">
        {/* HEADER */}
        <div className="gallery-header">
          <div className="gallery-eyebrow">✦ SELECTED MOMENTS</div>
          <h2 className="gallery-title">
            My <span>Gallery.</span>
          </h2>
          <p className="gallery-subtitle">More than just some memories.</p>
          <p className="gallery-description">
            A collection of moments, achievements, events and experiences that shaped my journey.
          </p>
        </div>

        {/* PHOTO STAGE */}
        <div className="gallery-stage">
          {groups.map((group, groupIndex) => {
            let className = "gallery-group";

            if (currentStep === groupIndex) {
              className += " gallery-group-active";
            } else if (groupIndex < currentStep) {
              className += " gallery-group-previous";
            } else {
              className += " gallery-group-next";
            }

            return (
              <div key={groupIndex} className={className}>
                {group.map((photo, index) => (
                  <div className="gallery-photo-card" key={`${photo.src}-${index}`}>
                    <div className="gallery-image-wrap">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="gallery-image"
                        loading="lazy"
                      />

                      <div className="gallery-overlay">
                        <div className="gallery-photo-meta">
                          <span>{photo.category}</span>
                          <span>{photo.date}</span>
                        </div>

                        <div className="gallery-photo-bottom">
                          <div>
                            <span>MEMORY</span>
                            <h3>{photo.title}</h3>
                          </div>

                          <div className="gallery-photo-arrow">
                            <ArrowUpRight size={15} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}

          {/* VIEW MORE */}
          <div
            className={
              currentStep === VIEW_MORE_STEP
                ? "gallery-view-more gallery-view-more-active"
                : "gallery-view-more"
            }
          >
            <Link
              to="/gallery"
              className="gallery-view-more-button"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div>
                <span>COMPLETE ARCHIVE</span>
                <strong>VIEW MORE GALLERY</strong>
              </div>
              <ArrowUpRight size={28} />
            </Link>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="gallery-progress">
          <div className="gallery-progress-line">
            <div
              className="gallery-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="gallery-progress-text">
            <span>{String(Math.min(currentStep + 1, TOTAL_STEPS)).padStart(2, "0")}</span>
            <span>{String(TOTAL_STEPS).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
