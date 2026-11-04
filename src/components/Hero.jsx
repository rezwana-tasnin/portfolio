import { motion } from 'framer-motion';
import profilePic from '../assets/rezwana-cutout.png';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[100svh] flex flex-col bg-grain overflow-hidden">
      <div className="flex-1 grid lg:grid-cols-2 max-w-6xl mx-auto w-full pt-16 relative">
        <div className="section-pad flex flex-col justify-center py-16 lg:py-24 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[13px] uppercase tracking-[0.22em] text-rose-deep font-medium mb-6"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink mb-6"
          >
            Rezwana
            <br />
            Tasnin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-soft text-base sm:text-lg leading-relaxed max-w-md mb-10 font-light"
          >
            Computer Science student in Dhaka. Builds clean, responsive web
            interfaces with React, Tailwind, and JavaScript.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="mailto:rezwanatasnin@gmail.com"
              className="inline-flex items-center px-7 py-3.5 bg-ink text-blush text-sm font-medium tracking-wide hover:opacity-85 transition-opacity duration-300"
            >
              Hire me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium tracking-wide text-ink border-b border-ink/30 hover:border-ink transition-colors duration-300"
            >
              View work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative order-1 lg:order-2 min-h-[52vh] lg:min-h-full flex items-start justify-center pt-8 lg:pt-14"
        >
          <div className="hero-portrait-glow hero-portrait-glow--teal" aria-hidden="true" />
          <div className="hero-portrait-glow hero-portrait-glow--rose" aria-hidden="true" />
          <div className="hero-portrait-glow hero-portrait-glow--violet" aria-hidden="true" />
          <img
            src={profilePic}
            alt="Rezwana Tasnin"
            className="hero-portrait-fade relative z-10 w-[90%] max-w-md lg:max-w-xl h-auto object-contain object-top mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
