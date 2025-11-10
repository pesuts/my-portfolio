'use client';

import { Project } from '@/types/project';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

const categoryColors = {
  fullstack: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  mobile: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  other: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        {!imageError && project.screenshots[0] ? (
          <Image
            src={project.screenshots[0]}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <div className="text-sm">{project.title}</div>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badge */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColors[project.category]}`}>
          {project.category.toUpperCase()}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Features Preview */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Key Features:</p>
            <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
              {project.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-center text-sm font-medium"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Year */}
        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-right">
          {project.year}
        </div>
      </div>
    </div>
  );
}
