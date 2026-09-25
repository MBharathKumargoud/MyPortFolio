import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills } from "../data/portfolioData";
import "./Skills.css";

const skillCategories = [
  {
    code: "01",
    label: "Languages",
    description: "Core programming and query languages used for backend logic and systems",
    items: skills.languages,
  },
  {
    code: "02",
    label: "Core Concepts",
    description: "Architectural foundations, database management, and algorithmic thinking",
    items: skills.core,
  },
  {
    code: "03",
    label: "Tools & Platforms",
    description: "Version control, development environments, and collaborative workflows",
    items: skills.tools,
  },
];

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
          {skillCategories.map((cat) => (
            <div key={cat.code} className="skills__category">
              <div className="skills__cat-header">
                <span className="skills__cat-code">{cat.code}</span>
                <h3 className="skills__cat-label">{cat.label}</h3>
              </div>
              <p className="skills__cat-desc">{cat.description}</p>

              <ul className="skills__list" role="list">
                {cat.items.map((item) => (
                  <li key={item} className="skills__item">
                    <span className="skills__bullet" aria-hidden="true" />
                    <span className="skills__name">{item}</span>
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
