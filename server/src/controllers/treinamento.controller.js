import { createCapaTreino, createImagemRegistro, createTreino, createVideoRegistro } from "../models/treinamentos/treinamento.model.js";

async function returnFiles(imagens, videos) {
    let arrayFiles = [];

    if (imagens) {
        let arrayImagemTreino = imagens.map(imagem => {
            const { filename } = imagem;
            console.log("sim: ", filename);
            return filename;
        });
        arrayFiles.push(arrayImagemTreino);
        console.log("eduardo: ", await arrayImagemTreino);
    };

    if (videos) {
        let arrayVideoTreino = videos.map(video => {
            const { filename } = video;
            console.log("sim: ", filename);
            return filename;
        });
        arrayFiles.push(arrayVideoTreino);
        console.log("eduardo2: ", await arrayVideoTreino);
    };
    console.log("array de arquivos: ",arrayFiles);
    return arrayFiles;
};

const entidade = ['treinamentos', 'modulos', 'imagens', 'videos'];

export async function criarCapaTreino(req, res) {
    const { primKey } = req.user;
    const { fieldname } = req.file;
    const { Titulo, Tipo, Tags } = req.body;

    console.log("TreinoCapa::: Controller ", Titulo, Tipo, fieldname, Tags, primKey);

    const [statusCode, resposta] = await createCapaTreino(
        entidade[0],
        primKey,
        Titulo, Tipo, fieldname, Tags
    );
    res.status(statusCode).json(resposta);
};

export async function criarTreinamento(req, res) {
    const { ImagemTreino, VideoTreino } = req.files;
    const { Titulo, Paragrafos } = req.body;
    
    console.log("Treinamento::: Controller ", Titulo, Paragrafos);
    
    const [statusCodeModulo, resposta] = await createTreino(
        entidade,
        Titulo, Paragrafos
    );
    
    if (statusCodeModulo === 500) {
        //Encerra a resposta
        res.status(statusCodeModulo).json(resposta);
    }else{
        //Retorna o status, porém, passa para a próxima função
        res.status(statusCodeModulo);
        const arquivos = await returnFiles(ImagemTreino, VideoTreino);

        // Criar forma de passar o id do modulo
        // Se existir imagens em ArrayImagens
        if (arquivos[0].length > 0) {
            const [statusCodeImagens, resposta] = await criarImagemRegistro(entidade[2], arquivos[0], idModulo);
            res.status(statusCodeImagens).json(resposta);
        };

        if (arquivos[1]. length > 0) {
            const [statusCodeVideos, resposta] = await criarVideoRegistro(entidade[3], arquivos[1], idModulo);
            res.status(statusCodeVideos, resposta);   
        };
        res.status().json({ message: `Modulo Criado`, status: 204 });
    };
};

async function criarImagemRegistro(entidade, imagens, idModulo) {
    const [ statusCode, resposta ] = await createImagemRegistro(entidade, imagens, idModulo);
    return [statusCode, resposta];
};

async function criarVideoRegistro() {
    const [ statusCode, resposta ] = await createVideoRegistro(entidade, videos, idModulo);
    return [statusCode, resposta];
};