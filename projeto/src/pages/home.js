import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Home = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatus("error");
      return;
    }

    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
      setFormData({ nome: "", email: "", mensagem: "" });
    }, 2000);
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className="bg-primary text-white text-center py-4">
        <h1>Energia para um Futuro Sustentável</h1>
        <p>Descubra soluções inovadoras para os desafios energéticos globais.</p>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mt-4">
        <section>
          <h2>Bem-vindo</h2>
          <p>Nosso projeto oferece soluções de energia renovável e sustentável. Explore as páginas para saber mais.</p>
        </section>

        {/* Formulário de Contato */}
        <section>
          <h2>Fale Conosco</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea className="form-control" id="mensagem" name="mensagem" rows="3" value={formData.mensagem} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>

          {status === "processing" && <div className="alert alert-info mt-3">Enviando sua mensagem... Por favor, aguarde.</div>}
          {status === "success" && <div className="alert alert-success mt-3">Sua mensagem foi enviada com sucesso!</div>}
          {status === "error" && <div className="alert alert-danger mt-3">Por favor, preencha todos os campos antes de enviar.</div>}
        </section>

        {/* Vídeo Pitch */}
        <section>
          <h2>Vídeo Pitch</h2>
          <a href="https://youtu.be/ZI-SB82_DLo" target="_blank" className="btn btn-secondary" rel="noopener noreferrer">Assista ao Vídeo</a>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center py-4 bg-dark text-white">
        <p>© 2024 - Energia Sustentável</p>
      </footer>
    </div>
  );
};

export default Home;