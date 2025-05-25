import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { LayoutIcon as LayoutPlanIcon, Hammer, Zap, Shield, ServerIcon, Terminal, Building2, ActivityIcon, LineChart } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const serviceCategories = [
    {
      id: 'planning',
      icon: <LayoutPlanIcon className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.planning.title'),
      items: t('services.planning.items', { returnObjects: true }) as string[]
    },
    {
      id: 'implementation',
      icon: <Hammer className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.implementation.title'),
      items: t('services.implementation.items', { returnObjects: true }) as string[]
    },
    {
      id: 'electrical',
      icon: <Zap className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.electrical.title'),
      items: t('services.electrical.items', { returnObjects: true }) as string[]
    },
    {
      id: 'security',
      icon: <Shield className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.security.title'),
      items: t('services.security.items', { returnObjects: true }) as string[]
    },
    {
      id: 'it',
      icon: <ServerIcon className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.it.title'),
      items: t('services.it.items', { returnObjects: true }) as string[]
    },
    {
      id: 'commissioning',
      icon: <Terminal className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.commissioning.title'),
      items: t('services.commissioning.items', { returnObjects: true }) as string[]
    },
    {
      id: 'operations',
      icon: <Building2 className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.operations.title'),
      items: t('services.operations.items', { returnObjects: true }) as string[]
    },
    {
      id: 'monitoring',
      icon: <ActivityIcon className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.monitoring.title'),
      items: t('services.monitoring.items', { returnObjects: true }) as string[]
    },
    {
      id: 'dataAnalysis',
      icon: <LineChart className="w-10 h-10 text-[var(--primary-color)]" />,
      title: t('services.dataAnalysis.title'),
      items: t('services.dataAnalysis.items', { returnObjects: true }) as string[]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-[var(--dark-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t('services.title')}
          </motion.h2>
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="service-card"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
              </div>
              <ul className="space-y-2 text-[var(--text-muted)]">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[var(--primary-color)] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;