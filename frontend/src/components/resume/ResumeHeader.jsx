import { resumeData } from '@/data/resumeData';

export default function ResumeHeader() {
  const { name, location, email, linkedin, portfolio } = resumeData.personal;
  const portfolioLabel = portfolio.replace('https://', '').replace(/\/$/, '');

  return (
    <header className="resume-header">
      <h1>{name}</h1>
      <p>
        {location} • <a href={`mailto:${email}`}>{email}</a> •{' '}
        <a href={linkedin} target="_blank" rel="noreferrer">
          linkedin.com/in/noble-antwi-worlanyo
        </a>{' '}
        •{' '}
        <a href={portfolio} target="_blank" rel="noreferrer">
          {portfolioLabel}
        </a>
      </p>
    </header>
  );
}
