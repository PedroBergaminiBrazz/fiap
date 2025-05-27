import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Problema = () => {
  const data = {
    labels: ["Atual", "Previsão em 10 anos"],
    datasets: [
      {
        label: "Emissão de Poluição (milhões de toneladas)",
        data: [1000, 1500],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Projeção de Poluição Global em 10 anos",
      },
    },
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className="bg-primary text-white text-center py-4">
        <h1>O Problema Energético Global</h1>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mt-4">
        <section>
          <h2>Desafios Globais</h2>
          <p>A dependência de combustíveis fósseis tem causado impactos ambientais significativos, como mudanças climáticas e poluição. Isso cria uma necessidade urgente de transição para fontes de energia renovável.</p>
        </section>

        <section>
          <h2>Impactos Sociais</h2>
          <p>Milhões de pessoas ainda vivem sem acesso a energia confiável, limitando oportunidades de desenvolvimento econômico e social.</p>
        </section>

        {/* Gráfico de Poluição */}
        <section>
          <h2>Projeção de Poluição</h2>
          <Bar data={data} options={options} />
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center py-4 bg-dark text-white">
        <p>© 2024 - Energia Sustentável</p>
      </footer>
    </div>
  );
};

export default Problema;
