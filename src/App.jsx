import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'; // mantém o CSS global
import Home from './pages/Home';
import Login from './pages/Login';
import Carrinho from './pages/carrinho'; // importando a página do carrinho

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrinho" element={<Carrinho />} /> {/* rota do carrinho */}
          {/* Futuras páginas podem ser adicionadas aqui */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


