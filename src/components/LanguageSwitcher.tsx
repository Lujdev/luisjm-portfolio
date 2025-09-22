import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Flag from 'react-flagpack';
import 'react-flagpack/dist/style.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentFlag = i18n.language === 'en' ? 'US' : 'ES';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2"
    >
      <Flag code={currentFlag} size="s" />
      <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSwitcher;
