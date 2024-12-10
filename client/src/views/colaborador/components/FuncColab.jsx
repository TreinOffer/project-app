import React, { useEffect, useState } from 'react';
import imgs from "../../../imgs/arrayImagens";
import CrudUser from './crudColaborador';

const g = 25;
const m = 15;
const p = 10;

const CRUD = new CrudUser();

function NewColab({ atualizaPag, click, transForm }) {
  const [tecnicos, setTecnicos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [colaborador, setColaborador] = useState({
    Matricula: "",
    Imagem: "",
    Nome: "",
    Responsavel: "",
    Senha: ""
  });

  function onChangeImg(tipo, imagem) {
    setColaborador((prev) => ({ ...prev, [tipo]: imagem }));
  };

  function onChange(tipo) {
    return (e) => {
      setColaborador((prev) => ({ ...prev, [tipo]: e.target.value }));
    };
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
    }
  };

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
    <form
      action='/colaboradores'
      method="POST"
      encType='multipart/form-data'
      onSubmit={async (e) => {
        e.preventDefault();
        click(false);
        const form = await transForm(colaborador);
        CRUD.create(form);
        atualizaPag();
      }}
    >
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
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              style={{
                padding: '8px 16px',
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            >
              {colaborador.Responsavel || 'Selecione'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                style={{
                  marginLeft: '8px',
                  transition: 'transform 0.3s ease',
                  transform: isEditing ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {isEditing && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                width: '100%',
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '5px',
                maxHeight: '200px',
                overflowY: 'auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: '10'
              }}>
                {tecnicos.length > 0 ? (
                  tecnicos.map((tecnico) => (
                    <div
                      key={tecnico.id}
                      style={{
                        padding: '8px 16px',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        setColaborador((prev) => ({ ...prev, Responsavel: tecnico.Nome }));
                        setIsEditing(false);
                      }}
                    >
                      <img src={`${process.env.REACT_APP_BACKEND}/imgs/${tecnico.Imagem}`} alt=""
                        style={{
                          width: '20px',
                          borderRadius: '5px',
                          cursor: 'pointer'                                                                             
                        }} />
                      {tecnico.Nome}
                    </div>
                  ))
                ) : (
                  <div style={{
                    padding: '8px 16px',
                    cursor: 'not-allowed'
                  }}>Responsável não existe...</div>
                )}
              </div>
            )}
          </div>
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
  );
};

export default NewColab;
