import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Rocket, GraduationCap, Users, Lightbulb, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
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

const Home = () => {
  const { t } = useLanguage();

  const offers = [
    { icon: Monitor, title: 'coworking', desc: 'coworking_desc' },
    { icon: Rocket, title: 'accelerator', desc: 'accelerator_desc' },
    { icon: GraduationCap, title: 'education', desc: 'education_desc' },
    { icon: Users, title: 'networking', desc: 'networking_desc' },
    { icon: Lightbulb, title: 'hackathons', desc: 'hackathons_desc' },
    { icon: Building2, title: 'partners', desc: 'partners_desc' },
  ];

  return (
    <div className="font-sans text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#0a0e17] to-[#05070a] animate-gradient-xy"></div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black mb-6 font-headings tracking-tightest leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-white/60 max-w-3xl mx-auto font-medium"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link to="/about" className="w-full md:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-bold hover:bg-white/10 transition-all active:scale-95">
              {t('hero.btn1')}
            </Link>
            <Link to="/programs" className="w-full md:w-auto px-8 py-4 rounded-full bg-accent text-white font-bold hover:shadow-[0_0_30px_rgba(0,87,255,0.5)] transition-all active:scale-95">
              {t('hero.btn2')}
            </Link>
          </motion.div>
        </div>
        
        {/* Animated Scroll Down Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-32 bg-primary-dark border-y border-white/5"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <motion.div variants={fadeUpVariant}>
              <AnimatedCounter from={0} to={500} suffix="+" className="text-5xl md:text-7xl font-black font-headings text-white tracking-tighter block" />
              <p className="text-white/40 mt-3 text-sm font-bold uppercase tracking-widest">{t('stats.students')}</p>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <AnimatedCounter from={0} to={20} suffix="+" className="text-5xl md:text-7xl font-black font-headings text-white tracking-tighter block" />
              <p className="text-white/40 mt-3 text-sm font-bold uppercase tracking-widest">{t('stats.startups')}</p>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <AnimatedCounter from={0} to={15} suffix="+" className="text-5xl md:text-7xl font-black font-headings text-white tracking-tighter block" />
              <p className="text-white/40 mt-3 text-sm font-bold uppercase tracking-widest">{t('stats.partners')}</p>
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <AnimatedCounter from={0} to={3} suffix="+" className="text-5xl md:text-7xl font-black font-headings text-white tracking-tighter block" />
              <p className="text-white/40 mt-3 text-sm font-bold uppercase tracking-widest">{t('stats.programs')}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Offer Section */}
      <section className="py-24 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-headings tracking-tight">
              {t('offer.title')}
            </h2>
            <p className="text-white/60 text-lg font-medium">
              {t('offer.subtitle')}
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offers.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpVariant}
                className="card-glass group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,87,255,0.1)]">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-headings text-white group-hover:text-accent transition-colors">
                  {t(`offer.${item.title}`)}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{t(`offer.${item.desc}`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why IT HUB AHPC Section */}
      <section className="py-24 bg-secondary-dark/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 font-headings text-white tracking-tight">{t('why.title')}</h2>
              <ul className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-white/70 font-medium leading-relaxed">{t(`why.point${i}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
                alt="Tech office"
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 font-headings tracking-tight">
                {t('news.title')}
              </h2>
              <p className="text-white/60 text-lg font-medium">
                {t('news.subtitle')}
              </p>
            </div>
            <Link to="/community" className="group text-accent font-bold flex items-center space-x-2">
              <span>{t('news.view_all')}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800", title: "news1_title", desc: "news1_desc" },
              { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", title: "news2_title", desc: "news2_desc" },
              { img: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800", title: "news3_title", desc: "news3_desc" }
            ].map((news, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                className="bg-secondary-dark border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all group"
              >
                <div className="overflow-hidden h-52">
                  <img src={news.img} alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 font-headings text-white group-hover:text-accent transition-colors leading-tight">
                    {t(`news.${news.title}`)}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{t(`news.${news.desc}`)}</p>
                  <button className="mt-6 text-sm font-bold text-white/40 group-hover:text-white transition-colors flex items-center space-x-2">
                    <span>{t('news.read_more')}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-24 bg-primary-dark">
        <div className="container mx-auto px-6 pb-24">
          <motion.div 
            id="contact-form"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-accent rounded-3xl p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8 font-headings text-white tracking-tight">{t('cta.title')}</h2>
              <Link to="/contact" className="bg-white text-accent font-black py-5 px-10 rounded-full hover:shadow-2xl transition-all hover:scale-105 active:scale-95 inline-block text-lg">
                {t('cta.button')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
