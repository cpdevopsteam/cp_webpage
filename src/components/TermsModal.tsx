import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-[var(--dark-bg)] p-6 shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <img src="/aszf/logo-transparent.png" alt="Logo" className="w-12 h-12" />
                    <Dialog.Title className="text-xl text-white">
                      Felhasználási feltételek
                    </Dialog.Title>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="bg-[var(--card-bg)] rounded-lg p-6 space-y-6 text-[var(--text-muted)]">
                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">1. Általános rendelkezések</h2>
                    <p>
                      A Control Pass Kft. weboldala (továbbiakban: Weboldal) használatával Ön elfogadja 
                      jelen felhasználási feltételeket. Kérjük, hogy csak akkor használja weboldalunkat, 
                      ha egyetért a feltételekkel.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">2. Szellemi tulajdon</h2>
                    <p>
                      A weboldalon található minden tartalom (szöveg, kép, grafika, logó, stb.) 
                      a Control Pass Kft. szellemi tulajdonát képezi. Ezek felhasználása, másolása 
                      csak előzetes írásbeli engedéllyel lehetséges.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">3. Felelősség korlátozása</h2>
                    <p>
                      A weboldalon található információkat gondosan állítottuk össze, azonban nem 
                      vállalunk felelősséget az esetleges pontatlanságokért vagy hiányosságokért.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">4. Szolgáltatások</h2>
                    <p>
                      Szolgáltatásaink részletes feltételeit az Általános Szerződési Feltételek 
                      tartalmazzák. A szolgáltatások igénybevételével Ön elfogadja az ÁSZF-ben 
                      foglaltakat.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">5. Adatvédelem</h2>
                    <p>
                      A személyes adatok kezelésével kapcsolatos információkat az Adatvédelmi 
                      irányelvek tartalmazzák.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">6. Cookie-k használata</h2>
                    <p>
                      Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében. 
                      A weboldal használatával Ön elfogadja a cookie-k használatát.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">7. Módosítások</h2>
                    <p>
                      Fenntartjuk a jogot a felhasználási feltételek módosítására. A módosításokról 
                      a weboldalon tájékoztatjuk a felhasználókat.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">8. Kapcsolat</h2>
                    <p>
                      Ha kérdése van a felhasználási feltételekkel kapcsolatban, keressen minket:<br />
                      E-mail: info@controlpass.hu<br />
                      Telefon: +36 70 602 2199
                    </p>
                  </section>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TermsModal;