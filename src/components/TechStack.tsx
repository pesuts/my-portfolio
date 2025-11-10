import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiFlutter, 
  SiPostgresql, 
  SiMongodb, 
  SiDocker, 
  SiGit,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiFirebase
} from 'react-icons/si';

const techStackData = [
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
  { name: 'PHP', icon: SiPhp, color: 'text-purple-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' },
];

export default function TechStack() {
  return (
    <div className="max-w-5xl mx-auto glass-strong rounded-2xl p-8">
      <p className="text-gray-400 mb-8 text-sm uppercase tracking-wider text-center">
        Tech Stack I Work With
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStackData.map((tech) => {
          const Icon = tech.icon;
          return (
            <div 
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-4 glass rounded-xl hover:bg-white/20 transition-all cursor-default hover:scale-110"
            >
              <Icon 
                className={`text-4xl ${tech.color} group-hover:scale-125 transition-transform duration-300`}
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
