import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="bg-primary text-text min-h-screen relative overflow-x-hidden">
      <ParticleBackground />
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />

        <footer className="bg-white/10 backdrop-blur-md py-8 text-center text-text-muted text-sm border-t border-text/5">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
