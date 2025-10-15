import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { User, ShoppingCart, Search } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo à esquerda */}
      <div className="logo">
        <img src={logo} alt="Logo da Loja" />
      </div>

      {/* Barra de busca central */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <Search size={20} className="icon search-icon" />
      </div>

      {/* Ícones à direita */}
      <div className="navbar-icons">
        <Link to="/login">
          <User size={24} className="icon" />
        </Link>

        <Link to="/carrinho">
          <ShoppingCart size={24} className="icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
