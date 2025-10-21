import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Produtos.css';

// Importando imagens locais (50 produtos)
import produto1 from '../assets/imagens/produto1.jpg';
import produto2 from '../assets/imagens/produto2.jpg';
import produto3 from '../assets/imagens/produto3.jpg';
import produto4 from '../assets/imagens/produto4.jpg';
import produto5 from '../assets/imagens/produto5.jpg';
import produto6 from '../assets/imagens/produto6.jpg';
import produto7 from '../assets/imagens/produto7.jpg';
import produto8 from '../assets/imagens/produto8.jpg';
import produto9 from '../assets/imagens/produto9.jpg';
import produto10 from '../assets/imagens/produto10.jpg';
import produto11 from '../assets/imagens/produto11.jpg';
import produto12 from '../assets/imagens/produto12.jpg';
import produto13 from '../assets/imagens/produto13.jpg';
import produto14 from '../assets/imagens/produto14.jpg';
import produto15 from '../assets/imagens/produto15.jpg';
import produto16 from '../assets/imagens/produto16.jpg';
import produto17 from '../assets/imagens/produto17.jpg';
import produto18 from '../assets/imagens/produto18.jpg';
import produto19 from '../assets/imagens/produto19.jpg';
import produto20 from '../assets/imagens/produto20.jpg';
import produto21 from '../assets/imagens/produto21.jpg';
import produto22 from '../assets/imagens/produto22.jpg';
import produto23 from '../assets/imagens/produto23.jpg';
import produto24 from '../assets/imagens/produto24.jpg';
import produto25 from '../assets/imagens/produto25.jpg';
import produto26 from '../assets/imagens/produto26.jpg';
import produto27 from '../assets/imagens/produto27.jpg';
import produto28 from '../assets/imagens/produto28.jpg';
import produto29 from '../assets/imagens/produto29.jpg';
import produto30 from '../assets/imagens/produto30.jpg';
import produto31 from '../assets/imagens/produto31.jpg';
import produto32 from '../assets/imagens/produto32.jpg';
import produto33 from '../assets/imagens/produto33.jpg';
import produto34 from '../assets/imagens/produto34.jpg';
import produto35 from '../assets/imagens/produto35.jpg';
import produto36 from '../assets/imagens/produto36.jpg';
import produto37 from '../assets/imagens/produto37.jpg';
import produto38 from '../assets/imagens/produto38.jpg';
import produto39 from '../assets/imagens/produto39.jpg';
import produto40 from '../assets/imagens/produto40.jpg';
import produto41 from '../assets/imagens/produto41.jpg';
import produto42 from '../assets/imagens/produto42.jpg';
import produto43 from '../assets/imagens/produto43.jpg';
import produto44 from '../assets/imagens/produto44.jpg';
import produto45 from '../assets/imagens/produto45.jpg';
import produto46 from '../assets/imagens/produto46.jpg';
import produto47 from '../assets/imagens/produto47.jpg';
import produto48 from '../assets/imagens/produto48.jpg';
import produto49 from '../assets/imagens/produto49.jpg';
import produto50 from '../assets/imagens/produto50.jpg';

function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');

  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 49.90, categoria: 'camisas', imagem: produto1 },
    { id: 2, nome: 'Produto 2', preco: 59.90, categoria: 'camisas', imagem: produto2 },
    { id: 3, nome: 'Produto 3', preco: 69.90, categoria: 'camisas', imagem: produto3 },
    { id: 4, nome: 'Produto 4', preco: 79.90, categoria: 'camisas', imagem: produto4 },
    { id: 5, nome: 'Produto 5', preco: 89.90, categoria: 'camisas', imagem: produto5 },
    { id: 6, nome: 'Produto 6', preco: 99.90, categoria: 'camisas', imagem: produto6 },
    { id: 7, nome: 'Produto 7', preco: 109.90, categoria: 'camisas', imagem: produto7 },
    { id: 8, nome: 'Produto 8', preco: 119.90, categoria: 'camisas', imagem: produto8 },
    { id: 9, nome: 'Produto 9', preco: 129.90, categoria: 'camisas', imagem: produto9 },
    { id: 10, nome: 'Produto 10', preco: 139.90, categoria: 'camisas', imagem: produto10 },

    { id: 11, nome: 'Produto 11', preco: 149.90, categoria: 'calcas', imagem: produto11 },
    { id: 12, nome: 'Produto 12', preco: 159.90, categoria: 'calcas', imagem: produto12 },
    { id: 13, nome: 'Produto 13', preco: 169.90, categoria: 'calcas', imagem: produto13 },
    { id: 14, nome: 'Produto 14', preco: 179.90, categoria: 'calcas', imagem: produto14 },
    { id: 15, nome: 'Produto 15', preco: 189.90, categoria: 'calcas', imagem: produto15 },
    { id: 16, nome: 'Produto 16', preco: 199.90, categoria: 'calcas', imagem: produto16 },
    { id: 17, nome: 'Produto 17', preco: 209.90, categoria: 'calcas', imagem: produto17 },
    { id: 18, nome: 'Produto 18', preco: 219.90, categoria: 'calcas', imagem: produto18 },
    { id: 19, nome: 'Produto 19', preco: 229.90, categoria: 'calcas', imagem: produto19 },
    { id: 20, nome: 'Produto 20', preco: 239.90, categoria: 'calcas', imagem: produto20 },

    { id: 21, nome: 'Produto 21', preco: 249.90, categoria: 'casacos', imagem: produto21 },
    { id: 22, nome: 'Produto 22', preco: 259.90, categoria: 'casacos', imagem: produto22 },
    { id: 23, nome: 'Produto 23', preco: 269.90, categoria: 'casacos', imagem: produto23 },
    { id: 24, nome: 'Produto 24', preco: 279.90, categoria: 'casacos', imagem: produto24 },
    { id: 25, nome: 'Produto 25', preco: 289.90, categoria: 'casacos', imagem: produto25 },
    { id: 26, nome: 'Produto 26', preco: 299.90, categoria: 'casacos', imagem: produto26 },
    { id: 27, nome: 'Produto 27', preco: 309.90, categoria: 'casacos', imagem: produto27 },
    { id: 28, nome: 'Produto 28', preco: 319.90, categoria: 'casacos', imagem: produto28 },
    { id: 29, nome: 'Produto 29', preco: 329.90, categoria: 'casacos', imagem: produto29 },
    { id: 30, nome: 'Produto 30', preco: 339.90, categoria: 'casacos', imagem: produto30 },

    { id: 31, nome: 'Produto 31', preco: 349.90, categoria: 'acessorios', imagem: produto31 },
    { id: 32, nome: 'Produto 32', preco: 359.90, categoria: 'acessorios', imagem: produto32 },
    { id: 33, nome: 'Produto 33', preco: 369.90, categoria: 'acessorios', imagem: produto33 },
    { id: 34, nome: 'Produto 34', preco: 379.90, categoria: 'acessorios', imagem: produto34 },
    { id: 35, nome: 'Produto 35', preco: 389.90, categoria: 'acessorios', imagem: produto35 },
    { id: 36, nome: 'Produto 36', preco: 399.90, categoria: 'acessorios', imagem: produto36 },
    { id: 37, nome: 'Produto 37', preco: 409.90, categoria: 'acessorios', imagem: produto37 },
    { id: 38, nome: 'Produto 38', preco: 419.90, categoria: 'acessorios', imagem: produto38 },
    { id: 39, nome: 'Produto 39', preco: 429.90, categoria: 'acessorios', imagem: produto39 },
    { id: 40, nome: 'Produto 40', preco: 439.90, categoria: 'acessorios', imagem: produto40 },

    { id: 41, nome: 'Produto 41', preco: 449.90, categoria: 'calcados', imagem: produto41 },
    { id: 42, nome: 'Produto 42', preco: 459.90, categoria: 'calcados', imagem: produto42 },
    { id: 43, nome: 'Produto 43', preco: 469.90, categoria: 'calcados', imagem: produto43 },
    { id: 44, nome: 'Produto 44', preco: 479.90, categoria: 'calcados', imagem: produto44 },
    { id: 45, nome: 'Produto 45', preco: 489.90, categoria: 'calcados', imagem: produto45 },
    { id: 46, nome: 'Produto 46', preco: 499.90, categoria: 'calcados', imagem: produto46 },
    { id: 47, nome: 'Produto 47', preco: 509.90, categoria: 'calcados', imagem: produto47 },
    { id: 48, nome: 'Produto 48', preco: 519.90, categoria: 'calcados', imagem: produto48 },
    { id: 49, nome: 'Produto 49', preco: 529.90, categoria: 'calcados', imagem: produto49 },
    { id: 50, nome: 'Produto 50', preco: 539.90, categoria: 'calcados', imagem: produto50 },
  ];

  const produtosFiltrados = categoriaSelecionada === 'todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoriaSelecionada);

  return (
    <div className="produtos-page">
      <Navbar />

      <main className="produtos-main">
        <h1>Produtos</h1>

        {/* Filtros */}
        <div className="filtros">
          <button onClick={() => setCategoriaSelecionada('todos')}>Todos</button>
          <button onClick={() => setCategoriaSelecionada('camisas')}>Camisas</button>
          <button onClick={() => setCategoriaSelecionada('calcas')}>Calças</button>
          <button onClick={() => setCategoriaSelecionada('casacos')}>Casacos</button>
          <button onClick={() => setCategoriaSelecionada('acessorios')}>Acessórios</button>
          <button onClick={() => setCategoriaSelecionada('calcados')}>Calçados</button>
        </div>

        {/* Grid de produtos */}
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
