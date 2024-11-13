import React from 'react';
import imgs from '../../imgs/arrayImagens';
import './estilopopUp.css';

function PopUp({ condicao, mensagem, onClose }) {
    const titulo = condicao ? 'Sucesso!' : 'Erro!';

    return (
        <div className='box-popup'>
            <div className={`popup-container ${condicao ? 'success' : 'error'}`}>
                <div className="popup-header">
                    <img className="logo" src={imgs.TreinOffer} alt="TreinOffer" />
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="popup-body">
                    <img className="popup-icon" src={condicao ? imgs.confirmar : imgs.deletar} alt={condicao ? 'success' : 'error'} />
                    <h2 className="popup-title">{titulo}</h2>
                    <p className="popup-message">{mensagem}</p>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
