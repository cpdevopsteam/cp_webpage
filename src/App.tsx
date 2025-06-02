import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  
  React.useEffect(() => {
    document.title = i18n.language === 'hu' 
      ? 'Control Pass Kft. | Ipari elektromos és biztonságtechnikai rendszerek' 
      : 'Control Pass Kft. | Industrial Electrical and Security Systems';

    let scrollTimeout: number;
    const handleScroll = () => {
      document.body.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;