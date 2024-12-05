import mysql from "mysql2/promise";
import acesso from "../config/acesso.js";

const conexao = mysql.createPool(acesso);

export default conexao;