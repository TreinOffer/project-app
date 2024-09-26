import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import Cabecalho from "../cabecalho";
import "./App.css";
import revenueData from "../../data/revenueData.json";
import sourceData from "../../data/sourceData.json";
import 'font-awesome/css/font-awesome.min.css';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Cabecalho />
      <div className="App">
        <div className="content-wrapper">
          <div className="quadrado-perfil">
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Buscar colaboradores"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '90%',
                  padding: '0.5em 0.8em',
                  borderRadius: '20px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  margin: '1em 0',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.border = '1px solid #ccc'}
                onBlur={(e) => e.target.style.border = '1px solid #ccc'}
              />
              <div style={{
                position: 'absolute',
                right: '40px',
                top: '50%',
                height: '20px',
                width: '1px',
                backgroundColor: '#999',
                transform: 'translateY(-50%)'
              }} />
              <i className="fa fa-search"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
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
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '1em', marginLeft: '0.5em', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '1.2em', color: 'black', fontWeight: 'bold', marginLeft: '0.5em', cursor: 'pointer' }}>Eduardo Pereira</span>
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
              <span style={{ fontSize: '1.2em', color: 'black', fontWeight: 'bold', marginLeft: '0.5em', cursor: 'pointer' }}>Leila Pereira</span>
            </div>
            <div style={{
              height: '1px',
              backgroundColor: '#ccc',
              margin: '1.5em auto',
              width: '70%',
            }} />
          </div>

          {/* Gráficos */}
          <div className="quadrado-grafico">
            <div className="treinamentos-container">
              <div className="treinamentos-box">
                <p className="treinamentos-title">TREINAMENTOS</p>
              </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
