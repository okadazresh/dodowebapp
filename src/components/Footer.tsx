import React from 'react';
import { Language } from '../types/menu';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const hoursText = {
    en: 'Hours: Saturday - Friday 8 am - 12 Midnight',
    ar: 'ساعات العمل: السبت - جمعة 8 صباحًا - 12 مساءً',
    ckb: 'كاتی كاركردن: شەممە - هەینی 8 بەیانی - 12 شەو'
  };

  const addressText = {
    en: 'Address: Shaqlawa - Sarmaidan Next to Shaqlawa Technical Institute',
    ar: 'العنوان: شقلاوة - سرميدان بجانب معهد شقلاوة التقني',
    ckb: 'ناونیشان: شەقڵاوە - سەرمەیدان تەنیشت پەیمانگەی تەكنیكی شەقڵاوە'
  };

  return (
    <footer className="text-center py-8 text-orange-500 space-y-2 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
      <div className="text-lg font-medium">
        {hoursText[language]}
      </div>
      <div className="text-lg font-medium">
        {addressText[language]}
      </div>
      <div className="text-lg font-medium">
        Phone: +964 750 782 1152
      </div>
    </footer>
  );
};

export default Footer;