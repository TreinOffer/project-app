import erro from "../validations/common/erro.message.js";
import conexao from "../conexao.model.js";
import { getNumColabs, returnId, returnParams, returnSqlByCargo } from "./return.sql.js";
import { propertiesCapa, propertiesTreino } from "./properties.treino.js";
import { isEmptyField, mensagem } from "../validations/common/emptyFields.validation.js";

export async function readTreinamentos(entidade, idUser, tipoUser) {
  console.log("listarTreinamentos ::: Model");
  try {
    const sql = await returnSqlByCargo(entidade, tipoUser);

    const [treinamentos] = await conexao.query(sql, [idUser]);

    async function treinamentosFormatado() {
      return await Promise.all(
        treinamentos.map(async (treinamento) => {
          const numColabs = await getNumColabs(entidade, treinamento.idTreino);
          return {...treinamento, numColabs}
        })
      );
    };

    const treinamentosComColabs = await treinamentosFormatado();
    
    return [200, treinamentosComColabs];
  } catch (error) {
    console.log(error);
    erro(error);
  }
};

export async function createTreino(
  entidade,
  Titulo,
  Paragrafos,
  imagens,
  videos,
  Ordem
) {
  console.log("Treinamento::: Model");
  try {
    // Mensagem de erro retornada se não houver titulo no modulo
    if (await isEmptyField({Titulo: Titulo}, propertiesTreino)) return mensagem;

    // É preciso validar se há uma capa antes de chamar o sql abaixo
    const idTreino = await returnId(entidade[0], "idTreino");

    const sql = `INSERT INTO ${entidade[1]} (
            idTreino, Titulo, Paragrafos,
            Videos, Imagens, Ordem
        ) VALUES (?,?,?,?,?,?)`;

    const params = await returnParams(
      Titulo, Paragrafos,
      imagens, videos, idTreino, Ordem
    );

    console.log("os params: ",params);

    await conexao.query(sql, params);
    return [201, { message: `Modulo Criado`, status: 201 }];
  } catch (error) {
    console.log(error);
    erro(error);
  }
}

export async function createCapaTreino(
  entidade,
  idTecnico,
  capa,
  FotoCapa,
) {
  console.log("TreinoCapa::: Model");
  try {
    if(await isEmptyField(capa, propertiesCapa)) return mensagem;
    
    const sql = `INSERT INTO ${entidade}
            (Titulo, Tipo, FotoCapa, Tags, idTecnico)
            VALUES (?,?,?,?,?)`;

    const { Titulo, Tipo, Tags } = capa;

    const params = [Titulo, Tipo, FotoCapa, Tags, idTecnico];

    await conexao.query(sql, params);
    return [201, { message: `Capa Treinamento Criado`, status: 201 }];
  } catch (error) {
    console.log(error);
    return erro(error);
  }
};

export async function readModulos(entidade, idTreino) {
  console.log("ReadModulos ::: Model");
  try {
    const sql = `SELECT * FROM ${entidade} WHERE idTreino = ?;`;
    const [ response ] = await conexao.query(sql, [idTreino]);
    return [200, response];
  } catch (error) {
    console.log(error);
    erro(error);
  };
};

export async function createImagemRegistro(entidade, imagens, idModulo) {
  try {
    const idModulo = await returnId(entidade[0], "idModulo");
    const sql = `INSERT INTO ${entidade} (idModulo, imagem)
        VALUES (?,?)`;
    await conexao.query(sql, [idModulo, imagens]);
  } catch (error) {
    console.log(error);
    erro(error);
  }
}

export async function createVideoRegistro(entidade, videos, idModulo) {
  try {
  } catch (error) {
    console.log(error);
    erro(error);
  }
}
