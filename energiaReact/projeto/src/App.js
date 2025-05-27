import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // ✅ Importação correta
import Home from "./pages/home";
import Problema from "./pages/problema";
import Publico from "./pages/publico";
import Ferramentas from "./pages/ferramenta";


import "./style.css";

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
            <li className="nav-item"><Link className="nav-link active" to="/ferramentas">Ferramentas</Link></li>
            
          </ul>
        </div>
      </nav>

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publico" element={<Publico />} />
          <Route path="/problema" element={<Problema />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          
        </Routes>
      </main>

      <footer className="text-center py-4 bg-dark text-white">
        <p>&copy; 2025 Projeto Energia - Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;