import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X } from 'lucide-react';
import Cookies from 'js-cookie';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedSettings = JSON.parse(consent);
      setSettings(savedSettings);
    }
  }, []);

  const handleAcceptAll = () => {
    const allSettings = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    saveSettings(allSettings);
  };

  const handleSaveSettings = () => {
    saveSettings(settings);
  };

  const saveSettings = (newSettings: CookieSettings) => {
    Cookies.set('cookie-consent', JSON.stringify(newSettings), { expires: 365 });
    setSettings(newSettings);
    setShowBanner(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {(showBanner || showSettings) && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="bg-[var(--card-bg)] rounded-lg shadow-lg border border-gray-700 p-6">
              {showSettings ? (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{t('cookies.settings')}</h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{t('cookies.necessary')}</h4>
                        <p className="text-sm text-[var(--text-muted)]">
                          {t('cookies.necessaryDescription')}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.necessary}
                        disabled
                        className="h-5 w-5"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{t('cookies.analytics')}</h4>
                        <p className="text-sm text-[var(--text-muted)]">
                          {t('cookies.analyticsDescription')}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.analytics}
                        onChange={(e) =>
                          setSettings({ ...settings, analytics: e.target.checked })
                        }
                        className="h-5 w-5"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{t('cookies.marketing')}</h4>
                        <p className="text-sm text-[var(--text-muted)]">
                          {t('cookies.marketingDescription')}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.marketing}
                        onChange={(e) =>
                          setSettings({ ...settings, marketing: e.target.checked })
                        }
                        className="h-5 w-5"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      onClick={handleSaveSettings}
                      className="btn btn-primary"
                    >
                      {t('cookies.save')}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="mb-4 text-[var(--text-muted)]">
                    {t('cookies.message')}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={handleAcceptAll} className="btn btn-primary">
                      {t('cookies.acceptAll')}
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="btn btn-outline flex items-center gap-2"
                    >
                      <Settings size={16} />
                      {t('cookies.customize')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;