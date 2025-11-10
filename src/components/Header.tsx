'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

// Helper function to apply theme
const applyTheme = (t: 'light' | 'dark') => {
  if (typeof window === 'undefined') return;
  const doc = document.documentElement;
  const body = document.body;
  if (t === 'dark') {
    doc.classList.add('dark');
    body.classList.remove('light');
    try { localStorage.setItem('theme', 'dark'); } catch { }
  } else {
    doc.classList.remove('dark');
    body.classList.add('light');
    try { localStorage.setItem('theme', 'light'); } catch { }
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage after mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved as 'light' | 'dark');
        applyTheme(saved as 'light' | 'dark');
      } else {
        applyTheme('light');
      }
    } catch {
      applyTheme('light');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next as 'light' | 'dark');
    setTheme(next as 'light' | 'dark');
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            DHS.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-indigo-200/80 dark:hover:bg-white/10"
            >
              Home
            </Link>
            <Link 
              href="/#projects" 
              className="px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-indigo-200/80 dark:hover:bg-white/10"
            >
              Projects
            </Link>
            <Link 
              href="/#skills" 
              className="px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-indigo-200/80 dark:hover:bg-white/10"
            >
              Skills
            </Link>
            <a 
              href="https://github.com/pesuts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-indigo-200/80 dark:hover:bg-white/10 flex items-center gap-2"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
            <a 
              href="mailto:daniel.sinaga.ds@gmail.com"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              <FaEnvelope />
              Contact
            </a>
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="ml-3 px-3 py-2 rounded-lg text-gray-700 dark:text-white hover:bg-indigo-200/80 dark:hover:bg-white/10 transition-all flex items-center hover:scale-110 cursor-pointer"
              >
                {theme === 'dark' ? <HiSun className="w-5 h-5 text-yellow-400" /> : <HiMoon className="w-5 h-5 text-indigo-600" />}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-white p-2 hover:bg-indigo-200/80 dark:hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 glass-strong rounded-lg p-4 animate-fadeIn">
            <Link 
              href="/" 
              className="block px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:bg-indigo-200/80 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#projects" 
              className="block px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:bg-indigo-200/80 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/#skills" 
              className="block px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:bg-indigo-200/80 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <a 
              href="https://github.com/pesuts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:bg-indigo-200/80 dark:hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
            <a 
              href="mailto:daniel.sinaga.ds@gmail.com"
              className="px-4 py-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaEnvelope />
              Contact
            </a>
            {mounted && (
              <div className="pt-2">
                <button
                  onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                  aria-label="Toggle theme"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 glass rounded-lg text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:bg-indigo-200/80 dark:hover:bg-white/10 transition-all"
                >
                  {theme === 'dark' ? <HiSun className="w-5 h-5 text-yellow-400" /> : <HiMoon className="w-5 h-5 text-indigo-600" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
