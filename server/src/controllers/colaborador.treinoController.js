import { createPontuacao, getPontucacao } from "../models/colaborador.treino.js";

export async function getPontucacao() {
  try {    
    const conn = await getConnection();  
      
    const [rows] = await conn.query('SELECT pontuacao FROM colaboradores WHERE nome = ?', ['Colaborador X']);
    
    if (rows.length > 0) {
      return rows[0].pontuacao; 
    } else {
      throw new Error('Pontuação não encontrada para o colaborador X');
    }
  } catch (error) {
    console.error('Erro ao obter a pontuação:', error);
    throw error;  
  }
}

export async function criarPontuacao(req, res) {
  console.log('EmpresaGraficoController :: Criando nova pontuação');

  const pontuacao = getPontucacao();
  const treino = 'Treino A';
  const colaborador = 'Colaborador X';

  try {

    const [status, resposta] = await createPontuacao(pontuacao, treino, colaborador);

    res.status(status).json(resposta);
  } catch (error) {
    console.error('Erro ao criar pontuação:', error);
    res.status(500).json({ message: 'Erro ao criar pontuação' });
  }
}