import React from 'react'
import imgs from "../../../imgs/arrayImagens";

const g = 25;
const m = 15;
const p = 10;

function NewFunc() {

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
                <input className='addFotoFuncBt' onChange={ handleUploadImagem } accept='.jpg,.png,.jpeg' multiple={false} type="file" name="foto" id="foto"/>
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

export default NewFunc