import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Photo01 from '../assets/01.png';
import Photo02 from '../assets/02.jpeg';
import Photo02b from '../assets/02 (1).jpeg';
import PhotoIMG from '../assets/IMG_0591.jpeg';


const Team: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const teamMembers = t('team.members', { returnObjects: true }) as {
    name: string;
    role: string;
    email: string;
  }[];

const teamPhotos = [
  PhotoIMG,
  Photo01,
  Photo02,
  Photo02b,
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
    <section id="team" className="py-20 bg-[var(--dark-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t('team.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-[var(--text-muted)]"
          >
            {t('team.description')}
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="team-card"
            >
              <div className="mb-4 h-64 overflow-hidden rounded-lg">
                <img 
                  src={teamPhotos[index % teamPhotos.length]} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[var(--primary-color)] mb-3">{member.role}</p>
              <div className="relative p-4 bg-[#0a0a0a] rounded-lg mt-4">
                <p className="text-sm text-[var(--text-muted)] text-center">{member.email}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;