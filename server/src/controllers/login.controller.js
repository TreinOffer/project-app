import { logar_se } from "../services/login.model.js";

export async function loginJWT(req, res) {
  const { login, senha } = req.body;

  try {
    const [statusCode, token] = await logar_se(login, senha);

    return res.status(statusCode).json(token);
  } catch (error) {
    return res.status(500).json({ message: `Erro na API loginJWT: ${error}` });
  }
}
