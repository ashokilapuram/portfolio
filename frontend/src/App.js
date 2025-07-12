import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [theme, setTheme] = useState('dark');

  // HeroSection will call this when its animation is done
  const handleHeroLoaded = () => setShowNavbar(true);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`App ${theme}-theme app-flex-layout`}>
      <Navbar show={showNavbar} theme={theme} onToggleTheme={handleToggleTheme} />
      <HeroSection onLoaded={handleHeroLoaded} className="snap-section" />
      <About className="snap-section" />
      <Projects className="snap-section" />
      <Skills className="snap-section" />
      <Contact className="snap-section" />
      <Footer />
    </div>
  );
}

export default App;
