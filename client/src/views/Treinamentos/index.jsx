import React, { useEffect, useState } from 'react'
import "./estilo.css"
import Cabecalho from '../cabecalho/cabecalho';
import imgs from '../../imgs/arrayImagens';
import Treino from './functions/treino.treinamento';

function Treinamentos() {
  
  const [treinamentos, setTreinamentos] = useState([]);

  async function fetchTreinamentos() {
    const token = localStorage.getItem('token');
    const request = await fetch(`${process.env.REACT_APP_BACKEND}/treinamentos`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const resposta = await request.json();
    return resposta;
  };

  useEffect(() => {
    async function getTreinos() {
      const tecnicos = await fetchTreinamentos();
      setTreinamentos(tecnicos);
    };
    getTreinos();
    console.log("treinos: ",treinamentos);
  }, []);

  return (

    <>
      <Cabecalho />
      <section className="grid_treinos">

        {Treino(
          imgs.treino1,
          imgs.empresa,
          "Equipamento de Proteção Individual",
          "Segurança","Básico",
          imgs.tabEduardo, "Eduardo Pereira"
        )}

        {Treino(
          imgs.treino2,
          imgs.empresa,
          "Treinamento de Prevenção de Incêncios",
          "Segurança","Médio",
          imgs.tabEduardo, "Eduardo Pereira"
        )}

        {Treino(
          imgs.treino3,
          imgs.empresa,
          "Processamento de Fruta",
          "Industrial","Médio",
          imgs.tabLeila, "Leila Pereira"
        )}

        {Treino(
          imgs.treino4,
          imgs.empresa,
          "Treinamento de Primeiros Socorros",
          "Segurança","Avançado",
          imgs.tabEduardo, "Eduardo Pereira"
        )}

        {Treino(
          imgs.treino5,
          imgs.empresa,
          "Armazenagem de Polpas de Fruta",
          "Despensa","Básico",
          imgs.tabLeila, "Leila Pereira"
        )}
        {
          treinamentos?.map(treino => (
            <>
            {console.log("treino ",treino)}
            <Treino capaTreino={treino.FotoCapa} empresaFT={imgs.tabEmpty}
            titTreino={treino.Titulo} tag1={treino.Tags} tag2={treino.Tipo}
            autorFt={treino.imagem} autorNome={treino.Nome}
            />
            </>
          ))
        }
      </section>
    </>
  )
}

export default Treinamentos;