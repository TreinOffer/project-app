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

  const toggleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <>
      <Cabecalho />
      <div className="content-wrapper">
        <section className="quadrado-perfil"></section>
        <section className="quadrado-grafico">

          <div className="perf-colab">

            <div className="foto-colab">
              <img src={ imgs.tabEmpty } alt="colab-foto" />
            </div>

            {/* Filtrar por materia do colaborador */}
            <div className="mat-filtro">

              <div className="materia-filtra">
                <img src={ imgs.filter } alt="icon-filtro" />
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
          {/* <button onClick={toggleStats} className="estatisticas-button">
            Estatísticas <span className={showStats ? "fa fa-chevron-up" : "fa fa-chevron-down"}></span>
          </button>

          {showStats && (
            <> */}
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
                          "rgba(43, 63, 229, 0.8)",
                          "rgba(250, 192, 19, 0.8)",
                          "rgba(253, 135, 135, 0.8)",
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
            {/* </>
          )} */}
        </section>
      </div>
    </>
  );
}
