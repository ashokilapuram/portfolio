import React, { useEffect, useState, useRef } from 'react';
import './HeroSection.css';

const CAPTIONS = [
  'Crafting intuitive interfaces',
  'Creating engaging animations',
  'Building beautiful web experiences',
];

const SOCIALS = [
  { 
    href: 'https://www.linkedin.com/in/ilapuram-ashok-a93882247/', 
    label: 'LinkedIn', 
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    href: 'https://github.com/ashokilapuram', 
    label: 'GitHub', 
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4998 7.12383 21.9627 5.7812 22.8 4.68C22.8 4.68 21.5 1 18.5 2.5C15.5 1 12.5 1 12.5 1C11.5 1 10.5 1 9.5 1C6.5 1 3.2 4.68 3.2 4.68C2.3627 5.7812 1.8998 7.12383 1.9 8.52C1.9 13.97 5.2 15.16 8.34 15.55C8.01 15.89 7.75506 16.3024 7.59294 16.7554C7.43082 17.2084 7.36627 17.6901 7.4 18.17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    href: 'mailto:ashokilapuram@gmail.com', 
    label: 'Email', 
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    href: '#', 
    label: 'Instagram', 
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ) 
  },
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
              {SOCIALS.map(s => {
                if (s.href.startsWith('mailto:')) {
                  return (
                    <button
                      key={s.label}
                      className="hero-modal-icon"
                      title={s.label}
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = s.href;
                        link.click();
                      }}
                    >
                      {s.svg}
                    </button>
                  );
                }
                return (
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
                );
              })}
            </div>
            <button className="hero-modal-close" onClick={() => setShowModal(false)}>&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection; 