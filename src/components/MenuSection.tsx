import React from 'react';
import { MenuItem, Language } from '../types/menu';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  items: MenuItem[];
  language: Language;
  onItemClick: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ items, language, onItemClick }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <p className="text-lg">
          {language === 'en' ? 'No items in this category' : 
           language === 'ar' ? 'لا توجد عناصر في هذه الفئة' : 
           'هیچ بڕگەیەک لەم بەشەدا نییە'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors duration-300">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          language={language}
          onClick={() => onItemClick(item)}
        />
      ))}
    </div>
  );
};

export default MenuSection;