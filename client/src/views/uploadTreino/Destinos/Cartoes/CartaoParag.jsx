import React, { useState } from 'react';
import './CartaoParag.css';

const CartaoParag = ({ index, mensagem, deletar }) => {

    const [msg, setMsg] = useState(mensagem);
    const [ok, setOk] = useState(false);

    const onChange = (e) => {
        e.preventDefault();
        setMsg(e.target.value);
    };

    const handleOk = () => {
        console.log("ok msg: ",ok);
        setOk(!ok);
    };

    return (
        <div id={`paragrafo${index}`} className='cartao-parag'>
            {
                ok ? (
                    <p onClick={handleOk} style={{ textAlign: 'center' }}>
                        {msg}
                    </p>
                ) : (
                    <>
                        <textarea style={{ width: '100%', height: "300px"}}
                            autoCapitalize='on' name="" id={`paragrafo${index}`}
                            onChange={onChange} value={msg}></textarea>
                        <div className='actions-parag'>
                            <button onClick={handleOk} className='button-ok' type="button">OK</button>
                            <button onClick={() => deletar(index)} className='button-rem' type="button">Excluir</button>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default CartaoParag;
