import React, { useState, createRef } from 'react';
import imgs from "../../../../imgs/arrayImagens";
import './CartaoImg.css';

let trava = false;

const CartaoImg = ({ imagem, index }) => {
    const refImage = createRef();
    const refCartao = createRef();
    const refCartaoTras = createRef();
    const refCartaoFrente = createRef();
    const refFileName = createRef();

    const [ newImagem, setNewImagem ] = useState();

    function flipAction() {

        if (refCartao.current.className.includes("flip")) {
            const frente = refCartaoFrente.current;
            frente.classList.add("efeitoFrente");
            setTimeout(() => {
                frente.classList.remove("efeitoFrente");
            }, 500);
        };
        
        if (!trava) {
            const traseira = refCartaoTras.current;
            traseira.classList.toggle("efeitoTras");

            setTimeout(() => {
                const cartao = refCartao.current;
                cartao.classList.toggle("flip");
            }, 300);
        }

        trava = false;
    };

    const handleUploadImagem = (event) => {
        const file = event.target.files[0];
        const fileName = file ? file.name : "Nenhum";
        refFileName.current.innerText = fileName;
        if (file) {
            setNewImagem(URL.createObjectURL(file));
            let imagem = refImage.current.src;
            imagem = newImagem;
            trava = false;
        };
    };

    return (
        <div ref={ refCartao } className="cartaoImagem" onClick={ flipAction } >
            <div ref={ refCartaoTras }  className="cartaoTras">
                <label className='uploadTitle'  id={`imagemTreino${index}`} htmlFor="ImagemTreino">Escolher imagem</label>
                <div
                    style={{ display: "flex", flexDirection: "row" }}
                >
                    <div id='inputButton' style={{ display: "flex", flexDirection: "row", position: "relative" }}>
                        <input onClick={() => { trava = true }} onChange={handleUploadImagem} accept='.jpg,.png,.jpeg' multiple={false} type="file" name="ImagemTreino" className='buttonUpload' id={`IimagemTreino${index}`} />
                        <input type="button" value="Selecionar" />
                    </div>
                </div>
                <div className='confirmed'
                    style={{
                        backgroundColor: newImagem ? "green" : "red"
                    }}
                >
                    <img src={newImagem ? imgs.confirmar : imgs.deletar} alt="confirmar" />
                </div>
                <span id='fileName' ref={refFileName}>
                    Nenhum
                </span>
            </div>
            <div ref={ refCartaoFrente } className="cartaoFrente">
                <img ref={ refImage } src={newImagem ? newImagem : imagem} alt="Imagem" />
            </div>
        </div>
    );
}

export default CartaoImg;