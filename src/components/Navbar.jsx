import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo da Loja" />
      </div>

      <ul className="menu">
        <li>Home</li>
        <li>Produtos</li>
        <li>Coleções</li>
        <li>Contato</li>
      </ul>

      <div className="navbar-icons">
        <input type="text" placeholder="Buscar..." />

        {/* Link para a página de login */}
        <Link to="/login" className="login-link">
          <button>Login</button>
        </Link>

        {/* Link para a página do carrinho */}
        <Link to="/carrinho">
          <button>Carrinho</button>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
