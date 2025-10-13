import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Informe um e-mail válido.');
      return;
    }
    if (senha.length < 4) {
      setError('Senha muito curta (mín. 4 caracteres).');
      return;
    }

    // Simulação de login: guarda usuário no localStorage (apenas demo)
    localStorage.setItem('user', JSON.stringify({ email }));
    // redireciona para a home (ou para /account quando implementar)
    navigate('/');
  };

  return (
    <div className="login-page">
      <Navbar />
      <main className="login-container">
        <div className="login-box">
          <h2>Entrar</h2>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button className="login-btn" type="submit">Entrar</button>
          </form>

          <div className="login-help">
            <button className="link-btn" onClick={() => navigate('/register')}>Criar conta</button>
            <button className="link-btn" onClick={() => alert('Funcionalidade de recuperar senha não implementada ainda.')}>Esqueci a senha</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
