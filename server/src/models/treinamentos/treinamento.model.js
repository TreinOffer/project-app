import erro from "../validations/common/erro.message.js";
import conexao from "../conexao.model.js";
import { returnIdTreino } from "./return.sql.js";

export async function createTreino(entidade, body) {
    try {
        const idTreino = await returnIdTreino(entidade[0]);
        const sql = `INSERT INTO ${entidade[1]} (
            idTreino, Titulo, Paragrafos
        ) VALUES (?,?,?)`
        await conexao.query(sql, [idTreino, body]);
        return [201, { message: `Modulo Criado` }];
    } catch (error) {
        console.log(error);
        erro(error);
    };
};

export async function createCapaTreino(
    entidade,
    idTecnico, Titulo,
    Tipo, FotoCapa, Tags) {
        try {
            const sql = `INSERT INTO ${entidade[0]}
            (Titulo, Tipo, FotoCapa, Tags, idTecnico)
            VALUES (?,?,?,?,?)`;

            const params = [Titulo, Tipo, FotoCapa, Tags, idTecnico];

            await conexao.query(sql, params);
            return [201, { message: `Treinamento Criado`, status: 201 }];

        } catch (error) {
            console.log(error);
            return erro(error)
        };
};