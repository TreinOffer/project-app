import mysql from "mysql2";
import acesso from "../acesso.js";

class EmpresaGraficoModel {
    constructor() {
        this.conexao = mysql.createPool(acesso);
    }

    create(pontuacao, treino, colaborador) {
        let sql = `INSERT INTO Pontuacao (pontuacao, treino, colaborador) VALUES (?, ?, ?)`;
        
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, [pontuacao, treino, colaborador], (erro, resposta) => {
                if (erro) {
                    console.error("Erro ao criar pontuação:", erro);
                    reject({ status: 400, message: "Erro ao criar pontuação", error: erro });
                } else {
                    resolve({ status: 201, message: "Pontuação criada", data: resposta });
                }
            });
        });
    }

    read() {
        let sql = `SELECT * FROM Pontuacao`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, resposta) => {
                if (erro) {
                    console.error("Erro ao ler pontuações:", erro);
                    reject({ status: 400, message: "Erro ao ler pontuações", error: erro });
                } else {
                    resolve({ status: 200, data: resposta });
                }
            });
        });
    }

    update(pontuacao, treino, colaborador) {
        let sql = `UPDATE Pontuacao SET pontuacao = ?, treino = ? WHERE colaborador = ?`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, [pontuacao, treino, colaborador], (erro, resposta) => {
                if (erro) {
                    console.error("Erro ao atualizar pontuação:", erro);
                    reject({ status: 400, message: "Erro ao atualizar pontuação", error: erro });
                } else {
                    resolve({ status: 200, message: `Colaborador ${colaborador} atualizado`, data: resposta });
                }
            });
        });
    }

    delete(colaborador) {
        let sql = `DELETE FROM Pontuacao WHERE colaborador = ?`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, [colaborador], (erro, resposta) => {
                if (erro) {
                    console.error("Erro ao deletar pontuação:", erro);
                    reject({ status: 400, message: "Erro ao deletar pontuação", error: erro });
                } else {
                    resolve({ status: 200, message: `Colaborador ${colaborador} deletado`, data: resposta });
                }
            });
        });
    }
}

export default new EmpresaGraficoModel();