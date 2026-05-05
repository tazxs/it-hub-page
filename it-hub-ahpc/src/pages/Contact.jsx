import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center font-headings animate-fade-in-down">
            {t('contact_page.hero_title')}
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-4 font-headings">{t('contact_page.contact_info_title')}</h2>
              <p className="mb-4 text-gray-300">{t('contact_page.address')}</p>
              <p className="mb-4 text-gray-300">{t('contact_page.email')}</p>
              <p className="mb-4 text-gray-300">{t('contact_page.phone')}</p>
              <p className="mb-4 text-gray-300">{t('contact_page.telegram')}</p>
              <p className="text-gray-300">{t('contact_page.working_hours')}</p>
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4 font-headings">{t('contact_page.form_title')}</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-gray-400">{t('contact_page.form_name')}</label>
                  <input type="text" id="name" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-accent focus:outline-none" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-gray-400">{t('contact_page.form_email')}</label>
                  <input type="email" id="email" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-accent focus:outline-none" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 text-gray-400">{t('contact_page.form_subject')}</label>
                  <input type="text" id="subject" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-accent focus:outline-none" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-gray-400">{t('contact_page.form_message')}</label>
                  <textarea id="message" rows="4" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-accent focus:outline-none"></textarea>
                </div>
                <button type="submit" className="bg-accent text-black font-bold py-3 px-6 rounded hover:bg-white transition-colors">
                  {t('contact_page.form_button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-headings">
            {t('contact_page.map_placeholder')}
          </h2>
          <div className="bg-gray-800 h-96 flex items-center justify-center rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.237327986914!2d57.18899561507989!3d50.2821329794524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417b1f3b4b5b5b5b%3A0x4b5b5b5b5b5b5b5b!2sAktobe%20Higher%20Polytechnic%20College!5e0!3m2!1sen!2skz!4v1620000000000!5m2!1sen!2skz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="AHPC College Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
