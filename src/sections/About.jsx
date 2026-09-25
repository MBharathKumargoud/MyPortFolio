import { useScrollReveal } from "../hooks/useScrollReveal";
import { aboutContent } from "../data/portfolioData";
import "./About.css";

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <p className="section-label">01 / About</p>

        <div
          ref={ref}
          className={`about__grid reveal${visible ? " visible" : ""}`}
        >
          {/* Left Column: Heading and Summary */}
          <div className="about__col-left">
            <h2 id="about-heading" className="about__heading">
              BUILDING THROUGH
              <br />
              LEARNING.
            </h2>
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className="about__text">
                {p}
              </p>
            ))}

            {/* Understated Highlights */}
            <div className="about__highlights">
              <p className="about__highlights-label">Key Milestones</p>
              <ul className="about__highlights-list" role="list">
                {aboutContent.highlights.map((h, i) => (
                  <li key={i} className="about__highlight-item">
                    <span className="about__highlight-dot" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Information Block */}
          <div className="about__col-right">
            <div className="about__info-card" aria-label="Quick facts">
              <p className="about__info-title">PROFILE SPECIFICATION</p>
              <div className="about__info-rows">
                {aboutContent.info.map((item) => (
                  <div key={item.label} className="about__info-item">
                    <span className="about__info-label">{item.label}</span>
                    <span className="about__info-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
