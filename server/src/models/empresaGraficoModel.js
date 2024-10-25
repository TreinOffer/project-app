import mysql from "mysql2";
import acesso from "../acesso.js";

class EmpresaGraficoModel{
    constructor(){
        this.conexao = mysql.createConnection(acesso);
    };    
    create(pontuacao,treino,colaborador){
        let sql = `INSERT INTO Pontuacao values("${pontuacao}","${treino}","${colaborador})`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, resposta) => {
                if (erro) {
                    reject([400,erro]);
                }
                resolve([201,"Pontuacao criada"]);
            });
        });
    };
    read(){
        let sql = `SELECT * FROM Pontuacao`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, resposta) => {
                if (erro) {
                    reject([400,erro]);
                }
                resolve([200,resposta]);
            });
        });
    };
    update(pontuacao,treino,colaborador){
        let sql = `UPDATE Pontuacao SET pontuacao="${pontuacao}",treino="${treino}",colaborador="${colaborador}`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, resposta) => {
                if (erro) {
                    reject([400,erro]);
                }
                resolve([200,`Colaborador ${colaborador} atualizado`]);
            });
        });
    };
    delete(colaborador){
        let sql = `DELETE FROM colaborador where colaborador= "${colaborador}"`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, resposta) => {
                if (erro) {
                    reject([400,erro]);
                }
                resolve([200,`Colaborador ${colaborador} deletado`]);
            });
        });
    };

};

export default new EmpresaGraficoModel;