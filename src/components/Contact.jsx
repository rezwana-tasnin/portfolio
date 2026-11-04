import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

function GitHubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3.5 9h3v12h-3V9Zm7 0h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-6.46c0-1.54-.03-3.52-2.14-3.52-2.15 0-2.48 1.68-2.48 3.41V21h-3V9Z" />
    </svg>
  );
}

function FiverrIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="12.75" cy="5.25" r="1.75" />
      <path d="M8.5 9h2.75v1.05c.45-.7 1.2-1.2 2.3-1.2 1.85 0 3.2 1.35 3.2 3.55V18.5H14.5v-5.35c0-1.15-.6-1.9-1.6-1.9-1.05 0-1.9.8-1.9 2v5.25H8.5V9Z" />
    </svg>
  );
}

const links = [
  {
    label: 'Email',
    href: 'mailto:rezwanatasnin@gmail.com',
    icon: Mail,
    external: false,
    stroke: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rezwana-tasnin',
    icon: GitHubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rezwanatasnin',
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'Fiverr',
    href: 'https://www.fiverr.com/rezwanatasnin',
    icon: FiverrIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-rose/40">
      <div className="max-w-6xl mx-auto section-pad py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[12px] uppercase tracking-[0.2em] text-rose-deep mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink tracking-tight mb-5">
            Let’s work together
          </h2>
          <p className="text-ink-soft font-light max-w-md mx-auto mb-12 leading-relaxed">
            Open to internships and collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 text-sm font-medium tracking-wide text-ink-soft">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className="inline-flex items-center gap-2.5 hover:text-ink transition-colors duration-300"
                >
                  {link.stroke ? (
                    <Icon size={18} strokeWidth={1.5} />
                  ) : (
                    <Icon size={18} />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
