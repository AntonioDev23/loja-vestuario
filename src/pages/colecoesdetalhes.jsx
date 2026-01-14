import React from 'react';
import { useParams } from 'react-router-dom';
import { colecoes } from '../data/colecoes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/colecoesdetalhes.css';

function ColecaoDetalhes() {
  const { id } = useParams();

  const colecao = colecoes.find(c => c.id === id);

  if (!colecao) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Coleção não encontrada</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="banner-colecao">
        <img src={colecao.banner} alt={colecao.nome} />
        <h1>{colecao.nome}</h1>
      </div>

      <div className="produtos-colecao">
        {colecao.produtos.map(produto => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ColecaoDetalhes;

