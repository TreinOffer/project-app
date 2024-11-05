import { createPontuacao, readPontuacoes, showOnePontuacao } from "../models/empresaGraficoModel.js";

export async function criarPontuacao(req, res) {
  console.log('EmpresaGraficoController :: Criando pontuação');

  const { pontuacao, colaborador, treino } = req.body;

  if (!pontuacao || !colaborador || !treino) {
    return res.status(400).json({ message: 'Pontuação, colaborador e treino são obrigatórios' });
  }

  try {
    const [status, resposta] = await createPontuacao(pontuacao, treino, colaborador);
    res.status(status).json(resposta);
  } catch (error) {
    console.error('Erro ao criar pontuação:', error);
    res.status(500).json({ message: 'Erro ao criar pontuação' });
  }
}

export async function mostrarPontuacoes(req, res) {
  console.log('EmpresaGraficoController :: Mostrando todas as pontuações');

  try {
    const [status, resposta] = await readPontuacoes(); 
    res.status(status).json(resposta);  
  } catch (error) {
    console.error('Erro ao ler pontuações:', error);
    res.status(500).json({ message: 'Erro ao mostrar as pontuações' });
  }
}

export async function mostrarUmaPontuacao(req, res) {
  console.log('EmpresaGraficoController :: Mostrando uma pontuação específica');

  const { id_pontuacao } = req.params;  

  try {
    const [status, resposta] = await showOnePontuacao(id_pontuacao);  
    res.status(status).json(resposta); 
  } catch (error) {
    console.error('Erro ao buscar a pontuação:', error);
    res.status(500).json({ message: 'Erro ao mostrar a pontuação específica' });
  }
}