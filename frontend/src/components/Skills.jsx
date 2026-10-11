import { resumeData } from '../data/resumeData';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {resumeData.skills.map((skill) => (
          <li key={skill.id} className="skill-item">
            <span className="skill-category">{skill.category}:</span>{' '}
            <span className="skill-description">{skill.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
