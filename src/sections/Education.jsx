import { useScrollReveal } from "../hooks/useScrollReveal";
import { education } from "../data/portfolioData";
import "./Education.css";

export default function Education() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="education" className="education" aria-labelledby="education-heading">
      <div className="container">
        <p className="section-label">05 / Education</p>
        <h2 id="education-heading" className="section-heading">
          ACADEMIC
          <br />
          FOUNDATIONS.
        </h2>

        <div
          ref={ref}
          className={`education__list reveal${visible ? " visible" : ""}`}
        >
          {education.map((item, i) => (
            <article key={i} className="education__item">
              <div className="education__left">
                <span className="education__period">{item.period}</span>
                {item.status && (
                  <span className="education__badge">{item.status}</span>
                )}
              </div>

              <div className="education__right">
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__institution">{item.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
