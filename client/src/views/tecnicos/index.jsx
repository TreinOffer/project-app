import React from 'react';
import cabecalho from '../cabecalho';
import imgs from '../../imgs/arrayImagens';
import './estiloTecnico.css';

function Tecnicos() {

  const g = 25;
  const m = 15;
  const p = 10;

  return (
    <>
      {cabecalho()}

      <section className='tab_func'>

        <h2>Tabela de técnicos - Agro Indústria Polpa de Fruta</h2>
        <hr />

        <div className='funcoes_func'>
            <div>
              <input type="text" name='' id='func_mat' placeholder='Buscar técnico'/>
              <button className='buscar_func' type="button">
                <img src={imgs.buscar} alt="" />
              </button>
            </div>
          <button type="button">
            <img src={imgs.addFunc} alt="" />
          </button>
        </div>

        <div className='tit_cabec'>
          <h4 style={{width: `${g}%`}}>
            Nome
          </h4>
          <h4 style={{width: `${g}%`}}>
            Departamento
          </h4>
          <h4 style={{width: `${p}%`, minWidth: 121+'px'}}>
            Colaboradores
          </h4>
          <h4 style={{width: `${m}%`}}>
            Senha
          </h4>
          <h4 style={{width: `${m}%`}}>
            Matricula
          </h4>
          <h4 style={{width: `${p}%`}}>
            Ações
          </h4>
        </div>

        <section className="func">

          <div className='sec_func info_pessoal'
          style={{width: `${g}%`}}>

            <img className='foto_func'
            src={imgs.tabEduardo} alt="" />
            <span className='nome_func letraQuebra'>
              Eduardo Pereira
            </span>

          </div>

          <div className='sec_func'
          style={{width: `${g}%`}}>
            <span className='letraQuebra' id='nome_dep'>
            nome_departamento
            </span>
          </div>

          <div className="sec_func"
          style={{width: `${p}%`, justifyContent: 'center'}}>
              <span className='letraQuebra box_colab'>
                2
              </span>
          </div>

          <div className='sec_func'
          style={{width: `${m}%`}}>
            <span className='letraQuebra'>
              *********
            </span>
          </div>

          <div className='sec_func'
          style={{width: `${m}%`}}>
            <span className='letraQuebra'>
              25A28BBC
            </span>
          </div>

          <div className='sec_func'
          style={{width: `${p}%`, justifyContent: 'center'}}>
            <img className='bot_opcoes' src={imgs.opcoes} alt=""/>
          </div>
        </section>

        <section className="func">

<div className='sec_func info_pessoal'
style={{width: `${g}%`}}>

  <img className='foto_func'
  src={imgs.tabLeila} alt="" />
  <span className='nome_func letraQuebra'>
    Leila Pereira
  </span>

</div>

<div className='sec_func'
style={{width: `${g}%`}}>
  <span className='letraQuebra' id='nome_dep'>
  nome_departamento
  </span>
</div>

<div className="sec_func"
style={{width: `${p}%`, justifyContent: 'center'}}>
    <span className='letraQuebra box_colab'>
      1
    </span>
</div>

<div className='sec_func'
style={{width: `${m}%`}}>
  <span className='letraQuebra'>
    *********
  </span>
</div>

<div className='sec_func'
style={{width: `${m}%`}}>
  <span className='letraQuebra'>
    39C14CZZ
  </span>
</div>

<div className='sec_func'
style={{width: `${p}%`, justifyContent: 'center'}}>
  <img className='bot_opcoes' src={imgs.opcoes} alt=""/>
</div>
</section>
      </section>
    </>
  )
}

export default Tecnicos;