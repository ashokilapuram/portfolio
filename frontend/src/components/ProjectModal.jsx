import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={e => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose}>&times;</button>
        <h2 className="project-modal-title">{project.title}</h2>
        <div className="project-modal-image">
          <img src={project.image} alt={project.title} />
        </div>
        <p className="project-modal-desc">{project.fullDescription}</p>
        <div className="project-modal-tech">
          <span className="project-modal-tech-label">Technologies Used:</span>
          <div className="project-modal-tech-list">
            {project.tech.map((t, i) => (
              <span className="project-modal-tech-tag" key={i}>{t}</span>
            ))}
          </div>
        </div>
        <div className="project-modal-actions">
          <a href={project.github} className="project-modal-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.demo} className="project-modal-btn project-modal-btn-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 