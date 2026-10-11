import { resumeData } from '../data/resumeData';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="brand" aria-label="Home">
        <span className="brand-logo">NA</span>
        <span className="brand-name">Noble Antwi</span>
      </a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#resume" className="active">Resume</a></li>
        <li>
          <a href={resumeData.personal.portfolio} target="_blank" rel="noreferrer">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
