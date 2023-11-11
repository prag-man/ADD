"use client";
import { useState } from 'react';

const Quiz = ({ questionData }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if(option!=questionData.answer)alert("Try again!")
    setShowConfetti(option === questionData.answer);
  };

  return (
    <div className="mb-6">
      <p className="text-lg font-semibold mb-2" style={{ color: '#664229' }}>
        {questionData.question}
      </p>
      <div>
        {questionData.options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                className="mr-2"
              />
              <span className='text-black'>{option}</span>
            </label>
          </div>
        ))}
      </div>
   
      {showConfetti && (
     
    
        <p className="text-green-600 font-semibold mt-4">Correct!</p>
      
      )} 
    </div>
  );
};

export default Quiz;
