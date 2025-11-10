'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
import TechStack from '@/components/TechStack';
import { projects } from '@/data/projects';
import { ProjectCategory } from '@/types/project';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 animate-fadeIn">
          <div className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm text-gray-300">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
            Daniel Hasiando Sinaga
          </h1>
          
          <div className="mb-8 space-y-2">
            <p className="text-2xl md:text-3xl text-white font-semibold">
              Full Stack Developer
            </p>
            <p className="text-xl md:text-2xl text-gray-400">
              Crafting Digital Experiences with Code
            </p>
          </div>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about building modern web applications, mobile apps, and scalable backend systems.
            Transforming ideas into elegant solutions with cutting-edge technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a 
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 font-semibold"
            >
              View My Work
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white rounded-full hover:bg-white/20 transition-all hover:scale-105 font-semibold"
            >
              GitHub Profile
            </a>
            <a 
              href="mailto:daniel.sinaga.ds@gmail.com"
              className="px-8 py-4 glass text-white rounded-full hover:bg-white/20 transition-all hover:scale-105 font-semibold"
            >
              Get in Touch
            </a>
          </div>

          {/* Tech Stack Showcase */}
          <TechStack />

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                className="w-full px-6 py-4 glass-strong rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-6 py-2 glass rounded-lg hover:bg-white/20 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <div className="glass-strong rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Portfolio Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {projects.length}
              </div>
              <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {new Set(projects.flatMap(p => p.technologies)).size}+
              </div>
              <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                Technologies Used
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {projects.filter(p => p.liveUrl).length}
              </div>
              <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                Live Deployments
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {new Set(projects.map(p => p.category)).size}
              </div>
              <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                Categories
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
