import React, { useState, useEffect } from 'react';
import Cabecalho from "../cabecalho/cabecalho";
import imgs from '../../imgs/arrayImagens';
import Colaborador from './components/Colaborador';
import NewFunc from './components/FuncColab';
import '../tecnicos/estiloTecnico.css';

import CrudUser from './components/crudColaborador';
import { RequestToken } from '../../components/fetchToken/token.function';

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function Colaboradores() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('');
  const [tecnicos, setTecnicos] = useState([]);

  const [colaboradores, setColaboradores] = useState([]);
  const [click, setClick] = useState(false);
  const [buscar, setBuscar] = useState('');

  async function handleUsername(nome) {
    setUser(prev => {
      return nome
    });
  };

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
    setIsLoading(true);
    let read = Array();
    if (buscar.length > 0) {
      read = await CRUD.read(buscar);
    } else {
      read = await CRUD.read('');
    };
    setColaboradores((...prev) => {
      return read;
    });
    setIsLoading(false);
  };

  useEffect(() => {
    handleRefresh();
  }, [buscar]);

  useEffect(() => {
    async function getUsername() {
      let username = await RequestToken();
      username = username.user;
      await handleUsername(username);
    };
    getUsername();
  }, []);

  useEffect(() => {
    async function getTecnicos() {
      const token = localStorage.getItem('token');
      const request = await fetch(`${process.env.REACT_APP_BACKEND}/tecnicos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const resposta = await request.json();
      setTecnicos(resposta);
    }
    getTecnicos();
  }, []);

  return (
    <>
      <Cabecalho />

      <section className='tab_func'>

        <div className="tit_tab">
          <h2>Tabela de Colaboradores - {user}</h2>
        </div>

        <div className='funcoes_func'>
          <div>
            <input type="text" value={buscar} onChange={(e) => setBuscar(e.target.value)}
              name='' id='func_mat' placeholder='Buscar Colaborador' />
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
            Responsável
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
        {
          isLoading ? <h4>Carregando...</h4> : (
            <section className="funcs">
              {click && (<NewFunc atualizaPag={handleRefresh} click={setClick} transForm={createForm} tecnicos={tecnicos} />)}
              {
                colaboradores?.map((colaborador, chave) =>
                (<Colaborador key={chave} colabFt={colaborador.Imagem} colabNome={colaborador.Nome}
                  tecnico={colaborador.idTecnico} senha={colaborador.Senha}
                  matricula={colaborador.Matricula} disabled={colaborador.Disabled}
                  handleDelete={handleDelete} atualizaPag={handleRefresh} transForm={createForm}
                  tecnicos={tecnicos}
                />)
                )}
            </section>
          )
        }

      </section>
    </>
  )
}

export default Colaboradores;