import React, { useEffect, useState, useRef } from 'react';
import './HeroSection.css';

const CAPTIONS = [
  'Crafting intuitive interfaces',
  'Creating engaging animations',
  'Building beautiful web experiences',
];

const SOCIALS = [
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', svg: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#232d3a"/><path d="M7.5 10V16M7.5 8V8.01M12 16V13C12 12.4477 12.4477 12 13 12H14C14.5523 12 15 12.4477 15 13V16M9 16V10M15 16V13C15 11.8954 14.1046 11 13 11H13C11.8954 11 11 11.8954 11 13V16" stroke="#4f8cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { href: 'https://github.com/', label: 'GitHub', svg: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#232d3a"/><path d="M12 17.5C16.1421 17.5 19.5 14.1421 19.5 10C19.5 5.85786 16.1421 2.5 12 2.5C7.85786 2.5 4.5 5.85786 4.5 10C4.5 14.1421 7.85786 17.5 12 17.5Z" stroke="#4f8cff" strokeWidth="1.5"/><path d="M9.5 14.5C9.5 13.1193 10.6193 12 12 12C13.3807 12 14.5 13.1193 14.5 14.5" stroke="#4f8cff" strokeWidth="1.5"/></svg>
  ) },
  { href: 'mailto:someone@example.com', label: 'Mail', svg: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#232d3a"/><path d="M4 8.5V16C4 16.8284 4.67157 17.5 5.5 17.5H18.5C19.3284 17.5 20 16.8284 20 16V8.5M4 8.5L12 13.5L20 8.5M4 8.5L5.5 7.5H18.5L20 8.5" stroke="#4f8cff" strokeWidth="1.5" strokeLinejoin="round"/></svg>
  ) },
  { href: 'https://www.instagram.com/', label: 'Instagram', svg: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#232d3a"/><rect x="7" y="7" width="10" height="10" rx="5" stroke="#4f8cff" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="#4f8cff" strokeWidth="1.5"/><circle cx="16.5" cy="8" r="1" fill="#4f8cff"/></svg>
  ) },
];

const HeroSection = ({ onLoaded, className = '' }) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [captionIndex, setCaptionIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const loadedCalled = useRef(false);

  // Fade in the title
  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Show subtitle and buttons after title fade-in
  useEffect(() => {
    if (titleVisible) {
      const timer = setTimeout(() => setShowContent(true), 700);
      return () => clearTimeout(timer);
    }
  }, [titleVisible]);

  // Call onLoaded as soon as hero content is shown
  useEffect(() => {
    if (showContent && typeof onLoaded === 'function' && !loadedCalled.current) {
      loadedCalled.current = true;
      setTimeout(onLoaded, 400); // slight delay for smoothness
    }
  }, [showContent, onLoaded]);

  // Typing and backspacing effect
  useEffect(() => {
    if (!showContent) return;
    let timeout;
    const currentCaption = CAPTIONS[captionIndex];
    if (typing) {
      if (displayed.length < currentCaption.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentCaption.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentCaption.slice(0, displayed.length - 1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setCaptionIndex((captionIndex + 1) % CAPTIONS.length);
          setTyping(true);
        }, 300);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, captionIndex, showContent]);

  return (
    <section className={`hero-section${titleVisible ? ' fade-in' : ''} ${className}`} id="home">
      <h1 className={`hero-title${titleVisible ? ' fade-in' : ''}`}>Ashok Ilapuram</h1>
      <div className={`hero-content${showContent ? ' fade-in' : ''}`}>
        <p className="hero-subtitle">
          {showContent ? displayed : ''}
          <span className="typing-cursor">|</span>
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            View Projects <span className="arrow">▼</span>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(true)}
          >
            Contact Me
          </button>
        </div>
      </div>
      {showModal && (
        <div className="hero-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="hero-modal" onClick={e => e.stopPropagation()}>
            <h3 className="hero-modal-title">Contact Me</h3>
            <div className="hero-modal-icons">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-modal-icon"
                  title={s.label}
                >
                  {s.svg}
                </a>
              ))}
            </div>
            <button className="hero-modal-close" onClick={() => setShowModal(false)}>&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection; 