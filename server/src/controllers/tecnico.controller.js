import { getTecnicos, postTecnico } from "../models/tecnicos/tecnico.model.js";

const entidade = 'tecnicos';

export async function listarTecnicos(req,res) {
  const idEmpresa = req.user.primKey;
  console.log("TecnicoGET :: Controller");

  const [ statusCode, tecnicos ] = await getTecnicos(entidade, idEmpresa);
  return res.status(statusCode).json(tecnicos);
};

export async function criarTecnico(req,res) {
    const tecnico = req.body;
    const idEmpresa = req.user.primKey;

    console.log("TecnicoPOST :: Controller");
    console.log("tecnico: ",tecnico);

    const [ statusCode, retorno ] = await postTecnico(tecnico, entidade, idEmpresa);
    res.status(statusCode).json(retorno);
};