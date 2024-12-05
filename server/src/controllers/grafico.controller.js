
// export async function criarPontuacao(req, res) {
//     const {
//         idColaborador,
//         idTreino,
//         pontuacao
//     } = req.body;

import { readPontuacao } from "../models/graficos/grafico.model";

//     if (!idColaborador || !idTreino || !pontuacao) {
//         return res.status(400).json({ message: "Faltam dados para criar a pontuação" });
//     }

//     const [statusCode, resultado] = await readPontuacao(
//         idColaborador,
//         idTreino,
//         pontuacao);

//     return res.status(statusCode).json(resultado);
// }

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
