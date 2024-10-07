import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const images = [
  "https://www.wwu.edu/sites/default/files/styles/header_medium_large_screens/public/2022-04/psychology.jpg.webp?itok=im4GKNBy",
  "https://cdn.shopify.com/s/files/1/0070/7032/files/psychological-design.jpg?v=1681761188",
  "https://wallpapers.com/images/hd/psychology-pictures-zc9x9xxtk715spyr.jpg",
  "https://cdn.shopify.com/s/files/1/0070/7032/files/psychological-design.jpg?v=1681761188"
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(1); // Começa com o índice 1 (primeira imagem real)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalImages = images.length;
  const carouselRef = useRef(null);

  // Handle the next button
  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Handle the previous button
  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Adjust position if we're at the duplicated edges
  useEffect(() => {
    // Remove the transition temporarily to "jump" to the other side
    if (currentIndex === totalImages + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Salta de volta para a primeira imagem real
      }, 500); // Tempo da transição
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalImages); // Salta de volta para a última imagem real
      }, 500);
    } else {
      setIsTransitioning(true);
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
          {/* Adicionar uma cópia da última imagem no início */}
          <img className="carousel-image" src={images[totalImages - 1]} alt={`Slide`} />
          {/* Renderizar todas as imagens */}
          {images.map((image, index) => (
            <img key={index} className="carousel-image" src={image} alt={`Slide ${index}`} />
          ))}
          {/* Adicionar uma cópia da primeira imagem no final */}
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
          <h1>Seja bem vindo! <br/>É um prazer receber você!</h1>
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
