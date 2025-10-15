import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { User, ShoppingCart, Search } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        {/* Logo à esquerda */}
        <div className="logo">
          <img src={logo} alt="Logo da Loja" />
        </div>

        {/* Menu central */}
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/colecoes">Coleções</Link></li>
        </ul>

        {/* Ícones à direita */}
        <div className="navbar-icons">
          <Link to="/login">
            <User size={24} className="icon" />
          </Link>
          <Link to="/carrinho">
            <ShoppingCart size={24} className="icon" />
          </Link>
        </div>
      </div>

      {/* Barra de busca abaixo do menu */}
      <div className="navbar-search">
        <input type="text" className="search-input" placeholder="Buscar..." />
        <button className="search-btn">
          <Search size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
