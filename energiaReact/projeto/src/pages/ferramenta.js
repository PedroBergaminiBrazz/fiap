import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Ferramentas = () => {
  return (
    <div>
      {/* Cabeçalho - React + Bootstrap */}
      <header className="bg-primary text-white text-center py-4">
        <h1>Ferramentas</h1>
      </header>

      {/* Conteúdo Principal - React + CSS */}
      <main className="container mt-4">
        <section>
          <h2>Sistemas Fotovoltaicos</h2>
          <p>Desenvolvemos e oferecemos sistemas fotovoltaicos completos, que captam a energia solar de forma eficiente e a convertem em eletricidade utilizável, proporcionando uma solução limpa e acessível para residências e empresas.</p>
        </section>

        <section>
          <h2>Armazenamento de Energia</h2>
          <p>A tecnologia de baterias solares permite o armazenamento da energia gerada durante o dia para uso noturno, garantindo a autonomia energética. Nossas baterias são projetadas para máxima durabilidade e eficiência.</p>
        </section>

        <section>
          <h2>Redes Inteligentes (Smart Grids)</h2>
          <p>Com a implementação de redes inteligentes, a distribuição de energia é otimizada, permitindo uma gestão mais eficiente da energia e a integração com outras fontes renováveis, como a energia eólica.</p>
        </section>

        <section>
          <h2>Monitoramento em Tempo Real</h2>
          <p>Oferecemos ferramentas de monitoramento em tempo real para que nossos clientes possam acompanhar o desempenho de seus sistemas de energia renovável, possibilitando ajustes rápidos e eficazes para otimização do consumo.</p>
        </section>

        <section>
          <h2>Consultoria e Auditoria Energética</h2>
          <p>Além das soluções tecnológicas, também oferecemos serviços de consultoria e auditoria energética, ajudando empresas a entender melhor seu consumo de energia e a implementar estratégias mais sustentáveis e econômicas.</p>
        </section>
      </main>

      {/* Rodapé - React + Bootstrap */}
      <footer className="text-center py-4 bg-dark text-white">
        <p>© 2024 - Energia Sustentável</p>
      </footer>
    </div>
  );
};

export default Ferramentas;