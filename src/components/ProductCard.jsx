import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>R$ {price}</p>
      <button>Comprar</button>
    </div>
  );
}

export default ProductCard;
