import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      <footer className="text-center py-8 text-slate-600 text-xs border-t border-slate-900">
        © 2026 Rezwana Tasnin. Built with React, Tailwind CSS & Framer Motion.
      </footer>
    </div>
  );
}