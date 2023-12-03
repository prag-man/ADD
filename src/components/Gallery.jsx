import { Nunito } from "next/font/google";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
});

const Gallery = () => {
  const images = [
    '/images/mahashramanji.jpeg',
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
    '/images/mahashramanji.jpeg',
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
  ];

  return (
    <section className={`bg-[#664228] text-white w-screen flex flex-col justify-center items-center ${nunito.className}`}>
      <div className="m-4 mx-8 md:flex ">
        <div>
          <h1 className="font-semibold text-2xl">
            We did a lot during this time
          </h1>
          <div className="flex opacity-80 gap-4 mt-2">
            <FaInstagram size={40} color="white" />
            <FaFacebook size={40} color="white" />
          </div>
        </div>
        <div className="md:flex gap-12 text-left max-w-[70ch] mt-4 md:mt-0">
          <div>
            <h1 className="font-bold text-xl">4K</h1>
            <p className="text-lg">Detoxing On a Monthly Basis</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">78%</h1>
            <p className="text-lg">Pledge ratio divided by people</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">322</h1>
            <p className="text-lg">People are taking the pledge daily</p>
          </div>
        </div>
       
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center max-w-[90vw] mt-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden"
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="responsive"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
