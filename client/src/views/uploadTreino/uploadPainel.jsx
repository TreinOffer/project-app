import './estiloArras.css';
import './estiloDestino.css';

import Cabecalho from '../cabecalho/index';
import Arrastavel from './arrastavel';
import Destino from './destino';

import React, { useState } from 'react';
import imgs from "../../imgs/arrayImagens";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const UploadPainel = () => {

    const [click, setClick] = useState(0);
    const [modulo, setModulo] = useState(1);
    const [itens, setItens] = useState([])

    const handleModulo = (valor) => {
        if (!valor) {
            setModulo(prevModulo => (prevModulo - 1))
            console.log(modulo);
        } else {
            setModulo(prevModulo => (prevModulo + 1))
            console.log(modulo);
        }
    };

    const xxx = () => {
        click >= 1 ? setClick(0) :
            setClick((prevClick) => prevClick + 1);
    };
    const handlePlus = (num) => {

        click >= 1 ? setClick(0) :
            setClick((prevClick) => prevClick + 1);

        switch (num) {
            case 0:
                return setItens([
                    { src: imgs.upImage, tipo: "imagem" },
                    { src: imgs.upVideo, tipo: "video" },
                    { src: "Exemplo parágrafo", tipo: "parag" },
                    { src: "Exemplo título", tipo: "tit" }
                ]);
            case 1:
                return setItens([
                    // { src: "Exemplo titulo",
                    //     tipo: "tit" },
                    {
                        src: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        tipo: "parag"
                    },
                    // { src: imgs.tabLeila, tipo: "imagem" }
                ]);
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
                            itens.map((item, index) => (
                                <Arrastavel key={index} opcoes={item} />
                            ))
                        }
                        <div
                            className="bt-mudar"
                            onClick={() => handlePlus(click)}
                            style={{ justifyContent: click > 0 ? `space-around` : null }}
                        >
                            <div>
                                {
                                    click >= 1 ?
                                        "<"
                                        :
                                        ">"
                                }
                            </div>
                            {
                                click >= 1 && (
                                    <div>
                                        {`>`}
                                    </div>
                                )
                            }
                        </div>
                    </section>
                    <div className='wrap-section-destino'>
                        <div className='botao-modulo'>

                            <button onClick={modulo > 1 ? () => handleModulo(false) : null}
                                type="button"> {'<'} </button>

                            <span>{`Modulo ${modulo}`}</span>

                            <button onClick={() => handleModulo(true)}
                                type="button"> {'>'} </button>

                        </div>
                        <Destino modulos={(modulo - 1)} />
                    </div>
                </DndProvider>
            </main>
        </>
    );
}

export default UploadPainel;
