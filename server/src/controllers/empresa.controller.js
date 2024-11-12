import { updateEmpresa } from "../models/empresa.model";

export async function AtualizarEmpresa(req, res) {
  const empresa = req.body;
  const id = req.params

  try {
    const [retorno] = await updateEmpresa(id, empresa);
    return res.send(retorno[0]).json(retorno[1]);
  } catch (error) {
    res.send(500).json({ message: `Erro na API: ${error}` });
  };
};