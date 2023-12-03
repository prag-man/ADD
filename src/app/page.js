import Tabs from "../components/Tabs";
import {BsBoxArrowInRight} from 'react-icons/bs'
import Link from "next/link";
import Image from "next/image";
import Gallery from "../components/Gallery"

export default function Home() {
  return (
    <div className="flex text-center items-center flex-col overflow-x-hidden scroll-none">
      <div className="w-full py-10">
        <h1 className="md:text-4xl text-2xl text-[#664228] font-bold text-center">
          Anuvrat Digital Detox
        </h1>
        <p className="md:max-w-[75ch] my-4 md:text-lg px-5 md:px-0 mx-auto text-center text-gray-600">
          Small (anu), Vows(vrat) towards Digital Detox. Digital detoxing means
          taking a break from using an electronic device or being online for a
          scheduled amount of time. Stepping away from technology allows you to
          be more present with yourself and your loved ones. It may also relieve
          stress, improve sleep, and deepen your relationship with family and
          friends.
        </p>
        <div className="flex items-center justify-center gap-4 mt-12">
          <Link href='/register'>
            <button className="bg-[#987555] md:mx-6 text-base text-white font-semibold md:py-4 py-2 px-3 md:px-6 rounded-md">
              Register Now! 
            </button>
          </Link>
          <Link href='/about'>
            <button className="bg-white border-[1px] text-base border-black text-text md:py-4 py-2 px-3 md:px-6 rounded-md flex gap-2 items-center">
              Learn More <BsBoxArrowInRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="relative md:w-[55%] w-[70%] md:h-10 h-5 md:mt-14 mt-5">
          <Image src={'/images/TabHeading.png'} fill alt="tab heading" />
        </div>
        {/* <h2 className="font-extrabold mt-8 md:text-4xl text-2xl w-fit mx-auto text-[#664228] border-b-2 border-black">
            Yearly Pledges
          </h2> */}
        <Tabs />
        <Gallery/>
      </div>

    </div>
  );
}
