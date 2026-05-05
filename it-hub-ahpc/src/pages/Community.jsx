import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersect } from '../hooks/useIntersect';

const Community = () => {
  const { t } = useLanguage();
  const [setStatsNode, statsEntry] = useIntersect({ threshold: 0.1 });
  const [setWhoNode, whoEntry] = useIntersect({ threshold: 0.1 });
  const [setEventsNode, eventsEntry] = useIntersect({ threshold: 0.1 });
  const [setTestimonialsNode, testimonialsEntry] = useIntersect({ threshold: 0.1 });

  return (
    <div className="pt-20 font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center font-headings animate-fade-in-down">
            {t('community_page.hero_title')}
          </h1>
        </div>
      </section>

      {/* Community Stats Section */}
      <section ref={setStatsNode} className={`py-20 transition-all duration-700 ${statsEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-headings text-accent">500+</h2>
              <p className="text-gray-400">{t('community_page.stats_members')}</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-headings text-accent">50+</h2>
              <p className="text-gray-400">{t('community_page.stats_mentors')}</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-headings text-accent">20+</h2>
              <p className="text-gray-400">{t('community_page.stats_startups')}</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-headings text-accent">15+</h2>
              <p className="text-gray-400">{t('community_page.stats_partners')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section ref={setWhoNode} className={`py-20 bg-gray-900 transition-all duration-700 ${whoEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headings">{t('community_page.who_we_are_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 font-headings">{t('community_page.developers_title')}</h3>
              <p className="text-gray-400">{t('community_page.developers_desc')}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transform transition-transform duration-500 hover:scale-105 delay-200">
              <h3 className="text-2xl font-bold mb-4 font-headings">{t('community_page.entrepreneurs_title')}</h3>
              <p className="text-gray-400">{t('community_page.entrepreneurs_desc')}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transform transition-transform duration-500 hover:scale-105 delay-300">
              <h3 className="text-2xl font-bold mb-4 font-headings">{t('community_page.students_title')}</h3>
              <p className="text-gray-400">{t('community_page.students_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section ref={setEventsNode} className={`py-20 transition-all duration-700 ${eventsEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headings">{t('community_page.events_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-headings">{t('community_page.event1_title')}</h3>
              <p className="text-gray-400">{t('community_page.event1_desc')}</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-headings">{t('community_page.event2_title')}</h3>
              <p className="text-gray-400">{t('community_page.event2_desc')}</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-headings">{t('community_page.event3_title')}</h3>
              <p className="text-gray-400">{t('community_page.event3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={setTestimonialsNode} className={`py-20 bg-gray-900 transition-all duration-700 ${testimonialsEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headings">{t('community_page.testimonials_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300">"{t('community_page.testimonial1')}"</p>
              <p className="mt-4 font-bold text-accent">{t('community_page.testimonial1_author')}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300">"{t('community_page.testimonial2')}"</p>
              <p className="mt-4 font-bold text-accent">{t('community_page.testimonial2_author')}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300">"{t('community_page.testimonial3')}"</p>
              <p className="mt-4 font-bold text-accent">{t('community_page.testimonial3_author')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
