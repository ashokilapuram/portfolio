import React from 'react';
import './SkillCard.css';

const SkillCard = ({ name, icon, gradient, proficiency, buttonColor, showLevel, onMoreDetails }) => (
  <div className="skill-card" style={{ background: gradient }}>
    <div className="skill-card-icon">
      <img src={icon} alt={name} />
      <span className="skill-card-icon-label">{name}</span>
    </div>
    <h3 className="skill-card-title">{name}</h3>
    {showLevel && (
      <div className="skill-card-bar-bg">
        <div className="skill-card-bar" style={{ width: `${proficiency}%` }} />
      </div>
    )}
    <button className="skill-card-btn" style={{ background: buttonColor }} onClick={onMoreDetails}>{'More Details '}<span className="skill-card-arrow">→</span></button>
  </div>
);

export default SkillCard; 