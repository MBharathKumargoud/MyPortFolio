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
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
          PROJECTS.
        </h2>

        <div
          ref={ref}
          className={`projects__container reveal${visible ? " visible" : ""}`}
        >
          {projects.map((project) => (
            <article key={project.id} className="project-block">
              {/* Top Banner Row */}
              <div className="project-block__header">
                <div className="project-block__num-wrap">
                  <span className="project-block__number">{project.id}</span>
                  <span className="project-block__badge">{project.subtitle}</span>
                </div>
                <div className="project-block__domain">
                  <span className="project-block__pulse" aria-hidden="true" />
                  <span>
                    {project.slug === "careerx" ? "Render Production" : "Netlify Production"}
                  </span>
                </div>
              </div>

              {/* Main Two-Column Layout */}
              <div className="project-block__main">
                {/* Left: Spec & Details */}
                <div className="project-block__content">
                  <h3 className="project-block__title">{project.title}</h3>
                  <p className="project-block__desc">{project.description}</p>

                  <div className="project-block__features-wrap">
                    <p className="project-block__features-label">Key Capabilities</p>
                    <ul className="project-block__features" role="list">
                      {project.features.map((feature) => (
                        <li key={feature} className="project-block__feature-item">
                          <span className="project-block__dash" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-block__tech-wrap">
                    <p className="project-block__tech-label">Technologies</p>
                    <div className="project-block__tech-list" aria-label="Technologies used">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="project-block__actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-project--live"
                      aria-label={`${project.title} — Live Project`}
                    >
                      <span>LIVE PROJECT →</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-project--github"
                      aria-label={`${project.title} — View Source on GitHub`}
                    >
                      <GithubIcon />
                      <span>VIEW SOURCE →</span>
                    </a>
                  </div>
                </div>

                {/* Right: Clean Browser Console Blueprint */}
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
                            ? "placement-agent-aysa.onrender.com/agent/playground/"
                            : "expensetracker0505.netlify.app"}
                        </span>
                      </div>
                    </div>

                    <div className="browser-window__canvas">
                      <div className="blueprint-header">
                        <span className="blueprint-tag">SYSTEM BLUEPRINT</span>
                        <span className="blueprint-status">ACTIVE DEPLOYMENT</span>
                      </div>

                      {project.slug === "careerx" ? (
                        <div className="blueprint-diagram">
                          <div className="blueprint-node">
                            <span className="blueprint-node__step">01. INGESTION</span>
                            <p className="blueprint-node__title">Candidate Profile</p>
                            <p className="blueprint-node__detail">
                              Resume PDF/DOCX Parser + Public GitHub Repositories
                            </p>
                          </div>
                          <div className="blueprint-arrow">↓</div>
                          <div className="blueprint-node blueprint-node--accent">
                            <span className="blueprint-node__step">02. REASONING ENGINE</span>
                            <p className="blueprint-node__title">FastAPI + LangChain</p>
                            <p className="blueprint-node__detail">
                              Google Gemini API · Role-fit scoring &amp; gap diagnosis
                            </p>
                          </div>
                          <div className="blueprint-arrow">↓</div>
                          <div className="blueprint-node">
                            <span className="blueprint-node__step">03. SYNTHESIS</span>
                            <p className="blueprint-node__title">Actionable Career Roadmap</p>
                            <p className="blueprint-node__detail">
                              30-day action plan · 60–90 day milestones · Interview prep
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="blueprint-diagram">
                          <div className="blueprint-node">
                            <span className="blueprint-node__step">01. CLIENT GATEWAY</span>
                            <p className="blueprint-node__title">Registration &amp; Auth</p>
                            <p className="blueprint-node__detail">
                              Multi-rule password validation (length, letter, number, special char)
                            </p>
                          </div>
                          <div className="blueprint-arrow">↓</div>
                          <div className="blueprint-node blueprint-node--accent">
                            <span className="blueprint-node__step">02. SESSION CONTROLLER</span>
                            <p className="blueprint-node__title">Authentication &amp; Recovery</p>
                            <p className="blueprint-node__detail">
                              Secure account access and password-reset workflows
                            </p>
                          </div>
                          <div className="blueprint-arrow">↓</div>
                          <div className="blueprint-node">
                            <span className="blueprint-node__step">03. LEDGER DASHBOARD</span>
                            <p className="blueprint-node__title">Expense Management</p>
                            <p className="blueprint-node__detail">
                              Interactive balance ledger &amp; expense tracking interface
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
                          <span>Launch Live Deployed Instance</span>
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
