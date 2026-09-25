import { personalInfo } from "../data/portfolioData";
import "./Hero.css";

const PHOTO_SRC = "/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero — Introduction">
      {/* ─── Left column ─── */}
      <div className="hero__left">
        <span className="hero__label">
          {personalInfo.label}
        </span>

        <h1 className="hero__name">
          M BHARATH
          <br />
          KUMAR GOUD
        </h1>

        <p className="hero__title">{personalInfo.title}</p>

        <p className="hero__desc">{personalInfo.description}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn-primary">
            <span>EXPLORE MY WORK →</span>
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            download="M_Bharath_Kumar_Goud_Resume.pdf"
            aria-label="Download Resume (PDF)"
          >
            <span>DOWNLOAD RESUME →</span>
          </a>
        </div>

        <nav className="hero__socials" aria-label="Professional coding profiles">
          <a
            href={personalInfo.socials.github}
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.linkedin}
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.socials.leetcode}
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile"
          >
            LeetCode
          </a>
          <a
            href={personalInfo.socials.hackerrank}
            className="hero__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HackerRank profile"
          >
            HackerRank
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
            />
          </div>

          {/* Small metadata badge near portrait */}
          <div className="hero__meta" aria-label="Candidate location and academic status">
            <span className="hero__meta-item">
              <span>HYDERABAD, INDIA</span>
            </span>
            <span className="hero__meta-item">
              <span>3RD YEAR • B.TECH CSE</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
