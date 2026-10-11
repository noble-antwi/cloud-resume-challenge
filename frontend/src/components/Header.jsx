import { resumeData } from '../data/resumeData';
import './Header.css';

export default function Header() {
  return (
    <header className="resume-header">
      <h1 className="header-name">{resumeData.personal.name}</h1>
      <p className="header-contact">
        {resumeData.personal.location} | {' '}
        <a href={`mailto:${resumeData.personal.email}`}>{resumeData.personal.email}</a> | {' '}
        <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer">
          linkedin.com/in/noble-antwi-worlanyo
        </a> | {' '}
        <a href={resumeData.personal.portfolio} target="_blank" rel="noreferrer">
          {resumeData.personal.portfolio}
        </a>
      </p>
    </header>
  );
}
