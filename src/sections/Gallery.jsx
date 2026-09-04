import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./gallery.css";

const PHOTOS_PER_VIEW = 4;

const galleryPhotos = [
  {
    src: "/gallery/trophy.jpeg",
    title: "Achievement Moment",
    category: "ACHIEVEMENT",
    date: "2026",
  },
  {
    src: "/gallery/anchoring.jpeg",
    title: "Anchoring Event",
    category: "EVENT",
    date: "2026",
  },
  {
    src: "/gallery/director-award.jpeg",
    title: "Director Award",
    category: "AWARD",
    date: "2026",
  },
  {
    src: "/gallery/hackathon.jpg",
    title: "Hackathon",
    category: "HACKATHON",
    date: "2026",
  },
  {
    src: "/gallery/robotics-winner.jpg",
    title: "Robotics Winner",
    category: "ACHIEVEMENT",
    date: "2026",
  },
  {
    src: "/gallery/trophy.jpg",
    title: "Winning Moment",
    category: "ACHIEVEMENT",
    date: "2026",
  },
  {
    src: "/gallery/certificate.jpg",
    title: "Certification",
    category: "CERTIFICATION",
    date: "2026",
  },
  {
    src: "/gallery/group-photo.jpg",
    title: "Team Moment",
    category: "TEAM",
    date: "2026",
  },
  {
    src: "/gallery/google-swags.jpg",
    title: "Google Swags",
    category: "GOOGLE",
    date: "2026",
  },
  {
    src: "/gallery/students.jpg",
    title: "With Students",
    category: "COMMUNITY",
    date: "2026",
  },
  {
    src: "/gallery/event-stage.jpg",
    title: "On Stage",
    category: "EVENT",
    date: "2026",
  },
  {
    src: "/gallery/team.jpg",
    title: "Core Team",
    category: "TEAM",
    date: "2026",
  },
  {
    src: "/gallery/swags-2.jpg",
    title: "More Swags",
    category: "GOOGLE",
    date: "2026",
  },
  {
    src: "/gallery/hackathon-team.jpg",
    title: "Hackathon Team",
    category: "HACKATHON",
    date: "2026",
  },
  {
    src: "/gallery/award-stage.jpg",
    title: "Award Ceremony",
    category: "AWARD",
    date: "2026",
  },
  {
    src: "/gallery/college-fest.jpg",
    title: "College Fest",
    category: "EVENT",
    date: "2026",
  },
];

function Gallery() {
  const sectionRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  const currentStepRef = useRef(0);
  const isLockedRef = useRef(false);
  const wheelAccumulatorRef = useRef(0);
  const touchStartYRef = useRef(0);
  const releaseCooldownRef = useRef(false);

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
    window.scrollTo({ top, behavior: "auto" });
  }, []);

  const releaseToNextSection = useCallback(() => {
    const nextEl = sectionRef.current?.nextElementSibling;
    if (!nextEl) return;
    releaseCooldownRef.current = true;
    const nextTop = nextEl.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: nextTop, behavior: "smooth" });
    setTimeout(() => {
      releaseCooldownRef.current = false;
    }, 850);
  }, []);

  const releaseToPrevSection = useCallback(() => {
    const prevEl = sectionRef.current?.previousElementSibling;
    if (!prevEl) return;
    releaseCooldownRef.current = true;
    const prevTop = prevEl.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: prevTop, behavior: "smooth" });
    setTimeout(() => {
      releaseCooldownRef.current = false;
    }, 850);
  }, []);

  const moveNext = useCallback(() => {
    if (isLockedRef.current) return;
    const current = currentStepRef.current;

    if (current < VIEW_MORE_STEP) {
      isLockedRef.current = true;
      setGalleryStep(current + 1);
      pinGallery();
      setTimeout(() => {
        isLockedRef.current = false;
      }, 750);
    } else {
      releaseToNextSection();
    }
  }, [VIEW_MORE_STEP, pinGallery, releaseToNextSection]);

  const movePrev = useCallback(() => {
    if (isLockedRef.current) return;
    const current = currentStepRef.current;

    if (current > 0) {
      isLockedRef.current = true;
      setGalleryStep(current - 1);
      pinGallery();
      setTimeout(() => {
        isLockedRef.current = false;
      }, 750);
    } else {
      releaseToPrevSection();
    }
  }, [pinGallery, releaseToPrevSection]);

  useEffect(() => {
    const handleWheel = (event) => {
      const section = sectionRef.current;
      if (!section || releaseCooldownRef.current) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Check if Gallery is in active lock zone
      const isInLockZone = rect.top <= 80 && rect.bottom >= vh - 80;
      const isEnteringFromTop = event.deltaY > 0 && rect.top > 0 && rect.top < vh * 0.55;
      const isEnteringFromBottom = event.deltaY < 0 && rect.bottom < vh && rect.bottom > vh * 0.45;

      if (!isInLockZone && !isEnteringFromTop && !isEnteringFromBottom) {
        return;
      }

      // Pin cleanly if arriving
      if (!isInLockZone && (isEnteringFromTop || isEnteringFromBottom)) {
        event.preventDefault();
        event.stopPropagation();
        pinGallery();
        return;
      }

      const isAtStart = currentStepRef.current === 0;
      const isAtEnd = currentStepRef.current === VIEW_MORE_STEP;

      // Allow natural exit to preceding/following pages
      if (isAtStart && event.deltaY < 0) {
        releaseToPrevSection();
        return;
      }

      if (isAtEnd && event.deltaY > 0) {
        releaseToNextSection();
        return;
      }

      // Hard lock while scrolling between internal cards
      event.preventDefault();
      event.stopPropagation();
      pinGallery();

      if (isLockedRef.current) return;

      wheelAccumulatorRef.current += event.deltaY;
      const WHEEL_THRESHOLD = 60;

      if (wheelAccumulatorRef.current > WHEEL_THRESHOLD) {
        wheelAccumulatorRef.current = 0;
        moveNext();
      } else if (wheelAccumulatorRef.current < -WHEEL_THRESHOLD) {
        wheelAccumulatorRef.current = 0;
        movePrev();
      }
    };

    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const section = sectionRef.current;
      if (!section || releaseCooldownRef.current) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const isInLockZone = rect.top <= 40 && rect.bottom >= vh - 40;

      if (!isInLockZone) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;

      const isAtStart = currentStepRef.current === 0;
      const isAtEnd = currentStepRef.current === VIEW_MORE_STEP;

      if (isAtStart && deltaY < -20) {
        releaseToPrevSection();
        return;
      }
      if (isAtEnd && deltaY > 20) {
        releaseToNextSection();
        return;
      }

      e.preventDefault();
      if (Math.abs(deltaY) > 40 && !isLockedRef.current) {
        touchStartYRef.current = currentY;
        if (deltaY > 0) {
          moveNext();
        } else {
          movePrev();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [VIEW_MORE_STEP, moveNext, movePrev, pinGallery, releaseToNextSection, releaseToPrevSection]);

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