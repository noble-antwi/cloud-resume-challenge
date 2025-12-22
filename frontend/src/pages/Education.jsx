import { resumeData } from '../data/resumeData';

export default function Education() {
  const { education, personal } = resumeData;

  return (
    <main className="main-content">
      <header>
        <h1>{personal.name}</h1>
      </header>

      <section id="education">
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id}>
            <div>
              <span>{edu.school}</span>
              <span>{edu.period}</span>
            </div>
            <div>
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
