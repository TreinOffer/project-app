import Cartao from "../Cartoes/CartaoParag";

function DropParag({ index, mensagem }) {
    return(
        <Cartao mensagem={mensagem} index={ index }></Cartao>
    )
};

export default DropParag;