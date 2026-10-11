import { resumeData } from '../data/resumeData';
import './Education.css';

export default function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {resumeData.education.map((edu) => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              <h3>{edu.school}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            <p className="education-degree">{edu.degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
