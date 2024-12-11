export async function returnSQL(entidade, idEmpresa, query) {
  let sql = String();

  if (query) {
    return [
      [idEmpresa, `%${query}%`, `%${query}%`],
      (sql = `SELECT * FROM ${entidade}
      WHERE idEmpresa = ? AND (Matricula like ? OR Nome like ?)
      ORDER BY Disabled ASC`),
    ];
  }

  return [
    [idEmpresa],
    (sql = `SELECT * FROM ${entidade}
        WHERE idEmpresa = ? ORDER BY Disabled ASC`),
  ];
}
