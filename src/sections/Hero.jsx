import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

const PHOTO_SRC = "/profile.jpg";

// Verified SVG Icons matching reference design
const GithubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const LeetcodeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 3.585 5.619 5.619 0 0 0 2.05 2.434l2.404 1.624 3.738 2.502a1.376 1.376 0 0 0 1.542-.016 1.374 1.374 0 0 0 .426-.957 1.374 1.374 0 0 0-.426-.957l-3.737-2.502-2.405-1.624a2.868 2.868 0 0 1-1.045-1.241 2.822 2.822 0 0 1-.138-1.828c.08-.344.24-.666.47-.941l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0 .025-1.933A1.374 1.374 0 0 0 13.483 0zm4.27 8.52a1.376 1.376 0 0 0-1.375 1.375v4.21H8.375a1.375 1.375 0 1 0 0 2.75h9.378a1.375 1.375 0 0 0 1.375-1.375V9.895a1.376 1.376 0 0 0-1.375-1.375z" />
  </svg>
);

const HackerrankIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm3.844 16.8h-1.92v-3.84H10.08v3.84H8.16V7.2h1.92v3.84h3.84V7.2h1.92v9.6z" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero — Introduction">
      <div className="container hero__container">
        {/* ─── Left column ─── */}
        <div className="hero__left">
          <span className="hero__label">
            {personalInfo.label}
          </span>

          <h1 className="hero__name">
            M Bharath
            <br />
            Kumar Goud
          </h1>

          <p className="hero__title">{personalInfo.title}</p>

          <p className="hero__desc">{personalInfo.description}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">
              <span>EXPLORE MY WORK</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              download="M_Bharath_Kumar_Goud_Resume.pdf"
              aria-label="Download Resume (PDF)"
            >
              <span>DOWNLOAD RESUME</span>
              <DownloadIcon />
            </a>
          </div>

          <nav className="hero__socials" aria-label="Social and coding profiles">
            <a
              href={personalInfo.socials.github}
              className="hero__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              className="hero__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              className="hero__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <LeetcodeIcon />
            </a>
            <a
              href={personalInfo.socials.hackerrank}
              className="hero__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank Profile"
              title="HackerRank"
            >
              <HackerrankIcon />
            </a>
          </nav>
        </div>

        {/* ─── Right column — Portrait ─── */}
        <div className="hero__right">
          <div className="hero__image-wrapper">
            <div className="hero__image-frame">
              <img
                src={PHOTO_SRC}
                alt="M Bharath Kumar Goud — Professional portrait in corporate business attire"
                className="hero__image"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
