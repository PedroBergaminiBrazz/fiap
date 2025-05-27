import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const EvolucaoQualidadeVida = () => {
  const qualityOfLifeData = {
    labels: ["Ano 1", "Ano 3", "Ano 5", "Ano 10"],
    datasets: [
      {
        label: "Índice de Qualidade de Vida",
        data: [73, 76, 80, 94],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        fill: true,
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
        text: "Evolução da Qualidade de Vida com Energia Sustentável",
      },
    },
  };

  return (
    <div className="container mt-4">
      <h2>Impacto na Qualidade de Vida</h2>
      <p>
        O uso de energia sustentável ao longo dos anos pode melhorar significativamente a qualidade de vida das pessoas, reduzindo doenças respiratórias, proporcionando mais acesso à eletricidade e melhorando o bem-estar geral.
      </p>
      <Line data={qualityOfLifeData} options={options} />
      <p className="mt-3">
        <strong>Fontes:</strong>
        <ul>
          <li>
            <a href="https://www.portalsolar.com.br/energia-sustentavel-tudo-o-que-voce-precisa-saber" target="_blank" rel="noopener noreferrer">
              Energia Sustentável: o que é e principais fontes - Portal Solar
            </a>
          </li>
          <li>
            <a href="https://amperi.com.br/canais/sustentabilidade/energia-sustentavel/" target="_blank" rel="noopener noreferrer">
              Energia sustentável: conheça quais são e os benefícios - Amperi
            </a>
          </li>
          <li>
            <a href="https://sebrae.com.br/sites/PortalSebrae/artigos/conheca-os-beneficios-da-implementacao-da-energia-renovavel%2C1eb2b94e3a7e3810VgnVCM100000d701210aRCRD" target="_blank" rel="noopener noreferrer">
              Conheça os benefícios da implementação da energia renovável - Sebrae
            </a>
          </li>
          <li>
            <a href="https://sunne.com.br/blog/vantagens-da-energia-renovavel/" target="_blank" rel="noopener noreferrer">
              Vantagens da energia renovável: desenvolvimento sustentável - Sunne
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default EvolucaoQualidadeVida;
