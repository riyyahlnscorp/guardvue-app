import { Link } from 'react-router-dom';
import solutions from '../data/solutions';
import logo from '../assets/logo.png';
import psgLogo from '../assets/PSGlogo.png';

export default function Footer() {
  return (
    <footer className="site-footer-full">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <img src={logo} alt="GuardVue" className="footer-logo" />
          <p>
            Advanced bullet-resistant glass solutions — engineered for
            environments where safety, performance and clarity matter most.
          </p>
          <a href="tel:+27690075588">069 007 5588</a>
          <a href="mailto:sales@premiumsafetyglass.co.za">sales@premiumsafetyglass.co.za</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Premium+Safety+Glass,+11+Woburn+Ave,+Benoni" target="_blank" rel="noopener noreferrer">11 Woburn Ave, Benoni</a>
        </div>

        <div className="footer-col footer-products">
  <h4>Products</h4>
          {solutions.map(s => (
            <Link key={s.slug} to={`/solutions/${s.slug}`}>{s.name}</Link>
          ))}
        </div>

        <div className="footer-col footer-links">
  <h4>Quick Links</h4>
          <Link to="/solutions">Solutions</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-col footer-quote-col">
           <h4>Get a Quote</h4>
           <p>Ready to start? Tell us about your project and we'll get back to you fast.</p>
           <Link to="/contact" className="cta-outline footer-cta">Request a Quote</Link>
           </div>
      </div>

      <div className="footer-bottom">
  <div className="footer-bottom-brand">
    <a href="https://premiumsafetyglass.co.za/" target="_blank" rel="noopener noreferrer">
      <img src={psgLogo} alt="Premium Safety Glass" className="psg-logo" />
    </a>
    <p>
      A product of{' '}
      <a href="https://premiumsafetyglass.co.za/" target="_blank" rel="noopener noreferrer">
        Premium Safety Glass (PTY) Ltd.
      </a>
    </p>
</div>
  <p>
  © 2026 GuardVue. All rights reserved. · Powered by{' '}
  <a href="https://stearnsmedia.com/" target="_blank" rel="noopener noreferrer">
    Stearns Media
  </a>
</p>
</div>
    </footer>
  );
}