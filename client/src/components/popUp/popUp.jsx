import React from 'react';
import imgs from '../../imgs/arrayImagens';
import './estilopopUp.css';

function popUp({ condicao, mensagem }) {
    return (
        <div className='box-popup'>
            <div className="box-logo">
                <img src={imgs.TreinOffer} alt="TreinOffer" />
            </div>
            <div className="box-img">
                <img src={condicao ? imgs.confirmar : imgs.deletar} alt={condicao ? `ok` : `error`} />
            </div>
            <div className="box-mensagem">
                <p>{mensagem}</p>
            </div>
        </div>
    )
}

export default popUp;