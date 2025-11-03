import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Produtos.css';

// Importando arrays de produtos
import { produtosMasculinos } from '../data/produtosMasculinos';
import { produtosFemininos } from '../data/produtosFemininos'; // Quando tiver pronto

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const [generoSelecionado, setGeneroSelecionado] = useState('todos');

  // Função que retorna todos os produtos de acordo com os filtros
  const produtosFiltrados = () => {
    let todosProdutos = [...produtosMasculinos, ...produtosFemininos]; // Junta masculino + feminino

    // Filtra por gênero
    if (generoSelecionado !== 'todos') {
      todosProdutos = todosProdutos.filter(produto => produto.genero === generoSelecionado);
    }

    // Filtra por categoria
    if (categoriaSelecionada !== 'todos') {
      todosProdutos = todosProdutos.filter(produto => produto.categoria === categoriaSelecionada);
    }

    return todosProdutos;
  };

  return (
    <div>
      <Navbar />

      {/* Filtros */}
      <div className="filtros">
        <select value={generoSelecionado} onChange={(e) => setGeneroSelecionado(e.target.value)}>
          <option value="todos">Todos os Gêneros</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <select value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(e.target.value)}>
          <option value="todos">Todas as Categorias</option>
          <option value="camisas">Camisas</option>
          <option value="calcas">Calças</option>
          <option value="casacos">Casacos</option>
          <option value="acessorios">Acessórios</option>
          <option value="calcados">Calçados</option>
        </select>
      </div>

      {/* Lista de produtos */}
      <div className="produtos-container">
        {produtosFiltrados().map(produto => (
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

export default Produtos;
