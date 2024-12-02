import { createTreino } from "../models/treinamentos/treinamento.model.js";

const entidade = 'treinamentos';

export async function criarTreinamento(req,res) {
    const idTecnico = req.user; 
    const { Titulo, Tipo, FotoCapa, Tags } = req.body;
    console.log("Treino model: ",treinamento);
    try {
        const [ statusCode, resposta ] = await createTreino(entidade, idTecnico);
        res.status(statusCode).json(resposta);
    } catch (error) {
        res.status(500).json(error);
    };    
};