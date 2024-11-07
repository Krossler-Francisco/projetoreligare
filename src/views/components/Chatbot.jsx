import React, { useState, useRef, useEffect } from 'react';
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: 'Hola! Soy el bot Religare, ¿cómo te puedo ayudar?', sender: 'bot' }
  ]);
  const [options, setOptions] = useState([
    'Necesito información de precio',
    '¿Cómo hago la inscripción?'
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controla si el chatbot está abierto

  // Referencia para el chat-window
  const chatWindowRef = useRef(null);

  // Función para manejar el mensaje del usuario
  const handleUserMessage = (option) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option, sender: 'user' }
    ]);

    setIsTyping(true); // Simula que el bot está "digitando..."
    setOptions([]); // Oculta las opciones mientras el bot responde

    setTimeout(() => {
      if (option === 'Necesito información de precio') {
        botResponse('El precio de nuestra consulta es de $50 por sesión.');
      } else if (option === '¿Cómo hago la inscripción?') {
        botResponse('Para inscribirte, debes llenar el formulario en nuestro sitio web.');
      } else if (option === 'Necesito más información') {
        botResponse('¿En qué más puedo ayudarte?');
        setOptions([
          'Necesito información de precio',
          '¿Cómo hago la inscripción?'
        ]);
      } else if (option === 'Muchas gracias por la información!') {
        botResponse('¡Gracias a vos, esperamos tu contacto!');
      }
      setIsTyping(false); // Detiene el estado de "digitando" después de la respuesta
    }, 3000); // Simula un retraso para la respuesta del bot
  };

  // Función para manejar la respuesta del bot
  const botResponse = (responseText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: responseText, sender: 'bot' }
    ]);

    if (responseText !== '¿En qué más puedo ayudarte?') {
      setOptions([
        'Muchas gracias por la información!',
        'Necesito más información'
      ]);
    }
  };

  // Efecto para rolar automáticamente hasta la última mensaje
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isOpen]); // Adiciona isOpen como dependencia para rolar quando o chat é aberto

  return (
    <div>
      {/* Botón para abrir el chatbot */}
      <button className="open-chatbot-btn" onClick={() => setIsOpen(!isOpen)}>
        <span className="chat-icon">💬</span>
      </button>

      {/* Modal del chatbot */}
      {isOpen && (
        <div className={`chatbot-container ${isOpen ? 'active' : ''}`}>
          <div className='bot-container'>
            <div className='bot-img-container'>
              <figure className='bot-img'>🤖</figure>
              <p className='bot-text'>Bot Religare</p>
            </div>
            <div>
              <button className='close-chatbot-btn' onClick={() => setIsOpen(!isOpen)}>x</button>
            </div>
          </div>
          <div className="chat-window" ref={chatWindowRef}>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="bot typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>)}
            {options.length > 0 && (
              <div className='options-container'>
                {options.map((option, index) => (
                  <div key={index} className="message user option" onClick={() => handleUserMessage(option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
