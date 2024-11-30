import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Obtén la ubicación actual

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div translate="no" className="navbar-logo">Projeto Religare</div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link translate="no" className={`link ${isActive('/projetoreligare/')}`} onClick={toggleMenu} to="/projetoreligare/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`link ${isActive('/projetoreligare/about')}`} onClick={toggleMenu} to="/projetoreligare/about">
            Quem somos
          </Link>
        </li>
        <li>
          <Link className={`link ${isActive('/projetoreligare/services')}`} onClick={toggleMenu} to="/projetoreligare/services">
            Nossos serviços
          </Link>
        </li>
        <li>
          <Link className={`link ${isActive('/projetoreligare/contact')}`} onClick={toggleMenu} to="/projetoreligare/contact">
            Contato
          </Link>
        </li>
        <li>
          <a translate="no" className='navbar-btn' href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1tEnc9bt_6a1wu882HrpXw50rn5CINZpjF365Kz-eyCQ%2Fedit%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYz6NeAryYncrLInhAzyP2DKqQ_FGuBTsMcUmkQoc_vjnqhmM1zPxJ7LjQ_aem_mGTldvm2aYo1CMtxVDFgxQ&e=AT2AxAmz1tIokqEVz203w8C4XsWsyi4rxBFxX5qgN_87P068Nsj9deJ68V6vjlghLDwFu1QRfzM_T4gyKxGk6ol55E8Nz652h53x5QFlWWRPTO-U0iSmTg">Formulário</a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
