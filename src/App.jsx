import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Carrinho from './pages/carrinho';
import Produtos from './pages/Produtos';

// 🆕 Importando as novas páginas
import Colecoes from './pages/colecoes';
import ColecoesDetalhes from './pages/colecoesdetalhes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/produtos" element={<Produtos />} />

          {/* 🆕 Rotas das coleções */}
          <Route path="/colecoes" element={<Colecoes />} />
          <Route path="/colecoes/:id" element={<ColecoesDetalhes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
