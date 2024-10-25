import EmpresaGraficoModel from "../models/empresaGraficoModel.js";

class EmpresaGraficoController{
    create(res,req){
        const pontuacao = req.body.pontuacao;
        const colaborador = req.body.colaborador;
        const treino = req.body.colaborador;

        EmpresaGraficoModel.create(pontuacao,colaborador,treino).then(
            resposta => {
                console.debug("Pontuacao criada");
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta => {
                console.debug("Erro: Criar Pontuacao");
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };
};
export default new EmpresaGraficoController;