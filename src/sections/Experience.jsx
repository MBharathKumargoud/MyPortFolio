import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experience, certifications } from "../data/portfolioData";
import CertificateModal from "../components/CertificateModal";
import "./Experience.css";

export default function Experience() {
  const [ref, visible] = useScrollReveal();
  const [activeCert, setActiveCert] = useState(null);

  const handleOpenCert = (certImg, title, org) => {
    const found = certifications.find(
      (c) => c.org.toLowerCase().includes(org.toLowerCase())
    );
    if (found) {
      setActiveCert(found);
    } else {
      setActiveCert({
        name: title,
        org: org,
        image: certImg,
      });
    }
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
          PRACTICE.
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
                    onClick={() =>
                      handleOpenCert(item.certificateImage, item.role, item.company)
                    }
                    aria-label={`View verification certificate for ${item.role} at ${item.company}`}
                  >
                    <span>View Completion Certificate ↗</span>
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
