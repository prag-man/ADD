// pages/api/images.js
import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const imagesDirectory = path.join(process.cwd(), 'public/images/album1');
  const imageNames = fs.readdirSync(imagesDirectory);

  res.status(200).json(imageNames);
};
