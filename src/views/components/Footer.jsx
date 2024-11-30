import React from 'react';
import './Footer.css'; // Asegúrate de tener una hoja de estilos CSS para los estilos personalizados
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2 translate="no" className="navbar-logo">Projeto Religare</h2>
        </div>
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="https://wa.me/+5512991917452" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a translate="no" href="https://www.instagram.com/projetoreligare.psi/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a translate="no" href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1tEnc9bt_6a1wu882HrpXw50rn5CINZpjF365Kz-eyCQ%2Fedit%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYz6NeAryYncrLInhAzyP2DKqQ_FGuBTsMcUmkQoc_vjnqhmM1zPxJ7LjQ_aem_mGTldvm2aYo1CMtxVDFgxQ&e=AT2AxAmz1tIokqEVz203w8C4XsWsyi4rxBFxX5qgN_87P068Nsj9deJ68V6vjlghLDwFu1QRfzM_T4gyKxGk6ol55E8Nz652h53x5QFlWWRPTO-U0iSmTg" target="_blank" rel="noopener noreferrer">Formulario</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Pagina</h3>
          <ul>
            <li><Link translate="no" to="./projetoreligare/">Home</Link></li>
            <li><Link to="./projetoreligare/about">Equipe</Link></li>
            <li><Link to="./projetoreligare/services">Serviços</Link></li>
        </ul>
        </div>
        <div className="footer-creators footer-links">
          <h3>Creadores</h3>
          <p><a translate="no" href='https://wa.me/+5512991917452'>Ricardo Falleiros</a></p>
          <p><a translate="no" href='https://wa.me/+5512996644952'>Samuel Tomé</a></p>
          <p><a translate="no" href='https://wa.me/+5512974018966'>Giovanni Ribeiro</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <a className='krossler' target='_blank' href="https://krossler-portfolio.vercel.app">Francisco Krossler</a></p>
      </div>
    </footer>
  );
}

export default Footer;
