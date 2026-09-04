import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Menu,
  X,
  Code2,
  User,
  Cpu,
  FolderGit2,
  Trophy,
  Award,
  Images,
  Mail,
  Sun,
  Moon,
  ExternalLink,
} from "lucide-react";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    icon: User,
    href: "#about",
  },
  {
    id: "coding",
    label: "Coding",
    icon: Code2,
    href: "#coding",
  },
  {
    id: "skills",
    label: "Skills",
    icon: Cpu,
    href: "#skills",
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderGit2,
    href: "#projects",
  },
  {
    id: "achievements",
    label: "Achievements",
    icon: Trophy,
    href: "#achievements",
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: Award,
    href: "#certificates",
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: Images,
    href: "#gallery",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    href: "#contact",
  },
];

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =====================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ===================================================== */

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);


  /* =====================================================
     ACTIVE SECTION DETECTION
  ===================================================== */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = navItems
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(Boolean);

    if (!sections.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (visible.length) {
            setActiveSection(
              visible[0].target.id
            );
          }
        },
        {
          threshold: [0.25, 0.5, 0.75],
          rootMargin:
            "-15% 0px -60% 0px",
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);


  /* =====================================================
     SECTION NAVIGATION
  ===================================================== */

  const handleSectionClick = (
    event,
    href
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    const sectionId =
      href.replace("#", "");

    /* Already on home */
    if (location.pathname === "/") {
      const element =
        document.getElementById(
          sectionId
        );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(
          null,
          "",
          `#${sectionId}`
        );

        setActiveSection(
          sectionId
        );
      }

      return;
    }

    /* Other page -> Home section */
    navigate(`/#${sectionId}`);
  };


  /* =====================================================
     HOME BUTTON
  ===================================================== */

  const handleHomeClick = (
    event
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState(
        null,
        "",
        "#home"
      );

      setActiveSection("home");
    } else {
      navigate("/#home");
    }
  };


  /* =====================================================
     THEME TOGGLE
  ===================================================== */

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };


  return (
    <header
  className={`portfolio-navbar ${
    darkMode
      ? "navbar-dark"
      : "navbar-light"
  }`}
>

      <div className="navbar-inner">

        {/* =================================================
            DESKTOP BRAND
        ================================================= */}

        <a
          href="#home"
          className="navbar-brand"
          onClick={handleHomeClick}
        >
          <span className="navbar-brand-icon">
            <Home size={16} />
          </span>

          <span className="navbar-brand-text">
            Yogesh Maurya
            <span>.</span>
          </span>
        </a>


        {/* =================================================
            DESKTOP NAV
        ================================================= */}

        <nav className="navbar-desktop">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`navbar-link ${
                  activeSection === item.id
                    ? "navbar-link-active"
                    : ""
                }`}
                onClick={(event) =>
                  handleSectionClick(
                    event,
                    item.href
                  )
                }
              >
                <Icon size={13} />

                <span>
                  {item.label}
                </span>
              </a>
            );
          })}

        </nav>


        {/* =================================================
            DESKTOP THEME BUTTON
        ================================================= */}

        <button
          type="button"
          className="navbar-theme-button desktop-theme-button"
          onClick={toggleTheme}
          aria-label="Change theme"
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>


        {/* =================================================
            MOBILE HOME
        ================================================= */}

        <a
          href="#home"
          className="navbar-mobile-home"
          onClick={handleHomeClick}
          aria-label="Home"
        >
          <Home size={19} />
        </a>


        {/* =================================================
            MOBILE THEME
        ================================================= */}

        <button
          type="button"
          className="navbar-theme-button mobile-theme-button"
          onClick={toggleTheme}
          aria-label="Change theme"
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <button
          type="button"
          className={`navbar-menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() =>
            setMenuOpen(
              (prev) => !prev
            )
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

      </div>


      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <div
        className={`navbar-mobile-menu ${
          menuOpen
            ? "navbar-mobile-menu-open"
            : ""
        }`}
      >
        <div className="navbar-mobile-menu-inner">

          {navItems.map(
            (item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`navbar-mobile-link ${
                    activeSection === item.id
                      ? "active"
                      : ""
                  }`}
                  style={{
                    "--item-index":
                      index,
                  }}
                  onClick={(event) =>
                    handleSectionClick(
                      event,
                      item.href
                    )
                  }
                >

                  <span className="navbar-mobile-link-left">

                    <Icon size={17} />

                    <span>
                      {item.label}
                    </span>

                  </span>

                  <span className="navbar-mobile-arrow">
                    <ExternalLink size={14} />
                  </span>

                </a>
              );
            }
          )}

        </div>
      </div>

    </header>
  );
}

export default Navbar;