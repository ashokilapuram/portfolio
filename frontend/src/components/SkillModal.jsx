import React from 'react';
import './SkillModal.css';

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;
  return (
    <div className="skill-modal-overlay" onClick={onClose}>
      <div className="skill-modal" style={{ background: skill.buttonColor || '#222' }} onClick={e => e.stopPropagation()}>
        <button className="skill-modal-close" onClick={onClose}>&times;</button>
        <div className="skill-modal-header">
          <span className="skill-modal-title">{skill.name} <img src={skill.icon} alt={skill.name} className="skill-modal-icon" /></span>
        </div>
        <div className="skill-modal-desc">{skill.description}</div>
        <div className="skill-modal-related">
          <span className="skill-modal-related-title">Related Projects <span role="img" aria-label="folder">📁</span>:</span>
          <ul className="skill-modal-related-list">
            {skill.relatedProjects.map((proj, i) => (
              <li key={i} className="skill-modal-related-item">{proj}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillModal; 