import { resumeData } from '../data/resumeData';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {resumeData.experience.map((job) => (
          <div key={job.id} className="experience-item">
            <div className="experience-header">
              <h3>{job.title}</h3>
              <span className="experience-period">{job.period}</span>
            </div>
            <p className="experience-company">{job.company}</p>
            <ul className="experience-responsibilities">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
