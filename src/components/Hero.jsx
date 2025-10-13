import React from 'react';
import '../styles/Hero.css';

function Hero({ title, subtitle, buttonText }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="hero-btn">{buttonText}</button>
      </div>
    </section>
  );
}

export default Hero;
