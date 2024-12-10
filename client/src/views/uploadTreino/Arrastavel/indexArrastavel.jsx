import ArrasImg from "./components/arrasImagem";
import ArrasParag from "./components/arrasParag";
import ArrasTitulo from "./components/arrasTitulo";
import ArrasVideo from "./components/arrasVideo";
import ArrasCheck from "./components/arrasBox"; 

const TiposArrastavel = {
    Imagem : ArrasImg,
    Video : ArrasVideo,
    Prgf : ArrasParag,
    Tit: ArrasTitulo,
    Checkbox: ArrasCheck
}

export default TiposArrastavel;