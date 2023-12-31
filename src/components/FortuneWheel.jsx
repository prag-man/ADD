import React, { useState } from "react";
import WheelComponent from "../components/WheelComponent";
import Modal from "react-modal";
import ConfettiExplosion from "react-confetti-explosion";
import "../styles/FortuneWheel.css";

export default function FortuneWheel() {
  const [winner, setWinner] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const segments = [
    "Practice Digital Fasting during meals",
    "Practice Digital Fasting while Driving",
    "Practice Digital Fasting 30 mins prior to sleep",
    "Practice Digital Fasting till 30 mins post wakeup",
    "Practice Digital Fasting between 11PM-7AM",
    "Add 3 people to ADD Drive"
  ];

  const segColors = [
    "rgba(230, 211, 179, 1)"
  ];

  const openModal = (winner) => {
    setWinner(winner);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => openModal(winner)}
          buttonText="Spin"
          isOnlyOnce={false}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Result Modal"
        className="modal-container bg-white border-white"
        overlayClassName="modal-overlay"
      >
        <div className="bg-white py-5 -m-10 px-5">
          <h2 className="text-xl font-bold">Tyaag : {winner}</h2>
          <p className="text-[#00000073]">In the view of Acharya Tulsi, the founder of Anuvrat Movement, this movement is a project for spiritual and moral rejuvenation of life. Its objective is much higher than man’s social and political good. It aims at his spiritual or moral good.</p>
          <ConfettiExplosion />
          <button
            className="mt-4 px-4 py-2 bg-[#987555] text-white rounded"
            onClick={closeModal}
          >
            I, Pledge!
          </button>
        </div>
      </Modal>
    </div>
  );
}
