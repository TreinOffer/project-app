import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import Cabecalho from "../cabecalho";
import "./App.css";
import revenueData from "../../data/revenueData.json";
import sourceData from "../../data/sourceData.json";
import 'font-awesome/css/font-awesome.min.css';

import imgs from "../../imgs/arrayImagens";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function App() {
  const [showStats, setShowStats] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <>
      <Cabecalho />
      <div className="content-wrapper">
        <section className="quadrado-perfil">
          <div className="divBuscarTecGraf" style={{ display: 'flex' }}>
            <input
              type="text"
              placeholder="Buscar colaboradores"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '95%',
                padding: '10px 20px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                outline: 'none',
                margin: '20px 15px',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.border = '1px solid #ccc'}
              onBlur={(e) => e.target.style.border = '1px solid #ccc'}
            />            
            <i className="buscarTecGraf fa fa-search"
              style={{                
                color: '#999',
                cursor: 'pointer'
              }}
            />
          </div>

          <div style={{
            height: '1px',
            backgroundColor: '#ccc',
            margin: '0.5em 0',
          }} />

          <div className="perfil-section">
            <img
              src="http://localhost:3000/static/media/perfilEduardoTest.574b9d49835217977ba4.jpg"
              alt="Perfil Eduardo"
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '1em', marginLeft: '0.5em', cursor: 'pointer', marginTop: '10px' }}
            />
            <span style={{ fontSize: '1.2em', color: 'black', fontWeight: 'bold', marginLeft: '0.5em', cursor: 'pointer', marginTop: '-10px' }}>Eduardo Pereira</span>
          </div>
          <div style={{
            height: '1px',
            backgroundColor: '#ccc',
            margin: '1.5em auto',
            width: '70%',
          }} />

          <div className="perfil-section">
            <img
              src="http://localhost:3000/static/media/perfilLeilaTest.8c8aa3515d4022ceb34d.jpg"
              alt="Perfil Leila"
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '1em', marginLeft: '0.5em', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '1.2em', color: 'black', fontWeight: 'bold', marginLeft: '0.5em', cursor: 'pointer', marginTop: '10px' }}>Leila Pereira</span>
          </div>
          <div style={{
            height: '1px',
            backgroundColor: '#ccc',
            margin: '1.5em auto',
            width: '70%',
          }} />
        </section>

        <section className="quadrado-grafico">
            <div className="perf-colab">
              <div className="foto-colab">
                <img src={imgs.tabEmpty} alt="colab-foto" />
              </div>
              <div className="mat-filtro">
                <div className="materia-filtra">
                  <img src={imgs.filter} alt="icon-filtro" />
                  <ul>
                    <li>Materia 1</li>
                    <li>Materia 2</li>
                    <li>Materia 3</li>
                  </ul>
                </div>
                <div className="mat-pontuacao circle">
                  <h2>Best Score</h2>
                  <p className="circle">Pontuacao</p>
                </div>
              </div>
            </div>

            <div className="filtro-modulo">
              <ul>
                <li>Modulo 1</li>
                <li>Modulo 2</li>
                <li>Modulo 3</li>
              </ul>
            </div>


          <div className="dataCard revenueCard">
            <Line
              data={{
                labels: revenueData.map((data) => data.label),
                datasets: [
                  {
                    label: "Tempo",
                    data: revenueData.map((data) => data.revenue),
                    backgroundColor: "#064FF0",
                    borderColor: "#064FF0",
                  },
                  {
                    label: "Mês",
                    data: revenueData.map((data) => data.cost),
                    backgroundColor: "#FF3030",
                    borderColor: "#FF3030",
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  },
                },
                plugins: {
                  title: {
                    text: "Tempo gasto na plataforma",
                  },
                },
              }}
            />
          </div>

          <div className="dataCard customerCard">
            <Bar
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Diárias",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: [
                      "rgba(43, 63, 229, 1)",
                      "rgba(250, 192, 19, 1)",
                      "rgba(34, 139, 34, 1)",
                    ],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Check-ins diário",
                  },
                },
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
}