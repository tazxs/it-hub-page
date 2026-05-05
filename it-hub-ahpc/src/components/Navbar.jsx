import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();

  const getLinkClassName = ({ isActive }) =>
    isActive ? 'text-accent' : 'text-white hover:text-accent transition-colors';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md z-10 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="text-white text-2xl font-bold font-headings">
              IT HUB AHPC 🔷
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={getLinkClassName}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/about" className={getLinkClassName}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/programs" className={getLinkClassName}>
              {t('nav.programs')}
            </NavLink>
            <NavLink to="/community" className={getLinkClassName}>
              {t('nav.community')}
            </NavLink>
            <NavLink to="/contact" className={getLinkClassName}>
              {t('nav.contact')}
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="bg-accent text-black font-bold py-2 px-4 rounded">
              {t('nav.apply')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
