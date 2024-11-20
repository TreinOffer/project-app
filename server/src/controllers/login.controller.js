import { logar_se } from "../services/login.model.js";

export async function loginJWT(req, res) {
  // const { role } = req.query;
  const { login, senha } = req.body;
  // console.log("sim: ",login, senha)

  try {
    // Define se validação de user é empresa || tec || colab
    // const sql = await verTipo(role);

    const [ statusCode, token ] = await logar_se(login, senha);

    return res.status(statusCode).json(token);
  } catch (error) {
    return res.status(500).json({ message: `Erro na API loginJWT: ${error}` });
  }
}
