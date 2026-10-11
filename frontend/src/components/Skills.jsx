import { resumeData } from '../data/resumeData';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="plain-list">
        {resumeData.skills.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.category}:</strong> {skill.description}
          </li>
        ))}
      </ul>
    </Section>
  );
}
