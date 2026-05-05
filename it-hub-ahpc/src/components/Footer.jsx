import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">IT HUB AHPC 🔷</h3>
            <p className="text-gray-400">
              {t('hero.subtitle')}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('nav.home')}</h4>
            <ul>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white">
                  {t('nav.about')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="text-gray-400 hover:text-white">
                  {t('nav.programs')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/community" className="text-gray-400 hover:text-white">
                  {t('nav.community')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-white">
                  {t('nav.contact')}
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('nav.programs')}</h4>
            {/* Add program links here when available */}
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('nav.contact')}</h4>
            {/* Add contact links here */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
          <p className="text-gray-500">
            &copy; 2025 IT HUB AHPC. {t('footer.rights')}
          </p>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
