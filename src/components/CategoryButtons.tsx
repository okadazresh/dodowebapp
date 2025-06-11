import React from 'react';
import { MenuCategory, Language } from '../types/menu';

interface CategoryButtonsProps {
  categories: MenuCategory[];
  activeCategory: string;
  language: Language;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
  categories,
  activeCategory,
  language,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6 shadow-lg transition-colors duration-300">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
            activeCategory === category.id
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500'
          }`}
        >
          {category.name[language]}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;