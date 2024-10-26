import EmpresaGraficoModel from "../models/empresaGraficoModel.js";

class EmpresaGraficoController {
    async create(req, res) {
        const { pontuacao, colaborador, treino } = req.body;

        try {
            const novaPontuacao = await EmpresaGraficoModel.create(pontuacao, treino, colaborador);
            console.debug("Pontuação criada:", novaPontuacao);
            res.status(201).json(novaPontuacao);
        } catch (error) {
            console.debug("Erro: Criar Pontuação", error);
            res.status(500).json({ message: "Erro ao criar pontuação", error });
        }
    }

    async read(req, res) {
        try {
            const pontuacoes = await EmpresaGraficoModel.read();
            console.debug("Pontuações recuperadas:", pontuacoes);
            res.status(200).json(pontuacoes);
        } catch (error) {
            console.debug("Erro: Ler Pontuações", error);
            res.status(500).json({ message: "Erro ao ler pontuações", error });
        }
    }

    async update(req, res) {
        const { pontuacao, treino, colaborador } = req.body;

        try {
            const resposta = await EmpresaGraficoModel.update(pontuacao, treino, colaborador);
            console.debug("Pontuação atualizada:", resposta);
            res.status(200).json(resposta);
        } catch (error) {
            console.debug("Erro: Atualizar Pontuação", error);
            res.status(500).json({ message: "Erro ao atualizar pontuação", error });
        }
    }

    async delete(req, res) {
        const { colaborador } = req.body;

        try {
            const resposta = await EmpresaGraficoModel.delete(colaborador);
            console.debug("Pontuação deletada:", resposta);
            res.status(200).json(resposta);
        } catch (error) {
            console.debug("Erro: Deletar Pontuação", error);
            res.status(500).json({ message: "Erro ao deletar pontuação", error });
        }
    }
}

export default new EmpresaGraficoController();