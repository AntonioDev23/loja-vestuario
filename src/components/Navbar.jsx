import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Linha superior: logo, menu e ícones */}
      <div className="navbar-top">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo da Loja" />
        </div>

        {/* Menu de navegação */}
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/colecoes">Coleções</Link></li>
        </ul>

        {/* Ícones: Login e Carrinho */}
        <div className="navbar-icons">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/carrinho">
            <button>Carrinho</button>
          </Link>
        </div>
      </div>

      {/* Barra de busca centralizada abaixo do menu */}
      <div className="navbar-search">
        <input className="search-input" type="text" placeholder="Buscar..." />
        <button className="search-btn">Buscar</button>
      </div>
    </nav>
  );
}

export default Navbar;
