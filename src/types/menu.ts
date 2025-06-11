export interface MenuItem {
  id: string;
  name: {
    en: string;
    ar: string;
    ckb: string;
  };
  price?: number;
  smallPrice?: number;
  largePrice?: number;
  description?: {
    en: string;
    ar: string;
    ckb: string;
  };
  image: string;
  category: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: {
    en: string;
    ar: string;
    ckb: string;
  };
}

export type Language = 'en' | 'ar' | 'ckb';
export type Theme = 'light' | 'dark';