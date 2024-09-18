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
        <div ref={dropFilho_img}
        style={{
            backgroundColor: isOver ? "red" : null,
        }}
        >
            {
                itens.map((item,index) => {
                    return (
                        //<Cartao key={index} index={index} imagem={item.imagem.src}></Cartao>
                        <img key={index} src={item.imagem.src} alt={`Imagem`} />
                    )
                })
            }   
        </div>
    ) 
};

export default DropImagem