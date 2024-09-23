import React, { useState, useEffect } from 'react';
import Cabecalho from '../cabecalho';

import imgs from '../../imgs/arrayImagens';
import Tecnico from './components/Tecnico';
import NewFunc from './components/NewFunc';

import './estiloTecnico.css';

const g = 25;
const m = 15;
const p = 10;

function Tecnicos() {

  const [ tecnicos, setTecnicos ] = useState([]);

  async function InserirAulas() {
    try {
        const resposta = await fetch('http://localhost:5000/tecnicos',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        });

        if(!resposta){
            throw new Error("Erro ao buscar tecnicos");
        }

        const consulta = await resposta.json();
        setTecnicos(consulta);
    } catch (error) {
        console.log("erro: ",error);
    }
};

  useEffect(() => {
    InserirAulas();
  }, []);

  const [click, setClick] = useState(false);

  const handleAddFunc = () => {
    setClick(!click);
  };

  return (
    <>
      <Cabecalho />

      <section className='tab_func'>

        <div className="tit_tab">
          <h2>Tabela de técnicos - Agro Indústria Polpa de Fruta</h2>
        </div>

        <div className='funcoes_func'>
          <div>
            <input type="text" name='' id='func_mat' placeholder='Buscar técnico' />
            <button className='buscar_func' type="button">
              <img src={imgs.buscar} alt="buscar" />
            </button>
          </div>
          <button type="button" style={
            click ? ({backgroundColor: "hsl(0,50%,80%)"}) : ({backgroundColor: "hsl(150,50%,80%)"})
          }>
            <img src={
              click ? (imgs.removFunc) : (imgs.addFunc)
            }
            alt="add" onClick={ handleAddFunc } />
          </button>
        </div>
        <div className='tit_cabec'>
          <h4 style={{ width: `${g}%` }}>
            Nome
          </h4>
          <h4 style={{ width: `${g}%` }}>
            Especialidade
          </h4>
          <h4 style={{ width: `${p}%`, minWidth: 121 + 'px' }}>
            Colaboradores
          </h4>
          <h4 style={{ width: `${m}%` }}>
            Senha
          </h4>
          <h4 style={{ width: `${m}%` }}>
            Matricula
          </h4>
          <h4 style={{ width: `${p}%` }}>
            Ações
          </h4>
        </div>
            
        <section className="funcs">
          {click && (<NewFunc />)}
          {
            tecnicos.map(( tecnico, chave ) => (
              (<Tecnico key={ chave }
                tecFt={tecnico.Imagem} tecNome={tecnico.Nome}
                tarefa={tecnico.Especialidade} numColab={tecnico.Colaboradores}
                senha={tecnico.Senha} matricula={tecnico.Matricula} />)
            ))}
        </section>
      </section>
    </>
  )
}

export default Tecnicos;