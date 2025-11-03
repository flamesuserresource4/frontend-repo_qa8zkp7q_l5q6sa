import { useState, useEffect } from 'react';
import { Menu, X, Rocket, User, Code, Briefcase, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home', icon: Rocket },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <span className="font-semibold tracking-tight text-white">Senior Dev</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="relative px-3 py-2 text-sm text-white/80 hover:text-white transition"
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {label}
              </span>
              <span className="pointer-events-none absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/10 text-white/90 hover:bg-white/10"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="bg-black/60 backdrop-blur px-4 pb-4">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-white/90 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
