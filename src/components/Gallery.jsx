import { Nunito } from "next/font/google";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
});

const Gallery = () => {
  const images = [
    "/images/mahashramanji.jpeg",
    "/images/image1.jpeg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image12.jpg",
  ];

  return (
    <div
      className={`bg-[#664228] md:px-20 text-gray-300 w-full py-8 ${nunito.className} gallery`}
      id="gallery"
    >
      <div className="m-4 md:mx-8  flex md:justify-between md:items-center">
        <div className=" flex md:flex-row flex-col justify-between items-center">
          <div>
            <h1 className="font-semibold text-2xl text-left">
              We did a lot during this time
            </h1>
            <div className="flex opacity-80 gap-4 mt-4 items-center">
              <Link href={"https://instagram.com/anuvrat_digitaldetox"}>
                <FaInstagram size={40} color="white" />
              </Link>
              <Link
                href={"https://www.facebook.com/anuvibha.page?mibextid=ZbWKwL"}
              >
                <FaFacebook size={38} color="white" />
              </Link>
              <Link href={"https://youtube.com/@ANUVIBHA?si=qQYoxKXgqOdXtIAG"}>
                <FaYoutube size={48} color="white" />
              </Link>
            </div>
          </div>

          <div className="md:flex gap-12 md:mx-16 text-left max-w-[70ch] mt-12 md:mt-0 justify-center">
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
        <div className="">
          <div className="relative rounded-lg md:h-[300px] h-[150px] w-[150px] md:w-[300px] ">
            {" "}
            {/* Show on medium and larger screens */}
            <Image
              src={images[0]}
              alt={`Image 1`}
              fill
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-10 justify-center">
        <Link href={"/album1"}>
          <div className="relative group rounded-md hover:scale-105  overflow-hidden">
            <Image
              src={"/images/album1/Mukesh Patel Engineering College.jpeg"}
              alt={`Album 1`}
              width={300}
              height={200}
              className="opacity-75 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-200">
                <h2 className="text-lg font-bold">Album1: Session Glimpse</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/album2"}>
        <div className="relative group rounded-md hover:scale-105  overflow-hidden">
            <Image
              src={
                "/images/album2/WhatsApp Image 2024-01-26 at 12.40.32 PM (2).jpeg"
              }
              alt={`Album 1`}
              width={300}
              height={200}
              className="opacity-75 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-200">
                <h2 className="text-lg font-bold">Album2: ADD books to life</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/album3"}>
        <div className="relative group rounded-md hover:scale-105  overflow-hidden">
            <Image
              src={
                "/images/album3/WhatsApp Image 2024-01-26 at 12.41.59 PM.jpeg"
              }
              alt={`Album 3`}
              width={300}
              height={200}
              className="opacity-70 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-200">
                <h2 className="text-lg font-bold">Album3: ADD spread</h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="flex flex-wrap justify-center gap-4 md:gap-5 md:justify-start mt-14">
        {images.slice(1).map((image, index) => (
          <div key={index} className="rounded-md relative md:h-[300px] h-[150px] w-[150px] md:w-[400px]">
            <Image
              src={image}
              alt={`Image ${index + 2}`}
              fill
              className="rounded-lg"
              objectFit="cover"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Gallery;
