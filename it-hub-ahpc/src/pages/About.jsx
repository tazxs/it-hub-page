import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersect } from '../hooks/useIntersect';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Users, Award, Shield } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const [setHistoryNode, historyEntry] = useIntersect({ threshold: 0.1 });
  const [setMissionNode, missionEntry] = useIntersect({ threshold: 0.1 });
  const [setTeamNode, teamEntry] = useIntersect({ threshold: 0.1 });
  const [setPartnersNode, partnersEntry] = useIntersect({ threshold: 0.1 });

  return (
    <div className="pt-16 font-sans bg-primary-dark text-white">
      {/* Hero Section */}
      <section className="bg-primary-dark py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-center font-headings tracking-tightest mb-6 leading-tight"
          >
            {t('about_page.hero_title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center text-white/40 text-lg font-medium tracking-widest uppercase"
          >
            {t('about_page.breadcrumb')}
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section ref={setHistoryNode} className={`py-32 transition-all duration-1000 ${historyEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-24 font-headings tracking-tight">{t('about_page.history_title')}</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10" />
            
            {[
              { year: '2023', text: 'history_2023', side: 'left' },
              { year: '2024', text: 'history_2024', side: 'right' },
              { year: '2025', text: 'history_2025', side: 'left' },
              { year: '2026', text: 'history_2026', side: 'right' },
            ].map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between mb-16 w-full ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
                <div className="w-[45%] text-right" style={{ textAlign: item.side === 'right' ? 'left' : 'right' }}>
                  <time className="text-accent font-black text-2xl mb-2 block">{item.year}</time>
                  <div className="text-lg font-bold font-headings text-white/80">{t(`about_page.${item.text}`)}</div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary-dark shadow-[0_0_15px_rgba(0,87,255,0.6)]" />
                <div className="w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section ref={setMissionNode} className={`py-32 bg-secondary-dark/30 transition-all duration-1000 ${missionEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-glass group p-12">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,87,255,0.1)]">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black mb-6 font-headings tracking-tight group-hover:text-accent transition-colors">{t('about_page.mission_title')}</h3>
              <p className="text-white/50 text-lg leading-relaxed font-medium">{t('about_page.mission_desc')}</p>
            </div>
            <div className="card-glass group p-12">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,87,255,0.1)]">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black mb-6 font-headings tracking-tight group-hover:text-accent transition-colors">{t('about_page.vision_title')}</h3>
              <p className="text-white/50 text-lg leading-relaxed font-medium">{t('about_page.vision_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={setTeamNode} className={`py-32 transition-all duration-1000 ${teamEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-24 font-headings tracking-tight">{t('about_page.team_title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { name: 'director', role: 'Director', color: '0057FF' },
              { name: 'cto', role: 'CTO', color: '0057FF' },
              { name: 'manager', role: 'Manager', color: '0057FF' },
              { name: 'coordinator', role: 'Coordinator', color: '0057FF' }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-8 inline-block">
                   <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
                   <img src={`https://ui-avatars.com/api/?name=${member.role}&background=${member.color}&color=fff`} alt={member.role} className="relative w-40 h-40 rounded-full mx-auto shadow-2xl transition-all duration-500 border-4 border-white/5 group-hover:border-accent/40" />
                </div>
                <h4 className="font-bold text-xl font-headings group-hover:text-accent transition-colors uppercase tracking-wider">{t(`about_page.${member.name}`)}</h4>
                <p className="text-white/30 text-sm font-bold mt-2 uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={setPartnersNode} className={`py-32 bg-primary-dark border-t border-white/5 transition-all duration-1000 ${partnersEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-20 font-headings text-white/40 tracking-widest uppercase">{t('about_page.partners_title')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['Astana Hub', 'AHPC', 'Akimat Aktobe', 'EPAM', 'Kolesa Group', 'Kaspi.kz'].map((partner) => (
              <div key={partner} className="text-2xl md:text-4xl font-black tracking-tighter hover:text-accent transition-colors cursor-default">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
