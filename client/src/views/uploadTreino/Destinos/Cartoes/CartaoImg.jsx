import React, { useState } from 'react';
import imgs from "../../../../imgs/arrayImagens";
import './CartaoImg.css';

const CartaoImg = ({ imagem, index, deletar, handleImage, setItens, isFlipped, isHovered }) => {

    const [newImagem, setNewImagem] = useState();

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
        console.log("handleUploadImagem: ", handleImage);
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file)
            setNewImagem(() => {
                handleImage(index, url);
                return newImagem;
            });
        };
    };

    return (

        <div className='cartaoImagem' >
            <div className='div-imagem'>
                <img style={{ height: isFlipped ? 'calc(100% - 200px)' : '100%' }}
                    src={imagem} alt={`Imagem${index}`} />
                <div className='btn-expanse'
                >
                    <hr />
                    <img src={imgs.arrowUp} alt="arrow" onClick={actionExpanse}
                        style={{
                            transition: '1.6s ease-in-out',
                            transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                    />
                    <div className='actions' style={{ 
                        maxHeight: isFlipped ? '200px' : '0px',
                        borderBottom: isFlipped ? '1px solid black' : '0px solid black'
                     }} >
                        <div className='div-rem'>
                            <img onClick={() => deletar(index)} src={imgs.trash} alt="Remover" style={{color: 'black'}}/>
                        </div>
                        <div className='div-selecionar'>
                            <input onChange={handleUploadImagem} accept='.jpg,.png,.jpeg'
                                multiple={false} type="file" name="ImagemTreino"
                                className='buttonUpload' id={`IimagemTreino${index}`} />

                            <h4 className='selector-text'>Selecionar</h4>
                        </div>
                        {/* <div onClick={() => console.log("era pra tirar a imagem")} className="div-limpar">
                            <h4>X</h4>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartaoImg;