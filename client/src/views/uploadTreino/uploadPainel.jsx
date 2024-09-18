import './estiloArras.css';
import './estiloDestino.css';

import Cabecalho from '../cabecalho'
import Arrastavel from './arrastavel';
import Destino from './destino';

import React, { useState } from 'react';
import imgs from "../../imgs/arrayImagens";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
                    { src: imgs.upImage, tipo: "imagem" },
                    { src: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", tipo: "parag" },
                    { src: imgs.upVideo, tipo: "video" }
                    
                ]
            case 1:
                return [
                    { src: imgs.git, tipo: "imagem" },
                    { src: imgs.tabEduardo, tipo: "imagem" },
                    { src: imgs.tabLeila, tipo: "imagem" }
                ]
            default:
                setClick(0);
                break;
        }
    };

    return (
        <>
            <Cabecalho />
            <main className="contentUpTreino">
                <DndProvider backend={HTML5Backend}>
                    <section className="dragSection">
                        {
                            item(click).map((item,index) => (
                                <Arrastavel key={index} opcoes={item} />
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
