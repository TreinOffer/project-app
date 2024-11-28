import React, { useState, useEffect } from 'react';
import Cabecalho from "../cabecalho/cabecalho";
import imgs from '../../imgs/arrayImagens';
import Tecnico from './components/Tecnico';
import NewFunc from './components/NewFunc';

import './estiloTecnico.css';
import CrudUser from './components/crudTecnico';

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function Tecnicos() {

  const [tecnicos, setTecnicos] = useState([]);
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
  setTecnicos(read);
};

useEffect(() => {
  handleRefresh();
}, []);

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
        {
          // <h4 style={{ width: `${p}%`, minWidth: 121 + 'px' }}>
          //   Colaboradores
          // </h4>
        }
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
        {click && (<NewFunc atualizaPag={handleRefresh} click={setClick} transForm={createForm} />)}
        {
          tecnicos?.map((tecnico, chave) =>
          (<Tecnico key={chave} tecFt={tecnico.Imagem} tecNome={tecnico.Nome}
            tarefa={tecnico.Especializacao} numColab={tecnico.Colaboradores}
            senha={tecnico.Senha} matricula={tecnico.Matricula} disabled={tecnico.Disabled}
            handleDelete={handleDelete} atualizaPag={handleRefresh} transForm={createForm}
          />)
          )}
      </section>
    </section>
  </>
)
}

export default Tecnicos;