import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersect } from '../hooks/useIntersect';

const Programs = () => {
  const { t } = useLanguage();
  const [setNode, entry] = useIntersect({ threshold: 0.1 });

  const programs = [
    { icon: '🎓', title: 'bootcamp_title', duration: 'bootcamp_duration', desc: 'bootcamp_desc' },
    { icon: '🚀', title: 'accelerator_title', duration: 'accelerator_duration', desc: 'accelerator_desc' },
    { icon: '💻', title: 'devlab_title', duration: 'devlab_duration', desc: 'devlab_desc' },
    { icon: '🏆', title: 'hackathon_title', duration: 'hackathon_duration', desc: 'hackathon_desc' },
    { icon: '🤝', title: 'mentor_title', duration: 'mentor_duration', desc: 'mentor_desc' },
    { icon: '📊', title: 'data_ai_title', duration: 'data_ai_duration', desc: 'data_ai_desc' },
  ];

  return (
    <div className="pt-20 font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center font-headings animate-fade-in-down">
            {t('programs_page.hero_title')}
          </h1>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={setNode} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`bg-gray-800 p-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-gray-700 ${entry.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-2 font-headings">{program.icon} {t(`programs_page.${program.title}`)}</h3>
                <p className="text-sm text-gray-400 mb-4">{t(`programs_page.${program.duration}`)}</p>
                <p className="text-gray-300">{t(`programs_page.${program.desc}`)}</p>
                <button className="mt-4 bg-accent text-black font-bold py-2 px-4 rounded hover:bg-white transition-colors">
                  {t('programs_page.details_button')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
