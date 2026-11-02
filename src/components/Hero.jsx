import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, ArrowDownRight } from 'lucide-react';
import profilePic from '../assets/rezwana.jpg';

export default function Hero() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-8 pt-36 pb-24 flex flex-col md:flex-row items-center justify-between gap-12 relative">
      {/* Background Glow Sphere */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Text Info */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl z-10"
      >
        <motion.div 
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 backdrop-blur-md"
        >
          <Sparkles size={14} /> Full-Stack & Frontend Developer
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          Hi, I'm <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500">
            Rezwana Tasnin
          </span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
          Computer Science & Technology student from Dhaka, Bangladesh. Building clean, responsive, interactive web applications using React.js, Tailwind CSS, and JavaScript.
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:rezwanatasnin@gmail.com" 
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-indigo-500/25 flex items-center gap-2 text-sm"
          >
            <Mail size={18} /> Hire Me
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="border border-slate-800 bg-slate-900/80 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-slate-800 transition flex items-center gap-2 text-slate-300"
          >
            Explore Work <ArrowDownRight size={18} />
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Animated Profile Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative group z-10"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition duration-700 animate-pulse" />
        
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative w-72 h-96 rounded-3xl bg-slate-900/90 border border-slate-700/60 overflow-hidden shadow-2xl p-2"
        >
          <img 
            src={profilePic}
            alt="Rezwana Tasnin" 
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}