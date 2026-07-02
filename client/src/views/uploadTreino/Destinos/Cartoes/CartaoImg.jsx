import React from 'react';
import imgs from "../../../../imgs/arrayImagens";
import './CartaoImg.css';

const CartaoImg = ({ imagem, index, deletar, handleImage, setItens, isFlipped, isHovered, render }) => {

    function actionExpanse() {

        setItens[1](prevItens => {
            const itens = [...prevItens];
            itens[setItens[0]].map((item, i) =>
                i === index ? item.isOpen = !isFlipped : item
            )
            return itens;
        });
    };

    const handleUploadImagem = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            handleImage(index, [file, url]);
        };
    };
    return (

        <div className='cartaoImagem' >
            <div className='div-imagem'>
                <img className='media-preview'
                    src={typeof imagem === 'string' ? imagem : render} alt={`Imagem${index}`} />
                <div className='btn-expanse'>
                    <button type='button' className='toggle-actions' onClick={actionExpanse} aria-expanded={isFlipped}>
                        <img
                            src={imgs.arrowUp}
                            alt=""
                            aria-hidden="true"
                            style={{
                                transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                        />
                    </button>
                    <div className={`actions actions-image ${isFlipped ? 'is-open' : ''}`}>
                        <button type='button' className='div-rem' onClick={() => deletar(index)} aria-label='Remover imagem'>
                            <img src={imgs.trash} alt="" aria-hidden="true" />
                        </button>
                        <label className='div-selecionar' htmlFor={`IimagemTreino${index}`}>
                            <input onChange={handleUploadImagem} accept='.jpg,.png,.jpeg'
                                multiple={false} type="file" name="ImagemTreino"
                                className='buttonUpload' id={`IimagemTreino${index}`} />

                            <span className='selector-text'>Selecionar imagem</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartaoImg;