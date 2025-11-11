'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLeft, HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/projects';
import ImageViewer from '@/components/ImageViewer';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, 
  SiPostgresql, SiTypescript, SiJavascript, SiTailwindcss,
  SiKotlin, SiAndroid, SiFlutter, SiDart, SiFirebase,
  SiPython, SiDjango, SiLaravel, SiPhp, SiMysql,
  SiApachespark, SiApacheairflow, SiGooglecloud,
  SiVite, SiJest, SiAxios, SiReactrouter
} from 'react-icons/si';

const techIcons: { [key: string]: any } = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'TailwindCSS': SiTailwindcss,
  'Kotlin': SiKotlin,
  'Android': SiAndroid,
  'Flutter': SiFlutter,
  'Dart': SiDart,
  'Firebase': SiFirebase,
  'Python': SiPython,
  'Django': SiDjango,
  'Laravel': SiLaravel,
  'PHP': SiPhp,
  'MySQL': SiMysql,
  'Apache Spark': SiApachespark,
  'Apache Airflow': SiApacheairflow,
  'BigQuery': SiGooglecloud,
  'Vite': SiVite,
  'Jest': SiJest,
  'Axios': SiAxios,
  'React Router': SiReactrouter
};

const categoryColors = {
  fullstack: 'from-blue-500 to-purple-500',
  backend: 'from-green-500 to-teal-500',
  frontend: 'from-pink-500 to-rose-500',
  mobile: 'from-orange-500 to-amber-500',
  'data-engineering': 'from-indigo-500 to-purple-500',
  other: 'from-gray-500 to-slate-500'
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find(p => p.id === projectId);

  const openViewer = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Project yang Anda cari tidak ditemukan.</p>
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            <HiArrowLeft />
            Kembali ke Projects
          </Link>
        </div>
      </div>
    );
  }

  const gradientColor = categoryColors[project.category] || categoryColors.other;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors group cursor-pointer"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Kembali
        </button>

        {/* Hero Section */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-4 py-2 bg-gradient-to-r ${gradientColor} text-white rounded-full text-sm font-semibold capitalize`}>
              {project.category.replace('-', ' ')}
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {project.title}
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:scale-105 transition-all font-semibold"
              >
                <FaGithub className="text-xl" />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 font-semibold"
              >
                <HiExternalLink className="text-xl" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span className="text-3xl">📸</span>
              Screenshots
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Klik gambar untuk melihat dalam ukuran penuh
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => openViewer(index)}
                  className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 hover:scale-105 transition-transform cursor-pointer group"
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-lg">
                      🔍 Lihat Gambar
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Image Viewer Modal */}
        {viewerOpen && project.screenshots && (
          <ImageViewer
            images={project.screenshots}
            currentIndex={currentImageIndex}
            onClose={() => setViewerOpen(false)}
          />
        )}

        {/* Technologies */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <HiCode className="text-blue-500" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech) => {
              const Icon = techIcons[tech];
              return (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-4 py-3 glass rounded-xl hover:scale-105 transition-all group"
                >
                  {Icon && <Icon className="text-2xl group-hover:scale-110 transition-transform" />}
                  <span className="font-medium text-gray-800 dark:text-white">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span className="text-3xl">✨</span>
              Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Projects */}
        <div className="text-center mt-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-4 glass-strong rounded-full hover:scale-105 transition-all font-semibold text-gray-900 dark:text-white"
          >
            Lihat Project Lainnya
            <HiExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
}
