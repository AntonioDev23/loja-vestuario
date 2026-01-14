import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Carrinho.css';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/cartcontext';

function Carrinho() {
  const { carrinho, removerDoCarrinho, diminuirQuantidade, adicionarAoCarrinho } = useCart();

  const total = carrinho.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-main">
        <h1>Meu Carrinho</h1>

        {carrinho.length === 0 ? (
          <div className="cart-empty">
            <ShoppingCart className="cart-icon" size={80} />
            <p>Seu carrinho está vazio.</p>
          </div>
        ) : (
          <div className="cart-items">
            {carrinho.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.imagem} alt={item.nome} />

                <div className="item-info">
                  <h3>{item.nome}</h3>
                  <p>R$ {item.preco.toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => adicionarAoCarrinho(item)}>+</button>
                  </div>
                </div>

                <button className="remove-btn" onClick={() => removerDoCarrinho(item.id)}>
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}

        {carrinho.length > 0 && (
          <div className="cart-summary">
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <button className="checkout-btn">Finalizar Compra</button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Carrinho;
