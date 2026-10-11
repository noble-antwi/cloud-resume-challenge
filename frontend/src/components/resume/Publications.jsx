import { resumeData } from '@/data/resumeData';
import Section from './Section';

export default function Publications() {
  return (
    <Section id="publications" title="Publications">
      <p className="section-note">
        Google Scholar:{' '}
        <a
          href="https://scholar.google.com/citations?user=dOMgBoEAAAAJ"
          target="_blank"
          rel="noreferrer"
        >
          scholar.google.com/citations?user=dOMgBoEAAAAJ
        </a>
      </p>
      <ul className="plain-list">
        {resumeData.publications.map((pub) => (
          <li key={pub.id}>
            {pub.authors} ({pub.year}). <strong>{pub.title}</strong>. In <em>{pub.publication}</em>.
          </li>
        ))}
      </ul>
    </Section>
  );
}
