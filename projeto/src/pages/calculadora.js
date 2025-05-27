import React, { useState } from 'react';

const Calculadora = () => {
  const [potencia, setPotencia] = useState('');
  const [horas, setHoras] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularConsumo = () => {
    const consumoMensal = (potencia * horas * 30) / 1000; // kWh
    setResultado(consumoMensal);
  };

  return (
    <div className="container mt-4">
      <h2>Calculadora de Consumo de Energia</h2>
      <div className="form-group">
        <label htmlFor="potencia">Potência do Aparelho (em Watts):</label>
        <input
          type="number"
          className="form-control"
          id="potencia"
          value={potencia}
          onChange={(e) => setPotencia(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="horas">Horas de Uso por Dia:</label>
        <input
          type="number"
          className="form-control"
          id="horas"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={calcularConsumo}>
        Calcular
      </button>
      {resultado !== null && (
        <div className="mt-3">
          <h4>Consumo Mensal: {resultado.toFixed(2)} kWh</h4>
        </div>
      )}
    </div>
  );
};

export default Calculadora;
