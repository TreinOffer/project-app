import React from 'react';
import './CartaoParag.css';

const CartaoParag = ({ index, mensagem, deletar, updateParag, isEditting, setItens }) => {

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
        return updateParag(index, texto);
    };

    return (
        <div id={`paragrafo${index}`} className='cartao-parag'>
            {
                isEditting ? (
                    <p onClick={actionEdit} style={{ textAlign: 'center' }}>
                        {mensagem}
                    </p>
                ) : (
                    <>
                        <textarea style={{ width: '100%', height: "300px" , color: "red"}}
                            autoCapitalize='on' name="" id={`paragrafo${index}`}
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

export default CartaoParag;
