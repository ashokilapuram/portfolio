import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    dates: "Jan 2022 – Present",
    description: "Developing cutting-edge web applications using Next.js, React, and Tailwind CSS.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    color: "linear-gradient(135deg, #4f8cff 0%, #6a93ff 100%)"
  },
  {
    title: "UI/UX Designer",
    company: "Creative Agency",
    dates: "Jun 2020 – Dec 2021",
    description: "Designing interactive and user-friendly interfaces for web and mobile apps.",
    tech: ["Figma", "Adobe XD", "UI/UX Design"],
    color: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
  },
  {
    title: "Full Stack Developer",
    company: "Web Innovators",
    dates: "Mar 2019 – May 2020",
    description: "Worked on both front-end and back-end development of an e-commerce platform using Node.js, Express, and React.",
    tech: ["Node.js", "Express", "React", "MongoDB"],
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    title: "Backend Developer",
    company: "DataTech Solutions",
    dates: "Jan 2018 – Feb 2019",
    description: "Focused on developing and optimizing APIs and database architecture using Java and PostgreSQL.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    color: "linear-gradient(135deg, #ff5858 0%, #ffb47b 100%)"
  }
];

const WorkExperience = () => (
  <section className="workexp-section" id="experience">
    <h2 className="workexp-title">Work Experience</h2>
    <p className="workexp-subtitle">
      A selection of my recent professional roles where I've grown my skills and worked on exciting projects.
    </p>
    <div className="workexp-grid">
      {experiences.map((exp, idx) => (
        <div className="workexp-card" style={{ background: exp.color }} key={idx}>
          <div className="workexp-card-header">
            <div className="workexp-card-avatar" />
            <div>
              <div className="workexp-card-role">{exp.title}</div>
              <div className="workexp-card-company">{exp.company}</div>
              <div className="workexp-card-dates">{exp.dates}</div>
            </div>
          </div>
          <div className="workexp-card-desc">{exp.description}</div>
          <div className="workexp-card-tech">
            {exp.tech.map((t, i) => (
              <span className="workexp-card-tech-tag" key={i}>{t}</span>
            ))}
          </div>
          <div className="workexp-card-actions">
            <button className="workexp-card-btn"><span role="img" aria-label="calendar">📅</span> View Details</button>
            <button className="workexp-card-icon"><span role="img" aria-label="download">📥</span></button>
            <button className="workexp-card-icon"><span role="img" aria-label="linkedin">🔗</span></button>
            <button className="workexp-card-icon"><span role="img" aria-label="email">✉️</span></button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperience; 