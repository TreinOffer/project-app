import { postEmpresa } from "../models/empresaCadastroModel.js";

export async function criarEmpresa(req,res) {
    const empresa = req.body;
    console.log("empresa model: ",empresa)
    try {
        const [ statusCode, resposta ] = await postEmpresa(empresa);
        res.status(statusCode).json({message: resposta});
    } catch (error) {
        res.status(500).json(error);
    };
};