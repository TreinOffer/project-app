import conexao from "../conexao.model.js";
import erro from "../validations/common/erro.message.js";
import { returnSQL } from "../tecnicos/return.sql.js";
import properties from "./properties.colaborador.js";
import {isEmptyField, mensagem} from "../validations/common/emptyFields.validation.js";
import {duplicateId, duplicado} from "../validations/common/duplicateId.validation.js";

async function getEmpresaId(id, cargo) {

  if (cargo === 'empresa') {
    return id;
  };

  const sql = `SELECT idEmpresa FROM tecnicos
    WHERE Matricula = ?`;

   const [ resposta ] = await conexao.query(sql, id);
   const desestruturacao = resposta[0];
   const { idEmpresa } = desestruturacao;
   return idEmpresa;
}

export async function getColaboradores(entidade, idUser, unique, cargo) {
  try {

    const idEmpresa = await getEmpresaId(idUser, cargo);

    const [params, sql] = await returnSQL(entidade, idEmpresa, unique);
    
    const [ retorno ] = await conexao.query(sql, params);
    return [200, retorno];

  } catch (error) {
    console.log("deu erro: ", error);
    return erro(error)
  };
};

export async function postColaborador(Colaborador, entidade, idEmpresa, nomeImagem) {
  try {
    if (await isEmptyField(Colaborador, properties)) return mensagem;

    if (await duplicateId(Colaborador.Matricula, conexao, [entidade, properties[0]], idEmpresa))
      return duplicado("Matricula");

    const sql = `INSERT INTO ${entidade} (
      Matricula, Nome, Senha,
      idEmpresa, idTecnico, Imagem
      ) VALUES(
          ?,?,?,?,?,?
      )`;

    const params = [
      Colaborador.Matricula,
      Colaborador.Nome,
      Colaborador.Senha,
      idEmpresa,
      Colaborador.Responsavel,
      nomeImagem,
    ];

    await conexao.query(sql, params);
    return [201, { message: `Colaborador criado`, status: 201 }];

  } catch (error) {
    console.log("deu erro: ", error);
    return erro(error);
  };
};

export async function updateColaborador(Colaborador, entidade, idColaborador, idEmpresa, nomeImagem) {
  console.log("ColaboradorUPDATE ::: Model");
  try {

    if (await isEmptyField(Colaborador, properties))
      return mensagem;

    const sql = `UPDATE ${entidade}
      SET Matricula = ?, Nome = ?, idTecnico = ?,
      Senha = ?, idEmpresa = ?, Imagem = ?
      WHERE Matricula = ? AND idEmpresa = ?`;

    const params = [
      Colaborador.Matricula, Colaborador.Nome,
      Colaborador.idTecnico, Colaborador.Senha,
      idEmpresa, nomeImagem,
      idColaborador, idEmpresa
    ];

    const [retorno] = await conexao.query(sql, params);

    if (await hasNotChanged(retorno)) return nadaMudou;

    return [200, { message: `Técnico ${idColaborador} atualizado`, status: 200 }];

  } catch (error) {
    return [500, erro(error)];
  };
};

export async function disableColaborador(entidade, idColaborador, idEmpresa) {
  console.log("ColaboradorDELETE ::: Model");
  try {
    const sql = `UPDATE ${entidade} SET disabled = ?
      WHERE idEmpresa = ? AND Matricula = ?`;

    const params = [true, idEmpresa, idColaborador];

    const [retorno] = await conexao.query(sql, params);

    if (await hasNotChanged(retorno)) return nadaMudou;

    return [200, { message: `Técnico ${idColaborador} desabilitado`, status: 200 }];
  } catch (error) {
    return [500, erro(error)];
  };
};