'use client';

import { Project } from '@/types/project';
import Image from 'next/image';
import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink, HiCheckCircle, HiClock } from 'react-icons/hi';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, 
  SiExpress, SiNestjs, SiFlutter, SiDart, SiKotlin, SiAndroid,
  SiPostgresql, SiMongodb, SiMysql, SiSqlite, SiRedis, SiFirebase,
  SiDocker, SiGit, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3,
  SiPhp, SiPython, SiLaravel, SiVuedotjs, SiAngular, SiJquery,
  SiVercel, SiNetlify, SiHeroku, SiAmazonwebservices, SiGooglecloud
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface ProjectCardProps {
  project: Project;
}

const categoryColors = {
  fullstack: 'from-purple-500 to-pink-500',
  backend: 'from-green-500 to-emerald-500',
  frontend: 'from-blue-500 to-cyan-500',
  mobile: 'from-orange-500 to-red-500',
  other: 'from-gray-500 to-slate-500',
};

const categoryIcons = {
  fullstack: '🚀',
  backend: '⚙️',
  frontend: '🎨',
  mobile: '📱',
  other: '💡',
};

// Tech icon mapping
const techIcons: Record<string, { icon: IconType; color: string }> = {
  'React': { icon: SiReact, color: 'text-cyan-400' },
  'React.js': { icon: SiReact, color: 'text-cyan-400' },
  'Next.js': { icon: SiNextdotjs, color: 'text-white' },
  'TypeScript': { icon: SiTypescript, color: 'text-blue-400' },
  'JavaScript': { icon: SiJavascript, color: 'text-yellow-400' },
  'Node.js': { icon: SiNodedotjs, color: 'text-green-500' },
  'Express': { icon: SiExpress, color: 'text-gray-300' },
  'Express.js': { icon: SiExpress, color: 'text-gray-300' },
  'NestJS': { icon: SiNestjs, color: 'text-red-500' },
  'Flutter': { icon: SiFlutter, color: 'text-blue-400' },
  'Dart': { icon: SiDart, color: 'text-blue-400' },
  'Kotlin': { icon: SiKotlin, color: 'text-purple-500' },
  'Android': { icon: SiAndroid, color: 'text-green-500' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-blue-500' },
  'MongoDB': { icon: SiMongodb, color: 'text-green-500' },
  'MySQL': { icon: SiMysql, color: 'text-blue-500' },
  'SQLite': { icon: SiSqlite, color: 'text-blue-400' },
  'Redis': { icon: SiRedis, color: 'text-red-500' },
  'Firebase': { icon: SiFirebase, color: 'text-orange-400' },
  'Docker': { icon: SiDocker, color: 'text-blue-400' },
  'Git': { icon: SiGit, color: 'text-orange-500' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-cyan-400' },
  'TailwindCSS': { icon: SiTailwindcss, color: 'text-cyan-400' },
  'Bootstrap': { icon: SiBootstrap, color: 'text-purple-500' },
  'HTML': { icon: SiHtml5, color: 'text-orange-500' },
  'HTML5': { icon: SiHtml5, color: 'text-orange-500' },
  'CSS': { icon: SiCss3, color: 'text-blue-500' },
  'CSS3': { icon: SiCss3, color: 'text-blue-500' },
  'PHP': { icon: SiPhp, color: 'text-purple-400' },
  'Python': { icon: SiPython, color: 'text-yellow-400' },
  'Laravel': { icon: SiLaravel, color: 'text-red-500' },
  'Vue.js': { icon: SiVuedotjs, color: 'text-green-500' },
  'Angular': { icon: SiAngular, color: 'text-red-500' },
  'jQuery': { icon: SiJquery, color: 'text-blue-500' },
  'Vercel': { icon: SiVercel, color: 'text-white' },
  'Netlify': { icon: SiNetlify, color: 'text-cyan-400' },
  'Heroku': { icon: SiHeroku, color: 'text-purple-500' },
  'AWS': { icon: SiAmazonwebservices, color: 'text-orange-400' },
  'GCP': { icon: SiGooglecloud, color: 'text-blue-400' },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <div className="group glass-strong rounded-2xl overflow-hidden hover-lift border border-white/10 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} opacity-20`}></div>
        {!imageError && project.screenshots[0] ? (
          <Image
            src={project.screenshots[0]}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">{categoryIcons[project.category]}</div>
              <div className="text-sm text-gray-400">{project.title}</div>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center gap-1 px-3 py-1.5 glass-strong rounded-full text-xs font-semibold text-white backdrop-blur-md`}>
            {categoryIcons[project.category]} {project.category.toUpperCase()}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 glass rounded-full text-xs text-gray-300">
            <HiClock className="text-sm" />
            {project.year}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 relative">
          {(showAllTech ? project.technologies : project.technologies.slice(0, 3)).map(tech => {
            const techInfo = techIcons[tech];
            const TechIcon = techInfo?.icon;
            
            return (
              <span
                key={tech}
                className="group/tech px-3 py-1.5 glass rounded-lg text-gray-300 text-xs hover:bg-white/20 transition-all flex items-center gap-1.5"
                title={tech}
              >
                {TechIcon && (
                  <TechIcon className={`text-sm ${techInfo.color} group-hover/tech:scale-110 transition-transform`} />
                )}
                <span>{tech}</span>
              </span>
            );
          })}
          {project.technologies.length > 3 && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="px-3 py-1.5 glass rounded-lg text-blue-400 text-xs hover:bg-white/20 transition-all cursor-pointer group/more flex items-center gap-1"
              title={showAllTech ? 'Show less' : `Show ${project.technologies.length - 3} more technologies`}
            >
              {showAllTech ? (
                <>Show less</>
              ) : (
                <>
                  +{project.technologies.length - 3} <span className="group-hover/more:inline hidden">more</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Features Preview */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4 flex-1">
            <div className="space-y-2">
              {project.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-start gap-2 text-xs text-gray-400">
                  <HiCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 glass text-white rounded-xl hover:bg-white/20 transition-all text-center text-sm font-medium flex items-center justify-center gap-2 group/btn"
          >
            <SiGithub 
                className={`text-xl red group-hover:scale-125 transition-transform duration-300`}
            />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center text-sm font-medium flex items-center justify-center gap-2 group/btn"
            >
              <HiExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
