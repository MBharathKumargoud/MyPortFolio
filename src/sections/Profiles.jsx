import { useScrollReveal } from "../hooks/useScrollReveal";
import { profiles } from "../data/portfolioData";
import "./Profiles.css";

const ArrowUpRight = () => (
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Profiles() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="profiles" className="profiles" aria-labelledby="profiles-heading">
      <div className="container">
        <p className="section-label">07 / Coding Profiles</p>
        <h2 id="profiles-heading" className="section-heading">
          CODING &amp; PROFESSIONAL
          <br />
          PROFILES.
        </h2>

        <div
          ref={ref}
          className={`profiles__grid reveal${visible ? " visible" : ""}`}
        >
          {profiles.map((p) => (
            <article key={p.name} className="profile-card">
              <div className="profile-card__header">
                <span className="profile-card__name">{p.name}</span>
                <span className="profile-card__stat">{p.stat}</span>
              </div>

              <h3 className="profile-card__handle">{p.handle}</h3>
              <p className="profile-card__note">{p.note}</p>

              <div className="profile-card__action">
                <a
                  href={p.url}
                  className="profile-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name} profile (${p.handle}) in new tab`}
                >
                  <span>Visit Profile</span>
                  <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
