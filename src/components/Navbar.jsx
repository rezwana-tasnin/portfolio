export default function Navbar({ theme, onToggleTheme }) {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Work' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-blush/80 backdrop-blur-md border-b border-rose/30">
      <div className="max-w-6xl mx-auto section-pad h-16 flex items-center justify-between gap-4">
        <a href="#about" className="font-display text-xl tracking-tight text-ink">
          Rezwana
        </a>

        <div className="hidden sm:flex items-center gap-8 text-[13px] font-medium text-ink-soft tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="size-9 flex items-center justify-center text-ink-soft hover:text-ink transition-colors duration-300"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 14.3A8.5 8.5 0 1 1 9.7 3a7 7 0 0 0 11.3 11.3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <a
            href="mailto:rezwanatasnin@gmail.com"
            className="sm:hidden text-[13px] font-medium text-rose-deep"
          >
            Email
          </a>
        </div>
      </div>
    </nav>
  );
}
