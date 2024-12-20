import conexao from "../conexao.model.js";

export async function returnId(entidade, column) {
    const sql = `SELECT ${column} FROM ${entidade}
    ORDER BY ${column} DESC LIMIT 1;`;
    const request = await conexao.query(sql);
    console.log("idTreino: ",request);
    const destruturacao = request[0];
    const destruturacao2 = destruturacao[0]
    const { idTreino } = destruturacao2;
    console.log("idTreino: ",idTreino);
    return idTreino;
};

export async function returnSqlByCargo(entidade, cargo) {
    let sql = String();
    // Mostra todos os treinos de seus tecnicos na visão da empresa
    if (cargo === 'empresa') {
        return sql = `SELECT ${entidade}.*, t.Nome,t.Imagem
        FROM ${entidade} INNER JOIN tecnicos t
        ON ${entidade}.idTecnico = t.Matricula WHERE idEmpresa = ?;`;
    }
    else if(cargo === 'tecnico'){
        // Mostra todos os treinos do técnico logado
        return sql = `SELECT ${entidade}.*, t.Nome, t.Imagem
        FROM ${entidade} INNER JOIN tecnicos t ON
        ${entidade}.idTecnico = t.Matricula
        WHERE t.Matricula = ?;`;
    }
    else{
        //Mostra todos os treinos cujo colaborador está ligado ao tecnico
        return sql = `SELECT ${entidade}.*, t.Nome, t.Imagem
        FROM ${entidade} INNER JOIN tecnicos t ON ${entidade}.idTecnico
        = t.Matricula INNER JOIN colaboradores c ON c.idTecnico =
        t.Matricula WHERE c.Matricula = ?;`;
    };
};

export async function getNumColabs(entidade, idTreino) {
    // Seleciona os idTreino onde
    const sql = `SELECT idTreino FROM ${entidade}
    INNER JOIN tecnicos t ON ${entidade}.idTecnico =
    t.Matricula INNER JOIN colaboradores c ON
    t.Matricula = c.idTecnico WHERE ${entidade}.idTreino = ?;`;
    
    const [retorno] = await conexao.query(sql, [idTreino]);
    return retorno.length;
};

function isArray(item) {
    if (Array.isArray(item)) {
        return item.join("&&*");
    }else{
        return item;
    };
};

// Unir o array para string com separador único
export async function returnParams(tit, parag, imagem, video, idTreino, Ordem) {
    const params = [idTreino];

    params.push(isArray(tit));
    params.push(isArray(parag));
    params.push(video);
    params.push(imagem);
    params.push(Ordem);
    return params;
};