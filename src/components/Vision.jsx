"use client";
import React, { useState } from "react";
import Image from "next/image";
import {Assist} from "./Assist"
import {Promote} from "./Promote"
import {Create} from "./Create"

const Vision = () => {
  const [activeButton, setActiveButton] = useState("Assist");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = (activeButton) => {
    switch (activeButton) {
      case "Assist":
        return <Assist />;
      case "Promote":
        return <Promote />;
      case "Create":
        return <Create />;
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
              activeButton === "Assist"
                ? "bg-[#664228] text-white"
                : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Assist")}
          >
            Assist
          </button>
          <button
            className={`p-2 md:px-4 rounded-md text-[#D1B48C] ${
              activeButton === "Promote"
                ? "bg-[#664228] text-white"
                : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Promote")}
          >
            Promote{" "}
          </button>
          <button
            className={`p-2 md:px-4 rounded-md text-[#D1B48C] ${
              activeButton === "Create"
                ? "bg-[#664228] text-white"
                : "bg-[#FBF6F1]"
            }`}
            onClick={() => handleButtonClick("Create")}
          >
            Create{" "}
          </button>
        </div>
        <div className="overflow-hidden no-scrollbar absolute left-0 right-0 bottom-4 z-[-4] h-[2px] bg-[#D1B48C]"></div>
      </div>
      {renderContent(activeButton)}

      <div className="mt-8 mx-autor">
        <h1 className="mx-auto md:mx-0 font-bold from-white to-[#D1B48C] text-left w-max py-2 text-2xl text-[#987555] px-8">
          Our{" "}
          <span className="bg-gradient-to-r p-2 bg-opacity-5 from-white to-[#fae8d0]">
            Vision
          </span>
        </h1>
        <div className="flex ">
          <div className="md:mr-12 px-10 md:px-0">
            <p className="max-w-[55ch] text-gray-500 mt-4 mx-auto md:mx-0 font-bold text-center md:text-left">
              {
                "Our vision is to reach out to every individual, enabling him/her to lead a healthy lifestyle, while being mindful of digital use and help him/her to connect with inner-self."
              }
            </p>
          </div>
          <Image
            src="/images/fomo-1.png"
            height={500}
            width={400}
            alt="Vision"
            className="rounded-md hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
