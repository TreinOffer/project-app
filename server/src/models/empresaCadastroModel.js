import mysql from "mysql2/promise";
import acesso from "../acesso.js";

function postEmpresa(empresa) {
    const sql = `INSERT INTO empresa (
    CNPJ, Fantasia, Senha, CEP, Telefone, Estado, Cidade, Endereco
    ) VALUES(
    ?,?,?,?,?,?,?,?
    )`
    const params = [ empresa.cnpj, empresa.nomeFant, empresa.Senha, empresa.cep,
        empresa.telefone, empresa.estado, empresa.cidade, empresa.endereco
    ];
}