import { createCapaTreino, createTreino } from "../models/treinamentos/treinamento.model.js";

async function returnFiles(imagens, videos) {
    if (imagens) {
        let arrayImagemTreino = imagens.map(imagem => {
            console.log("sim: ", imagem.filename);
            return imagem.filename;
        });
        console.log("eduardo: ", await arrayImagemTreino);
    };

    if (videos) {
        let arrayVideoTreino = videos.map(video => {
            console.log("sim2: ", video.filename);
            return video.filename;
        });
        console.log("eduardo2: ", await arrayVideoTreino);
    };

    const arrayFiles = () => {
        return (
            arrayImagemTreino.length > 0 &&
                arrayVideoTreino.length > 0 ? [arrayImagemTreino, arrayVideoTreino] :
                arrayImagemTreino.length > 0 ? arrayImagemTreino : arrayVideoTreino
        )
};

return arrayFiles;
};

const entidade = ['treinamentos', 'modulos', 'imagens', 'videos'];

export async function criarCapaTreino(req, res) {
    const { primKey } = req.user;
    const { fieldname } = req.file;
    const { Titulo, Tipo, Tags } = req.body;

    console.log("Treino model: ", Titulo, Tipo, fieldname, Tags, primKey);

    const [statusCode, resposta] = await createCapaTreino(
        entidade,
        primKey,
        Titulo, Tipo, fieldname, Tags
    );
    res.status(statusCode).json(resposta);
};

export async function criarTreinamento(req, res) {
    const { ImagemTreino, VideoTreino } = req.files;
    const { Titulo, Paragrafos } = req.body;

    const arquivos = await returnFiles(ImagemTreino, VideoTreino);

    console.log("Treinamento model: ", Titulo, Paragrafos, arquivos);

    const [statusCode, resposta] = await createTreino(
        entidade,
        Titulo, Tipo, fieldname, Tags
    );
    res.status(statusCode).json(resposta);
};