import { resumeData } from '../data/resumeData';

export default function Certificates() {
  const { certificates, personal } = resumeData;

  return (
    <main className="main-content">
      <header>
        <h1>{personal.name}</h1>
      </header>

      <section id="certificates">
        <h2>Certificates</h2>
        <div className="certificates-list">
          {certificates.map((cert) => (
            <a key={cert.id} href={cert.link} className="certificate-item">
              <span className="cert-title">{cert.title}</span>
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
