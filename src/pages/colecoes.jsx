import React from 'react';
import { colecoes } from '../data/colecoes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Colecoes.css';
import { Link } from 'react-router-dom';

function Colecoes() {
  return (
    <div>
      <Navbar />

      <h1 className="titulo-colecoes">Coleções</h1>

      <div className="colecoes-container">
        {colecoes.map(c => (
          <div key={c.id} className="colecao-card">
            <img src={c.banner} alt={c.nome} className="colecao-banner" />
            
            <h2>{c.nome}</h2>

            <p>Descubra as peças selecionadas especialmente para essa coleção.</p>

            <Link to={`/colecao/${c.id}`} className="btn-ver">
              Ver coleção
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Colecoes;
