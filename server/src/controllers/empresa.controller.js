import { postEmpresa, updateEmpresa } from "../models/empresa/empresa.model.js";

const entidade = 'empresas';

export async function criarEmpresa(req,res) {
    const empresa = req.body;
    console.log("empresa model: ",empresa)
    try {
        const [ statusCode, resposta ] = await postEmpresa(empresa, entidade);
        res.status(statusCode).json(resposta);
    } catch (error) {
        res.status(500).json(error);
    };
};

export async function AtualizarEmpresa(req, res) {
    const empresa = req.body;
    const id = req.params
  
    try {
      const [retorno] = await updateEmpresa(id, empresa);
      return res.send(retorno[0]).json(retorno[1]);
    } catch (error) {
      res.send(500).json({ message: `Erro na API: ${error}` });
    };
};