import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const partners = [
    {
      name: "Partner 1",
      logo: "/pictures/partner1.jpg"
    },
    {
      name: "Partner 2",
      logo: "/pictures/partner2.jpg"
    },
    {
      name: "Partner 3",
      logo: "/pictures/partner3.jpg"
    },
    {
      name: "Partner 4",
      logo: "/pictures/partner4.jpg"
    },
    {
      name: "Partner 5",
      logo: "/pictures/partner5.jpg"
    },
    {
      name: "Partner 6",
      logo: "/pictures/partner6.jpg"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-[var(--dark-bg)]" aria-label="Partners section">
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

        <div ref={ref} className="relative partners-container">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.swiper-pagination',
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
                    alt={`${partner.name} logo`}
                    className="w-full h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev" aria-label="Previous slide" />
          <div className="swiper-button-next" aria-label="Next slide" />
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
};

export default Partners;