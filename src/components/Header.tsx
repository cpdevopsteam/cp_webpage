import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-transparent.png';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { id: 'home', label: t('navigation.home'), href: '#hero' },
    { id: 'services', label: t('navigation.services'), href: '#services' },
    { id: 'about', label: t('navigation.about'), href: '#about' },
    { id: 'team', label: t('navigation.team'), href: '#team' },
    { id: 'projects', label: t('navigation.projects'), href: '#projects' },
    { id: 'contact', label: t('navigation.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled ? 'bg-[#0a0a0a]/90 shadow-lg' : 'bg-[#0a0a0a]/50'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <img src={logo} alt="Control Pass Logo" className="w-10 h-10" />
              <span className="text-2xl md:text-3xl font-audiowide text-white logo-title">
                Control Pass
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
            <a href="http://10.1.1.196/login" rel="noopener noreferrer" className="btn-login">
              <LogIn size={16} />
              {t('navigation.login')}
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-sm shadow-xl"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="nav-link py-2 border-b border-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="btn-login self-start mt-4">
                  <LogIn size={16} />
                  {t('navigation.login')}
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;