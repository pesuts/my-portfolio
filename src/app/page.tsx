'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
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
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Daniel Hasiando Sinaga
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Full Stack Developer | Mobile Developer
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Passionate about building modern web applications, mobile apps, and scalable backend systems.
          Experienced in various technologies including React, Next.js, Node.js, Flutter, and more.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="mailto:daniel.sinaga.ds@gmail.com"
            className="px-6 py-3 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
            />
          </div>
          
          <ProjectFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            No projects found matching your criteria.
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="mt-16 py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              {projects.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">
              Projects
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
              {new Set(projects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">
              Technologies
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">
              {projects.filter(p => p.liveUrl).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">
              Live Demos
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">
              {new Set(projects.map(p => p.category)).size}
            </div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">
              Categories
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
