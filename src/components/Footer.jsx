import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Premium, minimal Footer for KASHVIMLM.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Shop', path: '/shop' },
    { label: 'Categories', path: '/categories' },
    { label: 'Profile', path: '/profile' },
  ];

  const supportPlaceholders = [
    { label: 'Help Center', path: '#' },
    { label: 'FAQs', path: '#' },
    { label: 'Terms of Service', path: '#' },
    { label: 'Privacy Policy', path: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col">
            <Link to="/" className="footer-logo" aria-label="KASHVIMLM Home">
              <span className="footer-logo-text">
                KASHVIMLM<span className="footer-logo-accent">.</span>
              </span>
            </Link>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <h3 className="footer-heading">
              <span>Navigation</span>
              <span className="footer-heading-dot" aria-hidden="true" />
            </h3>
            <ul className="footer-links">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Placeholders Column */}
          <div className="footer-col">
            <h3 className="footer-heading">
              <span>Support</span>
              <span className="footer-heading-dot" aria-hidden="true" />
            </h3>
            <ul className="footer-links">
              {supportPlaceholders.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    className="footer-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} KASHVIMLM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
