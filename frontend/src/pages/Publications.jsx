import { resumeData } from '../data/resumeData';

export default function Publications() {
  const { publications, personal } = resumeData;

  return (
    <main className="main-content">
      <header>
        <h1>{personal.name}</h1>
      </header>

      <section id="publications">
        <h2>Publications & Google Scholar Profile</h2>
        <p>
          Verified Google Scholar Profile:{' '}
          <a href="https://scholar.google.com/citations?user=dOMgBoEAAAAJ" target="_blank" rel="noreferrer">
            https://scholar.google.com/citations?user=dOMgBoEAAAAJ
          </a>
        </p>
        <ul>
          {publications.map((pub) => (
            <li key={pub.id}>
              {pub.authors} ({pub.year}). {pub.title}. In {pub.publication}.
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
