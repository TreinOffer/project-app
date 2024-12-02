import React, { useState, useEffect } from 'react';
import './envio.css';
import imgs from '../../imgs/arrayImagens'; 

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="modalOverlay">
        <div className="modalContent">
        <img src={imgs.TreinOffer} alt="logo" className="logo" />
          <h1>Treinamento enviado com sucesso!</h1>
          <button className="closeButtonNew" onClick={closePopup}>
            X
          </button>
        </div>
      </div>
    )
  );
};

export default PopUp;