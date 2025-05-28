import React, { useState } from 'react';
import { Upload, Trash2, RefreshCw, Info } from 'lucide-react';

interface ImageSection {
  id: string;
  name: string;
  currentImage: string;
  recommendedSize: string;
  description?: string;
}

const ImageManager: React.FC = () => {
  const [sections] = useState<ImageSection[]>([
    {
      id: 'hero1',
      name: 'Hero Slide 1',
      currentImage: '/pictures/hero1.jpg',
      recommendedSize: '1920x1080',
      description: 'Full-width hero image, landscape orientation'
    },
    {
      id: 'hero2',
      name: 'Hero Slide 2',
      currentImage: '/pictures/hero2.jpg',
      recommendedSize: '1920x1080',
      description: 'Full-width hero image, landscape orientation'
    },
    {
      id: 'hero3',
      name: 'Hero Slide 3',
      currentImage: '/pictures/hero3.jpg',
      recommendedSize: '1920x1080',
      description: 'Full-width hero image, landscape orientation'
    },
    {
      id: 'hero4',
      name: 'Hero Slide 4',
      currentImage: '/pictures/hero4.jpg',
      recommendedSize: '1920x1080',
      description: 'Full-width hero image, landscape orientation'
    },
    {
      id: 'hero5',
      name: 'Hero Slide 5',
      currentImage: '/pictures/hero5.jpg',
      recommendedSize: '1920x1080',
      description: 'Full-width hero image, landscape orientation'
    },
    {
      id: 'about',
      name: 'About Section Background',
      currentImage: '/pictures/about-bg.jpg',
      recommendedSize: '1920x1080',
      description: 'Full-width background image'
    },
    {
      id: 'aboutTeam',
      name: 'About Team Image',
      currentImage: '/pictures/about-team.jpg',
      recommendedSize: '800x600',
      description: 'Team showcase image'
    },
    {
      id: 'projectsBg',
      name: 'Projects Background',
      currentImage: '/pictures/projects-bg.jpg',
      recommendedSize: '1920x1080',
      description: 'Full-width background image'
    },
    {
      id: 'project1',
      name: 'Project 1',
      currentImage: '/pictures/project1.jpg',
      recommendedSize: '800x600',
      description: 'Project showcase image'
    },
    {
      id: 'project2',
      name: 'Project 2',
      currentImage: '/pictures/project2.jpg',
      recommendedSize: '800x600',
      description: 'Project showcase image'
    },
    {
      id: 'project3',
      name: 'Project 3',
      currentImage: '/pictures/project3.jpg',
      recommendedSize: '800x600',
      description: 'Project showcase image'
    },
    {
      id: 'project4',
      name: 'Project 4',
      currentImage: '/pictures/project4.jpg',
      recommendedSize: '800x600',
      description: 'Project showcase image'
    },
    {
      id: 'project5',
      name: 'Project 5',
      currentImage: '/pictures/project5.jpg',
      recommendedSize: '800x600',
      description: 'Project showcase image'
    },
    {
      id: 'project6',
      name: 'Project 6',
      currentImage: '/pictures/project6.jpg',
      recommendedSize: '800x600',
      description: 'Project showcase image'
    },
    {
      id: 'partner1',
      name: 'Partner 1',
      currentImage: '/pictures/partner1.jpg',
      recommendedSize: '400x200',
      description: 'Partner logo, preferably transparent PNG'
    },
    {
      id: 'partner2',
      name: 'Partner 2',
      currentImage: '/pictures/partner2.jpg',
      recommendedSize: '400x200',
      description: 'Partner logo, preferably transparent PNG'
    },
    {
      id: 'partner3',
      name: 'Partner 3',
      currentImage: '/pictures/partner3.jpg',
      recommendedSize: '400x200',
      description: 'Partner logo, preferably transparent PNG'
    },
    {
      id: 'partner4',
      name: 'Partner 4',
      currentImage: '/pictures/partner4.jpg',
      recommendedSize: '400x200',
      description: 'Partner logo, preferably transparent PNG'
    },
    {
      id: 'partner5',
      name: 'Partner 5',
      currentImage: '/pictures/partner5.jpg',
      recommendedSize: '400x200',
      description: 'Partner logo, preferably transparent PNG'
    },
    {
      id: 'partner6',
      name: 'Partner 6',
      currentImage: '/pictures/partner6.jpg',
      recommendedSize: '400x200',
      description: 'Partner logo, preferably transparent PNG'
    },
    {
      id: 'team1',
      name: 'Team Member 1',
      currentImage: '/pictures/team1.jpg',
      recommendedSize: '600x800',
      description: 'Portrait photo, professional headshot'
    },
    {
      id: 'team2',
      name: 'Team Member 2',
      currentImage: '/pictures/team2.jpg',
      recommendedSize: '600x800',
      description: 'Portrait photo, professional headshot'
    },
    {
      id: 'team3',
      name: 'Team Member 3',
      currentImage: '/pictures/team3.jpg',
      recommendedSize: '600x800',
      description: 'Portrait photo, professional headshot'
    },
    {
      id: 'team4',
      name: 'Team Member 4',
      currentImage: '/pictures/team4.jpg',
      recommendedSize: '600x800',
      description: 'Portrait photo, professional headshot'
    }
  ]);

  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showGuide, setShowGuide] = useState(false);

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'hero', name: 'Hero Slides' },
    { id: 'about', name: 'About Section' },
    { id: 'project', name: 'Projects' },
    { id: 'partner', name: 'Partners' },
    { id: 'team', name: 'Team Members' }
  ];

  const filteredSections = sections.filter(section => {
    const matchesSearch = section.name.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || section.id.startsWith(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-800 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Image Management</h2>
            <p className="text-gray-400 mt-1">View and manage images across different sections</p>
          </div>
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-white rounded-md hover:bg-[#3a3a3a] transition-colors"
          >
            <Info size={16} />
            Image Guidelines
          </button>
        </div>
      </div>

      {showGuide && (
        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-white mb-4">Image Guidelines</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-300">File Format</h4>
              <p className="text-gray-400 text-sm">Use JPG for photos, PNG for logos and images requiring transparency</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300">File Size</h4>
              <p className="text-gray-400 text-sm">Keep file sizes under 500KB for optimal performance</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300">Image Quality</h4>
              <p className="text-gray-400 text-sm">Use 72 DPI for web images, ensure images are sharp and well-lit</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300">Aspect Ratio</h4>
              <ul className="text-gray-400 text-sm list-disc list-inside">
                <li>Hero images: 16:9 aspect ratio</li>
                <li>Team photos: 3:4 portrait orientation</li>
                <li>Partner logos: 2:1 landscape orientation</li>
                <li>Project images: 4:3 landscape orientation</li>
              </ul>
            </div>
          </div>
        </div>
      )}

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
              <div className="absolute top-2 right-2 bg-black/75 px-2 py-1 rounded text-xs text-white">
                {section.recommendedSize}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-white">{section.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{section.description}</p>
              <div className="mt-2">
                <p className="text-xs text-gray-500">Recommended size: {section.recommendedSize}</p>
                <p className="text-xs text-gray-500 mt-1">Current path: {section.currentImage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-[#1a1a1a] rounded-lg border border-gray-800">
        <div className="text-center text-gray-400">
          <h3 className="font-medium text-white mb-2">How to Update Images</h3>
          <p>1. Prepare your image according to the recommended size</p>
          <p>2. Save the image with the correct filename (e.g., hero1.jpg)</p>
          <p>3. Place the file in the <code>/public/pictures</code> directory</p>
          <p>4. The website will automatically use the new image</p>
        </div>
      </div>
    </div>
  );
};

export default ImageManager;