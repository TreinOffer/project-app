import mysql from 'mysql2/promise';
import acesso from "../acesso.js";

const conexao = mysql.createPool(acesso);

export async function criarPontuacao(idColaborador, idTreino, pontuacao) {
    const sql = `
        INSERT INTO Pontuacao (idColaborador, idTreino, Pontuacao)
        VALUES (?, ?, ?)
    `;
    try {
        await conexao.query(sql, [idColaborador, idTreino, pontuacao]);
        return [200, { message: 'Pontuação criada com sucesso!' }];
    } catch (error) {
        console.error("Erro ao criar pontuação:", error);
        return [500, { message: "Erro ao criar pontuação", error }];
    }
}

export async function lerPontuacao(idColaborador) {
    const sql = `
        SELECT T.idTreino, AVG(P.Pontuacao) AS media_pontuacao
        FROM Pontuacao P
        JOIN Treino T ON P.idTreino = T.idTreino
        WHERE P.idColaborador = ?
        GROUP BY T.idTreino
        ORDER BY T.idTreino
    `;
    try {
        const [resultado] = await conexao.query(sql, [idColaborador]);
        return [200, resultado];
    } catch (error) {
        console.error("Erro ao ler pontuações:", error);
        return [500, { message: "Erro ao ler pontuações", error }];
    }
}