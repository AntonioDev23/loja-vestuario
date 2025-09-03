import React from 'react';
import Home from './pages/Home';
import './styles/index.css'; // caminho correto para o CSS global

function App() {
  return (
    <div className="App">
      {/* Página inicial com fundo diferenciado */}
      <Home />

      {/* Futuras páginas padrão */}
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;



