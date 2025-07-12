import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, gradient, buttonColor, onViewDetails }) => (
  <div className="project-card" style={{ background: gradient }}>
    <div className="project-card-image">
      <img src={image} alt={title} />
    </div>
    <h3 className="project-card-title">{title}</h3>
    <p className="project-card-desc">{description}</p>
    <button className="project-card-btn" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff' }} onClick={onViewDetails}>
      View Details <span className="project-card-arrow">→</span>
    </button>
  </div>
);

export default ProjectCard; 