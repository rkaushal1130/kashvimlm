import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Camera, Play } from 'lucide-react';
import logoImg from '../assets/logo.png';

/**
 * Coastal & Oceanic styled Footer for KASHVIMLM
 * matching the provided screenshot design.
 */
function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-col footer-brand-col">
            <Link to="/" className="footer-brand-header" aria-label="kashvimlm Home">
              <img src={logoImg} alt="KASHVIMLM" className="footer-brand-badge-img" />
              <span className="footer-brand-name">kashvimlm</span>
            </Link>
            <p className="footer-brand-desc">
              Crafting high-energy coastal apparel, surf essentials, and ocean-inspired lifestyle goods. Bringing breezy optimism and modern craftsmanship to your everyday tide.
            </p>
            <div className="footer-social-row">
              <a
                href="#"
                className="footer-social-btn"
                aria-label="Website"
                onClick={(e) => e.preventDefault()}
              >
                <Globe size={15} />
              </a>
              <a
                href="#"
                className="footer-social-btn"
                aria-label="Messages"
                onClick={(e) => e.preventDefault()}
              >
                <MessageSquare size={15} />
              </a>
              <a
                href="#"
                className="footer-social-btn"
                aria-label="Photos"
                onClick={(e) => e.preventDefault()}
              >
                <Camera size={15} />
              </a>
              <a
                href="#"
                className="footer-social-btn"
                aria-label="Videos"
                onClick={(e) => e.preventDefault()}
              >
                <Play size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><Link to="/shop" className="footer-link">New Arrivals</Link></li>
              <li><Link to="/shop" className="footer-link">Best Sellers</Link></li>
              <li><Link to="/categories" className="footer-link">Ocean Sustainable</Link></li>
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/shop" className="footer-link">Seasonal Lookbook</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div className="footer-col">
            <h4 className="footer-heading">CUSTOMER SUPPORT</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Help Center</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Order Tracking</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Returns &amp; Exchanges</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Shipping &amp; Delivery</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Contact Ocean Crew</a></li>
            </ul>
          </div>

          {/* Column 4: Stay In The Current (Newsletter) */}
          <div className="footer-col footer-newsletter-col">
            <h4 className="footer-heading">STAY IN THE CURRENT</h4>
            <p className="footer-newsletter-desc">
              Get 15% off your first voyage with updates on limited wave drops.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="footer-newsletter-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="footer-bottom-row">
          <p className="footer-bottom-copy">
            &copy; 2026 KASHVIMLM. All rights reserved. Designed for coastal living.
          </p>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <a href="#" className="footer-legal-link" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
            <a href="#" className="footer-legal-link" onClick={(e) => e.preventDefault()}>
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
