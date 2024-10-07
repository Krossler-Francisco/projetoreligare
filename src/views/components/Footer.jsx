import React from 'react';
import './Footer.css'; // Asegúrate de tener una hoja de estilos CSS para los estilos personalizados
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2 className="navbar-logo">Projeto Religare</h2>
        </div>
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/agendar">Formulario de Contacto</a></li>
            <li><a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Pagina</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Quem somos</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/psi">Equipe</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>
        <div className="footer-creators">
          <h3>Creadores</h3>
          <p>Ricardo Falleiros</p>
          <p>Samuel Alguns</p>
          <p>Giovanni Ribeiro</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Francisco Krossler</p>
      </div>
    </footer>
  );
}

export default Footer;
