import { Nunito } from "next/font/google";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
});

const Gallery = () => {
  const images = [
    "/images/mahashramanji.jpeg",
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
  ];

  return (
    <section
      className={`bg-[#664228] text-gray-300 w-screen py-8 ${nunito.className}`}
    >
      <div className="m-4 md:mx-8 flex md:justify-between md:items-center">
        <div className="max-w-[60%] flex md:max-w-[100%] ">
          <div>
            <h1 className="font-semibold text-2xl text-left">
              We did a lot during this time
            </h1>
            <div className="flex opacity-80 gap-4 mt-2">
              <FaInstagram size={40} color="white" />
              <FaFacebook size={40} color="white" />
            </div>
          </div>

          <div className="md:flex gap-12 md:mx-16 text-left max-w-[70ch] mt-4">
            <div>
              <h1 className="font-bold text-xl">4K</h1>
              <p className="text-lg opacity-60">Detoxing On a Monthly Basis</p>
            </div>
            <div>
              <h1 className="font-bold text-xl">78%</h1>
              <p className="text-lg opacity-60">
                Pledge ratio divided by people
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl">322</h1>
              <p className="text-lg opacity-60">
                People are taking the pledge daily
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[40%] ">
          <div className="md:hidden block">
            {" "}
            {/* Show on medium and larger screens */}
            <Image
              src={images[0]}
              alt={`Image 1`}
              layout="responsive"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center mx-12 mt-8">
        {images.slice(1).map((image, index) => (
          <div key={index} className="rounded-md overflow-hidden">
            <Image
              src={image}
              alt={`Image ${index + 2}`}
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
