import { useState, useEffect } from "react";
import { useNavScroll } from "../hooks/useNavScroll";
import { personalInfo } from "../data/portfolioData";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useNavScroll(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Active section indicator
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`navbar${scrolled ? " scrolled" : ""}`}
        role="banner"
      >
        <div className="navbar__inner">
          <a
            href="#hero"
            className="navbar__logo"
            aria-label="M Bharath Kumar Goud — Home"
            onClick={closeMenu}
          >
            <span className="navbar__logo-main">{personalInfo.nameShort}</span>
            <span className="navbar__logo-sub">M BHARATH KUMAR GOUD</span>
          </a>

          {/* Desktop Links */}
          <nav className="navbar__nav" aria-label="Main Navigation">
            <ul className="navbar__links" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={activeSection === link.href.slice(1) ? "active" : ""}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={personalInfo.resumeUrl}
              className="navbar__resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              download="M_Bharath_Kumar_Goud_Resume.pdf"
              aria-label="Download M Bharath Kumar Goud Resume"
            >
              <span>RESUME</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 9L9 1M9 1H3M9 1V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`navbar__hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`navbar__mobile-drawer${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="navbar__mobile-header">
          <span className="navbar__mobile-brand">{personalInfo.name}</span>
          <button
            className="navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="navbar__mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={activeSection === link.href.slice(1) ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__mobile-footer">
          <a
            href={personalInfo.resumeUrl}
            className="navbar__mobile-resume"
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
            download="M_Bharath_Kumar_Goud_Resume.pdf"
          >
            DOWNLOAD RESUME (PDF)
          </a>
        </div>
      </div>
    </>
  );
}
