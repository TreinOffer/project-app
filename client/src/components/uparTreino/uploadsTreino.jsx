import React, { useState } from 'react';
import './estilo.css';
import Treino from '../../views/Treinamentos/functions/treino.treinamento';
import imgs from '../../imgs/arrayImagens';

const App = () => {
  const [media, setMedia] = useState({
    capaTreino: imgs.upImage,
    empresaFT: imgs.empresa,
    autorFt: imgs.tabEduardo,
    colaboradorFoto: null,
  });
  const [mediaType, setMediaType] = useState('');
  const [error, setError] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const [formData, setFormData] = useState({
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

  const handleColaboradorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[0];
      if (fileType === 'image') {
        const newImage = URL.createObjectURL(file);
        setMedia((prevMedia) => ({
          ...prevMedia,
          colaboradorFoto: newImage,
        }));
        setError('');
      } else {
        setError('Apenas imagens são permitidas para foto do colaborador.');
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

  const closePopup = () => {
    setIsPopupOpen(false);
    setMedia({
      capaTreino: imgs.upImage,
      empresaFT: imgs.empresa,
      autorFt: imgs.tabEduardo,
      colaboradorFoto: null,
    });
    setError('');
  };

  return (
    <div className={`popup-modal ${isPopupOpen ? 'open' : 'closed'}`}>
      <div className="popup-modal-content">
        <button className="close-button" onClick={closePopup}>
          X
        </button>
        <h2 className="training-title">Adicionar Treinamento</h2>

        <Treino
          capaTreino={media.capaTreino}
          empresaFT={media.empresaFT}
          titTreino="exemplo: titulo"
          tag1="tag 1"
          tag2="tag 2"
          autorFt={media.autorFt}
          autorNome="Eduardo Pinto"
          className="treinamento-info"
        />
        <div className="separator-line"></div>

        <form action="/action_page.php" method="get" onSubmit={handleFormSubmit}>
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

          <div className="file-inputs">
            <h2 className="file-input-title">Foto do Colaborador</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleColaboradorImageChange}
              className="file-input"
              name="colaboradorFoto"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          {mediaType === 'image' && (
            <img src={media.capaTreino} alt="Preview" className="media-preview" />
          )}

          {media.colaboradorFoto && (
            <div className="colaborador-photo-preview">
              <h3>Foto do Colaborador:</h3>
              <img
                src={media.colaboradorFoto}
                alt="Foto do Colaborador"
                className="colaborador-preview"
              />
            </div>
          )}

          <div className="form-section">
            <div className="input-group">
              <label htmlFor="fname">Classificação:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleFormChange}
                className="form-input"
              />
            </div>

            <div className="input-group">
              <label htmlFor="lname">Tag:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleFormChange}
                className="form-input"
              />
            </div>

            <div className="input-group">
              <label htmlFor="nomeColaborador">Nome do Colaborador:</label>
              <input
                type="text"
                id="nomeColaborador"
                name="nomeColaborador"
                value={formData.nomeColaborador}
                onChange={handleFormChange}
                className="form-input"
              />
            </div>

            <input type="submit" value="Enviar" className="submit-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;