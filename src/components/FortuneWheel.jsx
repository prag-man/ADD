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
  const segColors = ["#4961fd", "#fef19a", "#4961fd", "#fef19a", "#4961fd"];
  const onFinished = (winner) => {
    console.log(winner);
    setWinner(winner);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>{winner}</h2>

      <div className="container mx-auto">
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
