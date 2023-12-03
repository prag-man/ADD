import Tabs from "../components/Tabs";
import {BsBoxArrowInRight} from 'react-icons/bs'
import Link from "next/link";
import Image from "next/image";
import BenifitCard from "../components/BenifitCard";

export default function Home() {
  return (
    <div className="flex text-center items-center flex-col overflow-x-hidden scroll-none">
      <div className="w-full flex items-center justify-between py-10">
        <div className="flex-1 flex flex-col text-left ml-20 py-14">
          <h1 className="text-3xl font-semibold text-[#664228] mb-4">Anuvrat Digital Detox</h1>
          <p className="text-[#999999] w-[90%]">Small (anu), Vows(vrat) towards Digital Detox. Digital detoxing means taking a break from using an electronic device or being online for a scheduled amount of time. Stepping away from technology allows you to be more present with yourself & your loved ones. It may also relieve stress, improve sleep, and deepen your relationship with family & friends.</p>
          <button className="rounded-3xl px-4 py-2 text-lg font-medium bg-[#664228] w-fit text-white mt-10">Take a Pledge</button>
        </div>
        <div className="flex-1 relative h-[450px] w-full flex overflow-clip no-scrollbar mr-16">
          <Image src='/images/home-banner.png' fill alt="banner" />
          <div className="ellipse h-[500px] mt-[242px] w-full rounded-[50%] bg-gradient-to-b from-[#66422880] via-white to-white absolute">
            <div className="h-full w-full bg-white mt-1 rounded-[50%] flex justify-center">
              <div className="relative h-32 w-[400px] mt-10"> 
                <Image src='/images/anu.png' fill alt="ellipse" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 mt-5 w-full">
        <h1 className="text-2xl font-bold">Anuvrat Digital Detox Benifits</h1>
        <p className="text-[#00000073] font-medium text-xl mt-1">When you step away from your devices and focus on the real world</p>
        <div className="flex justify-between mt-16 mb-14 w-full px-28">
          <BenifitCard img="/images/stress.png" text="Less Stress" />
          <BenifitCard img="/images/focus.png" text="Improved Focus" />
          <BenifitCard img="/images/sleep.png" text="Better Sleep" />
          <BenifitCard img="/images/relationships.png" text="Enhanced Relationships" />
        </div>
      </div>
      <div className="flex flex-col w-full items-center bg gap-8">
        <h1 className="text-2xl font-bold text-[#664228] bg-[#F0DFCD] w-full pt-7 pb-14 -mb-16">Yearly Pledges</h1>
        <Tabs />
      </div>
    </div>
  );
}
