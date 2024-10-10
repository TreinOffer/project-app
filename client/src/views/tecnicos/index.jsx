import React, { useState } from 'react';
import Cabecalho from '../cabecalho/cabecalho';
import imgs from '../../imgs/arrayImagens';
import CoresRGB from '../../components/coresRGB';
import './estiloTecnico.css';

const g = 25;
const m = 15;
const p = 10;

function Tecnico(tecFt, tecNome, tarefa, numColab, senha, matricula) {

  let arrayTarefa = [];

  if (tarefa.indexOf(",") !== -1) {
    arrayTarefa = tarefa.split(",");
  }
  else {
    arrayTarefa = [tarefa];
  };

  return (
    <section className="func">
      <div className='sec_func info_pessoal' style={{ width: `${g}%` }}>

        <img className='foto_func'
          src={tecFt} alt="" />

        <h3 className='nome_func letraQuebra'>
          {tecNome}
        </h3>

      </div>

      <div className='sec_func' style={{ width: `${g}%` }}>
        <span id='nome_dep'>
          {
            arrayTarefa.map((tarf, index) => (
              <span key={index} className='letraQuebra' style={{ display: "block" }}>
                {tarf.trim()}
              </span>
            ))
          }
        </span>
      </div>

      <div className="sec_func" style={{ width: `${p}%`, justifyContent: 'center' }}>

        <span className='letraQuebra box_colab' style={{ cursor: "pointer", backgroundColor: CoresRGB() }}>
          {numColab}
        </span>

      </div>

      <div className='sec_func' style={{ width: `${m}%` }}>

        <span className='letraQuebra'>
          {senha}
        </span>

      </div>

      <div className='sec_func' style={{ width: `${m}%` }}>

        <span className='letraQuebra'>
          {matricula}
        </span>

      </div>

      <div className='sec_func' style={{ width: `${p}%`, justifyContent: 'center' }}>

        <img className='bot_opcoes' src={imgs.opcoes} alt="" />

      </div>
    </section>
  )
};

function AddFunc() {

  let imagem = null;

  const handleUploadImagem = (event) => {
    const file = event.target.files[0];
    if (file) {
      imagem = URL.createObjectURL(file);
      document.getElementsByClassName("foto_func")[0].src = imagem;
    };
  };

  return (
    <form action='post'>
      <section className="func">

        <div className='sec_func info_pessoal' style={{ width: `${g}%` }}>
          <div className="func_foto">
            <img className='foto_func addFotoFunc' src={
              imagem ? imagem : imgs.tabEmpty
            } alt='*'/>

            <div className="botao_div">
              <input className='addFotoFuncBt' onChange={handleUploadImagem} accept='.jpg,.png,.jpeg' multiple={false} type="file" name="foto" id="foto"/>
              <label id='forFoto' htmlFor="foto">Escolher imagem</label>
            </div>
          </div>
          <input spellCheck="true" required type="text" name="username" id="nome"/>
        </div>

        <div className='sec_func' style={{ width: `${g}%` }}>
          <input type="text" name="espec" id="tarefa" />
        </div>

        <div className="sec_func" style={{ width: `${p}%` }}>
          <input readOnly value="0"  name="colab" id="colaboradores" />
        </div>

        <div className='sec_func' style={{ width: `${m}%` }}>
          <input required type="password" name="senha" id="senha" />
        </div>

        <div className='sec_func' style={{ width: `${m}%` }}>
          <input required type="text" name="matricula" id="matricula" />
        </div>

        <div className='sec_func func_submit' style={{ width: `${p}%` }}>
          <button type="submit">
            <img src={imgs.confirmar} alt="v" style={{cursor: "pointer"}}/>
          </button>
        </div>

      </section>
    </form>
  )
};

function Tecnicos() {

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
            alt="add" onClick={handleAddFunc} />
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
          {click && (AddFunc())}
          {Tecnico(
            imgs.tabEduardo, "Eduardo Pereira",
            "Segurança", 4,
            "*******", "25A23BCZ"
          )}
          {Tecnico(
            imgs.tabLeila, "Leila Pereira",
            "Industrial,Despensa", 2,
            "*******", "33C09VVC"
          )}
        </section>
      </section>
    </>
  )
}

export default Tecnicos;