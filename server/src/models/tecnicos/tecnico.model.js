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
import properties from "./properties.tecnico.js";

export async function getTecnicos(entidade, idEmpresa) {
  try {
    const sql = `SELECT * FROM ${entidade} WHERE idEmpresa = ?`
    const [ tecnicos ] = await conexao.query(sql,idEmpresa);
    return [200, tecnicos];

  } catch (error) {
    console.log("deu erro: ",error);
    return erro(error);
  };
};

export async function postTecnico(tecnico, entidade, idEmpresa) {
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
      tecnico.idEmpresa,
      tecnico.Imagem,
    ];

    await conexao.query(sql, params);
    return [201, { message: `Tecnico criado`, status: 201 }];

  } catch (error) {
    console.log("deu erro: ",error);
    return erro(error);
  };
};
