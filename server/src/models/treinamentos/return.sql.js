import conexao from "../conexao.model.js";

export async function returnId(entidade, column) {
    const sql = `SELECT ${column} FROM ${entidade}
    ORDER BY ${column} DESC LIMIT 1;`;
    const request = await conexao.query(sql);
    console.log("idTreino: ",request);
    const destruturacao = request[0];
    const destruturacao2 = destruturacao[0]
    const { idTreino } = destruturacao2;
    console.log("idTreino: ",idTreino);
    return idTreino;
};

export async function returnSqlByCargo(entidade, cargo) {
    let sql = String();

    // Mostra todos os treinos de seus tecnicos na visão da empresa
    if (cargo === 'empresa') {
        return sql = `SELECT ${entidade}.* FROM ${entidade}
        INNER JOIN tecnicos ON ${entidade}.idTecnico
        = tecnicos.Matricula WHERE idEmpresa = ?;`;
    };
};