import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import Cabecalho from "../cabecalho/cabecalho";
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
defaults.plugins.title.color = '#ffffff';

export default function App() {
  const [showStats, setShowStats] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [Colaboradores, setColaboradores] = useState([]);
  const [colabDetails, setColabDetails] = useState({
    imagem: imgs.tabEmpty,
    pontuacao: 'Pontuação',
    materia: '',
    modulo: '',
  });

  const handleRefresh = async (buscar) => {
    let read = Array();
    if (buscar.length > 0) {
      read = await fetchColaborador(buscar);
    } else {
      read = await fetchColaborador('');
    };
    setColaboradores((...prev) => {
      return read;
    });
  };

  const fetchColaborador = async (unique) => {
    const token = localStorage.getItem('token')
    try {
      const request = await fetch(`${process.env.REACT_APP_BACKEND}/colaboradores?Unique=${unique}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await request.json();
      console.log('eduardo ', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function getColab(){
      await handleRefresh(searchTerm);
    };
    getColab();
    console.log(colabDetails);
  }, [searchTerm, colabDetails]);

  async function getFoto(image) {
    const imagem = `${process.env.REACT_APP_BACKEND}/imgs/${image}`;
    setColabDetails(prev => ({
      ...prev,
      imagem: imagem
    }));
    console.log("simImagem", image, "return: ", imagem);
  };

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

          <div style={{ height: '1px', backgroundColor: '#ccc', margin: '0.5em 0' }} />

          {Colaboradores.map((colab) => (
            <div key={colab.Matricula} className="perfil-section"
              onClick={async () => await getFoto(colab.Imagem)}
            >
              <div className="colab-informations">
                <div style={{ width: '100%' }} >
                  <img
                    src={`${process.env.REACT_APP_BACKEND}/imgs/${colab.Imagem}`}
                    alt={`${colab.Nome}`}
                    style={{
                      width: '96px',
                      height: '96px',
                      borderRadius: '50%',
                      marginRight: '1em',
                      marginLeft: '0.5em',
                      cursor: 'pointer',
                      marginTop: '10px',
                    }}
                  />
                </div>
                <div className="nome-colab-graf">
                  <span>{colab.Nome}</span>
                </div>
              </div>
              <div style={{ height: '1px', backgroundColor: '#ccc', margin: '1.5em auto', width: '96%', borderRadius: '50px' }} />
            </div>
          ))}
        </section>

        <section className="quadrado-grafico">
          <div className="perf-colab">
            <div className="foto-colab">
              <img src={colabDetails.imagem} alt="colab-foto" />
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
                    label: "Tempo Gasto (em minutos)",
                    data: revenueData.map((data) => data.revenue),
                    backgroundColor: "#4491c8",
                    borderColor: "#4491c8",
                    fill: false,
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
                    display: true,
                    text: "Tempo Gasto por Mês",
                    color: "hsl(20,90%,85%)",
                    font: {
                      size: 16,
                      weight: 'bold',
                    },
                  },
                  legend: {
                    labels: {
                      color: 'white',
                      font: {
                        size: 12,
                      },
                    },
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      color: 'white',
                      font: {
                        size: 12,
                      },
                    },
                    grid: {
                      color: '#888888',
                    },
                  },
                  y: {
                    ticks: {
                      color: 'white',
                      font: {
                        size: 12,
                      },
                      callback: function (value) {
                        const limitedValue = Math.min(value, 1440);
                        const hours = Math.floor(limitedValue / 60);
                        const minutes = limitedValue % 60;
                        if (hours === 24) {
                          return `00:${minutes < 10 ? '0' : ''}${minutes}`;
                        }
                        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
                      },
                    },
                    grid: {
                      color: '#888888',
                    },
                    suggestedMax: 1440,
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
                    label: "Tempo diário",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: [
                      "rgba(255, 255, 255, 1)",
                      "rgba(255, 0, 0, 1)",
                      "rgba(247, 255, 0, 1)",
                      "rgba(162, 0, 255, 1)",
                      "rgba(0, 255, 26, 1)",
                      "rgba(159, 159, 159, 1)",
                      "rgba(255, 213, 0, 1)"
                    ],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Check-ins diário",
                    color: "hsl(20,90%,85%)",
                  },
                  legend: {
                    labels: {
                      color: 'white',
                    },
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      color: 'white',
                    },
                    grid: {
                      color: '#888888',
                    },
                  },
                  y: {
                    ticks: {
                      color: 'white',
                    },
                    grid: {
                      color: '#888888',
                    },
                    max: 31,
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
