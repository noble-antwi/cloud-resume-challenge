import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand" aria-label="Home">
        <span className="brand-logo">NA</span>
        <span className="brand-name">Noble Antwi</span>
      </Link>
      <ul>
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
