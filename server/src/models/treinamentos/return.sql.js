import conexao from "../conexao.model.js";

export async function returnIdTreino(entidade) {
    const sql = `SELECT idTreino FROM ${entidade}
    ORDER BY idTreino DESC LIMIT 1;`;
    const idTreino = await conexao.query(sql);
    console.log("idTreino: ",idTreino);
    return idTreino;
}