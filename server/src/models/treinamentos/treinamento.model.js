import erro from "../validations/common/erro.message.js";
import conexao from "../conexao.model.js";

export async function createTreino(
    entidade,
    idTecnico, Titulo,
    Tipo, FotoCapa, Tags) {
        try {
            const sql = `INSERT INTO ${entidade}
            (Titulo, Tipo, FotoCapa, Tags, idTecnico)
            VALUES (?,?,?,?,?)`;

            params = [Titulo, Tipo, FotoCapa, Tags, idTecnico];

            await conexao.query(sql, params);
            return [201, { message: `Treinamento Criado`, status: 201 }];

        } catch (error) {
            console.log(error);
            return erro(error)
        }
    
};