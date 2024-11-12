import { readPontuacao, createPontuacao } from "../models/empresaGraficoModel.js";

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

export async function criarPontuacao(req, res) {
  console.log('EmpresaGraficoController :: Criando nova pontuação');

  const { pontuacao, treino, colaborador } = req.query;  

  try {
    const [status, resposta] = await createPontuacao(pontuacao, treino, colaborador);
    res.status(status).json(resposta);  
  } catch (error) {
    console.error('Erro ao criar pontuação:', error);
    res.status(500).json({ message: 'Erro ao criar pontuação' });
  }
}