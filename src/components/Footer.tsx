import Logo from './Logo';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#certification', label: 'Certification' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <Logo size={36} />
        Swati<span> · UX</span>
      </div>
      <p className="footer-role">UI/UX Designer · UX Researcher · Pune, India</p>

      <nav className="footer-links" aria-label="Footer navigation">
        {LINKS.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="footer-divider" />

      <p className="footer-copy">
        © {new Date().getFullYear()} Swati Lad · All rights reserved
      </p>
    </footer>
  );
}
