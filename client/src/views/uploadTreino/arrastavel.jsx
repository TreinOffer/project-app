import { useDrag } from "react-dnd";

import TiposArras from "./Arrastavel/indexArrastavel"

const Arrastavel = ({ opcoes }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'image',
        item: { id: opcoes.id, src: opcoes.src, tipo: opcoes.tipo },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    // console.log("opcoes", opcoes);
    switch (opcoes.tipo) {
        case "imagem":
            return <TiposArras.Imagem id={opcoes.id} imagem={opcoes.src} arrastar={drag}/>
        case "parag":
            return <TiposArras.Prgf id={opcoes.id} mensagem={opcoes.src} arrastar={drag}/>
        case "video":
            return <TiposArras.Video id={opcoes.id} video={opcoes.src} arrastar={drag}/>
        default:
            console.log("unreachable: ", opcoes);
            break;
    }
};

export default Arrastavel