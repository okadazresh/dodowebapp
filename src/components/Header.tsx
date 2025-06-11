import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Language, Theme } from '../types/menu';

interface HeaderProps {
  language: Language;
  theme: Theme;
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  theme,
  onLanguageChange,
  onThemeChange,
}) => {
  const isRTL = language === 'ar' || language === 'ckb';

  const logoText = {
    en: 'Dodo Pizza',
    ar: 'دودو بیتزا',
    ckb: 'دودو پیتزا'
  };

  const descriptionText = {
    en: 'For the love of Pizza',
    ar: 'من أجل حب البيتزا',
    ckb: 'بۆ خۆشەویستی پیتزا'
  };

  return (
    <header className="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6 shadow-lg transition-colors duration-300">
      <div className={`language-selector mb-4 ${isRTL ? 'text-left' : 'text-right'}`}>
        <div className="flex items-center justify-between">
          <button
            onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            className="bg-gray-800 dark:bg-gray-700 text-orange-500 px-3 py-2 rounded border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="ckb">کوردی</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <img
          src="https://i.ibb.co/RTrcxHnM/dodologo.png"
          width="120"
          height="120"
          alt="Dodo Pizza Logo"
          className="rounded-lg shadow-md"
        />
      </div>

      <h1 className="text-4xl font-bold mb-3 text-orange-500 tracking-wider uppercase">
        {logoText[language]}
      </h1>
      
      <p className="text-orange-500 font-bold uppercase tracking-widest text-lg">
        {descriptionText[language]}
      </p>
    </header>
  );
};

export default Header;