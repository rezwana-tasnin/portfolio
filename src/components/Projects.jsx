import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GITHUB_USER = 'rezwana-tasnin';
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;

function formatTitle(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function mapRepo(repo) {
  const tech = [];
  if (repo.language) tech.push(repo.language);
  if (repo.topics?.length) {
    tech.push(...repo.topics.slice(0, 3).map((t) => t.replace(/-/g, ' ')));
  }

  return {
    id: repo.id,
    title: formatTitle(repo.name),
    description: repo.description?.trim() || 'GitHub repository.',
    tech: [...new Set(tech)],
    href: repo.html_url,
    stars: repo.stargazers_count,
  };
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        setStatus('loading');
        const res = await fetch(REPOS_URL, {
          signal: controller.signal,
          headers: { Accept: 'application/vnd.github+json' },
        });

        if (!res.ok) throw new Error(`GitHub ${res.status}`);

        const data = await res.json();
        const mapped = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at) - new Date(a.updated_at);
          })
          .map(mapRepo);

        setProjects(mapped);
        setStatus(mapped.length ? 'ready' : 'empty');
      } catch (err) {
        if (err.name === 'AbortError') return;
        setStatus('error');
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="bg-cream">
      <div className="max-w-6xl mx-auto section-pad py-20 md:py-28">
        <div className="mb-14 md:mb-20 max-w-xl">
          <p className="text-[12px] uppercase tracking-[0.2em] text-rose-deep mb-3">
            Selected work
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-ink-soft font-light leading-relaxed">
            Live repositories from GitHub.
          </p>
        </div>

        {status === 'loading' && (
          <p className="text-ink-soft text-sm font-light border-t border-ink/10 py-10">
            Loading projects…
          </p>
        )}

        {status === 'error' && (
          <p className="text-ink-soft text-sm font-light border-t border-ink/10 py-10">
            Could not load GitHub projects right now.{' '}
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noreferrer"
              className="text-ink border-b border-ink/30 hover:text-rose-deep hover:border-rose-deep transition-colors"
            >
              View on GitHub
            </a>
          </p>
        )}

        {status === 'empty' && (
          <p className="text-ink-soft text-sm font-light border-t border-ink/10 py-10">
            No public repositories yet.
          </p>
        )}

        {status === 'ready' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {projects.map((project, idx) => (
              <motion.a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.35) }}
                className="group flex flex-col border border-ink/10 bg-blush/40 p-5 md:p-6 hover:border-rose-deep/50 transition-colors duration-300 min-h-[11rem]"
              >
                <span className="font-display text-rose-deep text-sm tabular-nums mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl text-ink tracking-tight mb-2 group-hover:text-rose-deep transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-ink-soft font-light text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>
                <div className="flex items-end justify-between gap-3 mt-auto">
                  {project.tech.length > 0 ? (
                    <p className="text-[11px] tracking-wide text-ink-soft/80 line-clamp-1">
                      {project.tech.join(' · ')}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-ink font-medium tracking-wide shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    View →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
          <p className="text-ink-soft text-sm font-light">
            More on GitHub.
          </p>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-medium tracking-wide text-ink border-b border-ink pb-0.5 hover:text-rose-deep hover:border-rose-deep transition-colors duration-300 w-fit"
          >
            github.com/{GITHUB_USER}
          </a>
        </div>
      </div>
    </section>
  );
}
