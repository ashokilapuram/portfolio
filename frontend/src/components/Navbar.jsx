import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  // { href: '#experience', label: 'Experience' }, // Hidden
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'contact'];

const Navbar = ({ show = true, theme = 'dark', onToggleTheme }) => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visibleSections.length > 0) {
        setActive(visibleSections[0].target.id);
      }
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-64px 0px 0px 0px', // account for navbar height
      threshold: 0.5,
    });
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    observerRef.current = observer;
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  // Close menu on link click (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${show ? 'navbar-drop' : 'navbar-hidden'}`}>
      <div className="navbar-content">
        <div className="navbar-logo-group">
          <div className="navbar-logo">AI</div>
          <div className="navbar-theme-toggle mobile" title="Toggle theme" onClick={onToggleTheme} style={{cursor: 'pointer'}}>
            {theme === 'dark' ? (
              <span role="img" aria-label="sun">☀️</span>
            ) : (
              <span role="img" aria-label="moon">🌙</span>
            )}
          </div>
        </div>
        <button className={`navbar-hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'active' : ''}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-theme-toggle desktop" title="Toggle theme" onClick={onToggleTheme} style={{cursor: 'pointer'}}>
          {theme === 'dark' ? (
            <span role="img" aria-label="sun">☀️</span>
          ) : (
            <span role="img" aria-label="moon">🌙</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 