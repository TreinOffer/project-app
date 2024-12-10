import TituloComponent from "../components/titulo.component";

export function sortByOrder(modulo) {
    console.log(modulo);
    const { Ordem, Titulo, Paragrafos, Imagens } = modulo;

    // Dividir os parágrafos e imagens conforme o delimitador
    const paragrafosArray = Paragrafos.split('&&*');
    const imagensArray = Imagens.split(',');

    const novoObjeto = {};
    const resultado = [];

    // Itera sobre a Ordem para gerar a saída conforme a sequência
    const sortOrder = Ordem.split(',');

    sortOrder.forEach((item, index) => {
        if (item === 'Titulo') {
            resultado.push({ Titulo });
        } else if (item === 'Paragrafos' && paragrafosArray.length > 0) {
            const paragrafo = paragrafosArray.shift();
            resultado.push({ Paragrafo: paragrafo });
        } else if (item === 'ImagemTreino' && imagensArray.length > 0) {
            const imagem = imagensArray.shift();
            resultado.push({ Imagem: imagem });
        }
    });
    console.log("Sim Murray: ",resultado);
    return resultado;
}