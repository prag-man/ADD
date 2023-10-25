import Tabs from "@/components/Tabs.jsx";
import {BsBoxArrowInRight} from 'react-icons/bs'


export default function Home() {
  return (
    <div className="flex text-center items-center flex-col">
      <div className="bg-blue-300 w-full py-10">
        <h1 className="text-4xl text-white font-bold text-center">
          Anuvrat Digital Detox
        </h1>
        <p className="max-w-[75ch] my-6 text-lg  mx-auto text-center">
          Small (anu), Vows(vrat) towards Digital Detox. Digital detoxing means
          taking a break from using an electronic device or being online for a
          scheduled amount of time. Stepping away from technology allows you to
          be more present with yourself and your loved ones. It may also relieve
          stress, improve sleep, and deepen your relationship with family and
          friends.
        </p>
        <div className="flex items-center justify-center">
          <button className="bg-yellow-100 mx-6 text-black border-[1px] border-black py-4 px-6 rounded-md">
            Register Now! 
          </button>
          <button className="bg-white border-[1px] border-black text-text py-4 px-6 rounded-md flex gap-2 items-center">
            Learn More <BsBoxArrowInRight />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <h2 className="font-extrabold mt-8 text-4xl w-fit mx-auto text-text border-b-2 border-blue-300">
            Yearly Pledges
          </h2>
        <Tabs />
      </div>
    </div>
  );
}
