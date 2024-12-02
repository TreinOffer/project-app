import React, { useState } from 'react';
import './estilo.css';
import Treino from '../../views/Treinamentos/functions/treino.treinamento';
import imgs from '../../imgs/arrayImagens'; 

const App = () => {
  const [media, setMedia] = useState({
    capaTreino: imgs.upImage, 
    empresaFT: imgs.empresa,   
    autorFt: imgs.tabEduardo,  
  });
  const [mediaType, setMediaType] = useState('');
  const [error, setError] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(true);

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

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[0];
      if (fileType === 'video') {
        const videoUrl = URL.createObjectURL(file);
        setMedia((prevMedia) => ({
          ...prevMedia,
          capaTreino: videoUrl, 
        }));
        setMediaType(fileType);
        setError('');
      } else {
        setError('Apenas vídeos são permitidos.');
      }
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setMedia({
      capaTreino: imgs.upImage, 
      empresaFT: imgs.empresa,
      autorFt: imgs.tabEduardo,
    });
    setError('');
  };

  return (
    <div className={`popup-modal ${isPopupOpen ? 'open' : 'closed'}`}>
      <div className="popup-modal-content">
        <button className="close-button" onClick={closePopup}>X</button>
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

        <div className="file-inputs">
          <h2 className="file-input-title">Escolha uma Imagem</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange} 
            className="file-input"
          />

          <h2 className="file-input-title">Escolha um Vídeo</h2>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="file-input"
          />
        </div>

        {error && <p className="error-message">{error}</p>}
       
        {mediaType === 'image' && <img src={media.capaTreino} alt="Preview" className="media-preview" />}
        {mediaType === 'video' && <video src={media.capaTreino} controls className="media-preview" />}
      </div>
    </div>
  );
};

export default App;