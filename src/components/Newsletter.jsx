import React from 'react';
import '../styles/Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Receba nossas ofertas</h2>
      <p>Inscreva-se na nossa newsletter</p>
      <input type="email" placeholder="Digite seu email" />
      <button>Inscrever-se</button>
    </section>
  );
}

export default Newsletter;
