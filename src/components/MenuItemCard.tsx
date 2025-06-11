import React from 'react';
import { MenuItem, Language } from '../types/menu';

interface MenuItemCardProps {
  item: MenuItem;
  language: Language;
  onClick: () => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, language, onClick }) => {
  const isRTL = language === 'ar' || language === 'ckb';

  const formatPrice = (price: number) => `IQD ${price.toLocaleString()}`;

  return (
    <div 
      className={`flex mb-6 pb-6 border-b border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-4 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
        isRTL ? 'flex-row-reverse' : ''
      }`}
      onClick={onClick}
    >
      <div className={`flex-1 ${isRTL ? 'ml-4' : 'mr-4'}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
            {item.name[language]}
          </h3>
          <div className="text-orange-500 font-bold">
            {item.price && formatPrice(item.price)}
          </div>
        </div>

        {(item.smallPrice || item.largePrice) && (
          <div className="space-y-2">
            {item.smallPrice && (
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300">
                  {language === 'en' ? 'Small' : language === 'ar' ? 'صغير' : 'بچووك'}
                </span>
                <span className="text-orange-500 font-bold">{formatPrice(item.smallPrice)}</span>
              </div>
            )}
            {item.largePrice && (
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300">
                  {language === 'en' ? 'Large' : language === 'ar' ? 'كبير' : 'گەورە'}
                </span>
                <span className="text-orange-500 font-bold">{formatPrice(item.largePrice)}</span>
              </div>
            )}
          </div>
        )}

        {item.tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={`w-24 h-24 rounded-lg overflow-hidden shadow-md flex-shrink-0 ${isRTL ? 'mr-0' : 'ml-0'}`}>
        <img
          src={item.image}
          alt={item.name[language]}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default MenuItemCard;