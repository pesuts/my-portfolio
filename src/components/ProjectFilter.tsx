import { ProjectCategory } from '@/types/project';

interface ProjectFilterProps {
  selectedCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

const categories: { value: ProjectCategory; label: string; icon: string }[] = [
  { value: 'all', label: 'All Projects', icon: '🌟' },
  { value: 'fullstack', label: 'Full Stack', icon: '🚀' },
  { value: 'backend', label: 'Backend', icon: '⚙️' },
  { value: 'frontend', label: 'Frontend', icon: '🎨' },
  { value: 'mobile', label: 'Mobile', icon: '📱' },
  { value: 'data-engineering', label: 'Data Engineering', icon: '📊' },
  { value: 'other', label: 'Other', icon: '💡' },
];

export default function ProjectFilter({ selectedCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map(category => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`group px-6 py-3 rounded-xl transition-all font-medium ${
            selectedCategory === category.value
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105'
              : 'glass text-gray-700 dark:text-white hover:bg-gray-200/80 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-gray-200 hover:scale-105'
          }`}
        >
          <span className="flex items-center gap-2">
            <span className="group-hover:scale-110 transition-transform inline-block">
              {category.icon}
            </span>
            {category.label}
          </span>
        </button>
      ))}
    </div>
  );
}
