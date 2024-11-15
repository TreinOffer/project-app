import mysql from "mysql2/promise";
import acesso from "../config/acesso.js";

const conection = mysql.createPool(acesso);

async function duplicateId(id) {
    const sql = `SELECT CNPJ FROM empresas WHERE CNPJ = ? `;
    const [rows] = await conection.query(sql, [id]);
    console.log("duplicateId: ",rows);
    return rows.length > 0
};

export async function postEmpresa(empresa) {
    const sql = `INSERT INTO empresas (
    CNPJ, Fantasia, Senha, CEP, Estado, Telefone, Endereco, Cidade
    ) VALUES(
    ?,?,?,?,?,?,?,?
    )`
    const params = [empresa.CNPJ, empresa.Fantasia, empresa.Senha, empresa.CEP,
    empresa.Telefone, empresa.Estado, empresa.Cidade, empresa.Endereco
    ];
    try {
        console.log("entrada: ",empresa.CNPJ);

        if (await duplicateId(empresa.CNPJ)) {
            return [409, `CNPJ já existe`];
        };

        const [retorno] = await conection.query(sql,params);
        return [201,retorno];
    } catch (error) {
        return [500, error];
    };
}