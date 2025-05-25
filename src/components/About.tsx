import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, Map } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t('about.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Control Pass Facilities"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center mb-4">
              <CalendarDays className="text-[var(--primary-color)] mr-3" />
              <h3 className="text-xl font-medium">{t('about.founded')}</h3>
            </div>
            <p className="text-[var(--text-muted)] mb-6">{t('about.description')}</p>
            <p className="text-[var(--text-muted)] mb-6">{t('about.mission')}</p>
            <p className="text-[var(--text-muted)] mb-6">{t('about.experience')}</p>
            <p className="text-[var(--text-muted)] mb-6">{t('about.monitoring')}</p>

            <div className="mt-8 flex items-center">
              <Map className="text-[var(--primary-color)] mr-3" />
              <p className="text-[var(--text-muted)]">{t('about.coverage')}</p>
            </div>
            
            <div className="mt-8">
              <div className="p-4 bg-[var(--card-bg)] rounded-lg border border-gray-800">
                <blockquote className="italic text-[var(--text-muted)]">
                  "{t('team.members.0.quote')}"
                </blockquote>
                <div className="mt-2 text-right">
                  <p className="font-semibold">{t('team.members.0.name')}</p>
                  <p className="text-sm text-[var(--primary-color)]">{t('team.members.0.role')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;