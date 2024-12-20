import React, { useEffect } from 'react';
import './estilo.css';
import Treino from '../../views/Treinamentos/functions/treino.treinamento';
import imgs from '../../imgs/arrayImagens';
import { useNavigate } from 'react-router-dom';

const UparCapa = ({ closePopUp, itens }) => {
  const navegar = useNavigate();
  
  function onChangeImg(tipo, imagem) {
    return (
      itens[1]((prev) => ({ ...prev, [tipo]: imagem }))
    )
  };

  function onChange(tipo) {
    return (e) => (
      itens[1]((prev) => ({ ...prev, [tipo]: e.target.value }))
    )
  };

  useEffect(() => { console.log(itens[0]) }, [itens[0]]);
  
  let imagem = null;
  const handleUploadImagem = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        imagem = reader.result;
        const divImagem = document.getElementsByClassName("treino_ft")[0];
        divImagem.querySelector('img').src = imagem;
        onChangeImg('capaTreino', file);
      };
      reader.readAsDataURL(file);
    };
  };

  const closePopupHandler = () => {
    closePopUp();
  };

  function toTreino() {
    navegar("/uploadTreino")
  };
  return (
    <div className={`popup-modal open`}>
      <div className="popup-modal-content">
        <button className="close-button" onClick={closePopupHandler}>
          X
        </button>
        <h2 className="training-title">Adicionar Treinamento</h2>
        <div className="capa-preview">
          <Treino
            capaTreino={itens[0].capaTreino}
            empresaFT={imgs.tabEmpty}
            titTreino={itens[0].Titulo}
            tag1={itens[0].Tipo}
            tag2={itens[0].Tags}
            autorFt={null}
            autorNome="autor x"
            toTreino={toTreino}
            className="treinamento-info"
          />
        </div>
        <div className="separator-line"></div>
        <div className="file-inputs">
          <h2 className="file-input-title">Escolha uma Capa</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleUploadImagem}
            className="file-input"
            name="capaTreino"
          />
        </div>
        <div className="form-section">
          <div className="input-group">
            <label htmlFor="titulo">Título:</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={itens[0].Titulo}
              onChange={onChange('Titulo')}
              className="form-input"
              placeholder="Exemplo: Título do Treinamento"
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Tags:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={itens[0].Tags}
              onChange={onChange('Tags')}
              className="form-input"
              placeholder="Exemplo: Industrial"
            />
          </div>
          <div className="input-group">
            <label htmlFor="lname">Tipo:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={itens[0].Tipo}
              onChange={onChange('Tipo')}
              className="form-input"
              placeholder="Exemplo: Básico, Médio, Avançado"
            />
          </div>
          <input type="button" value="OK" className="submit-button" onClick={() => closePopUp()} />
        </div>
      </div>
    </div>
  );
};

export default UparCapa;
