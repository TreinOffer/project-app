import conexao from "../conexao.model.js";

export async function idDisabled(id, tabela) {
    console.log("éa tab: ",tabela);
    const coluna = tabela === 'empresas' ? `CNPJ` : `Matricula`;

    const whereClause = `WHERE ${coluna} = ? AND Disabled = 1`;

    const sql = `SELECT '${id}' FROM ${tabela} ${whereClause} `;

    const [[retorno]] = await conexao.query(sql, [id]);
    console.log("lei do retorno: ",retorno);

    if (!retorno) {
        return false;
    }else{
        return true;
    };
};

export const userDisabled = (id) => {
    return [
        401, {
            message: `Usuário ${id} desabilitado`, status: 401
        }
    ]; 
};