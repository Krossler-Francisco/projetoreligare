import React from 'react';
import "./contact.css"

function Contact() {

  const formLink = "/agendar";

  return (
    <div className='home contact'>
      <h1 className='info-h1'>Contato</h1>
      <p>Entre em contato com a gente</p>
      <ul className="contact-links">
        <li><a href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1tEnc9bt_6a1wu882HrpXw50rn5CINZpjF365Kz-eyCQ%2Fedit%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYz6NeAryYncrLInhAzyP2DKqQ_FGuBTsMcUmkQoc_vjnqhmM1zPxJ7LjQ_aem_mGTldvm2aYo1CMtxVDFgxQ&e=AT2AxAmz1tIokqEVz203w8C4XsWsyi4rxBFxX5qgN_87P068Nsj9deJ68V6vjlghLDwFu1QRfzM_T4gyKxGk6ol55E8Nz652h53x5QFlWWRPTO-U0iSmTg" target="_blank" className="contact-button">Formulário <span>➜</span></a></li>
        <li><a href="https://wa.me/+5512991917452" target="_blank" className="contact-button">Whatsapp <span>➜</span></a></li>
        <li><a href="https://www.instagram.com/projetoreligare.psi/" target="_blank" className="contact-button">Instagram <span>➜</span></a></li>
      </ul>
    </div>
  );
}

export default Contact;
