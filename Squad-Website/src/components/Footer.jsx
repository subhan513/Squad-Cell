import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ Mode }) => {
  const textColor = Mode === 'dark' ? 'white' : 'black';
  const bgColor = Mode === 'dark' ? 'black' : 'white';

  return (
    <footer className="footer" style={{ backgroundColor: bgColor, color: textColor }}>
      <hr />
      <div className="footer-main">
        <div className="social-group">
          <Link to="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/icons/twitter.webp" alt="Twitter" />
          </Link>
          <Link      to="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="/icons/facebook.png" alt="Facebook" />
          </Link>
          <Link      to="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/icons/instagram.jpg" alt="Instagram" />
          </Link>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2024 - Squadcell. All Rights Reserved</p>
        <div className="footer-links">
          <Link to="/privacy" style={{ color: textColor }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: textColor }}>Terms of Use</Link>
          <Link to="/support" style={{ color: textColor }}>Support</Link>
        </div>
      </div></footer>
  );
};

export default Footer;
