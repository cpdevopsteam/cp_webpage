import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, Map } from 'lucide-react';
import OfficeImg from '/assets/IMG_1496.jpeg'
import MapImg from '/assets/cp_webpage_map.png'

const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 blur-sm"
        style={{ 
          backgroundImage: `url(${OfficeImg})`,
          transform: 'scale(1.1)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
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
              src = {MapImg}
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
                  "{t('Világunk folyamatosan változik. A modern elektronikai megoldások kényelmesebbé teszik egy vállalkozás életét. De egy felelős vezető biztonsági szempontból sem köthet kompromisszumot. Ehhez olyan megoldásokra van szükség, melyek védelmet nyújtanak a jövő adatvédelmiés biztonságtechnikai kihívásaival szemben. Csapatunk 2010 óta foglalkozik ipari riasztó és megfigyelőrendszerek kivitelezésével és karbantartásával. Márakomplex telekommunikációs, hálózati, biztonságtechnikaiés energetikai megoldásokat kínálunk. Kezdve a térfigyelőkameráktól, a beléptető rendszereken keresztül egészen az ipari PV erőművek villamos és informatikai hálózatokig.')}"
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