import { resumeData } from '../data/resumeData';

export default function Experience() {
  const { experience, personal } = resumeData;

  return (
    <main className="main-content">
      <header>
        <h1>{personal.name}</h1>
      </header>

      <section id="experience">
        <h2>Work Experience</h2>
        {experience.map((job) => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <div>
              <span>{job.company}</span>
              <span>{job.period}</span>
            </div>
            <ul>
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
