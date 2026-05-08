import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, GraduationCap, Rocket, Monitor, Trophy, Users, Brain, X, Calendar, Target, BookOpen } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none group"
      >
        <span className={`text-xl font-bold font-headings transition-colors ${isOpen ? 'text-accent' : 'text-white/80 group-hover:text-white'}`}>{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-white/20'}`}>
          <ChevronDown size={24} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/50 mt-4 leading-relaxed font-medium">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProgramModal = ({ program, isOpen, onClose, t }) => {
  if (!program) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary-dark/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-secondary-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">
              <div className="w-full md:w-2/5 p-8 md:p-12 bg-accent/5 border-b md:border-b-0 md:border-r border-white/5">
                <div className="w-20 h-20 rounded-3xl bg-accent/20 flex items-center justify-center text-accent mb-8">
                  <program.icon size={40} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black font-headings mb-4 leading-tight">{t(`programs_page.${program.key}_title`)}</h2>
                <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold uppercase tracking-widest mb-8">
                  {program.category}
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-accent"><Calendar size={20} /></div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{t('programs_page.modal.deadline')}</p>
                      <p className="text-white font-bold">{t(`programs_page.${program.key}_deadline`)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-accent"><Target size={20} /></div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{t('programs_page.modal.audience')}</p>
                      <p className="text-white font-bold">{t(`programs_page.${program.key}_audience`)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 md:overflow-y-auto">
                <div className="space-y-12">
                  <section>
                    <h3 className="flex items-center space-x-3 text-lg font-bold font-headings uppercase tracking-widest text-white/40 mb-6">
                      <BookOpen size={18} className="text-accent" />
                      <span>{t('programs_page.modal.syllabus')}</span>
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed">{t(`programs_page.${program.key}_syllabus`)}</p>
                  </section>
                  
                  <section>
                    <h3 className="flex items-center space-x-3 text-lg font-bold font-headings uppercase tracking-widest text-white/40 mb-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{t('about_page.mission_title')}</span>
                    </h3>
                    <p className="text-white/50 leading-relaxed">{t(`programs_page.${program.key}_desc`)}</p>
                  </section>

                  <button className="w-full bg-accent text-white font-black py-5 px-10 rounded-2xl hover:shadow-[0_0_30px_rgba(0,87,255,0.4)] transition-all active:scale-95 text-xl">
                    {t('programs_page.modal.apply_now')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Programs = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const staticPrograms = [
    { id: 1, key: 'bootcamp', category: 'education', icon: GraduationCap },
    { id: 2, key: 'accelerator', category: 'startups', icon: Rocket },
    { id: 3, key: 'devlab', category: 'events', icon: Monitor },
    { id: 4, key: 'hackathon', category: 'events', icon: Trophy },
    { id: 5, key: 'mentor', category: 'education', icon: Users },
    { id: 6, key: 'data_ai', category: 'education', icon: Brain },
  ];

  const tabs = ['all', 'education', 'startups', 'events'];
  
  const filteredPrograms = activeTab === 'all' 
    ? staticPrograms 
    : staticPrograms.filter(p => p.category === activeTab);

  const openModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-24 font-sans bg-primary-dark text-white min-h-screen">
      <ProgramModal 
        program={selectedProgram} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        t={t} 
      />

      {/* Hero Section */}
      <section className="bg-primary-dark py-20 relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-center font-headings tracking-tightest leading-tight"
          >
            {t('programs_page.hero_title')}
          </motion.h1>
        </div>
      </section>

      {/* Programs & Filters Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-8 rounded-full font-bold transition-all duration-300 text-sm uppercase tracking-widest ${
                  activeTab === tab 
                  ? 'bg-accent text-white shadow-[0_0_20px_rgba(0,87,255,0.4)]' 
                  : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {t(`programs_page.tabs_${tab}`)}
              </button>
            ))}
          </motion.div>

          {/* Programs Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((program) => (
                <motion.div
                  layout
                  key={program.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="card-glass group flex flex-col h-full hover:bg-white/[0.03] transition-colors p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,87,255,0.1)]">
                    <program.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black mb-2 font-headings group-hover:text-accent transition-colors leading-tight">
                    {t(`programs_page.${program.key}_title`)}
                  </h3>
                  <p className="text-accent/60 text-xs font-bold uppercase tracking-widest mb-4">
                    {t(`programs_page.${program.key}_duration`)}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                    {t(`programs_page.${program.key}_desc`)}
                  </p>
                  <button 
                    onClick={() => openModal(program)}
                    className="w-full bg-white/5 border border-white/10 text-white font-bold py-4 px-6 rounded-xl hover:bg-accent hover:border-accent transition-all duration-300 active:scale-95 group/btn flex items-center justify-center space-x-2"
                  >
                    <span>{t('programs_page.details_button')}</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary-dark/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16 font-headings tracking-tight"
          >
            {t('programs_page.faq_title')}
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-2"
          >
            {[1, 2, 3, 4].map((num) => (
              <motion.div key={num} variants={fadeUpVariant}>
                <FAQItem 
                  question={t(`programs_page.faq_q${num}`)} 
                  answer={t(`programs_page.faq_a${num}`)} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default Programs;
