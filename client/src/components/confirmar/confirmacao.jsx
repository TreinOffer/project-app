import React, { useState } from 'react';
import './confirmar.inativo.css';
import imgs from '../../imgs/arrayImagens';

function Confirmacao(funcao) {
  const [showPopup, setShowPopup] = useState(true);

  const handleNao = () => {
    console.log("Ação cancelada!");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="box-confir">
          <div className="confir-container">
            <img className="logo" src={imgs.TreinOfferblack} alt="TreinOffer" />
            <div className="popup-body">
              <h2>Deseja continuar?</h2>
            </div>
            <div className="popup-buttons">
              <button onClick={funcao} className="btn-sim">Sim</button>
              <button onClick={handleNao} className="btn-nao">Não</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Confirmacao;
