import React from 'react'
import "./estilo.css"
import cabecalho from '../cabecalho'
import imgs from '../../imgs/arrayImagens';
import Treino from './functions/treino.treinamento';

function Treinamentos() {
  
  return (

    <>

      {cabecalho()}

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
          "Congelamento de Frutas",
          "Despensa","Básico",
          imgs.tabLeila, "Leila Pereira"
        )}

      </section>
    </>
  )
}

export default Treinamentos;