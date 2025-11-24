import React from "react";
import { useParams } from "react-router-dom";
import { colecoes } from "../data/colecoes";
import { produtosMasculinos } from "./produtosMasculinos";
import { produtosFemininos } from "./produtosFemininos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ColecaoDetalhe.css";

function ColecaoDetalhe() {
  const { id } = useParams();
  const colecao = colecoes.find(c => c.id === Number(id));

  // junta todos os produtos
  const todos = [...produtosMasculinos, ...produtosFemininos];

  // pega os produtos que estão na coleção
  const produtosDaColecao = todos.filter(p => colecao.produtos.includes(p.id));

  return (
    <div>
      <Navbar />

      <div className="banner-colecao">
        <img src={colecao.banner} alt={colecao.nome} />
        <h1>{colecao.nome}</h1>
      </div>

      <div className="produtos-colecao">
        {produtosDaColecao.map(produto => (
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

export default ColecaoDetalhe;
