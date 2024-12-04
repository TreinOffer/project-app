import erro from "../validations/common/erro.message.js";
import conexao from "../conexao.model.js";
import { returnId } from "./return.sql.js";

export async function createTreino(entidade, Titulo, Paragrafos) {
    console.log("Treinamento::: Model");
    try {
        const idTreino = await returnId(entidade[0],'idTreino');
        const sql = `INSERT INTO ${entidade[1]} (
            idTreino, Titulo, Paragrafos
        ) VALUES (?,?,?)`;

        await conexao.query(sql, [idTreino, Titulo, Paragrafos]);
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
        console.log("TreinoCapa::: Model");
        try {
            const sql = `INSERT INTO ${entidade[0]}
            (Titulo, Tipo, FotoCapa, Tags, idTecnico)
            VALUES (?,?,?,?,?)`;

            const params = [Titulo, Tipo, FotoCapa, Tags, idTecnico];

            await conexao.query(sql, params);
            return [201, { message: `Capa Treinamento Criado`, status: 201 }];

        } catch (error) {
            console.log(error);
            return erro(error)
        };
};

export async function createImagemRegistro(entidade, imagens, idModulo) {
    try {
        const idModulo = await returnId(entidade[0],'idModulo');
        const sql = `INSERT INTO ${entidade} (idModulo, imagem)
        VALUES (?,?)`;
        await conexao.query(sql, [idModulo, imagens]);
    } catch (error) {
        console.log(error);
        erro(error);
    }
};

export async function createVideoRegistro(entidade, videos, idModulo) {
    try {
        
    } catch (error) {
        console.log(error);
        erro(error);
    };
};