import React from 'react'
import imgs from "../../../imgs/arrayImagens";
import CoresRGB from "../../../components/coresRGB"

const g = 25;
const m = 15;
const p = 10;

function Tecnico({ tecFt, tecNome, tarefa, numColab, senha, matricula }) {

    let arrayTarefa = [];
  
    if (tarefa.indexOf(",") !== -1) {
      arrayTarefa = tarefa.split(",");
    }
    else {
      arrayTarefa = [tarefa];
    };
    console.log("dentro: ",tecFt);
  
    return (
      <section className="func">
        <div className='sec_func info_pessoal' style={{ width: `${g}%` }}>
  
          <img className='foto_func'
            src={ tecFt } alt="" />
  
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

export default Tecnico