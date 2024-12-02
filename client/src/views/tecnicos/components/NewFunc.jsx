import React, { useState } from 'react'
import imgs from "../../../imgs/arrayImagens";
import CrudUser from './crudTecnico';

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function NewFunc({ atualizaPag, click, transForm }) {

  const [ user, setUser ] = useState({
    Matricula: "",
    Imagem: "",
    Nome: "",
    Especializacao: "",
    Senha: ""
  });

  function onChangeImg(tipo, imagem) {
    return (
      setUser((prev) => ({ ...prev, [tipo]: imagem }))
    )
  };

  function onChange(tipo) {
    return (e) => (
      setUser((prev) => ({ ...prev, [tipo]: e.target.value }))
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

  return (
    <form action='/tecnicos' method="POST" enctype='multipart/form-data' onSubmit={async (e) => {
      e.preventDefault();
      click(false); 
      const form = await transForm(user);
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
          <input onChange={onChange('Especializacao')} type="text" name="espec" id="tarefa" />
        </div>

        {/* <div className="sec_func" style={{ width: `${p}%` }}>
          <input readOnly value="0" name="colab" id="colaboradores" />
        </div> */}

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

export default NewFunc