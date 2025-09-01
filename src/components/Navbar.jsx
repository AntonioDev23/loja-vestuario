import React from 'react';
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
        <button>Login</button>
        <button>Carrinho</button>
      </div>
    </nav>
  );
}

export default Navbar;
