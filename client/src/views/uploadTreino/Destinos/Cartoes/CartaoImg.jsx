import React, { useState, createRef, useEffect } from 'react';
import imgs from "../../../../imgs/arrayImagens";
// import './CartaoImg2.css';
import './CartaoImg.css';

const CartaoImg = ({ imagem, index, deletar, handleImage, setItens, isFlipped }) => {
    const refFileName = createRef();

    const [newImagem, setNewImagem] = useState();

    useEffect(() => console.log("trava ", trava), [trava])

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
        const fileName = file ? file.name : "Nenhum";
        refFileName.current.innerText = fileName;
        if (file) {
            const url = URL.createObjectURL(file)
            setNewImagem(() => {
                handleImage(index, url);
                return newImagem;
            });
            trava = false;
        };
    };

    return (
        
        <div className='cartaoImagem'>
            <div className='div-imagem'>
                <img src={imagem} alt={`Imagem${index}`} />
                <div onClick={actionExpanse} className='btn-expanse'
                style={{ transform: 'rotateX(-180deg)' }}
                >{'>'}</div>
            </div>
            <div className='opcoes-img'>
                {
                    isFlipped &&
                    <div className='actions'>
                        <div className='div-rem'>
                            <img onClick={() => deletar(index)} src={imgs.deletar} alt="Remover" />
                        </div>
                        <div className='div-selecionar'>
                            <input onChange={handleUploadImagem} accept='.jpg,.png,.jpeg'
                                multiple={false} type="file" name="ImagemTreino"
                                className='buttonUpload' id={`IimagemTreino${index}`} />
                        </div>
                        <div onClick={() => console.log("era pra tirar a imagem")} className="div-limpar">
                            <h4>X</h4>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default CartaoImg;