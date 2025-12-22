import { resumeData } from '../data/resumeData';

export default function Skills() {
  const { skills, personal } = resumeData;

  return (
    <main className="main-content">
      <header>
        <h1>{personal.name}</h1>
      </header>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <strong>{skill.category}:</strong> {skill.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
