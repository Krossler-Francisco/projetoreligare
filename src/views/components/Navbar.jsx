import React, { useState } from 'react';
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
      <div className="navbar-logo">Projeto Religare</div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link className={`link ${isActive('/')}`} onClick={toggleMenu} to="/projetoreligare/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`link ${isActive('/about')}`} onClick={toggleMenu} to="/projetoreligare/about">
            Quem somos
          </Link>
        </li>
        <li>
          <Link className={`link ${isActive('/services')}`} onClick={toggleMenu} to="/projetoreligare/services">
            Serviços
          </Link>
        </li>
        <li>
          <Link className={`link ${isActive('/psi')}`} onClick={toggleMenu} to="/projetoreligare/psi">
            Equipe
          </Link>
        </li>
        <li>
          <Link className={`link ${isActive('/contact')}`} onClick={toggleMenu} to="/projetoreligare/contact">
            Contato
          </Link>
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
