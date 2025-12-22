import '../styles/style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">NWA</div>
        <ul className="navbar-menu">
          <li><a href="/" className="navbar-link">HOME</a></li>
          <li><a href="#education" className="navbar-link">EDUCATION</a></li>
          <li><a href="#experience" className="navbar-link">EXPERIENCE</a></li>
          <li><a href="#skills" className="navbar-link">SKILLS</a></li>
          <li><a href="#certificates" className="navbar-link">CERTIFICATES</a></li>
          <li><a href="#publications" className="navbar-link">PUBLICATIONS</a></li>
          <li><a href="#leadership" className="navbar-link">LEADERSHIP</a></li>
        </ul>
      </div>
    </nav>
  );
}
