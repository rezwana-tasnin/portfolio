import { motion } from 'framer-motion';

const items = [
  {
    title: 'Diploma in CST',
    meta: 'Session 2022–2023',
    place: 'Dhaka Mohila Polytechnic Institute, Sher-e-Bangla Nagar, Dhaka.',
  },
  {
    title: 'SSC (Science)',
    meta: '2021 · GPA 5.00',
    place: 'Childrens Home Public School, Sarishabari, Jamalpur.',
  },
  {
    title: 'JSC',
    meta: '2018 · GPA 5.00',
    place: 'Childrens Home Public School, Sarishabari, Jamalpur.',
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-section-dark text-contrast-fg">
      <div className="max-w-6xl mx-auto section-pad py-20 md:py-28">
        <div className="mb-14 md:mb-16">
          <p className="text-[12px] uppercase tracking-[0.2em] text-contrast-accent mb-3">
            Background
          </p>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-contrast-fg">
            Education
          </h2>
        </div>

        <ol className="space-y-0">
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid md:grid-cols-[1fr_1.2fr] gap-3 md:gap-12 py-8 border-t border-contrast-line last:border-b"
            >
              <div>
                <h3 className="font-display text-xl md:text-2xl text-contrast-fg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-contrast-accent tracking-wide">
                  {item.meta}
                </p>
              </div>
              <p className="text-contrast-muted font-light text-sm md:text-base leading-relaxed md:pt-1">
                {item.place}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
