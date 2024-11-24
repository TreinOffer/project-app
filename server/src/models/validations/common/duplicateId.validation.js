export async function duplicateId(id, conexao, campos, idEmpresa) {
  const entity = campos[0];
  const column = campos[1];

  const foreignKey = idEmpresa !== null ? `AND idEmpresa = ?` : '';
  
  const sql = `SELECT ${column} FROM ${entity} WHERE ${column} = ? ${foreignKey}`;
  const query = !foreignKey ? [id] : [id,idEmpresa];

  const [rows] = await conexao.query(sql, query);

  console.log(rows);
  console.log("duplicateId: ", rows);
  return rows.length > 0;
}

export const duplicado = (primKey) => {
  return [
    409,
    {
      message: `${primKey} já existe`,
      status: 409,
    },
  ];
};
