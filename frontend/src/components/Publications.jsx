import { resumeData } from '../data/resumeData';
import './Publications.css';

export default function Publications() {
  return (
    <section className="publications-section">
      <h2>Publications & Google Scholar Profile</h2>
      <p className="scholar-profile">
        Verified Google Scholar Profile:{' '}
        <a 
          href="https://scholar.google.com/citations?user=dOMgBoEAAAAJ" 
          target="_blank" 
          rel="noreferrer"
        >
          https://scholar.google.com/citations?user=dOMgBoEAAAAJ
        </a>
      </p>
      <ul className="publications-list">
        {resumeData.publications && resumeData.publications.map((pub) => (
          <li key={pub.id} className="publication-item">
            {pub.authors} ({pub.year}). {pub.title}. In <em>{pub.publication}</em>.
          </li>
        ))}
      </ul>
    </section>
  );
}
