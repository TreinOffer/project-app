import React, { useState } from 'react';
import './estilo.css';
import Treino from '../../views/Treinamentos/functions/treino.treinamento';
import imgs from '../../imgs/arrayImagens';

const UparCapa = ({ closePopUp, itens }) => {
  const [media, setMedia] = useState({
    capaTreino: imgs.upImage,
    empresaFT: imgs.empresa,
    autorFt: imgs.tabEduardo,
    colaboradorFoto: null,
  });
  const [mediaType, setMediaType] = useState('');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    titulo: '', 
    fname: '', 
    lname: '',
    nomeColaborador: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[0];
      if (fileType === 'image') {
        const newImage = URL.createObjectURL(file);
        setMedia((prevMedia) => ({
          ...prevMedia,
          capaTreino: newImage,
        }));
        setMediaType(fileType);
        setError('');
      } else {
        setError('Apenas imagens são permitidas.');
        setMedia((prevMedia) => ({
          ...prevMedia,
          capaTreino: imgs.upImage,
        }));
      }
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  const closePopupHandler = () => {
    closePopUp();
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
            capaTreino={media.capaTreino}
            empresaFT={media.empresaFT}
            titTreino={formData.titulo || 'exemplo: titulo'}
            tag1="tag 1"
            tag2="tag 2"
            autorFt={media.autorFt}
            autorNome="Eduardo Pinto"
            className="treinamento-info"
          />
        </div>
        <div className="separator-line"></div>

        <form enctype="multipart/form-data" onSubmit={handleFormSubmit}>
          <div className="file-inputs">
            <h2 className="file-input-title">Escolha uma Capa</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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
                onChange={handleFormChange}
                className="form-input"
                placeholder="Exemplo: Título do Treinamento"
              />
            </div>

            <div className="input-group">
              <label htmlFor="fname">Tipo:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleFormChange}
                className="form-input"
                placeholder="Exemplo: Fitness"
              />
            </div>

            <div className="input-group">
              <label htmlFor="lname">Tags:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleFormChange}
                className="form-input"
                placeholder="Exemplo: Treinamento, Avançado"
              />
            </div>
            <input type="submit" value="Enviar" className="submit-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UparCapa;
