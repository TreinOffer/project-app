import mysql from "mysql2/promise";
import db from "../acesso.js"; 

export async function readPontuacao() {
    const conexao = mysql.createPool(db);
    const sql = `
        SELECT treino, AVG(pontuacao) AS media_pontuacao
        FROM Pontuacao
        GROUP BY treino
        ORDER BY treino
    `;

    try {
        const [resultado] = await conexao.query(sql);
        return [200, resultado];
    } catch (error) {
        console.error("Erro ao ler pontuações:", error);
        return [500, { message: "Erro ao ler pontuações", error }];
    }
}


export async function createPontuacao(pontuacao, treino, colaborador) {
    const conexao = mysql.createPool(db);
    const sql = `INSERT INTO Pontuacao (pontuacao, treino, colaborador) VALUES (?, ?, ?)`;
    const params = [pontuacao, treino, colaborador];

    try {
        const [resultado] = await conexao.query(sql, params);
        return [201, { message: "Pontuação criada com sucesso", id: resultado.insertId }];
    } catch (error) {
        console.error("Erro ao criar pontuação:", error);
        return [500, { message: "Erro ao criar pontuação", error }];
    }
}