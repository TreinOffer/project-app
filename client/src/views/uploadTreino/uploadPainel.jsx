import './estiloUpTreino.css';
import cabecalho from '../cabecalho'
import React, { useState } from 'react';
import imgs from "../../imgs/arrayImagens";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//Reference element, call this ref on drop property of Destino 

const Destino = ({ onDrop,handleRef,lista }) => {
    const [{ isOver }, drop] = useDrop({
        accept: "image",
        drop: (image) => {
            onDrop(image);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });
    const isImagem = lista.length > 1 ? "isImagem":""
    return (
        <div
            className='dropSection'
            style={{
                width: "calc(100% - (132px + 120px))",
                // height: "100vh",
                border: '2px solid black',
                backgroundColor: isOver ? "lightgreen" : "cyan"
            }}
            ref={drop}
        >
            <div
            className={isImagem}
            style={{
                width: "100%"
            }}
            >
                {
                    lista.map((item,index) => (
                        <img key={index} id={item.id} src={item.src} alt='aa' />
                    ))
                }
            </div>
        </div>
    )
};

const Arrastavel = ({ opcoes }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'image',
        item: { id: opcoes.id, src: opcoes.src },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
            <img id={opcoes.id} src={opcoes.src} ref={drag} alt='arrastar'
            style={{
                opacity: isDragging ? 0.5 : 1
            }}
            />
    );
};

const UploadPainel = () => {

    const [click,setClick] = useState(0);

    const handlePlus = () => {
        click >= 1 ? setClick(0) : 
        setClick((prevClick) => prevClick + 1);
    };

    const item = (num) => {
        switch (num) {
            case 0:
                return[
                        { id: 1, src: imgs.empresa },
                        { id: 2, src: imgs.tabEduardo},
                        { id: 3, src: imgs.tabLeila}
                    ]
            case 1:
                return[
                    { id: 4, src: imgs.git},
                    { id: 5, src: imgs.confirmar}
                ]
            default:
                setClick(0);
                break;
        }};

    const [objetos, setObjetos] = useState([]);
    const handleDrop = (objeto) => {
        setObjetos((objOutros) => [...objOutros, objeto]);
        console.log("handleDrop: ",objeto);
    };

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
                        style={{
                            display: 'flex',
                            border: "1px solid black",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: 'pointer'
                        }}
                        onClick={handlePlus}
                        >
                            {
                                click >= 1? 
                                "<"
                                : 
                                ">"
                            }
                        </div>
                    </section>
                    <Destino onDrop={handleDrop} handleRef={handleDouble} lista={objetos}/>
                </DndProvider>
            </main>
        </>
    );
}

export default UploadPainel;
