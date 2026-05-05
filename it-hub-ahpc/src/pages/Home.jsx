import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersect } from '../hooks/useIntersect';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  const [setNode, entry] = useIntersect({
    threshold: 0.1,
  });

  const [setStatsNode, statsEntry] = useIntersect({
    threshold: 0.5,
  });

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-gradient-xy"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-headings text-white animate-fade-in-down">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up">
            {t('hero.subtitle')}
          </p>
          <div className="animate-fade-in-up animation-delay-500">
            <Link to="/about" className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded mr-4 hover:bg-white hover:text-black transition-colors">
              {t('hero.btn1')}
            </Link>
            <Link to="/programs" className="bg-accent text-black font-bold py-3 px-6 rounded hover:bg-white transition-colors">
              {t('hero.btn2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={setStatsNode} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className={`transition-all duration-500 ${statsEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-6xl font-bold font-headings text-accent">500+</h2>
              <p className="text-gray-400">{t('stats.students')}</p>
            </div>
            <div className={`transition-all duration-500 delay-200 ${statsEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-6xl font-bold font-headings text-accent">20+</h2>
              <p className="text-gray-400">{t('stats.startups')}</p>
            </div>
            <div className={`transition-all duration-500 delay-300 ${statsEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-6xl font-bold font-headings text-accent">15+</h2>
              <p className="text-gray-400">{t('stats.partners')}</p>
            </div>
            <div className={`transition-all duration-500 delay-500 ${statsEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-6xl font-bold font-headings text-accent">3</h2>
              <p className="text-gray-400">{t('stats.programs')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section ref={setNode} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-headings text-white">{t('offer.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🖥️', title: 'coworking', desc: 'coworking_desc' },
              { icon: '🚀', title: 'accelerator', desc: 'accelerator_desc' },
              { icon: '🎓', title: 'education', desc: 'education_desc' },
              { icon: '🤝', title: 'networking', desc: 'networking_desc' },
              { icon: '💡', title: 'hackathons', desc: 'hackathons_desc' },
              { icon: '🏢', title: 'partners', desc: 'partners_desc' },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`bg-gray-800 p-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-gray-700 ${
                  entry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4 font-headings text-white">{item.icon} {t(`offer.${item.title}`)}</h3>
                <p className="text-gray-400">{t(`offer.${item.desc}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why IT HUB AHPC Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-8 font-headings text-white">{t('why.title')}</h2>
              <ul className="space-y-4 text-gray-300">
                <li>✅ {t('why.point1')}</li>
                <li>✅ {t('why.point2')}</li>
                <li>✅ {t('why.point3')}</li>
                <li>✅ {t('why.point4')}</li>
              </ul>
            </div>
            <div className="animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
                alt="Tech office"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Latest News Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-headings text-white">{t('news.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
                alt="News 1"
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 font-headings text-white">{t('news.news1_title')}</h3>
              <p className="text-gray-400">{t('news.news1_desc')}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transform transition-transform duration-500 hover:scale-105 delay-200">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="News 2"
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 font-headings text-white">{t('news.news2_title')}</h3>
              <p className="text-gray-400">{t('news.news2_desc')}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transform transition-transform duration-500 hover:scale-105 delay-300">
              <img
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=800"
                alt="News 3"
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 font-headings text-white">{t('news.news3_title')}</h3>
              <p className="text-gray-400">{t('news.news3_desc')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Banner Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-accent text-black p-12 rounded-lg transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-4xl font-bold mb-4 font-headings">{t('cta.title')}</h2>
            <Link to="/contact" className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-gray-800 transition-colors">
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
