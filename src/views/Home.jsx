import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const images = [
  "https://www.wwu.edu/sites/default/files/styles/header_medium_large_screens/public/2022-04/psychology.jpg.webp?itok=im4GKNBy",
  "https://cdn.shopify.com/s/files/1/0070/7032/files/psychological-design.jpg?v=1681761188",
  "https://wallpapers.com/images/hd/psychology-pictures-zc9x9xxtk715spyr.jpg"
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(1); // Começa no slide 1 (primeira imagem real)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalImages = images.length;
  const carouselRef = useRef(null);

  // Manipulador para ir para o próximo slide
  const handleNext = () => {
    setIsTransitioning(true); // Ativa a transição
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Manipulador para voltar ao slide anterior
  const handlePrev = () => {
    setIsTransitioning(true); // Ativa a transição
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Auto-slide a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Corrige o loop infinito (cópias falsas)
  useEffect(() => {
    if (currentIndex > totalImages) {
      // Quando ultrapassa o último slide real, "pula" para o primeiro slide real (sem transição)
      setTimeout(() => {
        setIsTransitioning(false); // Desativa a transição
        setCurrentIndex(1); // Vai para o primeiro slide real
      }, 500); // Define o tempo da transição falsa
    }

    if (currentIndex === 0) {
      // Quando vai antes do primeiro slide real, "pula" para o último slide real
      setTimeout(() => {
        setIsTransitioning(false); // Desativa a transição
        setCurrentIndex(totalImages); // Vai para o último slide real
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
        >
          {/* Slide falso da última imagem no início */}
          <img className="carousel-image" src={images[totalImages - 1]} alt={`Slide`} />
          {/* Renderizar as imagens reais */}
          {images.map((image, index) => (
            <img key={index} className="carousel-image" src={image} alt={`Slide ${index}`} />
          ))}
          {/* Slide falso da primeira imagem no final */}
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
        <strong>
          <h1>Seja bem vindo! <br />É um prazer receber você!</h1>
        </strong>
        <p>O Projeto Religare é uma Clínica Online que oferece o melhor serviço de atendimento psicológico online!</p>
        <p>Contamos com uma equipe de psicólogos capacitados para te atender.</p>
        <Link to="/contact" className="home-button">
          Agende já sua consulta <span>➜</span>
        </Link>
      </section>
    </section>
  );
}

export default Home;
