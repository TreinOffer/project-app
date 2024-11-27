import conexao from "../conexao.model.js";

import {
  duplicateId,
  duplicado,
} from "../validations/common/duplicateId.validation.js";
import {
  isEmptyField,
  mensagem,
} from "../validations/common/emptyFields.validation.js";

import erro from "../validations/common/erro.message.js";
import { cnpjInvalid, cnpjMessage } from "../validations/empresa/cnpj.validation.js";

import properties from "./properties.empresa.js";

export async function postEmpresa(empresa, entidade) {
  try {
    if (await isEmptyField(empresa, properties)) return mensagem;

    if (await cnpjInvalid(empresa.CNPJ))
      return cnpjMessage(empresa.CNPJ);

    if (await duplicateId(empresa.CNPJ, conexao, [entidade, properties[0]], null))
      return duplicado('CNPJ');

    const sql = `INSERT INTO ${entidade} (
        CNPJ, Fantasia, Senha, CEP, Estado, Telefone, Endereco, Cidade
        ) VALUES(
        ?,?,?,?,?,?,?,?
        )`;

    const params = [
      empresa.CNPJ,
      empresa.Fantasia,
      empresa.Senha,
      empresa.CEP,
      empresa.Telefone,
      empresa.Estado,
      empresa.Cidade,
      empresa.Endereco,
    ];

    await conexao.query(sql, params);

    return [201, { message: `Empresa Criada`, status: 201 }];
  } catch (error) {
    console.log("deu erro: ",error)
    return erro(error);
  };
}

export async function updateEmpresa(cnpj, update) {
  const sql = `UPDATE empresas set 
    Fantasia = ?, Senha = ?, CEP = ?,
    Telefone = ?, Estado = ?,
    Cidade = ?, Endereco = ?
    WHERE CNPJ = ?`;

  const params = [cnpj, update];

  try {
    await conexao.query(sql, params);
    return [200, `Empresa ${cnpj} Atualizado`];
  } catch (error) {
    console.log(error);
    return [500, { message: `Erro na API ${error}` }];
  }
}
