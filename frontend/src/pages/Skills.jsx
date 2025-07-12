import React, { useState, useRef, useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import SkillModal from '../components/SkillModal';
import './Skills.css';

const skills = [
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    proficiency: 90,
    buttonColor: '#4f8cff',
    description: 'Building interactive UIs with React',
    relatedProjects: ['Store-rating-app', 'personal-portfolio'],
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    gradient: 'linear-gradient(135deg, #0f1419 0%, #1e293b 100%)',
    proficiency: 85,
    buttonColor: '#43e97b',
    description: 'Backend development with Node.js',
    relatedProjects: ['API Server', 'Real-time Chat App'],
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    proficiency: 80,
    buttonColor: '#43cea2',
    description: 'Styling modern web applications',
    relatedProjects: ['Notes-app', 'Portfolio-Website'],
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    gradient: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
    proficiency: 88,
    buttonColor: '#f7971e',
    description: 'Dynamic client-side scripting',
    relatedProjects: ['Todo App', 'Weather Widget'],
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    proficiency: 75,
    buttonColor: '#2f80ed',
    description: 'Structuring web pages',
    relatedProjects: ['All projects'],
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    gradient: 'linear-gradient(135deg, #0f1419 0%, #1e293b 100%)',
    proficiency: 70,
    buttonColor: '#00ed64',
    description: 'NoSQL database management',
    relatedProjects: ['store-rating-app', 'moviesApp'],
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    proficiency: 70,
    buttonColor: '#a18cd1',
    description: 'Structuring databases',
    relatedProjects: ['store-rating-app'],
  },
];

const Skills = ({ className = '' }) => {
  const [modalSkill, setModalSkill] = useState(null);
  const gridRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const grid = gridRef.current;
      if (!grid) return;
      setCanScrollLeft(grid.scrollLeft > 0);
      setCanScrollRight(grid.scrollLeft + grid.clientWidth < grid.scrollWidth - 1);
    };
    checkScroll();
    const grid = gridRef.current;
    if (grid) {
      grid.scrollLeft = 0;
      grid.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (grid) grid.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollGrid = (dir) => {
    const grid = gridRef.current;
    if (!grid) return;
    const scrollAmount = grid.clientWidth * 0.7;
    grid.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className={`skills-section snap-section ${className}`} id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-slider-container">
        {canScrollLeft && (
          <button className="skills-arrow left" onClick={() => scrollGrid(-1)}>&#8592;</button>
        )}
        <div
          className="skills-grid horizontal"
          ref={gridRef}
        >
          {skills.map((skill, idx) => (
            <SkillCard key={idx} {...skill} showLevel={false} onMoreDetails={() => setModalSkill(skill)} />
          ))}
        </div>
        {canScrollRight && (
          <button className="skills-arrow right" onClick={() => scrollGrid(1)}>&#8594;</button>
        )}
      </div>
      {modalSkill && (
        <SkillModal skill={modalSkill} onClose={() => setModalSkill(null)} />
      )}
    </section>
  );
};

export default Skills; 