import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Send, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold font-headings tracking-tight">
                IT HUB <span className="text-accent">AHPC</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent/10 hover:text-accent border border-white/5 hover:border-accent/20 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent/10 hover:text-accent border border-white/5 hover:border-accent/20 transition-all duration-300">
                <Send size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent/10 hover:text-accent border border-white/5 hover:border-accent/20 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent/10 hover:text-accent border border-white/5 hover:border-accent/20 transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">{t('community_page.who_we_are_title')}</h4>
            <ul className="space-y-4">
              <li>
                <NavLink to="/about" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">
                  {t('nav.about')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">
                  {t('nav.programs')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/community" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">
                  {t('nav.community')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">
                  {t('nav.contact')}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">{t('nav.programs')}</h4>
            <ul className="space-y-4">
              <li>
                <NavLink to="/programs" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">IT Bootcamp</NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">Startup Accelerator</NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">DevLab Coworking</NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">Hackathons</NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">{t('nav.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>{t('contact_page.address')}</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60 text-sm">
                <Mail size={18} className="text-accent shrink-0" />
                <a href={`mailto:${t('contact_page.email')}`} className="hover:text-white transition-colors">{t('contact_page.email')}</a>
              </li>
              <li className="flex items-center space-x-3 text-white/60 text-sm">
                <Phone size={18} className="text-accent shrink-0" />
                <a href={`tel:${t('contact_page.phone')}`} className="hover:text-white transition-colors">{t('contact_page.phone')}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partnership Branding */}
        <div className="py-12 border-t border-white/5 flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="flex flex-col items-center group">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2 group-hover:text-accent transition-colors">{t('footer.partnered')}</span>
             <span className="text-xl font-black tracking-tighter">AHPC COLLEGE</span>
           </div>
           <div className="w-px h-8 bg-white/10 hidden md:block" />
           <div className="flex flex-col items-center group">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2 group-hover:text-accent transition-colors">{t('footer.network')}</span>
             <span className="text-xl font-black tracking-tighter">ASTANA HUB</span>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} IT HUB AHPC. {t('footer.rights')}
          </p>
          <p className="text-white/40 text-xs flex items-center">
            {t('footer.made_in')} <span className="text-accent mx-1">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
