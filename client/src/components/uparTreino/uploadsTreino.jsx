import React, { useState } from 'react';
import './estilo.css';

const App = () => {
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState('');
  const [error, setError] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(true); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[0]; 
      if (fileType === 'image') {
        setMedia(URL.createObjectURL(file)); 
        setMediaType(fileType);
        setError('');
      } else {
        setError('Apenas imagens são permitidas.');
        setMedia(null);
      }
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[0];
      if (fileType === 'video') {
        setMedia(URL.createObjectURL(file)); 
        setMediaType(fileType);
        setError('');
      } else {
        setError('Apenas vídeos são permitidos.');
        setMedia(null);
      }
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false); 
    setMedia(null);  
    setError('');
  };

  return (
    <div className={`popup ${isPopupOpen ? 'open' : 'closed'}`}> 
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>X</button>
        <h2 className="titulo-adicionar-treinamento">Adicionar Treinamento</h2>        
        <div className="separator"></div>

        <div className="inputs-container">
          <h2 className="input-title">Escolha uma Imagem</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="styled-input"
          />

          <h2 className="input-title">Escolha um Vídeo</h2>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="styled-input"
          />
        </div>

        {error && <p className="error">{error}</p>}

        {media && mediaType === 'image' && <img src={media} alt="Preview" className="media-preview" />}
        {media && mediaType === 'video' && <video src={media} controls className="media-preview" />}
      </div>
    </div>
  );
};

export default App;
