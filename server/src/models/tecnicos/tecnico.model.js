import conexao from "../conexao.model.js";
import {
  duplicado,
  duplicateId,
} from "../validations/common/duplicateId.validation.js";
import {
  isEmptyField,
  mensagem,
} from "../validations/common/emptyFields.validation.js";
import erro from "../validations/common/erro.message.js";
import { hasNotChanged, nadaMudou } from "../validations/common/linhasAfetadas.validation.js";
import properties from "./properties.tecnico.js";

export async function getTecnicos(entidade, idEmpresa) {
  try {
    const sql = `SELECT * FROM ${entidade}
    WHERE idEmpresa = ? ORDER BY Disabled ASC`;
    
    const [ tecnicos ] = await conexao.query(sql,idEmpresa);
    return [200, tecnicos];

  } catch (error) {
    console.log("deu erro: ",error);
    return erro(error);
  };
};

export async function postTecnico(tecnico, entidade, idEmpresa, nomeImagem) {
  try {
    if (await isEmptyField(tecnico, properties)) return mensagem;

    if (await duplicateId(tecnico.Matricula, conexao, [entidade, properties[0]], idEmpresa))
        return duplicado("Matricula");

    const sql = `INSERT INTO ${entidade} (
    Matricula, Nome, Especializacao,
    Senha, idEmpresa, Imagem
    ) VALUES(
        ?,?,?,?,?,?
    )`;

    const params = [
      tecnico.Matricula,
      tecnico.Nome,
      tecnico.Especializacao,
      tecnico.Senha,
      idEmpresa,
      nomeImagem,
    ];

    await conexao.query(sql, params);
    return [201, { message: `Tecnico criado`, status: 201 }];

  } catch (error) {
    console.log("deu erro: ",error);
    return erro(error);
  };
};

export async function updateTecnico(tecnico, entidade, idTecnico, idEmpresa, nomeImagem) {
  console.log("TecnicoUPDATE ::: Model");
  try {

    if (await isEmptyField(tecnico, properties))
      return mensagem;

    const sql = `UPDATE ${entidade}
    SET Matricula = ?, Nome = ?, Especializacao = ?,
    Senha = ?, idEmpresa = ?, Imagem = ?
    WHERE Matricula = ? AND idEmpresa = ?`;

    const params = [
      tecnico.Matricula, tecnico.Nome, tecnico.Especializacao,
      tecnico.Senha, idEmpresa, nomeImagem, 
      idTecnico, idEmpresa
    ];

    const [ retorno ] = await conexao.query(sql, params);

    if (await hasNotChanged(retorno)) return nadaMudou;

    return [ 200, { message: `Técnico ${idTecnico} atualizado`, status: 200 }];

  } catch (error) {
    return [ 500, erro(error) ];
  };
};

export async function disableTecnico(entidade, idTecnico, idEmpresa) {
  console.log("TecnicoDELETE ::: Model");
  try {
    const sql = `UPDATE ${entidade} SET disabled = ?
    WHERE idEmpresa = ? AND Matricula = ?`;
    
    const params = [ true, idEmpresa, idTecnico ];
    
    const [retorno] = await conexao.query(sql, params);
    
    if (await hasNotChanged(retorno)) return nadaMudou;

    return [ 200, { message: `Técnico ${idTecnico} desabilitado`, status: 200 } ];
  } catch (error) {
    return [ 500, erro(error) ];
  };
};