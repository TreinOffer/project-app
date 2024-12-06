import conexao from "../conexao.model.js";

export async function readPontuacao(idColaborador) {
    const sql = `
        SELECT T.idPontuacao, AVG(P.Pontuacao) AS media_pontuacao
        FROM Pontuacao P
        JOIN pontuacao T ON P.idPontuacao = T.idPontuacao
        WHERE P.idColaborador = ?
        GROUP BY T.idPontuacao
        ORDER BY T.idPontuacao
    `;
    try {
        const [resultado] = await conexao.query(sql, [idColaborador]);
        return [200, resultado];
    } catch (error) {
        console.error("Erro ao ler pontuações:", error);
        return [500, { message: "Erro ao ler pontuações", error }];
    }
}