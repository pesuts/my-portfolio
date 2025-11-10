import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 glass border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Daniel Hasiando Sinaga</h3>
            <p className="text-gray-600 dark:text-white leading-relaxed">
              Full Stack Developer passionate about creating modern web and mobile applications with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/pesuts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/daniel-sinaga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:daniel.sinaga.ds@gmail.com"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <HiArrowRight className="text-sm" /> Home
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <HiArrowRight className="text-sm" /> Projects
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <HiArrowRight className="text-sm" /> Skills
                </Link>
              </li>
              <li>
                <a href="https://github.com/pesuts" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <HiArrowRight className="text-sm" /> GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Stay Connected</h3>
            <p className="text-gray-600 dark:text-white mb-4 text-sm">
              Get in touch for collaborations or just a friendly hello!
            </p>
            <a 
              href="mailto:daniel.sinaga.ds@gmail.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-white text-sm">
            &copy; {currentYear} Daniel Hasiando Sinaga. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-white text-sm flex items-center gap-2">
            Built with <FaHeart className="text-red-500 animate-pulse" /> using 
            <span className="gradient-text font-semibold">Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
    </footer>
  );
}
