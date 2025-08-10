import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;