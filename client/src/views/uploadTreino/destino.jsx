import { useDrop } from "react-dnd";
import { useState } from "react";

import Containers from "./Destinos/indexContainers";

const Destino = () => {

    const [itens,setItens] = useState([]);

    const onDrop = (item) => {
        const index = itens.length;
        item.index = index;
        setItens(prevItens => ([
            ...prevItens,
            [item]
        ]));
    };

    const [{ isOver },drop] = useDrop({
        accept: "image",
        drop: ( image ) => {
            if (isOver) {
                if (image.tipo === "imagem") {
                    onDrop({"imagem": image},image.tipo); 
                }else if (image.tipo === "parag"){
                    onDrop({"parag": image},image.tipo);
                } else{
                    onDrop({"video": image},image.tipo);
                };
                console.log("onDrop",image);    
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
            ref={drop}
        >
            {
                itens.map((item,index) => {
                    // switch (item.tipo) {
                    //     case "imagem":
                            return(
                                <Containers.Imagem index={index} key={index} itens={item} setItens={setItens}></Containers.Imagem>
                            );
                    //     case "parag":
                    //         return(
                    //             <Containers.Prgf index={index} key={index} itens={item} setItens={setItens}></Containers.Prgf>
                    //     );
                    //         default:
                    //             break;
                    // }
                })
            }
        </section>
    )
};

export default Destino