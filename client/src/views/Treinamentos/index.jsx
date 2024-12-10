import React, { useEffect, useState } from 'react'
import "./estilo.css"
import Cabecalho from '../cabecalho/cabecalho';
import imgs from '../../imgs/arrayImagens';
import Treino from './functions/treino.treinamento';
import { useNavigate } from 'react-router-dom';

function Treinamentos() {
  const navegar = useNavigate();
  const [treinamentos, setTreinamentos] = useState([]);

  async function fetchTreinamentos() {
    try {
      const token = localStorage.getItem('token');
      const request = await fetch(`${process.env.REACT_APP_BACKEND}/treinamentos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const resposta = await request.json();
      return resposta;
    } catch (error) {
      console.log(error);
    }
  };

  function handleVerTreino(idTreino) {
    alert("idTreino: ",idTreino)
    navegar(`/treino/${idTreino}`);
  };

  useEffect(() => {
    async function getTreinos() {
      const tecnicos = await fetchTreinamentos();
      setTreinamentos(tecnicos);
    };
    getTreinos();
  }, []);

  return (

    <>
      <Cabecalho />
      <section className="grid_treinos">
        {
          treinamentos?.map(treino => (
            <>
              {/* {console.log("treino ", treino)} */}
              <Treino key={treino.id} capaTreino={treino.FotoCapa} empresaFT={imgs.tabEmpty}
                titTreino={treino.Titulo} tag1={treino.Tags} tag2={treino.Tipo}
                autorFt={treino.Imagem} autorNome={treino.Nome} toTreino={handleVerTreino} idTreino={treino.id}
              />
            </>
          ))
        }
      </section>
    </>
  )
}

export default Treinamentos;