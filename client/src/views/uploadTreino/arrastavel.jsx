import { useDrag } from "react-dnd";

import TiposArras from "./Arrastavel/indexArrastavel"

const Arrastavel = ({ opcoes }) => {

    const [, drag] = useDrag(() => ({
        type: 'item',
        item: {
            src: opcoes.src,
            tipo: opcoes.tipo
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    switch (opcoes.tipo) {
        case "imagem" :
            return <TiposArras.Imagem imagem={opcoes.src} arrastar={drag}/>
        case "parag":
            return <TiposArras.Prgf mensagem={opcoes.src} arrastar={drag}/>
        case "tit":
            return <TiposArras.Tit mensagem={opcoes.src} arrastar={drag} />
        case "video":
            return <TiposArras.Video imagem={opcoes.placeHolder} arrastar={drag}/>
            case "checkbox":
            return <TiposArras.Checkbox mensagem={opcoes.src} arrastar={drag} />
        default:
            return console.log("unreachable: ", opcoes);
    };
};

export default Arrastavel