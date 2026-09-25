import { useEffect } from "react";
import "./CertificateModal.css";

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      className="cert-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="cert-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="cert-modal-header">
          <div>
            <p className="cert-modal-org">{cert.org}</p>
            <h3 id="cert-modal-title" className="cert-modal-title">
              {cert.name}
            </h3>
            {cert.credentialId && (
              <p className="cert-modal-id">
                <span>Credential / Roll ID:</span> {cert.credentialId}
              </p>
            )}
          </div>
          <button
            className="cert-modal-close"
            onClick={onClose}
            aria-label="Close certificate modal"
          >
            ✕
          </button>
        </header>

        <div className="cert-modal-body">
          {cert.image ? (
            <img
              src={cert.image}
              alt={`${cert.name} certificate issued by ${cert.org}`}
              className="cert-modal-image"
              loading="lazy"
            />
          ) : (
            <div className="cert-modal-fallback">
              <p>Certificate record verified for {cert.org}.</p>
            </div>
          )}
        </div>

        <footer className="cert-modal-footer">
          <div className="cert-modal-meta">
            {cert.result && (
              <span className="cert-modal-badge">{cert.result}</span>
            )}
            {cert.date && (
              <span className="cert-modal-date">{cert.date}</span>
            )}
          </div>
          {cert.image && (
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-modal-external"
            >
              Open Full Resolution ↗
            </a>
          )}
        </footer>
      </div>
    </div>
  );
}
