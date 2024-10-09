import { useDrop } from "react-dnd";
import { useState } from "react";

import Containers from "./Destinos/indexContainers";

const Destino = () => {

    const [ itens,setItens ] = useState([]);

    const onDrop = (item) => {
        const index = itens.length;
        item.index = index;
        setItens(prevItens => ([
            ...prevItens,
            [item]
        ]));
    };

    const [{ isOver },drop] = useDrop({
        accept: "item",
        drop: ( item ) => {
            if (isOver) {
                if (item.tipo === "imagem") {
                    onDrop({"imagem": item},item.tipo); 
                }else if (item.tipo === "parag"){
                    onDrop({"parag": item},item.tipo);
                } else{
                    onDrop({"video": item},item.tipo);
                };
                console.log("onDrop",item);    
            };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver({ shallow: true }),
        })
    });
    console.log("ARRAY: ",itens);

    return (
        <section
            className='dropSection'
            style={{
                backgroundColor: isOver ? "lightgreen" : "hsl(0,0%,97%)"
            }}
            ref={ drop }
        >
            {
                itens.map((item,index) => {
                    // console.log(`item${index}: `,item);
                    // console.log(`tipoItem${index}: `,Object.keys(item[index])[0]);
                    // switch (Object.keys(item[index])[0]) {
                    //     case "imagem":
                            return(
                                <Containers.Imagem index={index} key={index} itens={item} setItens={setItens}></Containers.Imagem>
                            );
                    //     case "parag":
                    //         return(
                    //             <Containers.Prgf index={index} key={index} mensagem={item.src}></Containers.Prgf>
                    //     );    
                    // }
                })
            }
        </section>
    )
};

export default Destino