import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const [ref, visible] = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <p className="section-label">08 / Contact</p>

        <h2 id="contact-heading" className="contact__heading">
          LET'S BUILD
          <br />
          <span className="contact__heading-accent">SOMETHING</span> USEFUL.
        </h2>

        <div
          ref={ref}
          className={`contact__grid reveal${visible ? " visible" : ""}`}
        >
          {/* Coordinates list */}
          <div className="contact__info-list">
            <div className="contact__info-item">
              <span className="contact__info-label">Direct Email</span>
              <div className="contact__info-val-wrap">
                <a
                  href={personalInfo.emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    navigator.clipboard?.writeText(personalInfo.email);
                  }}
                  className="contact__info-link"
                  aria-label="Send email to bharathkumargoud267@gmail.com"
                >
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="contact__copy-btn"
                  aria-label="Copy email address"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Phone</span>
              <a
                href={`tel:${personalInfo.phone.replace(/[\s-]/g, "")}`}
                className="contact__info-link"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Location</span>
              <span className="contact__info-text">{personalInfo.location}</span>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Code Repositories</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-link"
              >
                github.com/MBharathKumargoud
              </a>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Professional Network</span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-link"
              >
                linkedin.com/in/bharath-kumar-goud-15786b2a1/
              </a>
            </div>
          </div>

          {/* Action / Next steps card */}
          <div className="contact__action-card">
            <h3 className="contact__action-title">Get In Touch</h3>
            <p className="contact__action-desc">
              Available for software engineering, Java development, and data analyst
              opportunities. Open to discussing internships and impactful projects.
            </p>

            <div className="contact__btn-group">
              <a
                href={personalInfo.emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  navigator.clipboard?.writeText(personalInfo.email);
                }}
                className="contact__cta-btn contact__cta-btn--primary"
                aria-label="Email Bharath via Gmail"
              >
                EMAIL ME →
              </a>
              <a
                href="https://www.linkedin.com/in/bharath-kumar-goud-15786b2a1/"
                className="contact__cta-btn contact__cta-btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                LINKEDIN →
              </a>
            </div>

            <div className="contact__notice">
              <span className="contact__notice-dot" aria-hidden="true" />
              <span>Direct inquiries receive prompt responses.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
