import React from 'react';

function Contact() {

  const formLink = "/agendar";

  return (
    <div className='home'>
      <h1 className='info-h1'>Contato</h1>
      <p>Entre em contato com a gente</p>
      <ul className="contact-links">
        <li><a href={formLink} target="_blank" className="contact-button">Formulário <span>➜</span></a></li>
        <li><a href={formLink} target="_blank" className="contact-button">Whatsapp <span>➜</span></a></li>
        <li><a href={formLink} target="_blank" className="contact-button">Facebook <span>➜</span></a></li>
        <li><a href={formLink} target="_blank" className="contact-button">Instagram <span>➜</span></a></li>
      </ul>
    </div>
  );
}

export default Contact;
