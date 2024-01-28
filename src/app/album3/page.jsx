import React from 'react';

const ImageGallery = () => {
    const imageFileNames = [
        'WhatsApp Image 2024-01-26 at 1.00.40 PM.jpeg',
        'WhatsApp Image 2024-01-26 at 1.09.14 PM.jpeg',
        'WhatsApp Image 2024-01-26 at 12.41.57 PM (1).jpeg',
        'WhatsApp Image 2024-01-26 at 12.41.57 PM.jpeg',
        'WhatsApp Image 2024-01-26 at 12.41.58 PM (1).jpeg',
        'WhatsApp Image 2024-01-26 at 12.41.58 PM.jpeg',
        'WhatsApp Image 2024-01-26 at 12.41.59 PM (1).jpeg',
        'WhatsApp Image 2024-01-26 at 12.41.59 PM (2).jpeg',
        'WhatsApp Image 2024-01-26 at 12.41.59 PM.jpeg',
        'WhatsApp Image 2024-01-26 at 12.42.00 PM.jpeg',
        'WhatsApp Image 2024-01-26 at 12.42.01 PM (1).jpeg',
        'WhatsApp Image 2024-01-26 at 12.42.01 PM (2).jpeg',
        'WhatsApp Image 2024-01-26 at 12.42.01 PM.jpeg',
      ];
      
      const imageObjects = imageFileNames.map((imageName, index) => ({
        id: index + 1,
        name: imageName,
      }));
      
      console.log(imageObjects);
      

  const getImagePath = (imageName) => `/images/album3/${imageName}`;

  const imageGallery = imageFileNames.map((imageName, index) => ({
    id: index + 1,
    name: imageName,
    path: getImagePath(imageName),
  }));

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-8">Album3: ADD Spread</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-12">
        {imageGallery.map((image) => (
          <div key={image.id} className="relative max-w-72 md:max-h-56 group">
            <img
              src={image.path}
              alt={image.name}
              className="w-full max-h-full object-fill rounded-md"
            />
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
