import mysql from 'mysql2';  
import acesso from "../acesso.js";  

const conexao = mysql.createPool(acesso);

export async function readPontuacao() {
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