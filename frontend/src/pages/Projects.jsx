import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'moviesApp',
    description: 'MoviesApp is a Netflix-inspired movie streaming clone.',
    fullDescription: 'MoviesApp is a Netflix-inspired movie streaming clone built with React, HTML, and CSS. Features include user authentication with JWT, responsive UI, and dynamic movie browsing.',
    image: '/project1.png',
    gradient: 'linear-gradient(135deg, #232d3a 0%, #4f8cff 100%)',
    buttonColor: '#232d3a',
    tech: ['React', 'Node.js', 'express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/ashokilapuram/moviesApp',
    demo: 'https://ashmoviesapp.ccbp.tech/login',
  },
  {
    id: 2,
    title: 'Store Rating App',
    description: 'A full-stack web application that allows users to register, login, and share their experiences by rating and reviewing stores.',
    fullDescription: 'A full-stack web application that allows users to register, login, and share their experiences by rating and reviewing stores.',
    image: '/project2.png',
    gradient: 'linear-gradient(135deg, #181f2a 0%, #2563eb 100%)',
    buttonColor: '#181f2a',
    tech: ['react.js', 'node.js', 'css', 'sqlite', 'express.js', 'jwt'],
    github: 'https://github.com/ashokilapuram/-store-rating-app',
    demo: 'https://store-rating-app-lime.vercel.app/',
  },
  {
    id: 3,
    title: 'My Portfolio',
    description: 'A dynamic and responsive personal portfolio website built using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
    fullDescription: 'This application showcases my skills, projects, and experience as a full-stack web developer. It is designed with a user-friendly interface, clean design, and smooth navigation to give visitors a seamless experience while exploring my work.',
    image: '/project3.jpg',
    gradient: 'linear-gradient(135deg, #101a2b 0%, #7b5cff 100%)',
    buttonColor: '#101a2b',
    tech: ['react.js', 'node.js', 'tailwind', 'css'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather dashboard app with real-time data and beautiful charts.',
    fullDescription: 'This app fetches real-time weather data and displays it with interactive charts and a modern UI. Built with React and Chart.js.',
    image: '/project4.png',
    gradient: 'linear-gradient(135deg, #232d3a 0%, #3a7bd5 100%)',
    buttonColor: '#232d3a',
    tech: ['React', 'Chart.js', 'CSS'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A full-featured blog platform with markdown support and user authentication.',
    fullDescription: 'Users can write, edit, and delete blog posts with markdown support. Includes authentication and a responsive design.',
    image: '/project5.jpg',
    gradient: 'linear-gradient(135deg, #181f2a 0%, #b06ab3 100%)',
    buttonColor: '#181f2a',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: '#',
    demo: '#',
  },
];

const Projects = ({ className = '' }) => {
  const [modalProject, setModalProject] = useState(null);
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
    // Always scroll to left on mount
    const grid = gridRef.current;
    if (grid) {
      grid.scrollLeft = 0;
      grid.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    checkScroll();
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

  // Only show projects with id 1, 2, 3 for now
  const visibleProjects = projects.filter(p => p.id <= 3);

  return (
    <section className={`projects-section fade-in-section show ${className}`} id="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        Explore a collection of innovative projects that showcase my expertise<br />
        in cutting-edge web technologies and creative problem-solving.
      </p>
      <div className="projects-slider-container">
        {canScrollLeft && (
          <button className="projects-arrow left" onClick={() => scrollGrid(-1)}>&#8592;</button>
        )}
        <div className="projects-grid" ref={gridRef}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} {...project} onViewDetails={() => setModalProject(project)} />
          ))}
        </div>
        {canScrollRight && (
          <button className="projects-arrow right" onClick={() => scrollGrid(1)}>&#8594;</button>
        )}
      </div>
      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  );
};

export default Projects; 