import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Produtos.css';

import { useCart } from "../context/cartcontext";

// Importação dos produtos
import { produtosMasculinos } from './produtosMasculinos';
import { produtosFemininos } from './produtosFemininos';

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const [generoSelecionado, setGeneroSelecionado] = useState('todos');

  const { adicionarAoCarrinho } = useCart();

  // Junta todos os produtos
  const todosProdutos = [...produtosMasculinos, ...produtosFemininos];

  // Filtragem
  const produtosFiltrados = () => {
    let filtrado = [...todosProdutos];

    if (generoSelecionado !== 'todos') {
      filtrado = filtrado.filter(
        (produto) => produto.genero === generoSelecionado
      );
    }

    if (categoriaSelecionada !== 'todos') {
      filtrado = filtrado.filter(
        (produto) => produto.categoria === categoriaSelecionada
      );
    }

    return filtrado;
  };

  return (
    <div>
      <Navbar />

      {/* Filtros */}
      <div className="filtros">
        <select
          value={generoSelecionado}
          onChange={(e) => setGeneroSelecionado(e.target.value)}
        >
          <option value="todos">Todos os Gêneros</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
        >
          <option value="todos">Todas as Categorias</option>
          <option value="camisas">Camisas</option>
          <option value="calcas">Calças</option>
          <option value="casacos">Casacos</option>
          <option value="acessorios">Acessórios</option>
          <option value="calcados">Calçados</option>
        </select>
      </div>

      {/* Lista de produtos */}
      <div className="produtos-grid">
        {produtosFiltrados().map((produto) => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2)}</p>

            <button
              className="btn-comprar"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Produtos;
