import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "coding", label: "Coding", icon: Code2, href: "#coding" },
  { id: "skills", label: "Skills", icon: Cpu, href: "#skills" },
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "achievements", label: "Achievements", icon: Trophy, href: "#achievements" },
  { id: "certificates", label: "Certificates", icon: Award, href: "#certificates" },
  { id: "gallery", label: "Gallery", icon: Images, href: "#gallery" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =====================================================
     ACTIVE TAB DETECTION ACROSS ROUTES
  ===================================================== */
  useEffect(() => {
    setMenuOpen(false);

    // Other pages: Match navbar active tab correctly
    if (location.pathname.includes("/certificates")) {
      setActiveSection("certificates");
      return;
    }
    if (location.pathname.includes("/projects")) {
      setActiveSection("projects");
      return;
    }
    if (location.pathname.includes("/gallery")) {
      setActiveSection("gallery");
      return;
    }

    if (location.pathname !== "/") return;

    // Home Page ScrollSpy
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.5],
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  /* =====================================================
     NAVIGATION HANDLER
  ===================================================== */
  const handleSectionClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);

    const sectionId = href.replace("#", "");

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${sectionId}`);
        setActiveSection(sectionId);
      }
      return;
    }

    navigate(`/#${sectionId}`);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "#home");
      setActiveSection("home");
    } else {
      navigate("/#home");
    }
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className={`portfolio-navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="navbar-inner">
        {/* BRAND */}
        <a href="#home" className="navbar-brand" onClick={handleHomeClick}>
          <span className="navbar-brand-icon">
            <Home size={16} />
          </span>
          <span className="navbar-brand-text">
            Yogesh Maurya<span>.</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="navbar-desktop">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`navbar-link ${
                  activeSection === item.id ? "navbar-link-active" : ""
                }`}
                onClick={(event) => handleSectionClick(event, item.href)}
              >
                <Icon size={13} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* DESKTOP THEME */}
        <button
          type="button"
          className="navbar-theme-button desktop-theme-button"
          onClick={toggleTheme}
          aria-label="Change theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* MOBILE HOME */}
        <a
          href="#home"
          className="navbar-mobile-home"
          onClick={handleHomeClick}
          aria-label="Home"
        >
          <Home size={19} />
        </a>

        {/* MOBILE THEME */}
        <button
          type="button"
          className="navbar-theme-button mobile-theme-button"
          onClick={toggleTheme}
          aria-label="Change theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* MOBILE BURGER */}
        <button
          type="button"
          className={`navbar-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`navbar-mobile-menu ${menuOpen ? "navbar-mobile-menu-open" : ""}`}>
        <div className="navbar-mobile-menu-inner">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`navbar-mobile-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                style={{ "--item-index": index }}
                onClick={(event) => handleSectionClick(event, item.href)}
              >
                <span className="navbar-mobile-link-left">
                  <Icon size={17} />
                  <span>{item.label}</span>
                </span>
                <span className="navbar-mobile-arrow">
                  <ExternalLink size={14} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Navbar;