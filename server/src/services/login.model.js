import mysql from "mysql2/promise";
import acesso from "../config/acesso.js";

import jwt from "jsonwebtoken";
const { sign } = jwt;

const conexao = mysql.createPool(acesso);

export async function logar_se(user, senha) {

  const params = [
    user, senha, //query primeira tabela
    user, senha, //query outra
    user, senha //E outra...
  ];

  // Une tabelas mantendo campos de nome iguais
  const sql = `
    SELECT CNPJ, 'empresa' AS role FROM empresas WHERE Fantasia = ? AND Senha = ?
    UNION ALL
    SELECT Matricula, 'colaborador' AS role FROM colaboradores WHERE Nome = ? AND Senha = ?
    UNION ALL
    SELECT Matricula, 'tecnico' AS role FROM tecnicos WHERE Nome = ? AND Senha = ?`;

  try {
    const isIdExist = await conexao.query(sql, params);

    if (isIdExist[0].length < 1) {
      return [203, { message: `CNPJ/Matricula inexistente` }];
    };

    console.log(isIdExist);
    const destruturacao = isIdExist[0];
    console.log(destruturacao);
    const id = destruturacao[0].CNPJ || destruturacao.Matricula;
    const { role } = destruturacao[0];

    // Verifica se há retorno do banco

    const payload = {
      user: user,
      cargo: role,
      primKey: id,
      primKey: id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };

    //Cria token autenticacao
    const token = sign(payload, "isTreinOffer_or_TreinOff");
    // console.log("meu token: ", token);
    // console.log("meu pyl: ", payload);
    return [202, { token: token }];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}
