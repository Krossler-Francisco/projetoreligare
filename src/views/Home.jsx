import React, { useState, useEffect, useRef } from 'react';

const images = [
  "https://www.wwu.edu/sites/default/files/styles/header_medium_large_screens/public/2022-04/psychology.jpg.webp?itok=im4GKNBy",
  "https://cdn.shopify.com/s/files/1/0070/7032/files/psychological-design.jpg?v=1681761188",
  "https://wallpapers.com/images/hd/psychology-pictures-zc9x9xxtk715spyr.jpg"
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
      }, 500); // Define el tiempo de la transición falsa
    }

    if (currentIndex === 0) {
      // Cuando va antes del primer slide real, "salta" al último slide real
      setTimeout(() => {
        setIsTransitioning(false); // Desactiva la transición
        setCurrentIndex(totalImages); // Va al último slide real
      }, 500);
    }
  }, [currentIndex, totalImages]);

  return (
    <section className='home-container'>
      <section className="carousel">
        <div
          className="carousel-track"
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
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
          <h1>Seja bem vindo! <br />É um prazer receber você!</h1>
        </strong>
        <p>O Projeto Religare é uma Clínica Online que oferece o melhor serviço de atendimento psicológico online!</p>
        <p>Contamos com uma equipe de psicólogos capacitados para te atender.</p>
        <a href="#modal-opened" className="link-1">Agende já sua consulta <span>➜</span></a>
          <div className="modal-container" id="modal-opened">
            <div className="modal">
              <div className="modal__details">
                <strong className="modal__title">Formulario de ingreso.</strong>
                <p className="modal__description">El formulario de ingreso consta de campos obligatorios como nombre, dirección de correo electrónico y contraseña. Asegúrese de ingresar la información correctamente antes de enviar el formulario.</p>
              </div>
              <p className="modal__text">Al hacer clic en el botón Ingresar, su información será verificada y procesada para crear su cuenta de usuario.</p>
              <button className="modal__btn">Formulario<span>➜</span></button>
              <a href="#modal-closed" className="link-2"></a>
            </div>
          </div>
      </section>
    </section>
  );
}

export default Home;
