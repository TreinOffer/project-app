import './estiloUpTreino.css';

import cabecalho from '../cabecalho'
import Arrastavel from './arrastavel';
import Destino from './destino';

import React, { useState } from 'react';
import imgs from "../../imgs/arrayImagens";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//Assim que haver elem, se drop e elemNovo compativel com target type, elemNovo into elem_dropPai

const UploadPainel = () => {

    const [click, setClick] = useState(0);

    const handlePlus = () => {
        click >= 1 ? setClick(0) :
            setClick((prevClick) => prevClick + 1);
    };
    const item = (num) => {
        switch (num) {
            case 0:
                return [
                    { id: 1, src: imgs.empresa, tipo: "imagem" },
                    { id: 2, src: imgs.tabEduardo, tipo: "imagem" },
                    { id: 3, src: imgs.tabLeila, tipo: "imagem" }
                ]
            case 1:
                return [
                    { id: 4, src: imgs.git, tipo: "imagem" },
                    { id: 5, src: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", tipo: "parag" },
                    { id: 6, src: imgs.TreinOffer, tipo: "video" }
                ]
            default:
                setClick(0);
                break;
        }
    };

    // const [objetos, setObjetos] = useState([]);
    // const handleDrop = (objeto) => {
    //     setObjetos((objOutros) => [...objOutros, objeto]);
    //     console.log("handleDrop: ", objeto);
    //     console.log("objetos: ", objetos);
    //     if (objeto.tipo === "imagem") {
    //         tipoObjs[0] += 1;
    //         console.log("img: ", tipoObjs[0]);
    //     } else if (objeto.tipo === "video") {
    //         tipoObjs[1] += 1;
    //         console.log("video: ", tipoObjs[1]);
    //     };
    // };

    return (
        <>
            {cabecalho()}
            <main className="contentUpTreino">
                <DndProvider backend={HTML5Backend}>
                    <section className="dragSection">
                        {
                            item(click).map((item) => (
                                <Arrastavel key={item.id} opcoes={item} />
                            ))
                        }
                        <div
                            className="bt-mudar"
                            onClick={handlePlus}
                        >
                            {
                                click >= 1 ?
                                    "<"
                                    :
                                    ">"
                            }
                        </div>
                    </section>
                    <Destino />
                </DndProvider>
            </main>
        </>
    );
}

export default UploadPainel;
