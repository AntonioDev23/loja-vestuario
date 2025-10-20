import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import bone from '../assets/imagens/bone.png';
import calcaJeans from '../assets/imagens/calça-jeans.jpeg';
import camisaEstampada from '../assets/imagens/camisa-estampada.png';
import camisaSimples from '../assets/imagens/camisa-simples.jpg';
import jaquetaJeans from '../assets/imagens/jaqueta-jeans.jpeg';

const produtos = [
  { id: 1, nome: 'Boné Estiloso', preco: 49.90, imagem: bone },
  { id: 2, nome: 'Calça Jeans Masculina', preco: 129.90, imagem: calcaJeans },
  { id: 3, nome: 'Camisa Estampada', preco: 89.90, imagem: camisaEstampada },
  { id: 4, nome: 'Camisa Simples', preco: 69.90, imagem: camisaSimples },
  { id: 5, nome: 'Jaqueta Jeans', preco: 159.90, imagem: jaquetaJeans },
];

function Produtos() {
  return (
    <div className="produtos-page">
      <Navbar />

      <main className="produtos-main">
        <h1>Produtos</h1>

        <div className="produtos-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          {produtos.map(produto => (
            <div key={produto.id} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '10px'
            }}>
              <img src={produto.imagem} alt={produto.nome} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <h3 style={{ marginTop: '10px' }}>{produto.nome}</h3>
              <p style={{ color: '#8B008B', fontWeight: 'bold' }}>R$ {produto.preco.toFixed(2)}</p>
              <button style={{
                marginTop: '10px',
                padding: '8px 15px',
                backgroundColor: '#8B008B',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Produtos;
