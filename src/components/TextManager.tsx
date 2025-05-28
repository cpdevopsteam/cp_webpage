import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Save, ChevronDown, ChevronUp } from 'lucide-react';

interface Section {
  id: string;
  name: string;
  fields: {
    key: string;
    label: string;
    type: 'text' | 'textarea';
  }[];
}

const TextManager: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const sections: Section[] = [
    {
      id: 'hero',
      name: 'Hero Section',
      fields: [
        { key: 'hero.slide1.title', label: 'Slide 1 Title', type: 'text' },
        { key: 'hero.slide1.subtitle', label: 'Slide 1 Subtitle', type: 'textarea' },
        { key: 'hero.slide2.title', label: 'Slide 2 Title', type: 'text' },
        { key: 'hero.slide2.subtitle', label: 'Slide 2 Subtitle', type: 'textarea' }
      ]
    },
    {
      id: 'about',
      name: 'About Section',
      fields: [
        { key: 'about.description', label: 'Description', type: 'textarea' },
        { key: 'about.mission', label: 'Mission', type: 'textarea' },
        { key: 'about.experience', label: 'Experience', type: 'textarea' }
      ]
    }
  ];

  const handleSave = () => {
    // Here you would implement the actual save logic
    console.log('Saving changes...');
    setIsDirty(false);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Text Management</h2>
          <p className="text-gray-400 mt-1">Edit website content and translations</p>
        </div>
        <button
          onClick={handleSave}
          disabled={!isDirty}
          className={`btn btn-primary flex items-center gap-2 ${
            !isDirty ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Save size={16} />
          Save Changes
        </button>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="bg-[#1a1a1a] rounded-lg border border-gray-800">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <h3 className="text-lg font-medium text-white">{section.name}</h3>
              {expandedSection === section.id ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </button>

            {expandedSection === section.id && (
              <div className="px-6 pb-6 space-y-4">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        defaultValue={t(field.key)}
                        onChange={() => setIsDirty(true)}
                        rows={4}
                        className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                      />
                    ) : (
                      <input
                        type="text"
                        defaultValue={t(field.key)}
                        onChange={() => setIsDirty(true)}
                        className="w-full px-3 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextManager;