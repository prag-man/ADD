"use client";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Riddle from "../../components/Riddle";
import Quote from "../../components/Quotes";
import Quiz from "../../components/Quiz";
import {
  quotes,
  riddles,
  didYouKnowFacts,
  dosAndDonts,
  quizQnA,
} from "../../utils/data";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import meta from "js-meta";
import DocCard from "../../components/DocCard.jsx";
import PDFViewer from "../../components/pdf-viewer.js";

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
    <div className="flex flex-col min-h-screen justify-start items-start text-[#664228]">
      <Link
        href={"/"}
        className="flex items-center justifiy-center gap-2 text-black p-3"
      >
        <FaAngleLeft className="md:text-xl font-semibold cursor-pointer" />
        <h3 className="md:text-lg font-semibold cursor-pointer">Home</h3>
      </Link>
      <div
        className={`${
          openSection === "banners" ? "bg-[#F8F0E8]" : ""
        } mt-5 w-full`}
      >
        <h2
          className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer`}
          onClick={() => toggleSection("banners")}
        >
          {" "}
          Banners & Standees
          <RiArrowDownSLine
            className={`mx-2 transform ${
              openSection === "banners" ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <div
          className={`${
            openSection === "banners"
              ? "flex flex-wrap gap-4 p-5 justify-center items-center"
              : "hidden"
          }`}
        >
          <PDFViewer file="/b1.pdf" text="Banner - 1" type="doc" />
          <PDFViewer file="/b2.pdf" text="Banner - 2" type="doc" />
          <PDFViewer file="/s1.pdf" text="Standee - 1" type="doc" />
          <PDFViewer file="/s2.pdf" text="ADD Standee" type="doc" />
          <PDFViewer file="/bq.pdf" text="Standee - Quotes" type="doc" />
          <PDFViewer file="/bp.pdf" text="Standee - Pledge" type="doc" />
          <PDFViewer
            file="/bqs.pdf"
            text="Standee - Quotes for School"
            type="doc"
          />
        </div>
      </div>
      <div
        className={`${
          openSection === "games" ? "bg-[#F8F0E8]" : ""
        } mt-5 w-full`}
      >
        <h2
          className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer`}
          onClick={() => toggleSection("games")}
        >
          {" "}
          Games
          <RiArrowDownSLine
            className={`mx-2 transform ${
              openSection === "games" ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <div
          className={`${
            openSection === "games"
              ? "flex flex-wrap gap-4 p-5 justify-center items-center"
              : "hidden"
          }`}
        >
          <PDFViewer file="/chits.pdf" text="Chits" type="games" />
          <PDFViewer file="/Grid.pdf" text="Grid" type="games" />
          <PDFViewer file="/Diet Chart.pdf" text="Diet Chart" type="games" />
          <PDFViewer file="/Digimeter.pdf" text="Digimeter" type="games" />
          <PDFViewer file="/self tracker.pdf" text="Self-Tracker" type="games" />
        </div>
      </div>
      <div
        className={`${openSection === "bm" ? "bg-[#F8F0E8]" : ""} mt-5 w-full`}
      >
        <h2
          className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer`}
          onClick={() => toggleSection("bm")}
        >
          {" "}
          Bookmarks
          <RiArrowDownSLine
            className={`mx-2 transform ${
              openSection === "bm" ? "rotate-180" : "rotate-0"
            }`}
          />
        </h2>
        <div
          className={`${
            openSection === "bm"
              ? "flex flex-wrap gap-4 p-5 justify-center items-center"
              : "hidden"
          }`}
        >
          <PDFViewer file="/bm1.pdf" text="Bookmark - 1" type="bm" />
          <PDFViewer file="/bm2.pdf" text="Bookmark - 2" type="bm" />
          <PDFViewer file="/bm3.pdf" text="Bookmark - 3" type="bm" />
          <PDFViewer file="/bmmsd.pdf" text="MSD Bookmark" type="bm" />
        </div>
      </div>
      <div className="max-w-3xl pt-5">
        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold flex p-4 justify-between w-screen items-center cursor-pointer ${
              openSection === "riddles" ? "bg-[#F8F0E8]" : ""
            }`}
            onClick={() => toggleSection("riddles")}
          >
            Riddles
            <RiArrowDownSLine
              className={`mx-2 transform ${
                openSection === "riddles" ? "rotate-180" : "rotate-0"
              }`}
            />
          </h2>
          <div
            className={`${
              openSection === "riddles"
                ? "block bg-[#F8F0E8] p-8 w-screen"
                : "hidden"
            }`}
          >
            {openSection === "riddles" && (
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
              openSection === "quotes" ? "bg-[#F8F0E8]" : ""
            }`}
            onClick={() => toggleSection("quotes")}
          >
            Quotes
            <RiArrowDownSLine
              className={`mx-2 transform ${
                openSection === "quotes" ? "rotate-180" : "rotate-0"
              }`}
            />
          </h2>
          <div
            className={`${
              openSection === "quotes"
                ? "block bg-[#F8F0E8] w-screen p-8"
                : "hidden"
            }`}
          >
            {openSection === "quotes" && (
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
              openSection === "didYouKnow" ? "bg-[#F8F0E8]" : ""
            }`}
            onClick={() => toggleSection("didYouKnow")}
          >
            Did You Know?
            <RiArrowDownSLine
              className={`mx-2 transform ${
                openSection === "didYouKnow" ? "rotate-180" : "rotate-0"
              }`}
            />
          </h2>
          <div
            className={`${
              openSection === "didYouKnow"
                ? "block bg-[#F8F0E8] w-screen p-8"
                : "hidden"
            }`}
          >
            {openSection === "didYouKnow" && (
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
              openSection === "dosAndDonts" ? "bg-[#F8F0E8]" : ""
            }`}
            onClick={() => toggleSection("dosAndDonts")}
          >
            {"Do's and Dont's"}
            <RiArrowDownSLine
              className={`mx-2 transform ${
                openSection === "dosAndDonts" ? "rotate-180" : "rotate-0"
              }`}
            />
          </h2>
          <div
            className={`${
              openSection === "dosAndDonts"
                ? "block bg-[#F8F0E8] w-screen p-8"
                : "hidden"
            }`}
          >
            {openSection === "dosAndDonts" && (
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
              openSection === "quiz" ? "bg-[#F8F0E8]" : ""
            }`}
            onClick={() => toggleSection("quiz")}
          >
            Quiz For Trainers
            <RiArrowDownSLine
              className={`mx-2 transform ${
                openSection === "quiz" ? "rotate-180" : "rotate-0"
              }`}
            />
          </h2>
          <div
            className={`${
              openSection === "quiz"
                ? "block w-screen p-8 bg-[#F8F0E8] "
                : "hidden"
            }`}
          >
            {openSection === "quiz" && (
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
