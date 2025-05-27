import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Importações do React Router
import Home from "./pages/home"; // Importação da página Home
import Problema from "./pages/problema"; // Importação da página Problema
import Publico from "./pages/publico"; // Importação da página Público
import Ferramentas from "./pages/ferramenta"; // Importação da página Ferramentas
import Calculadora from "./pages/calculadora"; // Importação da nova página Calculadora

import "./style.css"; // Importação do CSS

function App() {
  return (
    <Router>
      <header className="bg-primary text-white text-center py-4">
        <h1>Projeto Energia</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/publico">Público</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/problema">Problema</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ferramentas">Ferramentas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/calculadora">Calculadora de Consumo</Link></li>
          </ul>
        </div>
      </nav>
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publico" element={<Publico />} />
          <Route path="/problema" element={<Problema />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/calculadora" element={<Calculadora />} /> {/* Nova rota */}
        </Routes>
      </main>
      <footer className="text-center py-4 bg-dark text-white">
        <p>&copy; 2025 Projeto Energia - Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
}

export default App; // Exportação do componente App
