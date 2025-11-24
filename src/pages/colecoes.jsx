import React from 'react';
import { colecoes } from '../data/colecoes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/colecoes.css';
import { Link } from 'react-router-dom';

function Colecoes() {
  return (
    <div className="page-colecoes">
      <Navbar />

      <main className="colecoes">
        <h2 className="colecoes-titulo">Coleções</h2>

        <div className="colecoes-container">
          {colecoes.map(c => (
            <div key={c.id} className="colecao-item">
              {/* use a própria URL/variável c.banner (se for import) */}
              <img src={c.banner} alt={c.nome} className="colecao-banner" />

              <h3 className="colecao-nome">{c.nome}</h3>
              <p className="colecao-desc">{c.descricao}</p>

              <Link to={`/colecao/${c.id}`} className="btn-ver">
                Ver coleção
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Colecoes;
