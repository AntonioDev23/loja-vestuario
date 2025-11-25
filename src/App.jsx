import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from "./context/cartcontext";

import './styles/index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Carrinho from './pages/carrinho';
import Produtos from './pages/Produtos';
import Colecoes from './pages/colecoes';
import ColecaoDetalhes from './pages/colecoesdetalhes'; // ✔ AQUI CORRIGIDO

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/colecoes" element={<Colecoes />} />
          <Route path="/colecao/:id" element={<ColecaoDetalhes />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

