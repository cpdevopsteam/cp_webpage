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
      id: 'about',
      name: 'About Section',
      currentImage: 'https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg'
    }
  ]);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
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