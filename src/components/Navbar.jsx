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

      {/* Menu central */}
      <ul className="menu">
        <li>Home</li>
        <li>Produtos</li>
        <li>Coleções</li>
      </ul>

      {/* Ícones à direita */}
      <div className="navbar-icons">
        {/* Ícone de busca */}
        <Search size={24} className="icon" />

        {/* Link para login */}
        <Link to="/login">
          <User size={24} className="icon" />
        </Link>

        {/* Link para carrinho */}
        <Link to="/carrinho">
          <ShoppingCart size={24} className="icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
