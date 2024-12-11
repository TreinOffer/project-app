import { readPontuacao } from "../models/graficos/grafico.model.js";

export async function mostrarPontuacoes(req, res) {
    const { idColaborador } = req.params;

    if (!idColaborador) {
        return res.status(400).json({ message: "idColaborador é necessário" });
    }

    const [statusCode, resultado] = await readPontuacao(idColaborador);

    if (statusCode === 200) {
        const dadosGrafico = {
            labels: resultado.map(item => item.nomeTreino),
            datasets: [
                {
                    label: 'Pontuação Média',
                    data: resultado.map(item => item.media_pontuacao),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        };

        return res.status(200).json(dadosGrafico);
    } else {
        return res.status(statusCode).json(resultado);
    }
}
