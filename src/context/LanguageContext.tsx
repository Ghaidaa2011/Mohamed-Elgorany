
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';

type LanguageType = 'en' | 'ar';

interface LanguageContextType {
  language: LanguageType;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<LanguageType>(() => {
    const storedLanguage = localStorage.getItem('language') as LanguageType;
    return storedLanguage === 'ar' ? 'ar' : 'en';
  });
  
  const isRTL = language === 'ar';

  useEffect(() => {
    // Change language in i18next
    i18n.changeLanguage(language);
    
    // Store language preference
    localStorage.setItem('language', language);
    
    // Update HTML dir attribute and class for RTL support
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    htmlElement.classList.remove('rtl', 'ltr');
    htmlElement.classList.add(isRTL ? 'rtl' : 'ltr');
  }, [language, isRTL, i18n]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
