import React from 'react';
import '../styles/Hero.css';

function Hero({ title, subtitle, buttonText }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button>{buttonText}</button>
      </div>
    </section>
  );
}

export default Hero;
