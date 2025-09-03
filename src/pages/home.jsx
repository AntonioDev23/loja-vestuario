import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Fullscreen */}
      <Hero
        title="Moda, estilo e qualidade"
        subtitle="Descubra nossa coleção exclusiva"
        buttonText="Explorar Coleção"
      />

      {/* Seção de destaques */}
      <section className="highlights">
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

      <Newsletter />

      <Footer />
    </div>
  );
}

export default Home;
