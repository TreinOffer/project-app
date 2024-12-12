export async function createFormTreino(modulos) {
    console.log("eunaoseimaisdeNADA2: ",modulos)
    const formData = new FormData();
    const ordem = [];

    modulos.forEach(item => {
        const { src, tipo } = item;
        
        switch (tipo) {
            case 'tit':
                formData.append('Titulo', src);
                break;
            case 'parag':
                formData.append('Paragrafos', src);
                break;
            case 'video':
                formData.append('VideoTreino', src);
                break;
            case 'imagem':
                // const file = src.startsWith('http') ? src : new File([src], src);
                formData.append('ImagemTreino', src);
                break;
            default:
                break;
        }

        ordem.push(tipo);
    });

    formData.append('Ordem', ordem.join(','));

    return formData;
};

export async function createForm(json){
    console.log(json);
    const forms = new FormData();

    for (const chave in json) {
        forms.append(chave, json[chave]);
    };

    return forms;
};