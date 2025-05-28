import React, { useState } from 'react';
import { Upload, Trash2, RefreshCw } from 'lucide-react';

interface ImageSection {
  id: string;
  name: string;
  currentImage: string;
}

const ImageManager: React.FC = () => {
  const [sections] = useState<ImageSection[]>([
    {
      id: 'hero1',
      name: 'Hero Slide 1',
      currentImage: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg'
    },
    {
      id: 'hero2',
      name: 'Hero Slide 2',
      currentImage: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg'
    },
    {
      id: 'hero3',
      name: 'Hero Slide 3',
      currentImage: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg'
    },
    {
      id: 'hero4',
      name: 'Hero Slide 4',
      currentImage: 'https://images.pexels.com/photos/6968434/pexels-photo-6968434.jpeg'
    },
    {
      id: 'hero5',
      name: 'Hero Slide 5',
      currentImage: 'https://images.pexels.com/photos/8294618/pexels-photo-8294618.jpeg'
    },
    {
      id: 'about',
      name: 'About Section Background',
      currentImage: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg'
    },
    {
      id: 'aboutTeam',
      name: 'About Team Image',
      currentImage: 'https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg'
    },
    {
      id: 'projectsBg',
      name: 'Projects Background',
      currentImage: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg'
    },
    {
      id: 'partner1',
      name: 'Partner 1',
      currentImage: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg'
    },
    {
      id: 'partner2',
      name: 'Partner 2',
      currentImage: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg'
    },
    {
      id: 'partner3',
      name: 'Partner 3',
      currentImage: 'https://images.pexels.com/photos/2977549/pexels-photo-2977549.jpeg'
    },
    {
      id: 'partner4',
      name: 'Partner 4',
      currentImage: 'https://images.pexels.com/photos/2977551/pexels-photo-2977551.jpeg'
    },
    {
      id: 'partner5',
      name: 'Partner 5',
      currentImage: 'https://images.pexels.com/photos/2977553/pexels-photo-2977553.jpeg'
    },
    {
      id: 'partner6',
      name: 'Partner 6',
      currentImage: 'https://images.pexels.com/photos/2977555/pexels-photo-2977555.jpeg'
    },
    {
      id: 'team1',
      name: 'Team Member 1',
      currentImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      id: 'team2',
      name: 'Team Member 2',
      currentImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
    },
    {
      id: 'team3',
      name: 'Team Member 3',
      currentImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      id: 'team4',
      name: 'Team Member 4',
      currentImage: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg'
    }
  ]);

  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'hero', name: 'Hero Slides' },
    { id: 'about', name: 'About Section' },
    { id: 'partners', name: 'Partners' },
    { id: 'team', name: 'Team Members' },
    { id: 'projects', name: 'Projects' }
  ];

  const filteredSections = sections.filter(section => {
    const matchesSearch = section.name.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || section.id.startsWith(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleImageUpload = (sectionId: string, file: File) => {
    // Here you would implement the actual image upload logic
    console.log(`Uploading image for section ${sectionId}:`, file);
  };

  const handleImageDelete = (sectionId: string) => {
    // Here you would implement the actual image deletion logic
    console.log(`Deleting image for section ${sectionId}`);
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-800 pb-4">
        <h2 className="text-xl font-semibold text-white">Image Management</h2>
        <p className="text-gray-400 mt-1">Manage images across different sections of the website</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex-1 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search images..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-[var(--primary-color)] text-white'
                  : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSections.map((section) => (
          <div
            key={section.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={section.currentImage}
                alt={section.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex gap-2">
                  <label className="btn btn-primary cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(section.id, file);
                      }}
                    />
                    <RefreshCw size={16} className="mr-2" />
                    Replace
                  </label>
                  <button
                    onClick={() => handleImageDelete(section.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-white">{section.name}</h3>
              <p className="text-sm text-gray-400 mt-1">Current image URL:</p>
              <div className="mt-1 text-sm text-gray-500 break-all bg-[#0a0a0a] p-2 rounded">
                {section.currentImage}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-[#1a1a1a] rounded-lg border border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-white">Upload New Image</h3>
            <p className="text-sm text-gray-400 mt-1">Add a new image to the library</p>
          </div>
          <label className="btn btn-primary cursor-pointer flex items-center gap-2">
            <Upload size={16} />
            Upload Image
            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageManager;