import React, { useState, useEffect } from 'react';
import Cabecalho from '../cabecalho';
import CrudUser from './components/crudTecnico';

import imgs from '../../imgs/arrayImagens';
import Tecnico from './components/Tecnico';
import NewFunc from './components/NewFunc';

import './estiloTecnico.css';

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

  const handleDelete = async (id) => {
    await CRUD.delete(id);
    setTecnicos(tecnicos.filter(tecnico => tecnico.id !== id))
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
          {click && (<NewFunc atualizaPag={handleRefresh} click={setClick} />)}
          {
            tecnicos.map((tecnico, chave) =>
            (<Tecnico key={chave} id={ tecnico.id }
              tecFt={tecnico.Imagem} tecNome={tecnico.Nome}
              tarefa={tecnico.Especializacao} numColab={tecnico.Colaboradores}
              senha={tecnico.Senha} matricula={tecnico.Matricula}
              handleDelete={ handleDelete } atualizaPag={ handleRefresh }
            />)
          )}
        </section>
      </section>
    </>
  )
}

export default Tecnicos;