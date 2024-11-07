// src/views/components/WhatsAppButton.js
import React, { useState } from 'react';
import './WhatsAppButton.css'; // Importar os estilos
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="whatsapp-button" 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`whatsapp-message ${hovered ? 'visible' : ''}`}>
        Envie-nos uma mensagem para consulta!
      </div>
      <Link
        to="/projetoreligare/contact" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="whatsapp-icon" 
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
