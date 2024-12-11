import React, { useState } from 'react';
import './estilo.css';
import Treino from '../../views/Treinamentos/functions/treino.treinamento';
import imgs from '../../imgs/arrayImagens';
import { useNavigate } from 'react-router-dom';

const UparCapa = ({ closePopUp, itens }) => {
  const navegar = useNavigate();

  const [formData, setFormData] = useState({
    titulo: itens[0].Titulo,
    Tags: itens[0].Tags,
    Tipo: itens[0].Tipo,
    capaTreino: itens[0].capaTreino,
  });

  const onChange = (field) => (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  function onChangeImg(tipo, imagem) {
    return itens[1]((prev) => ({ ...prev, [tipo]: imagem }));
  };

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  const closePopupHandler = () => {
    closePopUp();
  };

  function toTreino() {
    navegar("/uploadTreino");
  }

  return (
    <div className={`popup-modal open`}>
      <div className="popup-modal-content">
        <button className="close-button" onClick={closePopupHandler}>
          X
        </button>
        <h2 className="training-title">Adicionar Treinamento</h2>
        <div className="capa-preview">
          <Treino
            capaTreino={formData.capaTreino}
            empresaFT={imgs.tabEmpty}
            titTreino={formData.titulo}
            tag1={formData.Tipo}
            tag2={formData.Tags}
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
              value={formData.titulo}
              onChange={onChange('titulo')}
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
              value={formData.Tags}
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
              value={formData.Tipo}
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
