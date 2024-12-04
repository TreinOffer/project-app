import conexao from "../conexao.model.js";

export async function returnId(entidade, column) {
    const sql = `SELECT ${column} FROM ${entidade}
    ORDER BY ${column} DESC LIMIT 1;`;
    const request = await conexao.query(sql);
    const destruturacao = request[0];
    const destruturacao2 = destruturacao[0]
    const { idTreino } = destruturacao2;
    console.log("idTreino: ",idTreino);
    return idTreino;
}