import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillsGrouped } from "../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="container">
        <p className="section-label">02 / Skills</p>
        <h2 id="skills-heading" className="section-heading">
          TECHNICAL
          <br />
          COMPETENCIES.
        </h2>

        <div
          ref={ref}
          className={`skills__grid reveal${visible ? " visible" : ""}`}
        >
          {skillsGrouped.map((cat, idx) => (
            <div key={cat.category} className="skills__card">
              <div className="skills__card-header">
                <span className="skills__code">0{idx + 1}</span>
                <h3 className="skills__category-title">{cat.category}</h3>
              </div>

              <ul className="skills__items" role="list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skills__item">
                    <span className="skills__dash" aria-hidden="true">—</span>
                    <span className="skills__name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
