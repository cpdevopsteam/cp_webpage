import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Save, ChevronDown, ChevronUp, Search } from 'lucide-react';

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
  const [searchTerm, setSearchTerm] = useState('');

  const sections: Section[] = [
    {
      id: 'hero',
      name: 'Hero Section',
      fields: [
        { key: 'hero.slide1.title', label: 'Slide 1 Title', type: 'text' },
        { key: 'hero.slide1.subtitle', label: 'Slide 1 Subtitle', type: 'textarea' },
        { key: 'hero.slide2.title', label: 'Slide 2 Title', type: 'text' },
        { key: 'hero.slide2.subtitle', label: 'Slide 2 Subtitle', type: 'textarea' },
        { key: 'hero.slide3.title', label: 'Slide 3 Title', type: 'text' },
        { key: 'hero.slide3.subtitle', label: 'Slide 3 Subtitle', type: 'textarea' },
        { key: 'hero.slide4.title', label: 'Slide 4 Title', type: 'text' },
        { key: 'hero.slide4.subtitle', label: 'Slide 4 Subtitle', type: 'textarea' },
        { key: 'hero.slide5.title', label: 'Slide 5 Title', type: 'text' },
        { key: 'hero.slide5.subtitle', label: 'Slide 5 Subtitle', type: 'textarea' },
        { key: 'hero.cta', label: 'Call to Action Button', type: 'text' }
      ]
    },
    {
      id: 'about',
      name: 'About Section',
      fields: [
        { key: 'about.title', label: 'Section Title', type: 'text' },
        { key: 'about.description', label: 'Description', type: 'textarea' },
        { key: 'about.mission', label: 'Mission', type: 'textarea' },
        { key: 'about.experience', label: 'Experience', type: 'textarea' },
        { key: 'about.monitoring', label: 'Monitoring Text', type: 'textarea' },
        { key: 'about.coverage', label: 'Coverage Text', type: 'textarea' }
      ]
    },
    {
      id: 'services',
      name: 'Services Section',
      fields: [
        { key: 'services.title', label: 'Section Title', type: 'text' },
        { key: 'services.planning.title', label: 'Planning Title', type: 'text' },
        { key: 'services.implementation.title', label: 'Implementation Title', type: 'text' },
        { key: 'services.electrical.title', label: 'Electrical Title', type: 'text' },
        { key: 'services.security.title', label: 'Security Title', type: 'text' },
        { key: 'services.it.title', label: 'IT Title', type: 'text' },
        { key: 'services.commissioning.title', label: 'Commissioning Title', type: 'text' },
        { key: 'services.operations.title', label: 'Operations Title', type: 'text' },
        { key: 'services.monitoring.title', label: 'Monitoring Title', type: 'text' },
        { key: 'services.dataAnalysis.title', label: 'Data Analysis Title', type: 'text' }
      ]
    },
    {
      id: 'team',
      name: 'Team Section',
      fields: [
        { key: 'team.title', label: 'Section Title', type: 'text' },
        { key: 'team.description', label: 'Section Description', type: 'textarea' },
        { key: 'team.members.0.name', label: 'Member 1 Name', type: 'text' },
        { key: 'team.members.0.role', label: 'Member 1 Role', type: 'text' },
        { key: 'team.members.0.quote', label: 'Member 1 Quote', type: 'textarea' },
        { key: 'team.members.1.name', label: 'Member 2 Name', type: 'text' },
        { key: 'team.members.1.role', label: 'Member 2 Role', type: 'text' },
        { key: 'team.members.1.quote', label: 'Member 2 Quote', type: 'textarea' },
        { key: 'team.members.2.name', label: 'Member 3 Name', type: 'text' },
        { key: 'team.members.2.role', label: 'Member 3 Role', type: 'text' },
        { key: 'team.members.2.quote', label: 'Member 3 Quote', type: 'textarea' },
        { key: 'team.members.3.name', label: 'Member 4 Name', type: 'text' },
        { key: 'team.members.3.role', label: 'Member 4 Role', type: 'text' },
        { key: 'team.members.3.quote', label: 'Member 4 Quote', type: 'textarea' }
      ]
    },
    {
      id: 'projects',
      name: 'Projects Section',
      fields: [
        { key: 'projects.title', label: 'Section Title', type: 'text' },
        { key: 'projects.viewProject', label: 'View Project Button', type: 'text' },
        { key: 'projects.items.0.title', label: 'Project 1 Title', type: 'text' },
        { key: 'projects.items.0.description', label: 'Project 1 Description', type: 'textarea' },
        { key: 'projects.items.1.title', label: 'Project 2 Title', type: 'text' },
        { key: 'projects.items.1.description', label: 'Project 2 Description', type: 'textarea' },
        { key: 'projects.items.2.title', label: 'Project 3 Title', type: 'text' },
        { key: 'projects.items.2.description', label: 'Project 3 Description', type: 'textarea' },
        { key: 'projects.items.3.title', label: 'Project 4 Title', type: 'text' },
        { key: 'projects.items.3.description', label: 'Project 4 Description', type: 'textarea' },
        { key: 'projects.items.4.title', label: 'Project 5 Title', type: 'text' },
        { key: 'projects.items.4.description', label: 'Project 5 Description', type: 'textarea' },
        { key: 'projects.items.5.title', label: 'Project 6 Title', type: 'text' },
        { key: 'projects.items.5.description', label: 'Project 6 Description', type: 'textarea' }
      ]
    },
    {
      id: 'contact',
      name: 'Contact Section',
      fields: [
        { key: 'contact.title', label: 'Section Title', type: 'text' },
        { key: 'contact.address', label: 'Address Label', type: 'text' },
        { key: 'contact.addressValue', label: 'Address Value', type: 'text' },
        { key: 'contact.phone', label: 'Phone Label', type: 'text' },
        { key: 'contact.phoneValue', label: 'Phone Value', type: 'textarea' },
        { key: 'contact.email', label: 'Email Label', type: 'text' },
        { key: 'contact.emailValue', label: 'Email Value', type: 'text' },
        { key: 'contact.hours', label: 'Hours Label', type: 'text' },
        { key: 'contact.hoursValue', label: 'Hours Value', type: 'text' },
        { key: 'contact.formName', label: 'Form Name Label', type: 'text' },
        { key: 'contact.formEmail', label: 'Form Email Label', type: 'text' },
        { key: 'contact.formSubject', label: 'Form Subject Label', type: 'text' },
        { key: 'contact.formMessage', label: 'Form Message Label', type: 'text' },
        { key: 'contact.formSubmit', label: 'Form Submit Button', type: 'text' },
        { key: 'contact.formSuccess', label: 'Form Success Message', type: 'textarea' }
      ]
    },
    {
      id: 'footer',
      name: 'Footer Section',
      fields: [
        { key: 'footer.rights', label: 'Rights Text', type: 'text' },
        { key: 'footer.privacy', label: 'Privacy Policy Link', type: 'text' },
        { key: 'footer.terms', label: 'Terms of Service Link', type: 'text' }
      ]
    }
  ];

  const filteredSections = sections.filter(section => {
    const sectionMatch = section.name.toLowerCase().includes(searchTerm.toLowerCase());
    const fieldsMatch = section.fields.some(field => 
      field.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(field.key).toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    return sectionMatch || fieldsMatch;
  });

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

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => i18n.changeLanguage('hu')}
            className={`px-3 py-1 rounded ${
              i18n.language === 'hu'
                ? 'bg-[var(--primary-color)] text-white'
                : 'bg-[#1a1a1a] text-gray-400'
            }`}
          >
            HU
          </button>
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-3 py-1 rounded ${
              i18n.language === 'en'
                ? 'bg-[var(--primary-color)] text-white'
                : 'bg-[#1a1a1a] text-gray-400'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredSections.map((section) => (
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