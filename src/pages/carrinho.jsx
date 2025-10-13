import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Cart.css';

function Cart() {
  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-main">
        <h1>Meu Carrinho</h1>
        <p>Seu carrinho está vazio.</p>
        {/* Aqui depois adicionaremos os produtos que o usuário adicionar */}
      </main>

      <Footer />
    </div>
  );
}

export default Cart;

