import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

interface AszfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AszfModal: React.FC<AszfModalProps> = ({ isOpen, onClose }) => {
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
                      Általános Szerződési Feltételek
                    </Dialog.Title>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="bg-[var(--card-bg)] rounded-lg p-6">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left py-3 px-4 text-[var(--accent-light)]">Dokumentum</th>
                        <th className="text-left py-3 px-4 text-[var(--accent-light)]">Hatálybalépés</th>
                        <th className="text-left py-3 px-4 text-[var(--accent-light)]">Hatályvesztés</th>
                        <th className="text-left py-3 px-4 text-[var(--accent-light)]">Verzió</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-700">
                        <td className="py-3 px-4">
                          <a
                            href="/aszf/CP_ASZF_1_0.pdf"
                            download
                            className="btn btn-primary inline-block text-sm"
                          >
                            ÁSZF 1.0 Letöltés
                          </a>
                        </td>
                        <td className="py-3 px-4 text-[var(--text-muted)]">2024-04-01</td>
                        <td className="py-3 px-4 text-[var(--text-muted)]">2025-03-31</td>
                        <td className="py-3 px-4 text-[var(--text-muted)]">1.0</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="py-3 px-4">
                          <a
                            href="/aszf/CP_ASZF_1_1.pdf"
                            download
                            className="btn btn-primary inline-block text-sm"
                          >
                            ÁSZF 1.1 Letöltés
                          </a>
                        </td>
                        <td className="py-3 px-4 text-[var(--text-muted)]">2025-04-01</td>
                        <td className="py-3 px-4 text-[var(--text-muted)]">2026-03-31</td>
                        <td className="py-3 px-4 text-[var(--text-muted)]">1.1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AszfModal;