import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { User, ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/cartcontext'; // <-- USA O HOOK CERTO

function Navbar() {
  const { carrinho } = useCart(); // <-- CORRETO

  // Soma total de itens
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <nav className="navbar">
      <div className="navbar-top">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo da Loja" />
        </div>

        {/* Menu */}
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

          {/* Ícone do carrinho com badge */}
          <div className="cart-icon-wrapper">
            <Link to="/carrinho">
              <ShoppingCart size={24} className="icon" />
            </Link>

            {totalItens > 0 && (
              <span className="cart-badge">{totalItens}</span>
            )}
          </div>
        </div>
      </div>

      {/* Busca */}
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
