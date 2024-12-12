import TituloComponent from "../components/titulo.component";

export function sortByOrder(modulo) {
        // Separar a ordem especificada
        const ordem = modulo.Ordem.split(',');

        // Separar os parágrafos com base no delimitador "&&*"
        const paragrafos = modulo.Paragrafos ? modulo.Paragrafos.split('&&*') : [];

    // Garantir que 'Videos' seja um array ou string e tratá-lo corretamente
    const videos = Array.isArray(modulo.Videos) ? modulo.Videos : (modulo.Videos ? modulo.Videos.split(',') : []);

    // Garantir que 'Imagens' seja um array ou string e tratá-lo corretamente
    const imagens = Array.isArray(modulo.Imagens) ? modulo.Imagens : (modulo.Imagens ? modulo.Imagens.split(',') : []);
        console.log("verificacao: ",paragrafos,imagens,videos);
    
        // Inicializar a lista de saída
        const saida = [];
    
        // Processar cada item na ordem
        ordem.forEach(item => {
            // item = item.trim(); // Remover espaços extras
    
            if (item === 'tit') {
                saida.push({ tit: modulo.Titulo });
            } else if (item === 'imagem' && imagens.length > 0) {
                saida.push({ imagem: imagens.shift() });
            } else if (item === 'video' && videos.length > 0){
                saida.push({ video: videos.shift() });
            }else if(item === 'parag' && paragrafos.length > 0){
                saida.push({ parag: paragrafos.shift() });
            }else{
                console.log("triste demais");
            };
        });
        console.log("triste: ",saida)
        return saida;
}
