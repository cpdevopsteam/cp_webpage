import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
                    <Dialog.Title className="text-xl font-audiowide text-white">
                      Adatvédelmi irányelvek
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
                    <h2 className="text-lg font-semibold text-white mb-3">1. Bevezetés</h2>
                    <p>
                      A Control Pass Kft. elkötelezett a személyes adatok védelmének biztosítása mellett. 
                      Jelen adatvédelmi irányelvek ismertetik, hogyan gyűjtjük, használjuk és védjük az Ön személyes adatait.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">2. Adatkezelő</h2>
                    <p>
                      Név: Control Pass Kft.<br />
                      Székhely: 7627 Pécs, Vadász utca 83.<br />
                      E-mail: info@controlpass.hu<br />
                      Telefon: +36 70 602 2199
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">3. Kezelt adatok köre</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Kapcsolatfelvételi űrlap: név, e-mail cím, telefonszám, üzenet tartalma</li>
                      <li>Szerződéskötéshez szükséges adatok: cégnév, székhely, adószám, kapcsolattartó adatai</li>
                      <li>Technikai adatok: IP cím, böngésző típusa, látogatás időpontja</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">4. Adatkezelés célja</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Kapcsolatfelvételi kérések kezelése</li>
                      <li>Szerződéses kötelezettségek teljesítése</li>
                      <li>Jogszabályi kötelezettségek teljesítése</li>
                      <li>Szolgáltatásaink fejlesztése</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">5. Adatkezelés időtartama</h2>
                    <p>
                      Az adatokat csak a szükséges ideig tároljuk:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Kapcsolatfelvételi adatok: 1 év</li>
                      <li>Szerződéses adatok: a jogszabályban előírt megőrzési idő</li>
                      <li>Technikai adatok: 30 nap</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">6. Az Ön jogai</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Hozzáférés a személyes adatokhoz</li>
                      <li>Helyesbítés kérése</li>
                      <li>Törlés kérése</li>
                      <li>Az adatkezelés korlátozásának kérése</li>
                      <li>Adathordozhatóság</li>
                      <li>Tiltakozás az adatkezelés ellen</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold text-white mb-3">7. Kapcsolat</h2>
                    <p>
                      Adatvédelemmel kapcsolatos kérdéseivel forduljon hozzánk bizalommal az alábbi elérhetőségeken:<br />
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

export default PrivacyModal;