import React from 'react';
import styles from './CartaoImg.module.css';

const CartaoImg = ({ imagem, index }) => {

    function flipAction() {
        
    };

    let newimagem = null;

    const handleUploadImagem = (event) => {
      const file = event.target.files[0];
      if (file) {
        newimagem = URL.createObjectURL(file);
        document.getElementById(`Imagem${index}`).src = newimagem;
      };
    };

    return (
        <div id={`Cartao${index}`} className={styles.cartaoImagem} onClick={flipAction} >
            <div className={styles.cartaoTras}>
                <input className='addFotoFuncBt' onChange={handleUploadImagem} accept='.jpg,.png,.jpeg' multiple={false} type="file" name="foto" id="foto"/>
                <label id='forFoto' htmlFor="foto">Escolher imagem</label>
                <img src={ newimagem ? newimagem : imagem } alt="Imagem" />
            </div>
            <div className={styles.cartaoFrente}>
                <img id={`Imagem${index}`} src={ newimagem ? newimagem : imagem } alt="Imagem" />
            </div>
        </div>
    );
}

export default CartaoImg;