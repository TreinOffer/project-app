import { useDrop } from "react-dnd";
import DestinoImg from "../tiposHTML/destinoImg";



const DropImagem = ({ lista }) => {
    const [isOver,dropFilho_img] = useDrop({
        accept: "image",
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return(
        <div ref={dropFilho_img}
        style={{
            backgroundColor: isOver ? "red" : null
        }}
        >
            {
                lista.imagem ?
                    <img src={lista.imagem.src} alt={`Imagem${lista.imagem.id}`} /> 
                : 
                    null
            }   
        </div>
    ) 
};

export default DropImagem