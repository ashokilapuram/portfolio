import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-thankyou">Thank you for visiting!</div>
          <div className="footer-copyright">
            <span className="footer-copyright-icon">©</span> 2024 Ashok Ilapuram. All rights reserved.
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <button className="footer-link" title="Instagram" aria-label="Instagram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#232d3a"/><rect x="7" y="7" width="10" height="10" rx="5" stroke="#fff" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5"/><circle cx="16.5" cy="8" r="1" fill="#fff"/></svg>
            </button>
            <button className="footer-link" title="Gmail" aria-label="Gmail">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#232d3a"/><path d="M4 8.5V16C4 16.8284 4.67157 17.5 5.5 17.5H18.5C19.3284 17.5 20 16.8284 20 16V8.5M4 8.5L12 13.5L20 8.5M4 8.5L5.5 7.5H18.5L20 8.5" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </button>
            <button className="footer-link" title="LinkedIn" aria-label="LinkedIn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#232d3a"/><path d="M7.5 10V16M7.5 8V8.01M12 16V13C12 12.4477 12.4477 12 13 12H14C14.5523 12 15 12.4477 15 13V16M9 16V10M15 16V13C15 11.8954 14.1046 11 13 11H13C11.8954 11 11 11.8954 11 13V16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 