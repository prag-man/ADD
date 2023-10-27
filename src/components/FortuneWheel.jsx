import React, { useState } from "react";
import WheelComponent from "../components/WheelComponent";
import Modal from "react-modal";
import ConfettiExplosion from "react-confetti-explosion";
import "@/styles/FortuneWheel.css";

export default function FortuneWheel() {
  const [winner, setWinner] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const segments = [
    "Digital Tyaag",
    "Digital Samayik",
    "Digital Navkarsi",
    "Digital Dravya Limit",
    "Digital Upwas",
  ];

  const segColors = [
    "rgba(53, 162, 235, 0.5)",
    "rgba(53, 162, 235, 0.5)",
    "rgba(53, 162, 235, 0.5)",
    "rgba(53, 162, 235, 0.5)",
    "rgba(53, 162, 235, 0.5)",
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
        className="modal-container bg-yellow-100"
        overlayClassName="modal-overlay"
      >
        <div className="bg-yellow-100 py-5 -m-10 px-5">
          <h2 className="text-xl font-bold">Tyaag : {winner}</h2>
          <ConfettiExplosion />
          <button
            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
            onClick={closeModal}
          >
            I, Pledge!
          </button>
        </div>
      </Modal>
    </div>
  );
}
