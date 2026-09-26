import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experience } from "../data/portfolioData";
import CertificateModal from "../components/CertificateModal";
import "./Experience.css";

export default function Experience() {
  const [ref, visible] = useScrollReveal();
  const [activeCert, setActiveCert] = useState(null);

  const handleOpenCert = (item) => {
    setActiveCert({
      name: item.role,
      org: item.company,
      image: item.certificateImage,
      date: item.period,
      credentialId: item.credentialId,
      result: item.type,
    });
  };

  return (
    <section
      id="experience"
      className="experience"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <p className="section-label">04 / Experience</p>
        <h2 id="experience-heading" className="section-heading">
          EXPERIENCE &amp;
          <br />
          TRAINING.
        </h2>

        <div
          ref={ref}
          className={`experience__timeline reveal${visible ? " visible" : ""}`}
        >
          {experience.map((item, i) => (
            <article key={i} className="experience__item">
              <div className="experience__col-meta">
                <span className="experience__type">{item.type}</span>
                <span className="experience__period">{item.period}</span>
              </div>

              <div className="experience__col-body">
                <h3 className="experience__role">{item.role}</h3>
                <p className="experience__company">{item.company}</p>
                <p className="experience__desc">{item.description}</p>

                <div className="experience__tags" aria-label="Key focus areas">
                  {item.tags.map((tag) => (
                    <span key={tag} className="experience__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {item.certificateImage && (
                  <button
                    type="button"
                    className="experience__cert-btn"
                    onClick={() => handleOpenCert(item)}
                    aria-label={`View completion certificate for ${item.role} at ${item.company}`}
                  >
                    <span>View Certificate</span>
                    <svg
                      width="12"
                      height="12"
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
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeCert && (
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}
