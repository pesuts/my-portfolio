'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
import TechStack from '@/components/TechStack';
import { projects } from '@/data/projects';
import { ProjectCategory } from '@/types/project';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Hide scroll indicator when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section - Redesigned with Profile Photo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[420px_1fr] gap-16 xl:gap-2 items-center animate-fadeIn">
              
              {/* Left Side - Profile Photo & Social Links */}
              <div className="flex flex-col items-center lg:items-center justify-center">
                {/* Profile Photo with Enhanced Design */}
                <div className="relative group mb-8">
                  {/* Animated Gradient Border */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                  
                  {/* Photo Container */}
                  <div className="relative">
                    <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <Image 
                        src="/profile.jpg" 
                        alt="Daniel Hasiando Sinaga"
                        fill
                        className="object-cover object-top"
                        priority
                        sizes="(max-width: 1024px) 288px, 320px"
                      />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute bottom-8 right-8 glass-strong px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-lg">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">Available for work</span>
                    </div>
                  </div>
                </div>

                {/* Social Links - Centered */}
                <div className="flex gap-5 justify-center">
                  <a 
                    href="https://github.com/pesuts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-gray-200/80 dark:hover:bg-white/20 transition-all hover:scale-110 group"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/daniel-sinaga" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-gray-200/80 dark:hover:bg-white/20 transition-all hover:scale-110 group"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="mailto:daniel.sinaga.ds@gmail.com"
                    className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-gray-200/80 dark:hover:bg-white/20 transition-all hover:scale-110 group"
                    title="Email"
                  >
                    <FaEnvelope className="w-6 h-6 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="text-center lg:text-left space-y-4">
                {/* Welcome Badge */}
                <div className="inline-block px-5 py-2.5 glass rounded-full text-sm font-medium text-gray-700 dark:text-white">
                  👋 Welcome to my portfolio
                </div>
                
                {/* Name */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold gradient-text leading-tight tracking-tight">
                    Daniel Hasiando Sinaga
                  </h1>
                  
                  {/* Role Badge */}
                  <div className="inline-flex items-center gap-3 px-5 py-1 glass-strong rounded-full">
                    <span className="text-2xl">💻</span>
                    <p className="text-lg sm:text-xl lg:text-xl text-gray-900 dark:text-white font-bold">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                
                {/* Tagline */}
                {/* <p className="text-xl sm:text-2xl text-gray-600 dark:text-white font-medium">
                  Crafting Digital Experiences with Code
                </p> */}

                {/* Description */}
                <p className="text-gray-700 dark:text-white text-base sm:text-lg leading-relaxed max-w-2xl lg:max-w-2xl">
                  Passionate about building modern web applications, software development, and scalable backend systems. 
                  Transforming ideas into elegant solutions with cutting-edge technologies.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a 
                    href="#projects"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 font-semibold text-center text-base"
                  >
                    View My Work
                  </a>
                  <a 
                    href="mailto:daniel.sinaga.ds@gmail.com"
                    className="px-8 py-4 glass text-gray-900 dark:text-white rounded-full hover:bg-gray-200/80 dark:hover:bg-white/20 transition-all hover:scale-105 font-semibold text-center text-base"
                  >
                    Let&apos;s Talk
                  </a>
                </div>

                {/* Quick Stats */}
                <div className='max-w-[90%]'>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="glass-strong rounded-2xl py-5 px-1 text-center hover:scale-105 transition-transform">
                    <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">13+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-white font-medium">Projects</div>
                  </div>
                  <div className="glass-strong rounded-2xl py-5 px-1 text-center hover:scale-105 transition-transform">
                    <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">22+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-white font-medium">Tech Stack</div>
                  </div>
                  <div className="glass-strong rounded-2xl py-5 px-1 text-center hover:scale-105 transition-transform">
                    <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">2024</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-white font-medium">Active Year</div>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Showcase - Moved Below */}
            <div className="mt-24 lg:mt-32">
              <TechStack />
            </div>
          </div>

          {/* Scroll indicator - hilang saat scroll */}
          {showScrollIndicator && (
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="Scroll to projects"
            >
              <HiChevronDown className="w-8 h-8 text-gray-500 dark:text-white" />
            </a>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-gray-600 dark:text-white text-lg max-w-2xl mx-auto">
            Explore my portfolio of web applications, mobile apps, and backend systems
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name, technology, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 glass-strong rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white transition-all"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <ProjectFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 dark:text-white text-lg">No projects found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-6 py-2 glass rounded-lg text-gray-900 dark:text-white hover:bg-gray-200/80 dark:hover:bg-white/20 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section id="skills" className="container mx-auto px-4 pt-8">
        <div className="glass-strong rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Portfolio Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {projects.length}
              </div>
              <div className="text-gray-600 dark:text-white text-sm md:text-base uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {new Set(projects.flatMap(p => p.technologies)).size}+
              </div>
              <div className="text-gray-600 dark:text-white text-sm md:text-base uppercase tracking-wider">
                Technologies Used
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {projects.filter(p => p.liveUrl).length}
              </div>
              <div className="text-gray-600 dark:text-white text-sm md:text-base uppercase tracking-wider">
                Live Deployments
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {new Set(projects.map(p => p.category)).size}
              </div>
              <div className="text-gray-600 dark:text-white text-sm md:text-base uppercase tracking-wider">
                Categories
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
