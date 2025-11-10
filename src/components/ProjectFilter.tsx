import { ProjectCategory } from '@/types/project';

interface ProjectFilterProps {
  selectedCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'backend', label: 'Backend' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'other', label: 'Other' },
];

export default function ProjectFilter({ selectedCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map(category => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === category.value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
