import React from 'react';

const ImageList = () => {
  const imageFileNames = [
    'Andher,Juhu.jpeg',
    'Auxillium Convent school ,Bandra.jpeg',
    'CNM School, Vile Parle.jpeg',
    'Ecole Mondailie World School, Juhu.jpeg',
    'Gurukul High School, Ghatkopar.jpeg',
    'Kalidas Auditorium,Mulund.jpeg',
    'Khar Education Soceity, Khar.jpeg',
    'Mukesh Patel Engineering College.jpeg',
    'NESCO Goregaon.jpeg',
    'SNDT College,Santacruz.jpeg',
    'The Mumbai Diamond Merchant Association, BKC.jpeg',
    'Whistling woods internation,Goregaon.jpeg',
    'Bharat High school, Badlapur.jpeg',
  ];

  const getImagePath = (imageName) => `/images/album1/${imageName}`;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Album 1: Session Glimpse</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imageFileNames.map((imageName, index) => (
          <div key={index} className="relative w-76 group ">
            <img
              src={getImagePath(imageName)}
              alt={imageName}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <h1 className="text-white text-center text-lg font-semibold">
                {imageName.slice(0, -5)}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
