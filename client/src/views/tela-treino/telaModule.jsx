import React, { useEffect, useRef, useState } from 'react';
import './estiloTreino.css';
import Cabecalho from '../cabecalho/cabecalho';
import { useParams } from 'react-router-dom';
import { sortByOrder } from './functions/sortByOrder';

function TelaModule() {
  const [modulosForm, setModulosForm] = useState([]);
  const { idTreino } = useParams();
  const flipbookRef = useRef(null); 

  async function fetchModules(idTreino) {
    const token = localStorage.getItem('token');
    const request = await fetch(`${process.env.REACT_APP_BACKEND}/treino/${idTreino}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const resposta = await request.json();
    return resposta;
  }

  useEffect(() => {
    async function getModules() {
      const modulos = await fetchModules(idTreino);
      const [moduloFormatado] = modulos?.map(modulo => {
        return sortByOrder(modulo);
      });
      setModulosForm(moduloFormatado || []);
    }
    getModules();
  }, [idTreino]);

  return (
    <>
      <Cabecalho />
      <section className="grid_module">
        <section
          className="quadradinho"
          style={{
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: "hsl(0,0%,97%)", 
            position: 'relative', 
          }}
          ref={flipbookRef}
        >
          <div style={{ flex: 1, padding: '20px' }}>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '51%',
              width: '3px',
              backgroundColor: 'black',
              boxShadow: 'inset 0 0 6px black'
            }}
          />
        </section>
      </section>
    </>
  );
}

export default TelaModule;
