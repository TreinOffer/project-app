import {
  disableTecnico,
  getTecnicos,
  postTecnico,
  updateTecnico,
} from "../models/tecnicos/tecnico.model.js";

const entidade = "tecnicos";

export async function listarTecnicos(req, res) {
  const idEmpresa = req.user.primKey;
  console.log("TecnicoGET :: Controller");

  const [statusCode, tecnicos] = await getTecnicos(entidade, idEmpresa);
  return res.status(statusCode).json(tecnicos);
}

export async function criarTecnico(req, res) {
  const tecnico = req.body;
  const idEmpresa = req.user.primKey;

  console.log("TecnicoPOST :: Controller");
  console.log("tecnico: ", tecnico);

  const [statusCode, retorno] = await postTecnico(tecnico, entidade, idEmpresa);
  res.status(statusCode).json(retorno);
}

export async function atualizarTecnico(req, res) {
  const tecnico = req.body;
  const { idTecnico } = req.params;
  const idEmpresa = req.user.primKey;

  console.log("TecnicoUPDATE ::: Controller");
  console.log("tecnico: ", tecnico, "id: ", idTecnico, "empresa: ", idEmpresa);

  const [statusCode, retorno] = await updateTecnico(
    tecnico,
    entidade,
    idTecnico,
    idEmpresa
  );
  
  res.status(statusCode).json(retorno);
}

export async function inativarTecnico(req, res) {
  const { idTecnico } = req.params;
  const idEmpresa = req.user.primKey;
  console.log("TecnicoDELETE ::: Controller");
  console.log("id: ",idTecnico);

  const [statusCode, retorno] = await disableTecnico(entidade, idTecnico, idEmpresa);
  res.status(statusCode).json(retorno);
};