import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersect } from '../hooks/useIntersect';

const About = () => {
  const { t } = useLanguage();

  const [setHistoryNode, historyEntry] = useIntersect({ threshold: 0.1 });
  const [setMissionNode, missionEntry] = useIntersect({ threshold: 0.1 });
  const [setTeamNode, teamEntry] = useIntersect({ threshold: 0.1 });
  const [setPartnersNode, partnersEntry] = useIntersect({ threshold: 0.1 });

  return (
    <div className="pt-20 font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center font-headings animate-fade-in-down">
            {t('about_page.hero_title')}
          </h1>
          <p className="text-center mt-4 text-gray-400 animate-fade-in-up">{t('about_page.breadcrumb')}</p>
        </div>
      </section>

      {/* History Section */}
      <section ref={setHistoryNode} className={`py-20 transition-all duration-700 ${historyEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headings">{t('about_page.history_title')}</h2>
          <div className="flex justify-center">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic text-gray-400">2023</time>
                  <div className="text-lg font-black font-headings">{t('about_page.history_2023')}</div>
                </div>
                <hr className="bg-accent"/>
              </li>
              <li>
                <hr className="bg-accent"/>
                <div className="timeline-middle text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic text-gray-400">2024</time>
                  <div className="text-lg font-black font-headings">{t('about_page.history_2024')}</div>
                </div>
                <hr className="bg-accent"/>
              </li>
              <li>
                <hr className="bg-accent"/>
                <div className="timeline-middle text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic text-gray-400">2025</time>
                  <div className="text-lg font-black font-headings">{t('about_page.history_2025')}</div>
                </div>
                <hr className="bg-accent"/>
              </li>
              <li>
                <hr className="bg-accent"/>
                <div className="timeline-middle text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic text-gray-400">2026</time>
                  <div className="text-lg font-black font-headings">{t('about_page.history_2026')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section ref={setMissionNode} className={`py-20 bg-gray-900 transition-all duration-700 ${missionEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 font-headings">{t('about_page.mission_title')}</h3>
              <p className="text-gray-400">{t('about_page.mission_desc')}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transform transition-transform duration-500 hover:scale-105 delay-200">
              <h3 className="text-2xl font-bold mb-4 font-headings">{t('about_page.vision_title')}</h3>
              <p className="text-gray-400">{t('about_page.vision_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={setTeamNode} className={`py-20 transition-all duration-700 ${teamEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headings">{t('about_page.team_title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform transition-transform duration-500 hover:scale-110">
              <img src="https://ui-avatars.com/api/?name=Director&background=00D4FF&color=fff" alt="Director" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h4 className="font-bold text-lg font-headings">{t('about_page.director')}</h4>
            </div>
            <div className="text-center transform transition-transform duration-500 hover:scale-110 delay-200">
              <img src="https://ui-avatars.com/api/?name=CTO&background=00D4FF&color=fff" alt="CTO" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h4 className="font-bold text-lg font-headings">{t('about_page.cto')}</h4>
            </div>
            <div className="text-center transform transition-transform duration-500 hover:scale-110 delay-300">
              <img src="https://ui-avatars.com/api/?name=Manager&background=00D4FF&color=fff" alt="Manager" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h4 className="font-bold text-lg font-headings">{t('about_page.manager')}</h4>
            </div>
            <div className="text-center transform transition-transform duration-500 hover:scale-110 delay-500">
              <img src="https://ui-avatars.com/api/?name=Coordinator&background=00D4FF&color=fff" alt="Coordinator" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h4 className="font-bold text-lg font-headings">{t('about_page.coordinator')}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={setPartnersNode} className={`py-20 bg-gray-900 transition-all duration-700 ${partnersEntry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headings">{t('about_page.partners_title')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="text-2xl font-bold filter grayscale hover:grayscale-0 transition-all">Kolesa Group</div>
            <div className="text-2xl font-bold filter grayscale hover:grayscale-0 transition-all">Kaspi</div>
            <div className="text-2xl font-bold filter grayscale hover:grayscale-0 transition-all">EPAM</div>
            <div className="text-2xl font-bold filter grayscale hover:grayscale-0 transition-all">Jusan</div>
            <div className="text-2xl font-bold filter grayscale hover:grayscale-0 transition-all">Beeline Kazakhstan</div>
            <div className="text-2xl font-bold filter grayscale hover:grayscale-0 transition-all">AHPC College</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
