"use client"
import { useState } from 'react';

const Riddle = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="p-4 rounded-md mb-4 bg-[#FFFFFF]">
      <p className="text-lg mb-4 text-[#664228]"><strong>Riddle:</strong> {question}</p>
      <p className="mb-2 text-[#DB9454]">
        <strong>Answer:</strong>{" "}
        <span
          className={`${showAnswer?"":"  font-semibold cursor-pointer"} ml-4` }
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? answer : "Click to show answer"}
        </span>
      </p>
    </div>
  );
};

export default Riddle;
