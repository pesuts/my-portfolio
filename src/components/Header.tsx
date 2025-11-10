'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              Home
            </Link>
            <Link 
              href="/#projects" 
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              Projects
            </Link>
            <Link 
              href="/#skills" 
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              Skills
            </Link>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex items-center gap-2"
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#projects" 
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/#skills" 
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
            <a 
              href="mailto:daniel.sinaga.ds@gmail.com"
              className="block px-4 py-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaEnvelope />
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
