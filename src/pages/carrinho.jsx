import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Carrinho.css';

function Carrinho() {
  // Estado inicial: carrinho vazio
  const [cartItems, setCartItems] = useState([]);

  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const increaseQty = (index) => {
    const newCart = [...cartItems];
    newCart[index].quantity += 1;
    setCartItems(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCartItems(newCart);
    }
  };

  // Calcula total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-main">
        <h1>Meu Carrinho</h1>

        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>R$ {item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQty(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(index)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeItem(index)}>Remover</button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
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
