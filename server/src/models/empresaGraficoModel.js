import mysql from "mysql2/promise";
import db from "../acesso.js"; 


export async function createPontuacao(pontuacao, treino, colaborador) {
    const conexao = mysql.createPool(db);
    const sql = `INSERT INTO Pontuacao (pontuacao, treino, colaborador) VALUES (?, ?, ?)`;
    const params = [pontuacao, treino, colaborador];

    try {
        const [resultado] = await conexao.query(sql, params);
        return [201, { message: "Pontuação criada", data: resultado }];
    } catch (error) {
        console.error("Erro ao criar pontuação:", error);
        return [500, { message: "Erro ao criar pontuação", error }];
    }
}


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


export async function readPontuacaoByColaborador() {
    const conexao = mysql.createPool(db);
    const sql = `
        SELECT colaborador, AVG(pontuacao) AS media_pontuacao
        FROM Pontuacao
        GROUP BY colaborador
        ORDER BY colaborador
    `;

    try {
        const [resultado] = await conexao.query(sql);
        return [200, resultado];
    } catch (error) {
        console.error("Erro ao ler pontuações por colaborador:", error);
        return [500, { message: "Erro ao ler pontuações por colaborador", error }];
    }
}

export async function updatePontuacao(pontuacao, treino, colaborador) {
    const conexao = mysql.createPool(db);
    const sql = `UPDATE Pontuacao SET pontuacao = ?, treino = ? WHERE colaborador = ?`;
    const params = [pontuacao, treino, colaborador];

    try {
        const [resultado] = await conexao.query(sql, params);
        if (resultado.affectedRows < 1) {
            return [404, { message: "Pontuação não encontrada" }];
        }
        return [200, { message: "Pontuação atualizada" }];
    } catch (error) {
        console.error("Erro ao atualizar pontuação:", error);
        return [500, { message: "Erro ao atualizar pontuação", error }];
    }
}

export async function deletePontuacao(colaborador) {
    const conexao = mysql.createPool(db);
    const sql = `DELETE FROM Pontuacao WHERE colaborador = ?`;
    const params = [colaborador];

    try {
        const [resultado] = await conexao.query(sql, params);
        if (resultado.affectedRows < 1) {
            return [404, { message: "Pontuação não encontrada para o colaborador" }];
        }
        return [200, { message: "Pontuação deletada" }];
    } catch (error) {
        console.error("Erro ao deletar pontuação:", error);
        return [500, { message: "Erro ao deletar pontuação", error }];
    }
}
