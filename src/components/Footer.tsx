import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-audiowide text-white mb-6">Control Pass <span className="text-[var(--primary-color)]">Kft.</span></h3>
            <p className="text-[var(--text-muted)]">
              {t('about.description').substring(0, 120)}...
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="nav-link">{t('navigation.home')}</a></li>
              <li><a href="#services" className="nav-link">{t('navigation.services')}</a></li>
              <li><a href="#projects" className="nav-link">{t('navigation.projects')}</a></li>
              <li><a href="#team" className="nav-link">{t('navigation.team')}</a></li>
              <li><a href="#about" className="nav-link">{t('navigation.about')}</a></li>
              <li><a href="#contact" className="nav-link">{t('navigation.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[var(--accent-color)] mr-2">•</span>
                <span className="text-[var(--text-muted)]">{t('contact.addressValue')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-color)] mr-2">•</span>
                <span className="text-[var(--text-muted)]">{t('contact.phoneValue')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-color)] mr-2">•</span>
                <span className="text-[var(--text-muted)]">{t('contact.emailValue')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="nav-link">{t('footer.privacy')}</a></li>
              <li><a href="#" className="nav-link">{t('footer.terms')}</a></li>
              <li><a href="#" className="nav-link">ÁSZF</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--card-bg)] flex items-center justify-center text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--card-bg)] flex items-center justify-center text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--card-bg)] flex items-center justify-center text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--card-bg)] flex items-center justify-center text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--text-muted)] text-sm">
            &copy; {currentYear} Control Pass Kft. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;