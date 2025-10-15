import React, { useEffect } from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { initScrollFade } from '../utils/scrollFade';

function Home() {
  // Inicializa animações de fade-in ao rolar a página
  useEffect(() => {
    initScrollFade();
  }, []);

  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Fullscreen */}
      <Hero
        title="MODA, ESTILO E QUALIDADE"
        subtitle="Descubra nossa coleção exclusiva"
        buttonText="Explorar Coleção"
      />

      {/* Seção de destaques */}
      <section className="highlights fade-in">
        <div className="highlight-card">
          <h3>Nova Coleção</h3>
          <p>Peças exclusivas que definem tendências.</p>
        </div>
        <div className="highlight-card">
          <h3>Promoções</h3>
          <p>Ofertas especiais para você renovar seu guarda-roupa.</p>
        </div>
        <div className="highlight-card">
          <h3>Estilo & Dicas</h3>
          <p>Inspire-se com looks modernos e elegantes.</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter fade-in">
        <Newsletter />
      </section>

      {/* Footer */}
      <footer className="fade-in">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;

