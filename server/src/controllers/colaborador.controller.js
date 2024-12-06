import { 
    getColaboradores,
    postColaborador,
    updateColaborador,
    disableColaborador,
} from "../models/colaboradores/colaborador.model.js";

const entidade = "colaboradores";

export async function listarColaboradors(req, res) {
  const idTecnico = req.user.primKey;
  const { Unique } = req.query;

  console.log("ColaboradorGET :: Controller");

  const [statusCode, Colaboradores] = await getColaboradores(
    entidade,
    idTecnico,
    Unique
  );

  return res.status(statusCode).json(Colaboradores);
}

export async function criarColaborador(req, res) {
  const Colaborador = req.body;
  const idEmpresa = req.user.primKey;
  const filename = req.file?.filename;
  console.log(Colaborador);
  console.log("imagemNome: ",Colaborador.Imagem);
  console.log("File ::: ",filename)

  console.log("ColaboradorPOST :: Controller");
  console.log("Colaborador: ", Colaborador);

  const [statusCode, retorno] = await postColaborador(Colaborador, entidade, idEmpresa, filename);
  res.status(statusCode).json(retorno);
}

export async function atualizarColaborador(req, res) {
  const Colaborador = req.body;
  const { idColaborador } = req.params;
  const idEmpresa = req.user.primKey;
  console.log("file: ", req.file);
  const fileName = req.file?.filename;

  console.log("ColaboradorUPDATE ::: Controller");
  console.log("Colaborador: ", Colaborador, "id: ", idColaborador, "empresa: ", idEmpresa);

  const [statusCode, retorno] = await updateColaborador(
    Colaborador,
    entidade,
    idColaborador,
    idEmpresa,
    fileName
  );
  
  res.status(statusCode).json(retorno);
}

export async function inativarColaborador(req, res) {
  const { idColaborador } = req.params;
  const idEmpresa = req.user.primKey;
  console.log("ColaboradorDELETE ::: Controller");
  console.log("id: ",idColaborador);

  const [statusCode, retorno] = await disableColaborador(entidade, idColaborador, idEmpresa);
  res.status(statusCode).json(retorno);
};