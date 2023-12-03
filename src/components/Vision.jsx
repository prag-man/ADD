"use client";
import React, { useState } from "react";
import {FomoContent} from "./FomoContent"
import {AssesProgress} from "./AssesProgress"
import {CreateGoals} from "./CreateGoals"
import {GatherSupport} from "./GatherSupport"
import {MakeCommitment} from "./MakeCommitment"


const Vision = () => {
  const [activeButton, setActiveButton] = useState("FOMO");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = (activeButton) => {
    switch (activeButton) {
      case "FOMO":
        return (
         <FomoContent/>
        );
      case "Create goals":
        return (
        <CreateGoals/>
        );
      case "Gather support":
        return (
        <GatherSupport/>
        );
      case "Make commitment":
        return (
         <MakeCommitment/>
        );
      case "Assess progress":
        return (
        <AssesProgress/>
        );
      default:
        return null;
    }
  };

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold text-center">
        Anuvrat Digital Detox Mission
      </h1>
      <p className="text-[#00000073] font-medium text-xl text-center">
        We genuinely care about the well-being of individuals, communities, and
        the world we inhabit.
      </p>
      <div className="relative mt-4">
        <div className="flex justify-between space-x-4 z-50">
          <button
            className={`p-2 px-4 rounded-md text-[#D1B48C] ${
              activeButton === "FOMO" ? "bg-[#664228] text-white" : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("FOMO")}
          >
            FOMO
          </button>
          <button
            className={`p-2 px-4 rounded-md text-[#D1B48C] ${
              activeButton === "Create goals" ? "bg-[#664228] text-white" : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Create goals")}
          >
            Create goals
          </button>
          <button
            className={`p-2 px-4 rounded-md text-[#D1B48C] ${
              activeButton === "Gather support" ? "bg-[#664228] text-white" : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Gather support")}
          >
            Gather support
          </button>
          <button
            className={`p-2 px-4 rounded-md text-[#D1B48C] ${
              activeButton === "Make commitment" ? "bg-[#664228] text-white" : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Make commitment")}
          >
            Make commitment
          </button>
          <button
            className={`p-2 px-4 rounded-md text-[#D1B48C] ${
              activeButton === "Assess progress" ? "bg-[#664228] text-white" : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Assess progress")}
          >
            Assess progress
          </button>
        </div>
        <div className="absolute left-0 right-0 bottom-4 z-[-4] h-[2px] bg-[#D1B48C]"></div>
      </div>
      {renderContent(activeButton)}
    </section>
  );
};

export default Vision;
