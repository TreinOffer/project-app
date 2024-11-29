import React, { useState, useEffect } from 'react';
import Cabecalho from "../cabecalho/cabecalho";
import imgs from '../../imgs/arrayImagens';
import Colaborador from './components/Colaborador';
import FuncColab from './components/FuncColab';

import './estiloColaborador.css';  
import CrudUser from './components/crudColaborador';  

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function Colaboradores() {

  const [colaboradores, setColaboradores] = useState([]); 
  const [click, setClick] = useState(false);

  const handleAddFunc = () => {
    setClick(!click);
  };

  const createForm = async (json) => {
    console.log(json);
    const forms = new FormData();

    for (const chave in json) {
      console.log("chave: ", chave); console.log("value: ", json[chave])
      forms.append(chave, json[chave]);
    };

    return forms;
  };

  const handleDelete = async (id) => {
    await CRUD.delete(id);
  };

  const handleRefresh = async () => {
    const read = await CRUD.read();
    setColaboradores(read);  
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <>
      <Cabecalho />

      <section className='tab_func'>

        <div className="tit_tab">
          <h2>Tabela de colaboradores - Agro Indústria Polpa de Fruta</h2>  
        </div>

        <div className='funcoes_func'>
          <div>
            <input type="text" name='' id='func_mat' placeholder='Buscar colaborador' />  
            <button className='buscar_func' type="button">
              <img src={imgs.buscar} alt="buscar" />
            </button>
          </div>
          <button type="button" style={
            click ? ({ backgroundColor: "hsl(0,50%,80%)" }) : ({ backgroundColor: "hsl(150,50%,80%)" })
          }>
            <img src={
              click ? (imgs.removFunc) : (imgs.addFunc)
            }
              alt="add" onClick={handleAddFunc} />
          </button>
        </div>

        <div className='tit_cabec'>
          <h4 style={{ width: `${g}%` }}>
            Nome
          </h4>
          <h4 style={{ width: `${g}%` }}>
            Especialização
          </h4>
          <h4 style={{ width: `${m}%` }}>
            Senha
          </h4>
          <h4 style={{ width: `${g}%` }}>
            Matricula
          </h4>
          <h4 style={{ width: `${p}%` }}>
            Ações
          </h4>
        </div>

        <section className="funcs">
          {click && (<FuncColab atualizaPag={handleRefresh} click={setClick} transForm={createForm} />)}
          {
            colaboradores?.map((colaborador, chave) =>  
              (<Colaborador key={chave} colabFt={colaborador.Imagem} colabNome={colaborador.Nome} 
                tarefa={colaborador.Especializacao} numColab={colaborador.Colaboradores}
                senha={colaborador.Senha} matricula={colaborador.Matricula} disabled={colaborador.Disabled}
                handleDelete={handleDelete} atualizaPag={handleRefresh} transForm={createForm}
              />)
            )}
        </section>
      </section>
    </>
  )
}

export default Colaboradores; 
