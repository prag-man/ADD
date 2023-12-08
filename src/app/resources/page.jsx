"use client";
import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import Riddle from '../../components/Riddle';
import Quote from '../../components/Quotes';
import Quiz from '../../components/Quiz';
import { quotes, riddles, didYouKnowFacts, dosAndDonts, quizQnA } from '../../utils/data';

export default function Page() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-start items-start text-[#664228] pt-12">
      <div className="max-w-3xl">
        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer ${
              openSection === 'riddles' ? 'bg-[#F8F0E8]' : ''
            }`}
            onClick={() => toggleSection('riddles')}
          >
            Riddles
            <RiArrowDownSLine className={`mx-2 transform ${openSection === 'riddles' ? 'rotate-180' : 'rotate-0'}`} />
          </h2>
          <div className={`${openSection === 'riddles' ? 'block bg-[#F8F0E8] p-8 w-screen' : 'hidden'}`}>
            {openSection === 'riddles' && (
              <>
                {riddles.map((riddle, index) => (
                  <div key={index} className="mb-4">
                    <Riddle question={riddle.question} answer={riddle.answer} />
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer ${
              openSection === 'quotes' ? 'bg-[#F8F0E8]' : ''
            }`}
            onClick={() => toggleSection('quotes')}
          >
            Quotes
            <RiArrowDownSLine className={`mx-2 transform ${openSection === 'quotes' ? 'rotate-180' : 'rotate-0'}`} />
          </h2>
          <div className={`${openSection === 'quotes' ? 'block bg-[#F8F0E8] w-screen p-8' : 'hidden'}`}>
            {openSection === 'quotes' && (
              <>
                {quotes.map((quote, index) => (
                  <div key={index} className="mb-4">
                    <Quote text={quote} />
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer ${
              openSection === 'didYouKnow' ? 'bg-[#F8F0E8]' : ''
            }`}
            onClick={() => toggleSection('didYouKnow')}
          >
            Did You Know?
            <RiArrowDownSLine className={`mx-2 transform ${openSection === 'didYouKnow' ? 'rotate-180' : 'rotate-0'}`} />
          </h2>
          <div className={`${openSection === 'didYouKnow' ? 'block bg-[#F8F0E8] w-screen p-8' : 'hidden'}`}>
            {openSection === 'didYouKnow' && (
              <>
                {didYouKnowFacts.map((fact, index) => (
                  <div key={index} className="mb-4">
                    <Quote text={fact} />
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer ${
              openSection === 'dosAndDonts' ? 'bg-[#F8F0E8]' : ''
            }`}
            onClick={() => toggleSection('dosAndDonts')}
          >
            {"Do's and Dont's"}
            <RiArrowDownSLine className={`mx-2 transform ${openSection === 'dosAndDonts' ? 'rotate-180' : 'rotate-0'}`} />
          </h2>
          <div className={`${openSection === 'dosAndDonts' ? 'block bg-[#F8F0E8] w-screen p-8' : 'hidden'}`}>
            {openSection === 'dosAndDonts' && (
              <>
                {dosAndDonts.map((item, index) => (
                  <div key={index} className="mb-4">
                    <Quote text={item} />
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer ${
              openSection === 'quiz' ? 'bg-[#F8F0E8]' : ''
            }`}
            onClick={() => toggleSection('quiz')}
          >
            Quiz For Trainers
            <RiArrowDownSLine className={`mx-2 transform ${openSection === 'quiz' ? 'rotate-180' : 'rotate-0'}`} />
          </h2>
          <div className={`${openSection === 'quiz' ? 'block w-screen p-8 bg-[#F8F0E8] ' : 'hidden'}`}>
            {openSection === 'quiz' && (
              <>
                {quizQnA.map((questionData, index) => (
                  <Quiz key={index} questionData={questionData} />
                ))}
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
