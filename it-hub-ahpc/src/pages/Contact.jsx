import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Send, Linkedin, Youtube, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = t('form.required_field');
    if (!formData.email.trim()) {
      newErrors.email = t('form.required_field');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('form.invalid_email');
    }
    if (!formData.subject.trim()) newErrors.subject = t('form.required_field');
    if (!formData.message.trim()) {
      newErrors.message = t('form.required_field');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('form.min_length');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors({ ...errors, [id]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 min-h-screen font-sans bg-primary-dark text-white">
      {/* Hero Section */}
      <section className="py-12 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-center font-headings tracking-tightest"
          >
            {t('contact_page.hero_title')}
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-8 font-headings tracking-tight">{t('contact_page.contact_info_title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Address</p>
                      <p className="text-white font-medium leading-relaxed">{t('contact_page.address').replace('📍 Мекен-жайы: ', '').replace('📍 Адрес: ', '').replace('📍 Address: ', '')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:info@ithub-ahpc.kz" className="text-white font-medium hover:text-accent transition-colors">info@ithub-ahpc.kz</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Phone</p>
                      <a href="tel:+77132000000" className="text-white font-medium hover:text-accent transition-colors">+7 (7132) XX-XX-XX</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Working Hours</p>
                      <p className="text-white font-medium leading-relaxed">{t('contact_page.working_hours').replace('🕐 Жұмыс уақыты: ', '').replace('🕐 Часы работы: ', '').replace('🕐 Working hours: ', '')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 font-headings uppercase tracking-widest text-white/40">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Instagram, Send, Linkedin, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-all hover:-translate-y-1">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="card-glass p-8 md:p-12">
                <h2 className="text-3xl font-black mb-8 font-headings tracking-tight">{t('contact_page.form_title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{t('contact_page.form_name')}</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="John Doe"
                        className={`w-full p-4 rounded-xl bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-accent focus:outline-none transition-all`} 
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{t('contact_page.form_email')}</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="john@example.com"
                        className={`w-full p-4 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-accent focus:outline-none transition-all`} 
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{t('contact_page.form_subject')}</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      placeholder="Partnership Inquiry"
                      className={`w-full p-4 rounded-xl bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} focus:border-accent focus:outline-none transition-all`} 
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1 font-medium">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{t('contact_page.form_message')}</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Tell us about your project..."
                      className={`w-full p-4 rounded-xl bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} focus:border-accent focus:outline-none transition-all resize-none`} 
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                  </div>
                  
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-green-500/10 text-green-500 p-4 rounded-xl text-sm font-bold border border-green-500/20">
                        {t('form.success')}
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-red-500/10 text-red-500 p-4 rounded-xl text-sm font-bold border border-red-500/20">
                        {t('form.error')}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={status === 'loading'}
                    className={`w-full bg-accent text-white font-black py-5 px-8 rounded-full hover:shadow-[0_0_30px_rgba(0,87,255,0.4)] transition-all flex items-center justify-center space-x-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t('form.loading')}</span>
                      </>
                    ) : (
                      <span>{t('contact_page.form_button')}</span>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary-dark/30 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 text-center font-headings tracking-tight">
            {t('contact_page.map_placeholder')}
          </h2>
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.237327986914!2d57.18899561507989!3d50.2821329794524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417b1f3b4b5b5b5b%3A0x4b5b5b5b5b5b5b5b!2sAktobe%20Higher%20Polytechnic%20College!5e0!3m2!1sen!2skz!4v1620000000000!5m2!1sen!2skz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="AHPC College Location"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-primary-dark/20 rounded-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
