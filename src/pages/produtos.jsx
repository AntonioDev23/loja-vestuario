import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Produtos.css';

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');

  const produtos = [
    { id: 1, nome: 'Camiseta Básica', preco: 49.90, categoria: 'camisas', imagem: 'https://via.placeholder.com/200' },
    { id: 2, nome: 'Calça Jeans', preco: 129.90, categoria: 'calcas', imagem: 'https://via.placeholder.com/200' },
    { id: 3, nome: 'Boné Preto', preco: 59.90, categoria: 'acessorios', imagem: 'https://via.placeholder.com/200' },
    { id: 4, nome: 'Camiseta Estampada', preco: 69.90, categoria: 'camisas', imagem: 'https://via.placeholder.com/200' },
    { id: 5, nome: 'Jaqueta Jeans', preco: 189.90, categoria: 'casacos', imagem: 'https://via.placeholder.com/200' },
  ];

  const produtosFiltrados = categoriaSelecionada === 'todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoriaSelecionada);

  return (
    <div className="produtos-page">
      <Navbar />

      <main className="produtos-main">
        <h1>Produtos</h1>

        <div className="filtros">
          <button onClick={() => setCategoriaSelecionada('todos')}>Todos</button>
          <button onClick={() => setCategoriaSelecionada('camisas')}>Camisas</button>
          <button onClick={() => setCategoriaSelecionada('calcas')}>Calças</button>
          <button onClick={() => setCategoriaSelecionada('casacos')}>Casacos</button>
          <button onClick={() => setCategoriaSelecionada('acessorios')}>Acessórios</button>
        </div>

        <div className="produtos-grid">
          {produtosFiltrados.map(produto => (
            <div key={produto.id} className="produto-card">
              <img src={produto.imagem} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <p>R$ {produto.preco.toFixed(2)}</p>
              <button>Adicionar ao carrinho</button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Produtos;
