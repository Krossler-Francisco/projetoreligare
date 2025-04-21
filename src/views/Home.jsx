import React, { useState, useEffect, useRef } from 'react';
import Post from "./components/Post"
import Live from "./components/Live"

const images = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg"
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(1); // Comienza en el slide 1 (primera imagen real)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalImages = images.length;
  const carouselRef = useRef(null);

  // Estados para el swipe
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Manipulador para ir al siguiente slide
  const handleNext = () => {
    setIsTransitioning(true); // Activa la transición
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Manipulador para ir al slide anterior
  const handlePrev = () => {
    setIsTransitioning(true); // Activa la transición
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Detectar inicio del toque
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX); // Almacena la posición inicial del toque
  };

  // Detectar movimiento del toque
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX); // Actualiza la posición final durante el deslizamiento
  };

  // Detectar final del toque
  const handleTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
      // Desplazamiento a la izquierda (próxima imagen)
      handleNext();
    } else if (touchDiff < -50) {
      // Desplazamiento a la derecha (imagen anterior)
      handlePrev();
    }
  };

  // Auto-slide cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Corrige el loop infinito (copias falsas)
  useEffect(() => {
    if (currentIndex > totalImages) {
      // Cuando sobrepasa el último slide real, "salta" al primer slide real (sin transición)
      setTimeout(() => {
        setIsTransitioning(false); // Desactiva la transición
        setCurrentIndex(1); // Va al primer slide real
      }, 1000); // Define el tiempo de la transición falsa
    }

    if (currentIndex === 0) {
      // Cuando va antes del primer slide real, "salta" al último slide real
      setTimeout(() => {
        setIsTransitioning(false); // Desactiva la transición
        setCurrentIndex(totalImages); // Va al último slide real
      }, 1000);
    }
  }, [currentIndex, totalImages]);

  return (
    <section className='home-container home-space'>
      <section className="carousel">
        <div
          className="carousel-track"
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
          }}
          onTouchStart={handleTouchStart} // Agregar evento touchstart
          onTouchMove={handleTouchMove}   // Agregar evento touchmove
          onTouchEnd={handleTouchEnd}     // Agregar evento touchend
        >
          {/* Slide falso de la última imagen al principio */}
          <img className="carousel-image" src={images[totalImages - 1]} alt={`Slide`} />
          {/* Renderizar las imágenes reales */}
          {images.map((image, index) => (
            <img key={index} className="carousel-image" src={image} alt={`Slide ${index}`} />
          ))}
          {/* Slide falso de la primera imagen al final */}
          <img className="carousel-image" src={images[0]} alt={`Slide`} />
        </div>
        <button className="carousel-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-button right" onClick={handleNext}>
          &#10095;
        </button>
      </section>
      <section className='home'>
        <strong className="home-h1-space">
          <h1>Seja bem vindo!</h1>
          <h1>É um prazer receber você!</h1>
        </strong>
        <p className='home__p'>O projeto Religare é um projeto social que tem como objetivo prestar serviços de psicoterapia com fim social na modalidade online para pessoas de todo país.</p>
        <p className='home__p'>Contamos com uma equipe de psicólogos formados e capacitados para te atender.</p>
        <a href="#modal-opened" className="link-1">Agende já sua consulta <span>➜</span></a>
          <div className="modal-container" id="modal-opened">
            <div className="modal">
              <div className="modal__details">
                <strong className="modal__title">Formulário de inscrição.</strong>
                <p className="modal__description">O formulário contém campos obrigatórios, como nome, endereço de e-mail e dados pessoais. Certifique-se de preencher as informações corretamente antes de enviar o formulário.</p>
              </div>
              <p className="modal__text para">Após o envio, nossa equipe entrará em contato para agendar uma primeira entrevista terapêutica. Caso tenha dúvidas, estamos à disposição para ajudar em todo o processo.</p>
              <a translate='no' href='https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1tEnc9bt_6a1wu882HrpXw50rn5CINZpjF365Kz-eyCQ%2Fedit%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYz6NeAryYncrLInhAzyP2DKqQ_FGuBTsMcUmkQoc_vjnqhmM1zPxJ7LjQ_aem_mGTldvm2aYo1CMtxVDFgxQ&e=AT2AxAmz1tIokqEVz203w8C4XsWsyi4rxBFxX5qgN_87P068Nsj9deJ68V6vjlghLDwFu1QRfzM_T4gyKxGk6ol55E8Nz652h53x5QFlWWRPTO-U0iSmTg' className="modal__btn btn-config">Formulario<span>➜</span></a>
              <a href="#modal-closed" className="link-2"></a>
            </div>
          </div>
      </section>
      <Live/>
      <Post/>
    </section>
  );
}

export default Home;
