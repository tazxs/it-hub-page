import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, GraduationCap } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

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

const Community = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen font-sans bg-primary-dark text-white">
      {/* Hero Section */}
      <section className="bg-primary-dark py-32 relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-center font-headings tracking-tightest leading-tight"
          >
            {t('community_page.hero_title')}
          </motion.h1>
        </div>
      </section>

      {/* Community Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-40 bg-secondary-dark/10"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <motion.div variants={fadeUpVariant}>
              <AnimatedCounter from={0} to={500} suffix="+" className="text-6xl md:text-8xl font-black font-headings text-white tracking-tighter block" />
              <p className="text-white/40 mt-4 text-sm font-bold uppercase tracking-[0.2em]">{t('community_page.stats_members')}</p>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <AnimatedCounter from={0} to={50} suffix="+" className="text-6xl md:text-8xl font-black font-headings text-white tracking-tighter block" />
              <p className="text-white/40 mt-4 text-sm font-bold uppercase tracking-[0.2em]">{t('community_page.stats_mentors')}</p>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <AnimatedCounter from={0} to={20} suffix="+" className="text-6xl md:text-8xl font-black font-headings text-white tracking-tighter block" />
              <p className="text-white/40 mt-4 text-sm font-bold uppercase tracking-[0.2em]">{t('community_page.stats_startups')}</p>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <AnimatedCounter from={0} to={15} suffix="+" className="text-6xl md:text-8xl font-black font-headings text-white tracking-tighter block" />
              <p className="text-white/40 mt-4 text-sm font-bold uppercase tracking-[0.2em]">{t('community_page.stats_partners')}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <section className="py-40 bg-primary-dark">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-24 font-headings tracking-tight"
          >
            {t('community_page.who_we_are_title')}
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { title: 'developers_title', desc: 'developers_desc', icon: Code2 },
              { title: 'entrepreneurs_title', desc: 'entrepreneurs_desc', icon: Lightbulb },
              { title: 'students_title', desc: 'students_desc', icon: GraduationCap },
            ].map((item) => (
              <motion.div 
                key={item.title}
                variants={fadeUpVariant}
                className="card-glass group p-12 flex flex-col items-center text-center hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-20 h-20 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,87,255,0.1)] group-hover:scale-110">
                  <item.icon size={40} />
                </div>
                <h3 className="text-3xl font-black mb-6 font-headings tracking-tight group-hover:text-accent transition-colors">{t(`community_page.${item.title}`)}</h3>
                <p className="text-white/50 text-lg leading-relaxed font-medium">{t(`community_page.${item.desc}`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom Spacer Section */}
      <section className="py-20 bg-primary-dark" />
    </div>
  );
};

export default Community;
