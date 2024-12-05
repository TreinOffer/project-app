import React, { useEffect, useRef } from 'react';
import imgs from '../../imgs/arrayImagens';
import './estilopopUp.css';
import { useState } from 'react';

//Lógica condicao false = 'erro', true = 'ok'

function PopUp({ condicao, mensagem }) {
    const [render, setRender] = useState(false);
    const closeButton = useRef();

    
    const blackOut = () => {
        const divRoot = document.getElementById('root');
        const filhoRoot = Array.from(divRoot.children);
        
        if (!render) {
            filhoRoot.map(filho => filho.className !== 'box-popup' ?
                filho.style.filter = 'blur(25px)' : null)
                // console.log(filhoRoot);
                setRender(!render);
            } else {
                filhoRoot.map(filho => filho.className !== 'box-popup' ?
                    filho.style.filter = null : null)
                    setRender(!render);
                };
            };

    const popUpStyle = condicao ? (
        {
            cor: '#4CAF50',
            borda: `3px solid #4CAF50`,
            background: 'linear-gradient(145deg, #d4edda, #c3e6cb)'
        }
    ) : (
        {
            cor: '#f44336',
            borda: `3px solid #f44336`,
            background: 'linear-gradient(145deg, #f8d7da, #f5c6cb)'
        }
    );

    const handleHover = (ref) => {
        const button = ref.current;
        button.style.color = popUpStyle.cor;
    };
    const handleOut = (ref) => {
        const button = ref.current;
        button.style.color = null;
    };

    const titulo = condicao ? 'Sucesso!' : 'Erro!';

    useEffect(() => { blackOut() }, [ ]);

    return (
        <>
            {render && (
                <>
                    {/* <div className='blur'></div> */}
                    <div className='box-popup'>
                        <div className={`popup-container ${condicao ? 'success' : 'error'}`}
                            style={{ border: popUpStyle.borda, background: popUpStyle.background }}
                        >
                            <div className="popup-header">
                                <img className="logo" src={imgs.TreinOfferblack} alt="TreinOffer" />
                                <button className="close-btn" ref={closeButton}
                                    onClick={() => blackOut()}
                                    onMouseOver={() => handleHover(closeButton)}
                                    onMouseOut={() => handleOut(closeButton)}
                                >&times;</button>
                            </div>
                            <div className="popup-body">
                                <img className="popup-icon" src={condicao ? imgs.confirmar : imgs.deletar} alt={condicao ? 'success' : 'error'} />
                                <h2 className="popup-title">{titulo}</h2>
                                <p className="popup-message">{mensagem}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default PopUp;
