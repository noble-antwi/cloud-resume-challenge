import { Link } from 'react-router-dom';
import 'css/pages/home.css';

import { resumeData } from '@/data/resumeData';

export default function HomePage() {
  const { name, location, linkedin, portfolio } = resumeData.personal;

  return (
    <main className="page home">
      <h1>{name}</h1>
      <p className="home-tagline">
        Cloud security · Identity and access management · Security operations
      </p>
      <p>
        Based in {location}. This site is my entry for the Cloud Resume Challenge: a
        React resume served from AWS, with a serverless visitor counter and
        infrastructure as code.
      </p>
      <div className="home-actions">
        <Link to="/resume" className="button">View resume</Link>
        <Link to="/projects" className="button button-secondary">See projects</Link>
      </div>
      <p className="home-links">
        <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{' '}
        <a href={portfolio} target="_blank" rel="noreferrer">Portfolio</a> ·{' '}
        <a href="https://github.com/noble-antwi" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </main>
  );
}
