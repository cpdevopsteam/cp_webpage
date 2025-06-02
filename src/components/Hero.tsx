import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      image: '/images/hero/IMG_4202.jpg'
    },
    {
      id: 3,
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      image: '/images/hero/IMG_4977.jpeg'
    },
    {
      id: 4,
      title: t('hero.slide4.title'),
      subtitle: t('hero.slide4.subtitle'),
      image: '/images/hero/1.png'
    },
    {
      id: 5,
      title: t('hero.slide5.title'),
      subtitle: t('hero.slide5.subtitle'),
      image: '/images/hero/IMG_1485.jpg'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <div 
                className="parallax-bg"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: `translateY(${scrollY * 0.5}px)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-70" />
              <div className="absolute inset-0 flex items-center">
                <div className="hero-content">
                  <div className="hero-text">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-3xl md:text-4xl mb-4 text-[var(--accent-light)]"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-xl md:text-2xl mb-8 max-w-2xl"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      href="#services"
                      className="btn btn-primary"
                    >
                      {t('hero.cta')}
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      >
        <a href="#services" className="text-white">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;