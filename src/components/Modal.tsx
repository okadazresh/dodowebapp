import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { MenuItem, Language } from '../types/menu';

interface ModalProps {
  item: MenuItem | null;
  language: Language;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, language, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (item) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const isRTL = language === 'ar' || language === 'ckb';
  const formatPrice = (price: number) => `IQD ${price.toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={20} className="text-gray-600 dark:text-gray-300" />
        </button>

        {/* Image */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={item.image}
            alt={item.name[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            {item.name[language]}
          </h2>

          {item.description && (
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {item.description[language]}
            </p>
          )}

          {/* Pricing */}
          <div className="space-y-3">
            {item.price && (
              <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {language === 'en' ? 'Price' : language === 'ar' ? 'السعر' : 'نرخ'}
                </span>
                <span className="text-xl font-bold text-orange-500">
                  {formatPrice(item.price)}
                </span>
              </div>
            )}

            {(item.smallPrice || item.largePrice) && (
              <div className="space-y-2">
                {item.smallPrice && (
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {language === 'en' ? 'Small' : language === 'ar' ? 'صغير' : 'بچووك'}
                    </span>
                    <span className="text-lg font-bold text-orange-500">
                      {formatPrice(item.smallPrice)}
                    </span>
                  </div>
                )}
                {item.largePrice && (
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {language === 'en' ? 'Large' : language === 'ar' ? 'كبير' : 'گەورە'}
                    </span>
                    <span className="text-lg font-bold text-orange-500">
                      {formatPrice(item.largePrice)}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;