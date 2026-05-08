import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/programs', label: t('nav.programs') },
    { path: '/community', label: t('nav.community') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const closeMenu = () => setIsOpen(false);

  const handleApplyClick = () => {
    closeMenu();
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/contact');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-dark/80 backdrop-blur-md border-b border-white/5 z-50 font-sans">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 7L12 12L4 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-white text-xl font-bold font-headings tracking-tight">
                IT HUB <span className="text-accent">AHPC</span>
              </span>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent mx-4"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSwitcher />
            <motion.button 
              onClick={handleApplyClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(0, 87, 255, 0)", "0px 0px 20px rgba(0, 87, 255, 0.4)", "0px 0px 0px rgba(0, 87, 255, 0)"] 
              }}
              transition={{ 
                boxShadow: { repeat: Infinity, duration: 2 } 
              }}
              className="relative group overflow-hidden bg-accent text-white text-sm font-bold py-2 px-6 rounded-full transition-all"
            >
              <span className="relative z-10">{t('nav.apply')}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/80 hover:text-white transition-colors focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-primary-dark border-b border-white/5 h-screen flex flex-col pt-8 px-6 pb-24 space-y-4 overflow-y-auto"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-2xl font-semibold transition-colors ${
                  isActive ? 'text-accent' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-6">
            <button 
              className="bg-accent text-white font-bold py-4 px-6 rounded-xl hover:bg-accent/90 transition-colors w-full text-center text-lg shadow-lg" 
              onClick={handleApplyClick}
            >
              {t('nav.apply')}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
