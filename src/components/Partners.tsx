import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const partners = [
    {
      name: "Partner 1",
      logo: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Partner 2",
      logo: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Partner 3",
      logo: "https://images.pexels.com/photos/2977549/pexels-photo-2977549.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Partner 4",
      logo: "https://images.pexels.com/photos/2977551/pexels-photo-2977551.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-[var(--dark-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t('partners.title')}
          </motion.h2>
        </div>

        <div ref={ref} className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="partners-slider"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="partner-card"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;