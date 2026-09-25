import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { certifications } from "../data/portfolioData";
import CertificateModal from "../components/CertificateModal";
import "./Certifications.css";

export default function Certifications() {
  const [ref, visible] = useScrollReveal(0.08);
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="certifications"
      className="certifications"
      aria-labelledby="certs-heading"
    >
      <div className="container">
        <p className="section-label">06 / Certifications</p>
        <h2 id="certs-heading" className="section-heading">
          CERTIFICATIONS &amp;
          <br />
          CREDENTIALS.
        </h2>

        <div
          ref={ref}
          className={`certifications__grid reveal${visible ? " visible" : ""}`}
        >
          {certifications.map((cert) => (
            <article key={cert.id || cert.name} className="cert-card">
              <div className="cert-card__top">
                <span className="cert-card__org">{cert.org}</span>
                {cert.date && (
                  <span className="cert-card__date">{cert.date}</span>
                )}
              </div>

              <h3 className="cert-card__name">{cert.name}</h3>

              <div className="cert-card__details">
                {cert.result && (
                  <span className="cert-card__badge">{cert.result}</span>
                )}
                {cert.credentialId && (
                  <span className="cert-card__id">
                    ID: {cert.credentialId.slice(0, 16)}...
                  </span>
                )}
              </div>

              <div className="cert-card__action">
                <button
                  type="button"
                  className="cert-card__btn"
                  onClick={() => setActiveCert(cert)}
                  aria-label={`View certificate for ${cert.name}`}
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
