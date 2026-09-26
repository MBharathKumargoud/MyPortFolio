import { personalInfo } from "../data/portfolioData";
import "./Footer.css";

const socialLinks = [
  { label: "GitHub", url: personalInfo.socials.github },
  { label: "LinkedIn", url: personalInfo.socials.linkedin },
  { label: "LeetCode", url: personalInfo.socials.leetcode },
  { label: "HackerRank", url: personalInfo.socials.hackerrank },
  { label: "Email", url: personalInfo.emailUrl },
  { label: "Resume", url: personalInfo.resumeUrl, download: "M_Bharath_Kumar_Goud_Resume.pdf" },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__name">M BHARATH KUMAR GOUD</p>
            <p className="footer__tagline">
              Computer Science Engineering Student
              <br />
              Java Developer | Data Analytics Enthusiast
            </p>
          </div>

          <nav className="footer__links" aria-label="Footer links">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="footer__link"
                target={s.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={s.download}
                aria-label={s.label}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 M Bharath Kumar Goud. All rights reserved.
          </p>
          <a href="#hero" className="footer__back-top" aria-label="Return to top of page">
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
