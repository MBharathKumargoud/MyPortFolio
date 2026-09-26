import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/portfolioData";
import "./Projects.css";

const ExternalArrowIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 10L10 2M10 2H4M10 2V8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Projects() {
  const [ref, visible] = useScrollReveal(0.06);

  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="container">
        <p className="section-label">03 / Selected Work</p>
        <h2 id="projects-heading" className="section-heading">
          SELECTED
          <br />
          WORK.
        </h2>

        <div
          ref={ref}
          className={`projects__container reveal${visible ? " visible" : ""}`}
        >
          {projects.map((project) => (
            <article key={project.id} className="project-block">
              {/* Header Bar */}
              <div className="project-block__header">
                <div className="project-block__num-wrap">
                  <span className="project-block__number">{project.id}</span>
                  <span className="project-block__badge">{project.subtitle}</span>
                </div>
                <div className="project-block__domain">
                  <span className="project-block__pulse" aria-hidden="true" />
                  <span>
                    {project.slug === "careerx" ? "Render Active Instance" : "Netlify Active Instance"}
                  </span>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="project-block__main">
                {/* Details Column */}
                <div className="project-block__content">
                  <h3 className="project-block__title">{project.title}</h3>
                  <p className="project-block__desc">{project.description}</p>

                  <div className="project-block__features-wrap">
                    <p className="project-block__features-label">Core Capabilities</p>
                    <ul className="project-block__features" role="list">
                      {project.features.map((feature) => (
                        <li key={feature} className="project-block__feature-item">
                          <span className="project-block__dash" aria-hidden="true">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-block__tech-wrap">
                    <p className="project-block__tech-label">Architecture &amp; Tech Stack</p>
                    <div className="project-block__tech-list" aria-label="Technologies used">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explicit VIEW LIVE and VIEW GITHUB Buttons */}
                  <div className="project-block__actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-project--live"
                      aria-label={`${project.title} — View Live`}
                    >
                      <span>VIEW LIVE</span>
                      <ExternalArrowIcon />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-project--github"
                      aria-label={`${project.title} — View GitHub`}
                    >
                      <GithubIcon />
                      <span>VIEW GITHUB</span>
                    </a>
                  </div>
                </div>

                {/* Right: Technical Blueprint Pane */}
                <div className="project-block__preview-pane">
                  <div className="browser-window">
                    <div className="browser-window__top">
                      <div className="browser-window__controls" aria-hidden="true">
                        <span className="browser-dot" />
                        <span className="browser-dot" />
                        <span className="browser-dot" />
                      </div>
                      <div className="browser-window__address-bar">
                        <span className="browser-window__lock">🔒</span>
                        <span className="browser-window__url">
                          {project.slug === "careerx"
                            ? "placement-agent-aysa.onrender.com"
                            : "expensetracker0505.netlify.app"}
                        </span>
                      </div>
                    </div>

                    <div className="browser-window__canvas">
                      <div className="blueprint-header">
                        <span className="blueprint-tag">SYSTEM SPECIFICATION</span>
                        <span className="blueprint-status">ACTIVE DEPLOYMENT</span>
                      </div>

                      {project.slug === "careerx" ? (
                        <div className="blueprint-diagram">
                          <div className="blueprint-node">
                            <span className="blueprint-node__step">01. DATA INGESTION</span>
                            <p className="blueprint-node__title">Candidate Profile &amp; Repositories</p>
                            <p className="blueprint-node__detail">
                              Resume PDF/DOCX Parser + Public GitHub API Fetcher
                            </p>
                          </div>
                          <div className="blueprint-arrow">↓</div>
                          <div className="blueprint-node blueprint-node--accent">
                            <span className="blueprint-node__step">02. REASONING PIPELINE</span>
                            <p className="blueprint-node__title">FastAPI + LangChain</p>
                            <p className="blueprint-node__detail">
                              Google Gemini API · Multi-dimensional Role-Fit &amp; Gap Diagnostics
                            </p>
                          </div>
                          <div className="blueprint-arrow">↓</div>
                          <div className="blueprint-node">
                            <span className="blueprint-node__step">03. STRATEGIC OUTPUT</span>
                            <p className="blueprint-node__title">Career Acceleration Plan</p>
                            <p className="blueprint-node__detail">
                              Prioritized skills, interview prep, 30-day plan &amp; 60–90 day milestones
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="blueprint-diagram">
                          <div className="blueprint-node">
                            <span className="blueprint-node__step">01. SECURITY GATEWAY</span>
                            <p className="blueprint-node__title">Authentication &amp; Validation</p>
                            <p className="blueprint-node__detail">
                              Rigorous client-side password policy (length, letter, number, special char)
                            </p>
                          </div>
                          <div className="blueprint-arrow">↓</div>
                          <div className="blueprint-node blueprint-node--accent">
                            <span className="blueprint-node__step">02. SESSION MANAGER</span>
                            <p className="blueprint-node__title">User Account State</p>
                            <p className="blueprint-node__detail">
                              Persistent user session state and password recovery workflows
                            </p>
                          </div>
                          <div className="blueprint-arrow">↓</div>
                          <div className="blueprint-node">
                            <span className="blueprint-node__step">03. LEDGER INTERFACE</span>
                            <p className="blueprint-node__title">Expense Ledger &amp; Calculations</p>
                            <p className="blueprint-node__detail">
                              Real-time transaction tracking, balance calculation, and category breakdown
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="browser-window__action-bar">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="browser-launch-btn"
                        >
                          <span>Launch Live Deployment</span>
                          <ExternalArrowIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
