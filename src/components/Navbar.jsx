import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { User, ShoppingCart, Search } from 'lucide-react';
import { CartContext } from '../context/cartcontext'; // <-- IMPORTANTE

function Navbar() {
  const { cart } = useContext(CartContext);

  // Soma total de itens
  const totalItens = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

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

          {/* Login */}
          <Link to="/login">
            <User size={24} className="icon" />
          </Link>

          {/* Carrinho com badge */}
          <div className="cart-icon-wrapper">
            <Link to="/carrinho">
              <ShoppingCart size={24} className="icon" />
            </Link>

            {totalItens > 0 && (
              <span className="cart-badge">
                {totalItens}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Barra de busca abaixo */}
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
