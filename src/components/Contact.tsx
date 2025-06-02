import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import axios from 'axios';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateForm = () => {
    if (!formState.name.trim()) return 'Name is required';
    if (!formState.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) return 'Invalid email format';
    if (!formState.subject.trim()) return 'Subject is required';
    if (!formState.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.post('/api/contact', formState, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-[var(--primary-color)]" aria-hidden="true" />,
      title: t('contact.address'),
      value: t('contact.addressValue')
    },
    {
      icon: <Phone className="text-[var(--primary-color)]\" aria-hidden="true" />,
      title: t('contact.phone'),
      value: t('contact.phoneValue').split('\n').map((line, i) => (
        <div key={i}>{line}</div>
      ))
    },
    {
      icon: <Mail className="text-[var(--primary-color)]" aria-hidden="true" />,
      title: t('contact.email'),
      value: t('contact.emailValue')
    },
    {
      icon: <Clock className="text-[var(--primary-color)]\" aria-hidden="true" />,
      title: t('contact.hours'),
      value: t('contact.hoursValue')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--dark-bg)]" aria-label="Contact section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t('contact.title')}
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] flex items-center justify-center mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{info.title}</h3>
                    <div className="text-[var(--text-muted)]">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.900603038391!2d18.24183847692349!3d46.07655509797576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b19b933a7c2d%3A0xb3b8a26f5a2c5e9a!2zUMOpY3MsIFZhZMOhc3ogdS4gODMsIDc2Mjc!5e1!3m2!1shu!2shu!4v1710835847099!5m2!1shu!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[var(--card-bg)] rounded-lg p-8 border border-gray-800"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                  <Send className="text-green-500\" size={24} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{t('contact.formSuccess')}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-md text-red-500">
                    {error}
                  </div>
                )}
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    {t('contact.formName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-white focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:outline-none"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    {t('contact.formEmail')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-white focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:outline-none"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    {t('contact.formSubject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-white focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:outline-none"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    {t('contact.formMessage')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 bg-[#1a1a1a] border border-gray-700 rounded-md text-white focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:outline-none"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn btn-primary flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      {t('contact.formSubmit')}
                      <Send size={16} aria-hidden="true" />
                    </div>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;