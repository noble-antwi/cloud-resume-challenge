import { useState } from 'react';
import '../styles/style.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">NWA</div>
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/" className="navbar-link" onClick={handleLinkClick}>HOME</a></li>
          <li><a href="#education" className="navbar-link" onClick={handleLinkClick}>EDUCATION</a></li>
          <li><a href="#experience" className="navbar-link" onClick={handleLinkClick}>EXPERIENCE</a></li>
          <li><a href="#skills" className="navbar-link" onClick={handleLinkClick}>SKILLS</a></li>
          <li><a href="#certificates" className="navbar-link" onClick={handleLinkClick}>CERTIFICATES</a></li>
          <li><a href="#publications" className="navbar-link" onClick={handleLinkClick}>PUBLICATIONS</a></li>
          <li><a href="#leadership" className="navbar-link" onClick={handleLinkClick}>LEADERSHIP</a></li>
        </ul>
      </div>
    </nav>
  );
}
