import React from 'react';
import '../styles/Home.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

// Exemplo de produtos
import prod1 from '../assets/prod1.png';
import prod2 from '../assets/prod2.png';
import prod3 from '../assets/prod3.png';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />

      <section className="products-section">
        <ProductCard image={prod1} name="Camisa Casual" price="79,90" />
        <ProductCard image={prod2} name="Calça Jeans" price="129,90" />
        <ProductCard image={prod3} name="Tênis Esportivo" price="199,90" />
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
