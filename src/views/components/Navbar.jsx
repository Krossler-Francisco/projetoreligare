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
      <div className="navbar-logo">Projeto Religare</div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link className={`link ${isActive('/projetoreligare/')}`} onClick={toggleMenu} to="/projetoreligare/">
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
          <Link className={`link ${isActive('/projetoreligare/novidades')}`} onClick={toggleMenu} to="/projetoreligare/novidades">
            Novidades
          </Link>
        </li>
        <li>
          <Link className={`link ${isActive('/projetoreligare/contact')}`} onClick={toggleMenu} to="/projetoreligare/contact">
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
