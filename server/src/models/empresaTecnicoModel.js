import mysql from "mysql2";
import acesso from "../acesso.js";

class EmpresaTecnicoModel{
    constructor(){
        this.conexao = mysql.createConnection(acesso);
    };

    create(nome,matricula,senha,tarefa,colab){
        let sql = `INSERT INTO tecnicos values("${nome}","${matricula}","${senha}","${tarefa}",${colab})`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, resposta) => {
                if (erro) {
                    reject([400,erro]);
                }
                resolve([201,"Tecnico criado"]);
            });
        });
    };
    read(){
        let sql = `SELECT * FROM tecnicos`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, resposta) => {
                if (erro) {
                    reject([400,erro]);
                }
                resolve([200,resposta]);
            });
        });
    };
    update(){};
    delete(){};
};

export default new EmpresaTecnicoModel;