import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button onClick={() => setLanguage('kz')} className="text-white">
        KZ
      </button>
      <button onClick={() => setLanguage('ru')} className="text-white">
        RU
      </button>
      <button onClick={() => setLanguage('en')} className="text-white">
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
