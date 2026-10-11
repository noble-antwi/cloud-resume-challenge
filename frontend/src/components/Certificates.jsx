import { resumeData } from '../data/resumeData';
import './Certificates.css';

export default function Certificates() {
  return (
    <section className="certificates-section">
      <h2>Certificates</h2>
      <ul className="certificates-list">
        {resumeData.certificates && resumeData.certificates.map((cert) => (
          <li key={cert.id} className="certificate-item">
            {cert.title} · {cert.issuer} · {cert.date}
          </li>
        ))}
      </ul>
    </section>
  );
}
