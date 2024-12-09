import React, { useEffect, useState } from 'react';
import imgs from "../../../imgs/arrayImagens";
import CrudUser from './crudColaborador';

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function NewColab({ atualizaPag, click, transForm }) {
  const [tecnicos, setTecnicos] = useState([]);

  const [colaborador, setColaborador] = useState({
    Matricula: "",
    Imagem: "",
    Nome: "",
    Responsavel: "",
    Senha: ""
  });

  function onChangeImg(tipo, imagem) {
    return (
      setColaborador((prev) => ({ ...prev, [tipo]: imagem }))
    )
  };

  function onChange(tipo) {
    return (e) => (
      setColaborador((prev) => ({ ...prev, [tipo]: e.target.value }))
    )
  };

  let imagem = null;

  const handleUploadImagem = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        imagem = reader.result;
        document.getElementsByClassName("foto_func")[0].src = imagem;
        onChangeImg('Imagem', file);
      };
      reader.readAsDataURL(file);
    };
  };

  useEffect(() => {
    async function getTecnicos(){
      const token = localStorage.getItem('token');
      const request = await fetch(`${process.env.REACT_APP_BACKEND}/tecnicos`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const resposta = await request.json();
      setTecnicos(resposta);
    };
    await getTecnicos();
    console.log("tecnicos: ",tecnicos);
  } ,[]);

  return (
    <form action='/colaboradores' method="POST" enctype='multipart/form-data' onSubmit={async (e) => {
      e.preventDefault();
      click(false);
      const form = await transForm(colaborador);
      CRUD.create(form);
      atualizaPag();
    }}>
      <section className="func">
        <div className='sec_func info_pessoal' style={{ width: `${g}%` }}>
          <div className="func_foto">
            <img className='foto_func addFotoFunc' src={
              imagem ? imagem : imgs.tabEmpty
            } alt='*' />

            <div className="botao_div">
              <input className='addFotoFuncBt' onChange={handleUploadImagem} accept='.jpg,.png,.jpeg' multiple={false} type="file" name="Imagem" id="foto" />
              <label id='forFoto' htmlFor="foto">Escolher imagem</label>
            </div>
          </div>
          <input spellCheck="true" onChange={onChange('Nome')} required type="text" name="username" id="nome" />
        </div>

        <div className='sec_func' style={{ width: `${g}%` }}>
          <>
            <div onChange={onChange('Responsavel')} type="text" name="responsavel" id="tarefa" />
            <div className="dropdown-menu">
              {isEditing && (
                <>
                  <div className='dropwdown-item'>Ola</div>
                </>
              )}
            </div>
          </>
        </div>

        <div className='sec_func' style={{ width: `${m}%` }}>
          <input required onChange={onChange('Senha')} type="password" name="senha" id="senha" />
        </div>

        <div className='sec_func' style={{ width: `${g}%` }}>
          <input onChange={onChange('Matricula')} required type="text" name="matricula" id="matricula" />
        </div>

        <div className='sec_func func_submit' style={{ width: `${p}%` }}>
          <button type="submit">
            <img src={imgs.confirmar} alt="v" style={{ cursor: "pointer" }} />
          </button>
        </div>
      </section>
    </form>
  )
};

export default NewColab;  
