import React, { useState } from "react";
import "./live.css";

const Live = () => {
  const videoLink = "https://www.youtube.com/embed/ls0nt_xzAc8";
  const videoImg = "./live/1.jpg";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
  <section className="live-section">
  <h1>
    <span className="first-word">Entrevista</span> "Ponto de encontro"
  </h1>
      <h2>Projeto Religare</h2>
    <div className="live-container">
      {/* Imagen con botón de Play */}
      <div className="live-thumbnail" onClick={openModal}>
        <img src={videoImg} alt="Live Thumbnail" className="live-image" />
        <button className="play-button">▶</button>
      </div>
    </div>
  </section>
  {isModalOpen && (
    <div className="modal-overlay">
      <div className="video-modal-content">
        <button className="close-button" onClick={closeModal}>
          ✖
        </button>
        <iframe
          src={videoLink}
          title="YouTube Live Video"
          className="video-frame"
          allowFullScreen
          ></iframe>
      </div>
    </div>
  )}
  </>
  );
};

export default Live;
