import React from 'react';
import './CartaoParag.css';

const CartaoTit = ({ index, mensagem, deletar, updateTit, isEditting, setItens }) => {

    function actionEdit() {

        setItens[1](prevItens => {
            const itens = [...prevItens];
            itens[setItens[0]].map((item, i) =>
                i === index ? item.isOpen = !isEditting : item
            )
            return itens;
        });
    };

    const onChange = (e) => {
        e.preventDefault();
        const texto = e.target.value;
        return updateTit(index, texto);
    };

    return (
        <div id={`Tit${index}`} className='cartao-parag'>
            {
                isEditting ? (
                    <h1 onClick={actionEdit} style={{ textAlign: 'left' }}>
                        {mensagem}
                    </h1>
                ) : (
                    <>
                        <textarea style={{ width: '100%', height: "50px", resize: 'none'}}
                            autoCapitalize='on' name="" id={`Titulo${index}`}
                            onChange={onChange} value={mensagem}></textarea>
                        <div className='actions-parag'>
                            <button onClick={actionEdit} className='button-ok' type="button">OK</button>
                            <button onClick={() => deletar(index)} className='button-rem' type="button">Excluir</button>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default CartaoTit;
