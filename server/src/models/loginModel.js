import mysql from "mysql2/promise";

const conexao = mysql.createPool(db);

async function verTipo(login, senha, tipo) {
  const sql = String();
  if (tipo === 'empresa') {
    sql = `SELECT CNPJ FROM empresa WHERE Fantasia = ? AND Senha = ?`;
  } else if (tipo === 'tecnico') {
    sql = `SELECT Matricula FROM professor WHERE Nome = ? AND Senha = ?`;
  } else {
    sql = `SELECT Matricula FROM aluno WHERE Nome = ? AND Senha = ?`;
  };
  return logar_se(login, senha, sql, tipo);
};

async function logar_se(login, senha, sql, tipo) {

  const [params] = [login, senha]

  try {
    const [retorno] = await conexao.query(sql, [params]);
    if (retorno.length < 1) {
      return [400, { message: `Usuário não encontrado` }];
    };

    return [200, retorno[0], tipo];

  } catch (error) {
    console.log(error);
    return [500, error]
  };
};