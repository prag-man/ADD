import React from "react";

const ImageGallery = () => {
  const imageFileNames = [
    "WhatsApp Image 2024-01-26 at 12.40.32 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 1.03.56 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 1.08.45 PM (1).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.29 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.31 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.32 PM (2).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.33 PM (1).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.33 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.34 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.35 PM (1).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.35 PM (2).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.36 PM (1).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.36 PM (2).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.34 PM (1).jpeg",
    "WhatsApp Image 2024-01-26 at 1.08.45 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.32 PM (1).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.33 PM (2).jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.35 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.36 PM.jpeg",
    "WhatsApp Image 2024-01-26 at 12.40.34 PM (2).jpeg",
  ];

  const getImagePath = (imageName) => `/images/album2/${imageName}`;

  const imageGallery = imageFileNames.map((imageName, index) => ({
    id: index + 1,
    name: imageName,
    path: getImagePath(imageName),
  }));

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold mb-8">
        Album2: ADD Books to Life
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageGallery.map((image) => (
          <div key={image.id} className="relative w-76  group">
            <img
              src={image.path}
              alt={image.name}
              className="w-full max-h-full object-fill rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
