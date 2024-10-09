import React from 'react';

const CartaoParag = ({ index, mensagem }) => {
    return (
        <div id={`paragrafo${index}`} className='cartao'>
            <textarea autoCapitalize='on' name="" id={`paragrafo${index}`} value={ mensagem }></textarea>
        </div>
    );
}

export default CartaoParag;
