import { motion } from 'framer-motion';

const skills = [
  { name: 'MERN Stack', level: 'Advanced' },
  { name: 'React.js', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'HTML & CSS', level: 'Expert' },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-blush-mid border-y border-rose/40">
      <div className="max-w-6xl mx-auto section-pad py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-rose-deep mb-3">
              Capabilities
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
              Skills
            </h2>
          </div>

          <ul className="divide-y divide-rose/50">
            {skills.map((skill, i) => (
              <motion.li
                key={skill.name}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-baseline justify-between py-5"
              >
                <span className="text-lg md:text-xl text-ink font-medium tracking-tight">
                  {skill.name}
                </span>
                <span className="text-sm text-ink-soft font-light tracking-wide">
                  {skill.level}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
