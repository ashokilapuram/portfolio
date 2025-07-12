import React, { useEffect, useState } from 'react';
import './About.css';

const skills = [
  'Python', 'HTML', 'CSS', 'Node.js', 'React.js', 'SQL', 'MongoDB'
];
const interests = [
  { icon: '📚', label: 'Reading' },
  { icon: '💻', label: 'Web Design' },
  { icon: '🏅', label: 'Sports' },
  { icon: '🎬', label: 'Video Editing' },
];

const aboutTitle = 'About Me';
const aboutName = 'Ashok Ilapuram';
const aboutDesc = "I am a recent graduate from JNTUH College of Engineering with strong expertise in web development, particularly in the MERN full stack (MongoDB, Express.js, React.js, Node.js)";
const aboutDescMore = "As an all-rounder with a sharp problem-solving mindset and a disciplined foundation shaped by my Navodaya background, I combine technical skill with reliability and adaptability. Whether it's building clean frontends or managing robust backends, I take pride in delivering full-stack solutions that are both efficient and user-friendly.";

const About = ({ className = '' }) => {
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`about-section fade-in-section${show ? ' show' : ''} ${className}`} id="about">
      <div className="about-animated-container">
        <div className="about-image-animated">
          <img src="/myphoto.jpg" alt="Profile" />
          <div className="about-image-overlay" />
        </div>
        <div className="about-card-animated">
          <div className="about-content">
            <h2 className="about-title small-title">{aboutTitle}</h2>
            <div className="about-name big-name show">{aboutName}</div>
            <p className="about-desc">{aboutDesc}</p>
            {!showMore && (
              <span className="about-readmore-link" onClick={() => setShowMore(true)}>
                Read More
              </span>
            )}
            {showMore && (
              <>
                <p className="about-desc about-desc-more">{aboutDescMore}</p>
                <span className="about-readmore-link" onClick={() => setShowMore(false)}>
                  Read Less
                </span>
              </>
            )}
            <h3 className="about-subtitle">Core Skills</h3>
            <div className="about-skills">
              {skills.map(skill => <span className="about-skill-tag" key={skill}>{skill}</span>)}
            </div>
            <h3 className="about-subtitle">Interests</h3>
            <div className="about-interests">
              {interests.map(({icon, label}) => (
                <div className="about-interest-card" key={label}>
                  <span className="about-interest-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="about-actions">
              <a
                className="about-btn about-btn-cv highlight-cv"
                href="/Ashok_Ilapuram_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <button
                className="about-btn about-btn-contact"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Contact Me
              </button>
              <button className="about-btn about-btn-icon" title="GitHub" aria-label="GitHub">🐙</button>
              <button className="about-btn about-btn-icon" title="LinkedIn" aria-label="LinkedIn">💼</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 