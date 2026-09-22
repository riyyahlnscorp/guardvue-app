import { useState } from 'react';
import { Link } from 'react-router-dom';
import solutions from '../data/solutions';
import logo from '../assets/logo.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header className="site-header">
      <Link to="/" className="logo-block" onClick={closeMobile}>
        <img src={logo} alt="GuardVue - Bullet Resistant Glass" className="logo-img" />
      </Link>

      <nav className={mobileOpen ? 'mobile-open' : ''}>
        <Link to="/" onClick={closeMobile}>HOME</Link>

        <div
          className="nav-dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Link to="/solutions" onClick={closeMobile}>SOLUTIONS</Link>
          {open && (
            <div className="dropdown-menu">
              {solutions.map(s => (
                <Link key={s.slug} to={`/solutions/${s.slug}`} onClick={closeMobile}>{s.name}</Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/gallery" onClick={closeMobile}>GALLERY</Link>
        <Link to="/about" onClick={closeMobile}>ABOUT</Link>
        <Link to="/contact" onClick={closeMobile}>CONTACT</Link>
      </nav>

      <Link to="/contact" className="quote-btn">GET A QUOTE →</Link>

      <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}