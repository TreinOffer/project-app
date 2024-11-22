import mysql from 'mysql2';  
import acesso from "../acesso.js"; 

const conexao = mysql.createPool(acesso);

export async function createPontuacao(pontuacao, treino, colaborador) {
    const sql = `INSERT INTO Pontuacao (pontuacao, treino, colaborador) VALUES (?, ?, ?)`;
    const params = [pontuacao, treino, colaborador];

    try {      
        const [resultado] = await conexao.promise().query(sql, params);  
        return [201, { message: "Pontuação criada com sucesso", id: resultado.insertId }];
    } catch (error) {
        console.error("Erro ao criar pontuação:", error);
        return [500, { message: "Erro ao criar pontuação", error }];
    }
}