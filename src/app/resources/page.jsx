"use client";
import Riddle from "../../components/Riddle";
import Quote from "../../components/Quotes";
import Quiz from "../../components/Quiz";
import { useState, useEffect } from "react";
import { quotes, riddles, didYouKnowFacts, dosAndDonts, quizQnA } from '../../utils/data';

export default function Page() {
  const [showRiddles, setShowRiddles] = useState(false);
  const [showQuotes, setShowQuotes] = useState(false);
  const [showDidYouKnow, setShowDidYouKnow] = useState(false);
  const [showDosAndDonts, setShowDosAndDonts] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);


  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-[#e5d3b3] text-[#664229] p-8">
      <div className="max-w-[85ch]">
        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4 cursor-pointer"
            onClick={() => setShowRiddles(!showRiddles)}
          >
            Riddles
          </h2>
          {showRiddles && (
            <>
              {riddles.map((riddle, index) => (
                <div key={index} className="mb-4">
                  <Riddle question={riddle.question} answer={riddle.answer} />
                </div>
              ))}
            </>
          )}
        </section>

        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4 cursor-pointer"
            onClick={() => setShowQuotes(!showQuotes)}
          >
            Quotes
          </h2>
          {showQuotes && (
            <>
              {quotes.map((quote, index) => (
                <div key={index} className="mb-4">
                  <Quote text={quote} />
                </div>
              ))}
            </>
          )}
        </section>

        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4 cursor-pointer"
            onClick={() => setShowDidYouKnow(!showDidYouKnow)}
          >
            Did You Know?
          </h2>
          {showDidYouKnow && (
            <>
              {didYouKnowFacts.map((quote, index) => (
                <div key={index} className="mb-4">
                  <Quote text={quote} />
                </div>
              ))}
            </>
          )}
        </section>

        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4 cursor-pointer"
            onClick={() => setShowDosAndDonts(!showDosAndDonts)}
          >
            {"Do's and Dont's"}
          </h2>
          {showDosAndDonts && (
            <>
              {dosAndDonts.map((quote, index) => (
                <div key={index} className="mb-4">
                  <Quote text={quote} />
                </div>
              ))}
            </>
          )}
        </section>

        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4 cursor-pointer"
            onClick={() => setShowQuiz(!showQuiz)}
          >
            Quiz For Trainers
          </h2>
          {showQuiz && (
            <>
              {quizQnA.map((questionData, index) => (
                <Quiz key={index} questionData={questionData} />
              ))}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
