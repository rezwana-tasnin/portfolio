import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Star } from 'lucide-react';

export default function Projects() {
  // Top Github Projects Data
  const projects = [
    {
      title: "Interactive React Portfolio",
      description: "Modern, high-performance responsive web portfolio built with React.js, Tailwind CSS, and Framer Motion.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/rezwanatasnin",
      stars: "Featured"
    },
    {
      title: "Frontend UI/UX Design Hub",
      description: "A collection of clean, accessible, and high-fidelity web interfaces crafted for optimal client experience.",
      tech: ["JavaScript", "HTML5/CSS3", "Tailwind"],
      github: "https://github.com/rezwanatasnin",
      stars: "Top Repo"
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-24 border-t border-slate-900 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 inline-block mb-3">
          ✨ Featured Repositories
        </span>
        <h3 className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
          GitHub Showcase
        </h3>
        <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">
          Explore my latest open-source contributions, web developments, and live projects hosted on GitHub.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-500 backdrop-blur-xl shadow-2xl group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                  <Star size={12} /> {project.stars}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[11px] font-mono px-3 py-1 bg-slate-800/80 rounded-lg text-indigo-300 border border-slate-700/50">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
              >
                View Repository <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main GitHub Direct Banner */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-white">
            {/* <Github size={32} /> */}
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Want to see all my work?</h4>
            <p className="text-xs text-slate-400">Check out all repositories, commit history & activity on GitHub.</p>
          </div>
        </div>
        <a
          href="https://github.com/rezwana-tasnin"
          target="_blank"
          rel="noreferrer"
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-2xl font-semibold text-sm transition shadow-lg shadow-indigo-600/30 flex items-center gap-2 whitespace-nowrap"
        >
          {/* <Github size={18} />  */}
          Visit @rezwanatasnin
        </a>
      </motion.div>
    </section>
  );
}