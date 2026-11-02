import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-8 py-20 border-t border-slate-900 text-center">
      <h3 className="text-3xl font-bold mb-3">Get In Touch</h3>
      <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">Feel free to reach out for internship opportunities or collaborations.</p>
      <a href="mailto:rezwanatasnin@gmail.com" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 rounded-xl text-sm font-semibold shadow-lg hover:scale-105 transition">
        rezwanatasnin@gmail.com
      </a>
      
      <div className="mt-8 flex justify-center gap-6 text-sm text-slate-400">
        <a href="https://github.com/rezwanatasnin" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">GitHub</a>
        <a href="https://linkedin.com/in/rezwanatasnin" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
        <a href="https://www.fiverr.com/rezwanatasnin" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Fiverr</a>
      </div>
    </section>
  );
}