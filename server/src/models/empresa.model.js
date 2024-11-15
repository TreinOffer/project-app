import acesso from "../config/acesso.js";
import mysql from "mysql2/promise";

const conexao = mysql.createPool(acesso);

export async function updateEmpresa(cnpj, update) {
    const sql = `UPDATE empresas set 
    Fantasia = ?, Senha = ?, CEP = ?,
    Telefone = ?, Estado = ?,
    Cidade = ?, Endereco = ?
    WHERE CNPJ = ?`;

    const params = [cnpj,update];

    try {
        await conexao.query(sql, params);
        return [200, `Empresa ${cnpj} Atualizado`]
    } catch (error) {
        console.log(error);
        return [500, { message: `Erro na API ${error}` }];
    };
};