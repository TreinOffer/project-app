import { createCapaTreino, createImagemRegistro, createTreino, createVideoRegistro, readModulos, readTreinamentos } from "../models/treinamentos/treinamento.model.js";

async function returnFiles(imagens, videos) {
    let arrayFiles = [];

    if (imagens) {
        let arrayImagemTreino = imagens.map(imagem => {
            const { filename } = imagem;
            console.log("sim: ", filename);
            return filename;
        });
        //Transforma o array em string para insert no query
        const toStringImagens = arrayImagemTreino.join(', '); 

        arrayFiles.push(toStringImagens);
        console.log("eduardo: ", await arrayImagemTreino);
    };

    if (videos) {
        let arrayVideoTreino = videos.map(video => {
            const { filename } = video;
            console.log("sim: ", filename);
            return filename;
        });
        arrayVideoTreino.join(', '); //Transforma o array em string para insert no query
        arrayFiles.push(arrayVideoTreino);
        console.log("eduardo2: ", await arrayVideoTreino);
    };
    console.log("array de arquivos: ",arrayFiles);
    return arrayFiles;
};

const entidade = ['treinamentos', 'modulos', 'imagens', 'videos'];

export async function listarTreinamentos(req,res) {
    console.log("ListarTreinamentos ::: Controller");
    const { primKey, cargo } = req.user;
    console.log("idUser: ",primKey);

    const [ statusCode, resposta ] = await readTreinamentos(
        entidade[0],
        primKey, cargo,
    );

    res.status(statusCode).json(resposta);
};

export async function criarCapaTreino(req, res) {
    const { primKey } = req.user;
    console.log("idTecnico: ",primKey);

    const capa = req.body;
    const filename = req.file ? req.file.filename : null
    capa.capaTreino = filename;

    console.log("TreinoCapa::: Controller ", capa, filename, primKey);

    const [statusCode, resposta] = await createCapaTreino(
        entidade[0],
        primKey,
        capa, filename
    );
    res.status(statusCode).json(resposta);
};

export async function criarTreinamento(req, res) {
    const { ImagemTreino, VideoTreino } = req.files;
    const { Titulo, Paragrafos, Ordem } = req.body;
    console.log("imagem: ",ImagemTreino, "video: ", VideoTreino);
    
    console.log("Treinamento::: Controller ");
    console.log("titulo: ", Titulo, "parag: ",Paragrafos);
    const [imagens, videos] = await returnFiles(ImagemTreino, VideoTreino);

    const [statusCodeModulo, resposta] = await createTreino(
        entidade,
        Titulo, Paragrafos,
        imagens, videos, Ordem
    );
    res.status(statusCodeModulo).json(resposta);
    
//     if (statusCodeModulo === 500) {
//         //Encerra a resposta
//         res.status(statusCodeModulo).json(resposta);
//     }else{
//         //Retorna o status, porém, passa para a próxima função
//         res.status(statusCodeModulo);
//         

//         // Criar forma de passar o id do modulo
//         // Se existir imagens em ArrayImagens
//         if (arquivos[0].length > 0) {
//             const [statusCodeImagens, resposta] = await criarImagemRegistro(entidade[2], arquivos[0], idModulo);
//             res.status(statusCodeImagens).json(resposta);
//         };

//         if (arquivos[1]. length > 0) {
//             const [statusCodeVideos, resposta] = await criarVideoRegistro(entidade[3], arquivos[1], idModulo);
//             res.status(statusCodeVideos, resposta);   
//         };
//         res.status().json({ message: `Modulo Criado`, status: 204 });
//     };
// };

// async function criarImagemRegistro(entidade, imagens, idModulo) {
//     const [ statusCode, resposta ] = await createImagemRegistro(entidade, imagens, idModulo);
//     return [statusCode, resposta];
// };

// async function criarVideoRegistro() {
//     const [ statusCode, resposta ] = await createVideoRegistro(entidade, videos, idModulo);
//     return [statusCode, resposta];
};

export async function listarModulo(req,res) {
    console.log("ListarModulo ::: Controller");
    const { idTreino } = req.params
    
    const [statusCode, resposta] = await readModulos(
        entidade[1], idTreino
    );

    res.status(statusCode).json(resposta);
};