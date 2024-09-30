import { useDrop } from "react-dnd";
import Cartao from "../Cartoes/CartaoImg";

const DropImagem = ({ itens, setItens, index }) => {  

    const onDropFilho = (item) => {
        setItens(prevItens => {
          const updated = [...prevItens];
          
          updated[index] = [...updated[index], item];
          return updated;
        });
      };

    const [{ isOver },dropFilho_img] = useDrop({
        accept: "image",
        drop: ( objeto ) => {
            onDropFilho({ "imagem": objeto });
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return(
        <div ref={ dropFilho_img }
        style={{
            backgroundColor: isOver ? "red" : null,
            width: "100%",
            height: "500px",
            display: "grid",
            gridAutoFlow: "row",
            gridTemplateColumns: "repeat(2,1fr)",
            justifyItems: "center",
            alignItems: "center",
        }}
        >
            {
                itens.map((item,index) => {
                    return (
                        <Cartao key={index} index={index} imagem={item.imagem.src}></Cartao>
                    )
                })
            }   
        </div>
    ) 
};

export default DropImagem