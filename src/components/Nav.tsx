import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#certification', label: 'Certification' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActive(href);
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={() => setMenuOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Logo size={32} />
          Swati<span> · UX</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'active' : ''}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            {/* Drop your resume PDF into /public/Swati_Resume.pdf */}
            <a href="/Swati_Resume.pdf" className="nav-links a nav-cta" download>
              Resume
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <button
            className="nav-hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="menu">
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? 'active' : ''}
            onClick={() => handleNavClick(link.href)}
            role="menuitem"
          >
            {link.label}
          </a>
        ))}
        <a href="/Swati_Resume.pdf" download role="menuitem" style={{ color: 'var(--teal)', fontWeight: 700 }}>
          Download Resume
        </a>
      </div>
    </nav>
  );
}
