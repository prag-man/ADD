"use client";
import React, { useState } from "react";
import { FomoContent } from "./FomoContent";
import { AssesProgress } from "./AssesProgress";
import { CreateGoals } from "./CreateGoals";
import { GatherSupport } from "./GatherSupport";
import { MakeCommitment } from "./MakeCommitment";
import Image from "next/image";

const Vision = () => {
  const [activeButton, setActiveButton] = useState("FOMO");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = (activeButton) => {
    switch (activeButton) {
      case "FOMO":
        return <FomoContent />;
      case "Create goals":
        return <CreateGoals />;
      case "Gather support":
        return <GatherSupport />;
      case "Make commitment":
        return <MakeCommitment />;
      case "Assess progress":
        return <AssesProgress />;
      default:
        return null;
    }
  };

  return (
    <section className="p-4 max-w-[100vw] vision" id="vision">
      <h1 className="text-2xl font-bold text-center">
        Anuvrat Digital Detox Mission
      </h1>
      <p className="text-[#00000073] font-medium text-xl text-center">
        We genuinely care about the well-being of individuals, communities, and
        the world we inhabit.
      </p>
      <div className="relative mt-10">
        <div className="flex justify-between space-x-4 z-50">
          <button
            className={`p-2 md:px-4 rounded-md text-[#D1B48C] ${
              activeButton === "FOMO"
                ? "bg-[#664228] text-white"
                : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("FOMO")}
          >
            FOMO
          </button>
          <button
            className={`p-2 md:px-4 rounded-md text-[#D1B48C] ${
              activeButton === "Create goals"
                ? "bg-[#664228] text-white"
                : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Create goals")}
          >
            Create goals
          </button>
          <button
            className={`p-2 md:px-4 rounded-md text-[#D1B48C] ${
              activeButton === "Gather support"
                ? "bg-[#664228] text-white"
                : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Gather support")}
          >
            Gather support
          </button>
          <button
            className={`p-2 md:px-4 md:block hidden rounded-md text-[#D1B48C] ${
              activeButton === "Make commitment"
                ? "bg-[#664228] text-white"
                : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Make commitment")}
          >
            Make commitment
          </button>
          <button
            className={`p-2 md:px-4 md:block hidden rounded-md text-[#D1B48C] ${
              activeButton === "Assess progress"
                ? "bg-[#664228] text-white"
                : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Assess progress")}
          >
            Assess progress
          </button>
        </div>
        <div className= "overflow-hidden no-scrollbar absolute left-0 right-0 bottom-4 z-[-4] h-[2px] bg-[#D1B48C]"></div>
      </div>
      {renderContent(activeButton)}

      <div className="mt-8 mx-autor">
        <h1 className="mx-auto md:mx-0 font-bold from-white to-[#D1B48C] text-left w-max py-2 text-2xl text-[#987555] px-8">
          Our <span className="bg-gradient-to-r p-2 bg-opacity-5 from-white to-[#fae8d0]">Vision</span>
        </h1>
     <div className="flex ">
      <div className="md:mr-12 px-10 md:px-0">
        <h2 className="text-2xl mt-4 md:text-left text-center font-semibold mx-auto md:mx-0 md:font-bold">
          Why did we start this?
        </h2>
        <p className="max-w-[65ch] text-gray-500 mt-4 mx-auto md:mx-0 font-bold">
       { "Anuvrat Digital Detox envisions a balanced, mindful lifestyle in today's digital age. Our mission is to empower individuals to prioritize well-being, fostering a deeper connection with their inner selves. Through awareness and intentional choices, we aim to inspire a cultural shift towards a healthier relationship with technology, enriching lives for a more fulfilling existence."}
        </p>
      </div>
      <Image src="/images/fomo-1.png" height={500} width={400} alt="Vision" className="rounded-md hidden md:block"/>
     </div>
     
      </div>
    </section>
  );
};

export default Vision;
