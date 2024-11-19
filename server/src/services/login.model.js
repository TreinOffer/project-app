import mysql from "mysql2/promise";
import acesso from "../config/acesso.js";

import jwt from "jsonwebtoken";
const { sign } = jwt;

const conexao = mysql.createPool(acesso);

export async function verTipo(role) {
  const sql = String();
  if (role === "empresa") {
    sql = `SELECT CNPJ FROM empresa WHERE Fantasia = ? AND Senha = ?`;
  } else if (role === "tecnico") {
    sql = `SELECT Matricula FROM professor WHERE Nome = ? AND Senha = ?`;
  } else {
    sql = `SELECT Matricula FROM aluno WHERE Nome = ? AND Senha = ?`;
  };
  return sql;
};

export async function logar_se(user, senha) {

  const params = [
    user, senha, //query primeira tabela
    user, senha, //query outra
    user, senha //E outra...
  ];

  // Une tabelas mantendo campos de nome iguais
  const sql = `
    SELECT CNPJ, 'empresas' AS role FROM empresa WHERE Fantasia = ? AND Senha = ?
    UNION ALL
    SELECT Matricula, 'colaboradores' AS role FROM aluno WHERE Nome = ? AND Senha = ?
    UNION ALL
    SELECT Matricula, 'tecnicos' AS role FROM professor WHERE Nome = ? AND Senha = ?`;

  try {
    const isIdExist = await conexao.query(sql, params);

    if (isIdExist[0].length < 1) {
      return [203, { message: `CNPJ/Matricula inexistente` }];
    };

    console.log(isIdExist);
    const destruturacao = isIdExist[0];
    console.log(destruturacao);
    const { role } = destruturacao[0];

    // Verifica se há retorno do banco

    const payload = {
      user: user,
      cargo: role,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };

    //Cria token autenticacao
    let token = sign(payload, "isTreinOffer_or_TreinOff");
    console.log("meu token: ", token);
    console.log("meu pyl: ", payload);
    return [202, { token: token }];
  } catch (error) {
    console.log(error);
    return [500, error];
  }
}
