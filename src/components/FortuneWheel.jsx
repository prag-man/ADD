"use client"
import WheelComponent from "../components/WheelComponent";
import { useState } from "react";

export default function FortuneWheel() {
  const [winner, setWinner] = useState("");
  const segments = [
    "Digital Tyaag",
    "Digital Samayik",
    "Digital Navkarsi",
    "Digital Dravya Limit",
    "Digital Upwas",
  ];
  const segColors = ["rgba(53, 162, 235, 0.5)", "rgba(53, 162, 235, 0.5)", "rgba(53, 162, 235, 0.5)", "rgba(53, 162, 235, 0.5)", "rgba(53, 162, 235, 0.5)"];
  const onFinished = (winner) => {
    console.log(winner);
    setWinner(winner);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <h2>{winner}</h2>

      <div className="">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          buttonText="Spin"
          isOnlyOnce={false}
        />
      </div>
    </div>
  );
}
