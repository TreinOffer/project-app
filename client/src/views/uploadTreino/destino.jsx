import { useDrop } from "react-dnd";
import { useState } from "react";

import Containers from "./Destinos/indexContainers";

const Destino = () => {

    const [itens,setItens] = useState([{}]);

    // const onDrop = (item, contArray) => {
    //     setItens((prevItens) => ({...prevItens, [contArray]: item}))
    //     console.log("itens: ", itens);
    // };

    const onDrop = (item) => {
        setItens(prevItens => ([
            ...prevItens,
            item
        ]));
        
        itens.slice().reverse().find(item => {
            // console.log("item: ",item);


            if (Object.keys(item)[0]) {


                let lastSection = Object.keys(item)[0];
                let alteracao = lastSection ? lastSection[(lastSection.length - 1)] : null;
                alteracao = (Number(alteracao) + 1);
                // console.log(alteracao);
                let keyUpdated = lastSection.slice(0,-1) + String(alteracao);
                // console.log(keyUpdated);

                const propUpdated = {
                    [keyUpdated]: {
                        id: item.id,
                        src: item.src,
                        tipo: item.tipo
                    } 
                }
                return itens[(itens.length - 1)] = propUpdated;

            } else
                {return ;}
        });
    };

    const [{ isOver }, drop] = useDrop({
        accept: "image",
        drop: (image) => {
            onDrop({"imagem1": image});
            console.log("onDrop",image);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    });
    console.log(itens);

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
            
            {
                itens.map((item,index) => {
                    return item.imagem ? 
                        <Containers.Imagem key={index} lista={itens}/>
                    : 
                        null
                })
            }
            
        </div>
    )
};

export default Destino