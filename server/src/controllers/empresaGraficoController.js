import { readPontuacao } from "../models/empresaGraficoModel.js";

export async function mostrarPontuacoes(req, res) {
  console.log('EmpresaGraficoController :: Mostrando todas as pontuações');
  
  try {
    const [status, resposta] = await readPontuacao();

    res.status(status).json(resposta);
  } catch (error) {
    console.error('Erro ao ler pontuações:', error);
    res.status(500).json({ message: 'Erro ao mostrar as pontuações' });
  }
}