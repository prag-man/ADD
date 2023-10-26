import Tabs from "@/components/Tabs.jsx";
import {BsBoxArrowInRight} from 'react-icons/bs'
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex text-center items-center flex-col overflow-x-hidden scroll-none">
      <div className="bg-blue-300 w-full py-10">
        <h1 className="md:text-4xl text-2xl text-white font-bold text-center">
          Anuvrat Digital Detox
        </h1>
        <p className="md:max-w-[75ch] md:my-6 my-4 md:text-lg px-5 md:px-0 mx-auto text-center">
          Small (anu), Vows(vrat) towards Digital Detox. Digital detoxing means
          taking a break from using an electronic device or being online for a
          scheduled amount of time. Stepping away from technology allows you to
          be more present with yourself and your loved ones. It may also relieve
          stress, improve sleep, and deepen your relationship with family and
          friends.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href='https://forms.gle/1EsB6Gqw73AiveZ99'>
            <button className="bg-yellow-100 md:mx-6 text-base text-black border-[1px] border-black md:py-4 py-2 px-3 md:px-6 rounded-md">
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
        <h2 className="font-extrabold mt-8 md:text-4xl text-2xl w-fit mx-auto text-text border-b-2 border-blue-300">
            Yearly Pledges
          </h2>
        <Tabs />
      </div>
    </div>
  );
}
